// Test script para probar la regex de email
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const testEmail = 'asd@sd.cd';

console.log('Testing email regex:');
console.log('Email:', testEmail);
console.log('Regex:', emailRegex.toString());
console.log('Result:', emailRegex.test(testEmail));

// Test con otros emails
const testEmails = [
  'asd@sd.cd',
  'test@example.com',
  'user@domain.co.uk',
  'invalid-email',
  'test@',
  '@domain.com',
  'test@domain',
  'test @domain.com',
  'test@domain .com'
];

console.log('\nTesting multiple emails:');
testEmails.forEach(email => {
  console.log(`${email}: ${emailRegex.test(email)}`);
});