// Script para probar el formulario exactamente como en el navegador

// Simulamos el estado reactivo de Vue
class ReactiveState {
  constructor(initialValue) {
    this._value = initialValue
    this._watchers = []
  }
  
  get value() {
    return this._value
  }
  
  set value(newValue) {
    const oldValue = this._value
    this._value = newValue
    this._watchers.forEach(watcher => watcher(newValue, oldValue))
  }
  
  watch(callback) {
    this._watchers.push(callback)
    callback(this._value, undefined) // immediate: true
  }
}

// Estado del formulario
const formData = new ReactiveState({
  name: '',
  email: '',
  company: '',
  message: ''
})

const validationErrors = new ReactiveState({})
const currentStep = new ReactiveState(1)

// Configuración de pasos
const formSteps = [
  { field: 'name', label: 'Nombre', type: 'text', required: true },
  { field: 'email', label: 'Email', type: 'email', required: true },
  { field: 'company', label: 'Empresa', type: 'text', required: false },
  { field: 'message', label: 'Mensaje', type: 'textarea', required: true }
]

// Función para obtener datos del paso actual
function getCurrentStepData() {
  return formSteps[currentStep.value]
}

// Función de validación de email
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  const result = emailRegex.test(email)
  
  console.log('🔍 DEBUG isValidEmail:', {
    email,
    regex: emailRegex.toString(),
    result,
    emailLength: email.length,
    trimmed: email.trim(),
    hasSpaces: /\s/.test(email)
  })
  
  return result
}

// Función de validación de campo
function validateField(field, value) {
  console.log(`🔍 DEBUG validateField called: ${field} = '${value}'`)
  
  const errors = { ...validationErrors.value }
  
  // Limpiar errores previos del campo
  if (errors[field]) {
    delete errors[field]
    console.log(`🔍 DEBUG Cleared previous error for ${field}`)
  }
  
  const stepData = formSteps.find(step => step.field === field)
  if (!stepData) {
    console.log(`❌ Step data not found for field: ${field}`)
    return
  }
  
  // Validar campo requerido
  if (stepData.required && (!value || value.trim() === '')) {
    errors[field] = `${stepData.label} es requerido`
    console.log(`❌ Field validation failed: ${field} is required`)
  }
  // Validar email específicamente
  else if (field === 'email' && value && !isValidEmail(value)) {
    errors[field] = 'Email no válido'
    console.log(`❌ Field validation failed: ${field} is invalid email`)
  }
  else {
    console.log(`✅ Field validation passed: ${field}`)
  }
  
  validationErrors.value = errors
  console.log('Validation errors después de validateField:', validationErrors.value)
}

// Función para verificar si el paso actual es válido
function isCurrentStepValid() {
  const stepData = getCurrentStepData()
  const value = formData.value[stepData.field]
  
  console.log('🔍 DEBUG isCurrentStepValid:', {
    stepField: stepData.field,
    value: value,
    required: stepData.required,
    hasValue: !!value && value.trim() !== '',
    isEmail: stepData.field === 'email',
    emailValid: stepData.field === 'email' ? isValidEmail(value || '') : 'N/A',
    hasValidationError: !!validationErrors.value[stepData.field],
    validationError: validationErrors.value[stepData.field],
    currentErrors: Object.keys(validationErrors.value)
  })
  
  // Verificar si el campo es requerido y tiene valor
  if (stepData.required && (!value || value.trim() === '')) {
    console.log(`❌ isCurrentStepValid: false - required field '${stepData.field}' is empty`)
    return false
  }
  
  // Verificar validación específica de email
  if (stepData.field === 'email' && value) {
    const emailIsValid = isValidEmail(value)
    console.log('🔍 Email validation check:', { value, emailIsValid })
    if (!emailIsValid) {
      console.log(`❌ isCurrentStepValid: false - email '${value}' is invalid`)
      return false
    }
  }
  
  // Verificar si hay errores de validación para este campo
  if (validationErrors.value[stepData.field]) {
    console.log(`❌ isCurrentStepValid: false - validation error exists for '${stepData.field}': ${validationErrors.value[stepData.field]}`)
    return false
  }
  
  console.log(`✅ isCurrentStepValid: true for ${stepData.field}`)
  return true
}

// Función para avanzar al siguiente paso
function nextStep() {
  console.log('🔍 DEBUG nextStep called')
  
  if (!isCurrentStepValid()) {
    console.log('❌ nextStep - cannot advance: current step is not valid')
    return false
  }
  
  console.log('🔍 DEBUG nextStep - isCurrentStepValid(): true')
  
  if (currentStep.value < formSteps.length - 1) {
    const oldStep = currentStep.value
    currentStep.value = currentStep.value + 1
    console.log(`✅ nextStep - advancing from step ${oldStep} to ${currentStep.value}`)
    return true
  } else {
    console.log('❌ nextStep - already at last step')
    return false
  }
}

// Watchers para debugging
formData.watch((newValue) => {
  console.log('📊 FormData changed:', newValue)
})

validationErrors.watch((newValue) => {
  console.log('🚨 ValidationErrors changed:', newValue)
})

currentStep.watch((newValue) => {
  console.log('👆 CurrentStep changed to:', newValue)
})

// Simular el flujo completo del problema
console.log('=== INICIANDO SIMULACIÓN COMPLETA DEL PROBLEMA ===')
console.log('Estado inicial:')
console.log('- currentStep:', currentStep.value)
console.log('- formData:', formData.value)
console.log('- validationErrors:', validationErrors.value)

console.log('\n=== PASO 1: Usuario escribe email válido ===')
formData.value = { ...formData.value, email: 'asd@sd.cd' }

console.log('\n=== PASO 2: Se ejecuta validateField ===')
validateField('email', 'asd@sd.cd')

console.log('\n=== PASO 3: Se verifica isCurrentStepValid ===')
const stepValid = isCurrentStepValid()
console.log('isCurrentStepValid():', stepValid)

console.log('\n=== PASO 4: Usuario hace clic en "Siguiente" ===')
const advanced = nextStep()
console.log('¿Se avanzó al siguiente paso?', advanced ? 'SÍ' : 'NO')
console.log('Current step después de nextStep:', currentStep.value)

console.log('\n=== RESULTADO FINAL ===')
console.log('¿Se avanzó al siguiente paso?', advanced ? 'SÍ' : 'NO')
console.log('Estado final:')
console.log('- currentStep:', currentStep.value)
console.log('- formData:', formData.value)
console.log('- validationErrors:', validationErrors.value)