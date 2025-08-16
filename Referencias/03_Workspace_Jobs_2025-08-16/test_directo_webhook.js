// SCRIPT PARA PROBAR EL WEBHOOK DIRECTAMENTE
// Ejecutar en la consola del navegador (F12)

console.log('🧪 INICIANDO PRUEBA DIRECTA DEL WEBHOOK...');

// Configuración del webhook
const WEBHOOK_CONFIG = {
  url: 'https://n8n-n8n.fps4so.easypanel.host/webhook/7468f722-5d90-4d8a-aa74-79bdd480b1de',
  token: 'jJkKI()/55dÑLdk55'
};

// Datos de prueba
const datosTest = {
  timestamp: new Date().toISOString(),
  name: 'Test Directo',
  email: 'test@directo.com',
  message: 'Mensaje de prueba directa del webhook',
  source: window.location.hostname === 'localhost' ? 'DESARROLLO' : 'PRODUCCIÓN'
};

async function probarWebhookDirecto() {
  console.log('📋 Datos de prueba:', datosTest);
  
  try {
    // Construir URL con parámetros
    const params = new URLSearchParams(datosTest);
    const urlCompleta = `${WEBHOOK_CONFIG.url}?${params.toString()}`;
    
    console.log('🔗 URL completa:', urlCompleta);
    console.log('📏 Longitud URL:', urlCompleta.length);
    
    // Realizar petición
    console.log('📤 Enviando petición...');
    const response = await fetch(urlCompleta, {
      method: 'GET',
      headers: {
        'contact_form': WEBHOOK_CONFIG.token,
        'Content-Type': 'application/json'
      },
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'omit'
    });
    
    console.log('📥 Respuesta recibida:');
    console.log('  - Status:', response.status);
    console.log('  - OK:', response.ok);
    console.log('  - StatusText:', response.statusText);
    console.log('  - Headers:', Object.fromEntries(response.headers.entries()));
    
    const responseText = await response.text();
    console.log('  - Body:', responseText);
    
    if (response.ok) {
      console.log('✅ WEBHOOK FUNCIONÓ CORRECTAMENTE');
      return { success: true, data: responseText };
    } else {
      console.error('❌ WEBHOOK FALLÓ');
      return { success: false, error: `HTTP ${response.status}: ${response.statusText}` };
    }
    
  } catch (error) {
    console.error('❌ Error en la petición:', error);
    console.error('  - Tipo:', error.name);
    console.error('  - Mensaje:', error.message);
    
    if (error.name === 'TypeError' && error.message.includes('CORS')) {
      console.error('🚨 PROBLEMA DE CORS DETECTADO');
    }
    
    return { success: false, error: error.message };
  }
}

// Función para probar conectividad básica
async function probarConectividad() {
  console.log('🌐 Probando conectividad básica...');
  
  try {
    const response = await fetch(WEBHOOK_CONFIG.url, {
      method: 'HEAD',
      mode: 'cors'
    });
    
    console.log('✅ Conectividad OK');
    console.log('  - Status:', response.status);
    return true;
  } catch (error) {
    console.error('❌ Error de conectividad:', error.message);
    return false;
  }
}

// Función completa de diagnóstico
async function diagnosticoCompleto() {
  console.log('🔍 ==================== DIAGNÓSTICO COMPLETO ====================');
  console.log('🌍 Entorno:', window.location.hostname === 'localhost' ? 'DESARROLLO' : 'PRODUCCIÓN');
  console.log('🌍 URL:', window.location.href);
  
  // 1. Probar conectividad
  const conectividad = await probarConectividad();
  
  if (!conectividad) {
    console.error('❌ No hay conectividad básica. Abortando pruebas.');
    return;
  }
  
  // 2. Probar webhook
  const resultado = await probarWebhookDirecto();
  
  // 3. Resumen
  console.log('\n📊 RESUMEN:');
  if (resultado.success) {
    console.log('✅ El webhook está funcionando correctamente');
  } else {
    console.error('❌ El webhook tiene problemas:', resultado.error);
  }
  
  return resultado;
}

// Hacer funciones disponibles globalmente
window.probarWebhookDirecto = probarWebhookDirecto;
window.probarConectividad = probarConectividad;
window.diagnosticoCompleto = diagnosticoCompleto;

console.log('✅ Script cargado. Funciones disponibles:');
console.log('  - diagnosticoCompleto()');
console.log('  - probarWebhookDirecto()');
console.log('  - probarConectividad()');
console.log('\n🚀 Ejecutando diagnóstico automático...');

// Ejecutar automáticamente
diagnosticoCompleto();