# 🔧 INSTRUCCIONES PARA DEPURAR EL WEBHOOK

## ✅ PROBLEMA CORREGIDO
Se ha corregido la autenticación del webhook. Ahora usa las credenciales correctas:
- Header: `contact_form`
- Secret: `jJkKI()/55dÑLdk55`

## 🧪 FUNCIONES DE DEPURACIÓN DISPONIBLES

## 🚀 CÓMO PROBAR EL WEBHOOK CORREGIDO

### Opción 1: Usar el formulario normal
1. Ve a la aplicación en http://localhost:5173/
2. Llena el formulario de contacto con datos reales
3. Envía el formulario
4. Revisa la consola del navegador (F12) para ver los logs detallados
5. Deberías ver "✅ WEBHOOK SUCCESS" si funciona correctamente

### Opción 2: Usar la función de prueba desde la consola
1. Abre la consola del navegador (F12)
2. Ejecuta: `testWebhookDebug()`
3. Revisa los logs detallados para confirmar el éxito

### 1. Función de prueba integrada en la aplicación
En la consola del navegador (F12), ejecuta:
```javascript
// Prueba básica del webhook
window.testWebhookDebug()

// Prueba con datos personalizados
window.testWebhookDebug({
  name: 'Tu Nombre',
  email: 'tu@email.com',
  message: 'Tu mensaje de prueba'
})
```

### 2. Suite completa de pruebas (archivo independiente)
Si necesitas pruebas más avanzadas, carga el archivo `test_webhook_debug.js` en la consola:

1. Abre la consola del navegador (F12)
2. Copia y pega el contenido completo del archivo `test_webhook_debug.js`
3. Ejecuta las siguientes funciones:

```javascript
// Prueba básica
testWebhook()

// Probar diferentes métodos HTTP
testWebhookMethods()

// Probar conectividad del host
testConnectivity()

// Prueba con datos personalizados
testWebhook({
  name: 'Nombre Personalizado',
  email: 'email@personalizado.com',
  message: 'Mensaje personalizado'
})
```

## 🔍 QUÉ BUSCAR EN LOS LOGS

### ✅ Señales de éxito:
- Status: 200 (OK)
- Response OK: true
- Sin errores en la consola

### ❌ Posibles problemas:

#### Error 403 (Prohibido)
- **Causa**: Problema de autenticación o token incorrecto
- **Solución**: Verificar el token en las variables de entorno

#### Error 404 (No encontrado)
- **Causa**: URL del webhook incorrecta
- **Solución**: Verificar la URL en las variables de entorno

#### Error 405 (Método no permitido)
- **Causa**: El webhook no acepta peticiones GET
- **Solución**: Cambiar a POST en el código

#### Error de CORS
- **Causa**: El servidor no permite peticiones desde el dominio local
- **Solución**: Configurar CORS en n8n o usar un proxy

#### Error de red (TypeError)
- **Causa**: Problema de conectividad o URL malformada
- **Solución**: Verificar conectividad y formato de URL

## 📋 PASOS PARA DEPURAR

1. **Abre la aplicación** en http://localhost:5173/
2. **Abre la consola del navegador** (F12 → Console)
3. **Ejecuta la prueba básica**:
   ```javascript
   window.testWebhookDebug()
   ```
4. **Revisa los logs detallados** que aparecen en la consola
5. **Identifica el error específico** basándote en la tabla anterior
6. **Reporta los resultados** con el status code y mensaje de error exacto

## 🚨 INFORMACIÓN CRÍTICA PARA REPORTAR

Cuando reportes el problema, incluye:

1. **Status Code** (ej: 403, 404, 500)
2. **Mensaje de error exacto**
3. **URL final generada** (visible en los logs)
4. **Tiempo de respuesta**
5. **Headers de respuesta** (si están disponibles)
6. **Response body** (contenido de la respuesta)

## 🔧 CONFIGURACIÓN ACTUAL

- **Webhook URL**: https://n8n-n8n.fps4so.easypanel.host/webhook/7468f722-5d90-4d8a-aa74-79bdd480b1de
- **Método**: GET
- **Parámetros**: name, email, message, timestamp
- **Token**: Configurado en variables de entorno

## 📞 SIGUIENTE PASO

Ejecuta las pruebas y reporta los resultados exactos para poder implementar la solución correcta.