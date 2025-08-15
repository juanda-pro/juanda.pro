// Script de debug para probar la validación de email

// Función isValidEmail exacta del código
function isValidEmail(email) {
  const regex = /\S+@\S+\.\S+/
  return regex.test(email.trim())
}

// Emails de prueba
const testEmails = [
  'asd@gmail.com',
  'asd@sd.cd',
  'test@test.com',
  'invalid-email',
  '',
  'test@',
  '@test.com',
  'test@test'
]

console.log('=== DEBUG EMAIL VALIDATION ===')
testEmails.forEach(email => {
  const result = isValidEmail(email)
  console.log(`Email: "${email}" -> ${result ? '✅ VÁLIDO' : '❌ INVÁLIDO'}`)
})

// Test específico para el email problemático
const problematicEmail = 'asd@gmail.com'
console.log('\n=== TEST ESPECÍFICO ===')
console.log(`Email: "${problematicEmail}"`)
console.log(`Trimmed: "${problematicEmail.trim()}"`)
console.log(`Regex test: ${/\S+@\S+\.\S+/.test(problematicEmail.trim())}`)
console.log(`isValidEmail result: ${isValidEmail(problematicEmail)}`)