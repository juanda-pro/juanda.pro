import { ref, reactive, computed, nextTick } from 'vue'

interface FormData {
  name: string
  email: string
  message: string
}

interface FormStep {
  field: keyof FormData
  label: string
  placeholder: string
  type: string
  required: boolean
  maxLength: number
}

type SubmitStatus = 'success' | 'error' | null
type WebhookStatus = 'success' | 'error' | null

export function useContactForm() {
  // Estado del formulario
  const isFormExpanded = ref(false)
  const currentStep = ref(0)
  const isSubmitting = ref(false)
  const submitStatus = ref<SubmitStatus>(null)
  const webhookStatus = ref<WebhookStatus>(null)
  
  // Datos del formulario
  const formData = reactive<FormData>({
    name: '',
    email: '',
    message: ''
  })
  
  // Errores de validación
  const validationErrors = ref<Record<string, string>>({})
  
  // Rate limiting
  const lastSubmitTime = ref<number>(0)
  const RATE_LIMIT_MS = 30000 // 30 segundos
  
  // Configuración de pasos del formulario
  const formSteps: FormStep[] = [
    {
      field: 'name',
      label: 'Tu nombre',
      placeholder: 'Escribe tu nombre completo',
      type: 'text',
      required: true,
      maxLength: 100
    },
    {
      field: 'email',
      label: 'Tu email',
      placeholder: 'tu@email.com',
      type: 'email',
      required: true,
      maxLength: 150
    },

    {
      field: 'message',
      label: 'Tu mensaje',
      placeholder: 'Cuéntame sobre tu proyecto, ideas o cómo puedo ayudarte...',
      type: 'textarea',
      required: true,
      maxLength: 1000
    }
  ]
  
  // Computadas
  const currentStepData = computed(() => formSteps[currentStep.value])
  
  const formProgress = computed(() => {
    const completedSteps = formSteps.slice(0, currentStep.value + 1)
      .filter(step => {
        const value = formData[step.field]?.trim()
        return step.required ? value : true
      }).length
    return Math.round((completedSteps / formSteps.length) * 100)
  })
  
  const isFormValid = computed(() => {
    return formSteps.every(step => {
      const value = formData[step.field]?.trim()
      if (step.required && !value) return false
      if (step.field === 'email' && value && !isValidEmail(value)) return false
      return true
    })
  })
  
  // Utilidades de validación
  const isValidEmail = (email: string): boolean => {
    // Regex simple y confiable para validación de email
    const regex = /\S+@\S+\.\S+/
    return regex.test(email.trim())
  }
  
  function sanitizeText(text: string): string {
    return text
      .trim()
      .replace(/[<>"'&]/g, '') // Remover caracteres peligrosos
      .substring(0, 1000) // Limitar longitud
  }
  
  function checkRateLimit(): boolean {
    const now = Date.now()
    const timeSinceLastSubmit = now - lastSubmitTime.value
    
    if (timeSinceLastSubmit < RATE_LIMIT_MS) {
      const remainingTime = Math.ceil((RATE_LIMIT_MS - timeSinceLastSubmit) / 1000)
      validationErrors.value.submit = `Por favor espera ${remainingTime} segundos antes de enviar otro mensaje`
      return false
    }
    
    return true
  }
  
  // Validación de campos
  function validateField(field: keyof FormData): boolean {
    const value = formData[field]?.trim()
    const step = formSteps.find(s => s.field === field)
    
    if (!step) return true
    
    delete validationErrors.value[field]
    
    if (step.required && !value) {
      validationErrors.value[field] = `${step.label} es requerido`
      return false
    }
    
    if (value && value.length > step.maxLength) {
      validationErrors.value[field] = `${step.label} no puede exceder ${step.maxLength} caracteres`
      return false
    }
    
    if (field === 'email' && value && !isValidEmail(value)) {
      validationErrors.value[field] = 'Por favor ingresa un email válido'
      return false
    }
    
    return true
  }
  
  const isCurrentStepValid = computed(() => {
    const currentField = currentStepData.value.field
    const value = formData[currentField]?.trim()
    
    if (currentStepData.value.required && !value) return false
    if (currentField === 'email' && value && !isValidEmail(value)) return false
    
    return true
  })
  
  // Navegación del formulario
  function expandForm() {
    isFormExpanded.value = true
    nextTick(() => {
      const firstInput = document.querySelector('.contact-form input, .contact-form textarea') as HTMLElement
      firstInput?.focus()
    })
  }
  
  function nextStep() {
    if (!isCurrentStepValid.value) return
    
    if (currentStep.value < formSteps.length - 1) {
      currentStep.value++
      nextTick(() => {
        const nextInput = document.querySelector('.contact-form input:not([readonly]), .contact-form textarea:not([readonly])') as HTMLElement
        nextInput?.focus()
      })
    }
  }
  
  function prevStep() {
    if (currentStep.value > 0) {
      currentStep.value--
      nextTick(() => {
        const prevInput = document.querySelector('.contact-form input:not([readonly]), .contact-form textarea:not([readonly])') as HTMLElement
        prevInput?.focus()
      })
    }
  }
  
  function handleEnter() {
    if (isCurrentStepValid.value) {
      if (currentStep.value < formSteps.length - 1) {
        nextStep()
      } else {
        handleSubmit()
      }
    }
  }
  
  // Envío del formulario
  async function sendToWebhook(data: FormData): Promise<void> {
    console.log('🚀 WEBHOOK DEBUG: ==================== INICIO SENDTOWEBHOOK ====================')
    console.log('📋 WEBHOOK DEBUG: Datos recibidos:', JSON.stringify(data, null, 2))
    console.log('🌐 WEBHOOK DEBUG: User Agent:', navigator.userAgent)
    console.log('🌐 WEBHOOK DEBUG: URL actual:', window.location.href)
    
    try {
      const webhookUrl = import.meta.env.VITE_WEBHOOK_URL
      const webhookToken = import.meta.env.VITE_WEBHOOK_TOKEN
      
      console.log('🔧 WEBHOOK DEBUG: Variables de entorno COMPLETAS:')
      console.log('  - webhookUrl COMPLETA:', webhookUrl)
      console.log('  - webhookToken COMPLETA:', webhookToken)
      console.log('  - webhookUrl length:', webhookUrl?.length || 0)
      console.log('  - webhookToken length:', webhookToken?.length || 0)
      
      if (!webhookUrl) {
        console.error('❌ WEBHOOK ERROR: VITE_WEBHOOK_URL no configurada')
        throw new Error('VITE_WEBHOOK_URL no configurada')
      }
      
      // Validar que la URL sea válida
      try {
        new URL(webhookUrl)
        console.log('✅ WEBHOOK DEBUG: URL válida')
      } catch (urlError) {
        console.error('❌ WEBHOOK ERROR: URL inválida:', urlError)
        throw new Error(`URL inválida: ${webhookUrl}`)
      }
      
      const madridTime = new Intl.DateTimeFormat('es-ES', {
        timeZone: 'Europe/Madrid',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      }).format(new Date())
      
      console.log('⏰ WEBHOOK DEBUG: Timestamp generado:', madridTime)
      
      const sanitizedData = {
        timestamp: madridTime,
        name: sanitizeText(data.name),
        email: sanitizeText(data.email),
        message: sanitizeText(data.message)
      }
      
      console.log('🧹 WEBHOOK DEBUG: Datos sanitizados COMPLETOS:', JSON.stringify(sanitizedData, null, 2))
      
      const params = new URLSearchParams(sanitizedData)
      
      console.log('📝 WEBHOOK DEBUG: Parámetros URL COMPLETOS:', params.toString())
      console.log('📝 WEBHOOK DEBUG: Longitud parámetros:', params.toString().length)
      
      // CRÍTICO: El webhook n8n solo acepta GET, no POST
      const urlWithParams = `${webhookUrl}?${params.toString()}`
      
      console.log('🌐 WEBHOOK DEBUG: URL FINAL COMPLETA:', urlWithParams)
      console.log('🌐 WEBHOOK DEBUG: Longitud URL final:', urlWithParams.length)
      
      // Verificar conectividad de red
      console.log('🌐 WEBHOOK DEBUG: Verificando conectividad...')
      console.log('🌐 WEBHOOK DEBUG: navigator.onLine:', navigator.onLine)
      
      // CRÍTICO: Configurar headers de autenticación correctos
      const headers = {
        'contact_form': 'jJkKI()/55dÑLdk55'
      }
      
      console.log('📤 WEBHOOK DEBUG: Iniciando fetch...')
      console.log('📤 WEBHOOK DEBUG: Método: GET')
      console.log('📤 WEBHOOK DEBUG: Headers de autenticación:', JSON.stringify(headers, null, 2))
      
      const fetchStartTime = performance.now()
      
      const response = await fetch(urlWithParams, {
        method: 'GET',
        headers: headers,
        mode: 'cors', // Explícitamente especificar CORS
        cache: 'no-cache',
        credentials: 'omit' // No enviar cookies
      })
      
      const fetchEndTime = performance.now()
      const fetchDuration = fetchEndTime - fetchStartTime
      
      console.log('📥 WEBHOOK DEBUG: ==================== RESPUESTA RECIBIDA ====================')
      console.log('📥 WEBHOOK DEBUG: Tiempo de respuesta:', fetchDuration, 'ms')
      console.log('📥 WEBHOOK DEBUG: Status:', response.status)
      console.log('📥 WEBHOOK DEBUG: StatusText:', response.statusText)
      console.log('📥 WEBHOOK DEBUG: OK:', response.ok)
      console.log('📥 WEBHOOK DEBUG: Type:', response.type)
      console.log('📥 WEBHOOK DEBUG: URL:', response.url)
      console.log('📥 WEBHOOK DEBUG: Redirected:', response.redirected)
      
      // Obtener todos los headers de respuesta
      console.log('📥 WEBHOOK DEBUG: Headers de respuesta:')
      for (const [key, value] of response.headers.entries()) {
        console.log(`  - ${key}: ${value}`)
      }
      
      let responseText = ''
      try {
        responseText = await response.text()
        console.log('📥 WEBHOOK DEBUG: Response body COMPLETO:', responseText)
        console.log('📥 WEBHOOK DEBUG: Response body length:', responseText.length)
      } catch (textError) {
        console.error('❌ WEBHOOK ERROR: Error leyendo response body:', textError)
      }
      
      if (response.ok) {
        console.log('✅ WEBHOOK SUCCESS: ==================== ÉXITO ====================')
        console.log('✅ WEBHOOK SUCCESS: Enviado correctamente')
        console.log('✅ WEBHOOK SUCCESS: Response:', responseText)
        webhookStatus.value = 'success'
      } else {
        console.error('❌ WEBHOOK ERROR: ==================== ERROR HTTP ====================')
        console.error('❌ WEBHOOK ERROR: Status:', response.status)
        console.error('❌ WEBHOOK ERROR: StatusText:', response.statusText)
        console.error('❌ WEBHOOK ERROR: Response body:', responseText)
        
        // Análisis específico de errores comunes
        if (response.status === 404) {
          console.error('❌ WEBHOOK ERROR: El endpoint no existe (404)')
        } else if (response.status === 403) {
          console.error('❌ WEBHOOK ERROR: Acceso prohibido (403) - problema de autenticación')
        } else if (response.status === 405) {
          console.error('❌ WEBHOOK ERROR: Método no permitido (405) - el endpoint no acepta GET')
        } else if (response.status === 500) {
          console.error('❌ WEBHOOK ERROR: Error interno del servidor (500)')
        }
        
        throw new Error(`HTTP ${response.status}: ${response.statusText} - ${responseText}`)
      }
    } catch (error) {
      console.error('💥 WEBHOOK CRITICAL ERROR: ==================== ERROR CRÍTICO ====================')
      console.error('💥 WEBHOOK CRITICAL ERROR: Error completo:', error)
      console.error('💥 WEBHOOK CRITICAL ERROR: Error type:', typeof error)
      console.error('💥 WEBHOOK CRITICAL ERROR: Error name:', error instanceof Error ? error.name : 'Unknown')
      console.error('💥 WEBHOOK CRITICAL ERROR: Error message:', error instanceof Error ? error.message : String(error))
      console.error('💥 WEBHOOK CRITICAL ERROR: Error stack:', error instanceof Error ? error.stack : 'No stack available')
      
      // Análisis específico de errores de red
      if (error instanceof TypeError) {
        console.error('💥 WEBHOOK CRITICAL ERROR: Posible error de red o CORS')
        console.error('💥 WEBHOOK CRITICAL ERROR: Verificar conectividad y configuración CORS')
      }
      
      webhookStatus.value = 'error'
      throw error // Re-lanzar el error para que se capture en handleSubmit
    }
    
    console.log('🚀 WEBHOOK DEBUG: ==================== FIN SENDTOWEBHOOK ====================')
  }
  
  async function handleSubmit() {
    console.log('🚀 SUBMIT DEBUG: Iniciando handleSubmit')
    console.log('📊 SUBMIT DEBUG: Estado del formulario:')
    console.log('  - isFormValid:', isFormValid.value)
    console.log('  - isSubmitting:', isSubmitting.value)
    console.log('  - formData:', formData)
    
    if (!isFormValid.value || isSubmitting.value) {
      console.log('❌ SUBMIT BLOCKED: Formulario no válido o ya enviando')
      return
    }
    
    delete validationErrors.value.submit
    
    if (!checkRateLimit()) {
      console.log('❌ SUBMIT BLOCKED: Rate limit excedido')
      return
    }
    
    console.log('✅ SUBMIT: Iniciando proceso de envío')
    isSubmitting.value = true
    submitStatus.value = null
    webhookStatus.value = null
    
    try {
      lastSubmitTime.value = Date.now()
      
      console.log('📤 SUBMIT: Enviando al webhook...')
      // Enviar al webhook (no bloquea el flujo principal)
      try {
        await sendToWebhook(formData)
        console.log('✅ SUBMIT: Webhook enviado exitosamente')
      } catch (error) {
        console.error('💥 SUBMIT ERROR: Error en webhook:', error)
        webhookStatus.value = 'error'
      }
      
      console.log('⏳ SUBMIT: Simulando envío local...')
      // Simular envío local
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      console.log('✅ SUBMIT: Proceso completado exitosamente')
      submitStatus.value = 'success'
      resetForm()
      
    } catch (error) {
      console.error('💥 SUBMIT CRITICAL ERROR:', error)
      submitStatus.value = 'error'
    } finally {
      isSubmitting.value = false
      setTimeout(() => {
        submitStatus.value = null
        webhookStatus.value = null
      }, 5000)
    }
  }
  
  function resetForm() {
    Object.keys(formData).forEach(key => {
      formData[key as keyof FormData] = ''
    })
    validationErrors.value = {}
    isFormExpanded.value = false
    currentStep.value = 0
  }
  
  // Función de prueba del webhook para depuración
  const testWebhookDebug = async (testData?: Partial<FormData>) => {
    const defaultTestData = {
      timestamp: new Intl.DateTimeFormat('es-ES', {
        timeZone: 'Europe/Madrid',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      }).format(new Date()),
      name: testData?.name || 'Test Usuario Debug',
      email: testData?.email || 'test.debug@ejemplo.com',
      message: testData?.message || 'Este es un mensaje de prueba del webhook desde la aplicación'
    }

    console.log('🧪 WEBHOOK DEBUG TEST: ==================== INICIO PRUEBA ====================');
    console.log('🧪 WEBHOOK DEBUG TEST: Datos de prueba:', defaultTestData);
    
    try {
      const result = await sendToWebhook(defaultTestData)
      console.log('🧪 WEBHOOK DEBUG TEST: Resultado:', result);
      return result
    } catch (error) {
      console.error('💥 WEBHOOK DEBUG TEST: Error:', error);
      return { success: false, error: error instanceof Error ? error.message : String(error) }
    }
  }

  // Hacer la función de prueba disponible globalmente
  if (typeof window !== 'undefined') {
    (window as any).testWebhookDebug = testWebhookDebug
    console.log('✅ Función testWebhookDebug disponible globalmente en window.testWebhookDebug()');
  }

  return {
    // Estado
    isFormExpanded,
    currentStep,
    isSubmitting,
    submitStatus,
    webhookStatus,
    formData,
    validationErrors,
    
    // Configuración
    formSteps,
    
    // Computadas
    currentStepData,
    formProgress,
    isFormValid,
    
    // Métodos
    validateField,
    isCurrentStepValid,
    expandForm,
    nextStep,
    prevStep,
    handleEnter,
    handleSubmit,
    resetForm,
    testWebhookDebug
  }
}
