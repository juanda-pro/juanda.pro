// SCRIPT DE DIAGNÓSTICO DEL WEBHOOK - PRODUCCIÓN VS DESARROLLO
// Ejecutar en la consola del navegador tanto en local como en producción

const diagnosticoWebhook = {
  async ejecutarDiagnostico() {
    console.log('🔍 DIAGNÓSTICO WEBHOOK: ==================== INICIO ====================');
    
    // 1. Detectar entorno
    const esProduccion = window.location.hostname !== 'localhost';
    const entorno = esProduccion ? 'PRODUCCIÓN' : 'DESARROLLO';
    
    console.log(`🌍 ENTORNO: ${entorno}`);
    console.log('🌍 URL actual:', window.location.href);
    console.log('🌍 Hostname:', window.location.hostname);
    
    // 2. Verificar variables de entorno
    console.log('\n📋 VARIABLES DE ENTORNO:');
    const webhookUrl = import.meta?.env?.VITE_WEBHOOK_URL;
    const webhookToken = import.meta?.env?.VITE_WEBHOOK_TOKEN;
    
    console.log('  - VITE_WEBHOOK_URL:', webhookUrl || '❌ NO DEFINIDA');
    console.log('  - VITE_WEBHOOK_TOKEN:', webhookToken || '❌ NO DEFINIDA');
    
    if (!webhookUrl) {
      console.error('❌ PROBLEMA CRÍTICO: VITE_WEBHOOK_URL no está definida');
      return { error: 'Variable VITE_WEBHOOK_URL no definida' };
    }
    
    // 3. Validar URL del webhook
    console.log('\n🔗 VALIDACIÓN DE URL:');
    try {
      const url = new URL(webhookUrl);
      console.log('✅ URL válida');
      console.log('  - Protocolo:', url.protocol);
      console.log('  - Host:', url.host);
      console.log('  - Pathname:', url.pathname);
    } catch (error) {
      console.error('❌ URL inválida:', error.message);
      return { error: 'URL del webhook inválida' };
    }
    
    // 4. Probar conectividad básica
    console.log('\n🌐 PRUEBA DE CONECTIVIDAD:');
    try {
      const response = await fetch(webhookUrl, {
        method: 'HEAD',
        mode: 'cors'
      });
      console.log('✅ Conectividad básica OK');
      console.log('  - Status:', response.status);
      console.log('  - Headers disponibles:', [...response.headers.keys()]);
    } catch (error) {
      console.error('❌ Error de conectividad:', error.message);
      console.log('  - Tipo de error:', error.name);
      
      if (error.name === 'TypeError' && error.message.includes('CORS')) {
        console.error('🚨 PROBLEMA CORS DETECTADO');
      }
    }
    
    // 5. Probar envío real del webhook
    console.log('\n📤 PRUEBA DE ENVÍO REAL:');
    const datosTest = {
      timestamp: new Date().toISOString(),
      name: `Test ${entorno}`,
      email: 'test@diagnostico.com',
      message: `Mensaje de prueba desde ${entorno} - ${new Date().toLocaleString()}`
    };
    
    try {
      const params = new URLSearchParams(datosTest);
      const urlCompleta = `${webhookUrl}?${params.toString()}`;
      
      console.log('📝 Datos de prueba:', datosTest);
      console.log('📝 URL completa:', urlCompleta);
      
      const response = await fetch(urlCompleta, {
        method: 'GET',
        headers: {
          'contact_form': 'jJkKI()/55dÑLdk55'
        },
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'omit'
      });
      
      console.log('📥 Respuesta del webhook:');
      console.log('  - Status:', response.status);
      console.log('  - OK:', response.ok);
      console.log('  - StatusText:', response.statusText);
      
      const responseText = await response.text();
      console.log('  - Body:', responseText);
      
      if (response.ok) {
        console.log('✅ WEBHOOK FUNCIONANDO CORRECTAMENTE');
        return { success: true, entorno, response: responseText };
      } else {
        console.error('❌ WEBHOOK FALLÓ');
        return { error: `HTTP ${response.status}: ${response.statusText}`, entorno };
      }
      
    } catch (error) {
      console.error('❌ Error enviando al webhook:', error.message);
      return { error: error.message, entorno };
    }
  },
  
  async compararEntornos() {
    console.log('🔄 COMPARACIÓN DE ENTORNOS:');
    console.log('Para comparar, ejecuta este script en:');
    console.log('1. http://localhost:5173 (desarrollo)');
    console.log('2. https://juanda.pro (producción)');
    console.log('\nY compara los resultados.');
  }
};

// Hacer disponible globalmente
window.diagnosticoWebhook = diagnosticoWebhook;

console.log('✅ Script de diagnóstico cargado.');
console.log('📋 Ejecuta: diagnosticoWebhook.ejecutarDiagnostico()');
console.log('🔄 Para comparar: diagnosticoWebhook.compararEntornos()');

// Ejecutar automáticamente
diagnosticoWebhook.ejecutarDiagnostico();