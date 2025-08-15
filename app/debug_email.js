// Script de debugging completo para el problema del email
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Simular el estado reactivo de Vue
class ReactiveState {
  constructor(initialValue) {
    this._value = initialValue;
    this._listeners = [];
  }
  
  get value() {
    return this._value;
  }
  
  set value(newValue) {
    this._value = newValue;
    this._listeners.forEach(listener => listener(newValue));
  }
}

// Simular los datos del formulario
const formData = {
  name: '',
  email: 'asd@sd.cd',
  company: '',
  message: ''
};

// Simular validationErrors reactivo
const validationErrors = new ReactiveState({});

// Simular currentStep reactivo
const currentStep = new ReactiveState(1);

// Simular formSteps
const formSteps = [
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
    field: 'company',
    label: 'Tu empresa (opcional)',
    placeholder: 'Nombre de tu empresa o proyecto',
    type: 'text',
    required: false,
    maxLength: 100
  },
  {
    field: 'message',
    label: 'Tu mensaje',
    placeholder: 'Cuéntame sobre tu proyecto, ideas o cómo puedo ayudarte...',
    type: 'textarea',
    required: true,
    maxLength: 1000
  }
];

// Simular currentStepData computed
function getCurrentStepData() {
  return formSteps[currentStep.value] || null;
}

function isValidEmail(email) {
  const result = emailRegex.test(email);
  console.log('🔍 DEBUG isValidEmail:', {
    email,
    regex: emailRegex.toString(),
    result,
    emailLength: email.length,
    trimmed: email.trim(),
    hasSpaces: /\s/.test(email)
  });
  return result;
}

function validateField(field, value) {
  const step = formSteps.find(s => s.field === field);
  if (!step) return;
  
  console.log('🔍 DEBUG validateField:', {
    field,
    value,
    trimmedValue: value.trim(),
    step: step?.field,
    required: step?.required,
    beforeDelete: validationErrors.value[field]
  });
  
  // CRÍTICO: Limpiar errores previos SIEMPRE
  delete validationErrors.value[field];
  
  const trimmedValue = value.trim();
  
  if (step.required && !trimmedValue) {
    validationErrors.value[field] = 'Este campo es obligatorio';
    console.log('❌ Required field empty:', field);
    return;
  }
  
  if (field === 'email' && trimmedValue && !isValidEmail(trimmedValue)) {
    validationErrors.value[field] = 'Introduce un email válido';
    console.log('❌ Email validation failed:', trimmedValue);
    return;
  }
  
  if (trimmedValue.length > step.maxLength) {
    validationErrors.value[field] = `Máximo ${step.maxLength} caracteres`;
    console.log('❌ Max length exceeded:', field, trimmedValue.length, step.maxLength);
    return;
  }
  
  console.log('✅ Field validation passed:', field);
  
  // CRÍTICO: Forzar reactividad después de limpiar errores
  validationErrors.value = { ...validationErrors.value };
}

function isCurrentStepValid() {
  const step = getCurrentStepData();
  if (!step) {
    console.log('❌ isCurrentStepValid: No step data');
    return false;
  }
  
  const value = formData[step.field]?.trim() || '';
  
  console.log('🔍 DEBUG isCurrentStepValid:', {
    stepField: step.field,
    value,
    required: step.required,
    hasValue: !!value,
    isEmail: step.field === 'email',
    emailValid: step.field === 'email' ? isValidEmail(value) : 'N/A',
    hasValidationError: !!validationErrors.value[step.field],
    validationError: validationErrors.value[step.field],
    currentErrors: Object.keys(validationErrors.value)
  });
  
  // CRÍTICO: Verificar campo requerido
  if (step.required && !value) {
    console.log('❌ Required field empty in isCurrentStepValid:', step.field);
    return false;
  }
  
  // CRÍTICO: Verificar email específicamente
  if (step.field === 'email' && value) {
    const emailIsValid = isValidEmail(value);
    console.log('🔍 Email validation check:', { value, emailIsValid });
    if (!emailIsValid) {
      console.log('❌ Email invalid in isCurrentStepValid:', value);
      return false;
    }
  }
  
  // CRÍTICO: Verificar errores de validación
  const hasError = validationErrors.value[step.field];
  if (hasError) {
    console.log('❌ Validation error exists in isCurrentStepValid:', hasError);
    return false;
  }
  
  console.log('✅ isCurrentStepValid: true for', step.field);
  return true;
}

function nextStep() {
  console.log('🔍 DEBUG nextStep called');
  const isValid = isCurrentStepValid();
  console.log('🔍 DEBUG nextStep - isCurrentStepValid():', isValid);
  
  if (!isValid) {
    console.log('❌ nextStep blocked - step not valid');
    return;
  }
  
  if (currentStep.value < formSteps.length - 1) {
    console.log('✅ nextStep - advancing from step', currentStep.value, 'to', currentStep.value + 1);
    currentStep.value++;
  } else {
    console.log('🔍 nextStep - already at last step');
  }
}

// Ejecutar la prueba completa
console.log('=== DEBUGGING EMAIL VALIDATION COMPLETO ===');
console.log('Current step:', currentStep.value);
console.log('Current step data:', getCurrentStepData());
console.log('Form data:', formData);
console.log('Validation errors:', validationErrors.value);
console.log('');

// Simular el flujo completo
console.log('=== PASO 1: Validar campo email ===');
validateField('email', 'asd@sd.cd');
console.log('Validation errors después de validateField:', validationErrors.value);
console.log('');

console.log('=== PASO 2: Verificar si el paso actual es válido ===');
const stepValid = isCurrentStepValid();
console.log('isCurrentStepValid():', stepValid);
console.log('');

console.log('=== PASO 3: Intentar avanzar al siguiente paso ===');
nextStep();
console.log('Current step después de nextStep:', currentStep.value);
console.log('');

console.log('=== RESULTADO FINAL ===');
console.log('¿Se avanzó al siguiente paso?', currentStep.value === 2 ? 'SÍ' : 'NO');