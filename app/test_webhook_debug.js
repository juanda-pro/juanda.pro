// FUNCIÓN DE PRUEBA DEL WEBHOOK - EJECUTAR EN CONSOLA DEL NAVEGADOR
// Copiar y pegar este código en la consola del navegador para probar el webhook

// Configuración del webhook (cambiar si es necesario)
const WEBHOOK_CONFIG = {
  url: 'https://n8n-n8n.fps4so.easypanel.host/webhook/7468f722-5d90-4d8a-aa74-79bdd480b1de',
  token: 'jJkKI()/55dÑLdk55'
};

// Datos de prueba
const TEST_DATA = {
  timestamp: new Intl.DateTimeFormat('es-ES', {
    timeZone: 'Europe/Madrid',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  }).format(new Date()),
  name: 'Test Usuario',
  email: 'test@ejemplo.com',
  message: 'Este es un mensaje de prueba del webhook'
};

// Función principal de prueba
async function testWebhook(testData = TEST_DATA, config = WEBHOOK_CONFIG) {
  console.log('🧪 WEBHOOK TEST: ==================== INICIO PRUEBA WEBHOOK ====================');
  console.log('🧪 WEBHOOK TEST: Configuración:', config);
  console.log('🧪 WEBHOOK TEST: Datos de prueba:', testData);
  
  try {
    // Validar URL
    console.log('🧪 WEBHOOK TEST: Validando URL...');
    try {
      new URL(config.url);
      console.log('✅ WEBHOOK TEST: URL válida');
    } catch (urlError) {
      console.error('❌ WEBHOOK TEST: URL inválida:', urlError);
      return { success: false, error: 'URL inválida' };
    }
    
    // Crear parámetros URL
    const params = new URLSearchParams(testData);
    const urlWithParams = `${config.url}?${params.toString()}`;
    
    console.log('🧪 WEBHOOK TEST: URL con parámetros:', urlWithParams);
    console.log('🧪 WEBHOOK TEST: Longitud URL:', urlWithParams.length);
    
    // Verificar conectividad
    console.log('🧪 WEBHOOK TEST: Conectividad online:', navigator.onLine);
    
    // Realizar petición
    console.log('🧪 WEBHOOK TEST: Enviando petición GET...');
    const startTime = performance.now();
    
    const response = await fetch(urlWithParams, {
      method: 'GET',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'omit'
    });
    
    const endTime = performance.now();
    const duration = endTime - startTime;
    
    console.log('🧪 WEBHOOK TEST: ==================== RESPUESTA ====================');
    console.log('🧪 WEBHOOK TEST: Tiempo de respuesta:', duration, 'ms');
    console.log('🧪 WEBHOOK TEST: Status:', response.status);
    console.log('🧪 WEBHOOK TEST: StatusText:', response.statusText);
    console.log('🧪 WEBHOOK TEST: OK:', response.ok);
    console.log('🧪 WEBHOOK TEST: Type:', response.type);
    console.log('🧪 WEBHOOK TEST: URL final:', response.url);
    console.log('🧪 WEBHOOK TEST: Redirected:', response.redirected);
    
    // Headers de respuesta
    console.log('🧪 WEBHOOK TEST: Headers de respuesta:');
    for (const [key, value] of response.headers.entries()) {
      console.log(`  - ${key}: ${value}`);
    }
    
    // Body de respuesta
    let responseText = '';
    try {
      responseText = await response.text();
      console.log('🧪 WEBHOOK TEST: Response body:', responseText);
    } catch (textError) {
      console.error('❌ WEBHOOK TEST: Error leyendo response body:', textError);
    }
    
    const result = {
      success: response.ok,
      status: response.status,
      statusText: response.statusText,
      responseText: responseText,
      duration: duration,
      url: response.url,
      redirected: response.redirected
    };
    
    if (response.ok) {
      console.log('✅ WEBHOOK TEST: ==================== ÉXITO ====================');
      console.log('✅ WEBHOOK TEST: Webhook funcionando correctamente');
    } else {
      console.error('❌ WEBHOOK TEST: ==================== ERROR ====================');
      console.error('❌ WEBHOOK TEST: Error HTTP:', response.status, response.statusText);
      
      // Análisis de errores específicos
      if (response.status === 404) {
        console.error('❌ WEBHOOK TEST: El endpoint no existe (404)');
      } else if (response.status === 403) {
        console.error('❌ WEBHOOK TEST: Acceso prohibido (403)');
      } else if (response.status === 405) {
        console.error('❌ WEBHOOK TEST: Método no permitido (405)');
      } else if (response.status === 500) {
        console.error('❌ WEBHOOK TEST: Error interno del servidor (500)');
      }
    }
    
    console.log('🧪 WEBHOOK TEST: Resultado completo:', result);
    return result;
    
  } catch (error) {
    console.error('💥 WEBHOOK TEST: ==================== ERROR CRÍTICO ====================');
    console.error('💥 WEBHOOK TEST: Error:', error);
    console.error('💥 WEBHOOK TEST: Error type:', typeof error);
    console.error('💥 WEBHOOK TEST: Error name:', error instanceof Error ? error.name : 'Unknown');
    console.error('💥 WEBHOOK TEST: Error message:', error instanceof Error ? error.message : String(error));
    
    if (error instanceof TypeError) {
      console.error('💥 WEBHOOK TEST: Posible error de red o CORS');
    }
    
    return {
      success: false,
      error: error instanceof Error ? error.message : String(error),
      errorType: error instanceof Error ? error.name : typeof error
    };
  }
}

// Función para probar diferentes métodos HTTP
async function testWebhookMethods(testData = TEST_DATA, config = WEBHOOK_CONFIG) {
  console.log('🧪 WEBHOOK METHODS TEST: Probando diferentes métodos HTTP...');
  
  const methods = ['GET', 'POST', 'PUT', 'PATCH'];
  const results = {};
  
  for (const method of methods) {
    console.log(`🧪 WEBHOOK METHODS TEST: Probando método ${method}...`);
    
    try {
      const params = new URLSearchParams(testData);
      let url = config.url;
      let body = null;
      let headers = {};
      
      if (method === 'GET') {
        url = `${config.url}?${params.toString()}`;
      } else {
        body = params.toString();
        headers['Content-Type'] = 'application/x-www-form-urlencoded';
      }
      
      const response = await fetch(url, {
        method: method,
        headers: headers,
        body: body,
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'omit'
      });
      
      const responseText = await response.text();
      
      results[method] = {
        status: response.status,
        statusText: response.statusText,
        ok: response.ok,
        responseText: responseText
      };
      
      console.log(`🧪 WEBHOOK METHODS TEST: ${method} - Status: ${response.status}, OK: ${response.ok}`);
      
    } catch (error) {
      results[method] = {
        error: error instanceof Error ? error.message : String(error)
      };
      console.error(`❌ WEBHOOK METHODS TEST: ${method} - Error:`, error.message);
    }
  }
  
  console.log('🧪 WEBHOOK METHODS TEST: Resultados completos:', results);
  return results;
}

// Función para probar conectividad básica
async function testConnectivity(config = WEBHOOK_CONFIG) {
  console.log('🧪 CONNECTIVITY TEST: Probando conectividad básica...');
  
  try {
    const url = new URL(config.url);
    const baseUrl = `${url.protocol}//${url.host}`;
    
    console.log('🧪 CONNECTIVITY TEST: Probando host base:', baseUrl);
    
    const response = await fetch(baseUrl, {
      method: 'GET',
      mode: 'cors',
      cache: 'no-cache'
    });
    
    console.log('🧪 CONNECTIVITY TEST: Host accesible - Status:', response.status);
    return { hostAccessible: true, status: response.status };
    
  } catch (error) {
    console.error('❌ CONNECTIVITY TEST: Host no accesible:', error.message);
    return { hostAccessible: false, error: error.message };
  }
}

// INSTRUCCIONES DE USO:
console.log(`
🧪 WEBHOOK TESTING SUITE CARGADO

Para usar estas funciones de prueba:

1. Prueba básica del webhook:
   testWebhook()

2. Probar diferentes métodos HTTP:
   testWebhookMethods()

3. Probar conectividad del host:
   testConnectivity()

4. Probar con datos personalizados:
   testWebhook({ name: 'Mi Nombre', email: 'mi@email.com', message: 'Mi mensaje' })

5. Probar con URL diferente:
   testWebhook(TEST_DATA, { url: 'https://otra-url.com/webhook', token: 'otro-token' })

`);

// Exportar funciones para uso global
window.testWebhook = testWebhook;
window.testWebhookMethods = testWebhookMethods;
window.testConnectivity = testConnectivity;
window.TEST_DATA = TEST_DATA;
window.WEBHOOK_CONFIG = WEBHOOK_CONFIG;

console.log('✅ Funciones de prueba disponibles globalmente: testWebhook, testWebhookMethods, testConnectivity');