# 🔧 SOLUCIÓN: Configurar Variables de Entorno en Vercel

## 🎯 Problema Identificado

**Síntoma:** El formulario de contacto funciona en desarrollo pero NO en producción (Vercel).

**Causa:** Variables de entorno no configuradas en Vercel.

## 📋 Variables Requeridas

Estas son las variables que DEBEN estar configuradas en Vercel:

```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
VITE_WEBHOOK_URL=https://n8n.juanda.pro/webhook/contact-form
VITE_WEBHOOK_TOKEN=jJkKI()/55dÑLdk55
```

## 🚀 Pasos para Configurar en Vercel

### 1. Acceder al Dashboard de Vercel

1. Ve a [vercel.com](https://vercel.com)
2. Inicia sesión en tu cuenta
3. Busca el proyecto `juanda.pro`
4. Haz clic en el proyecto

### 2. Ir a Configuración de Variables

1. En el dashboard del proyecto, haz clic en **"Settings"**
2. En el menú lateral, selecciona **"Environment Variables"**

### 3. Agregar Variables de Entorno

Para cada variable, haz lo siguiente:

1. Haz clic en **"Add New"**
2. En **"Name"**, ingresa el nombre de la variable (ej: `VITE_WEBHOOK_URL`)
3. En **"Value"**, ingresa el valor correspondiente
4. En **"Environment"**, selecciona:
   - ✅ **Production**
   - ✅ **Preview** 
   - ✅ **Development**
5. Haz clic en **"Save"**

### 4. Variables a Configurar

#### Variable 1: VITE_SUPABASE_URL
- **Name:** `VITE_SUPABASE_URL`
- **Value:** `https://your-project.supabase.co` (obtener del archivo .env local)
- **Environments:** Production, Preview, Development

#### Variable 2: VITE_SUPABASE_ANON_KEY
- **Name:** `VITE_SUPABASE_ANON_KEY`
- **Value:** `your-anon-key` (obtener del archivo .env local)
- **Environments:** Production, Preview, Development

#### Variable 3: VITE_WEBHOOK_URL
- **Name:** `VITE_WEBHOOK_URL`
- **Value:** `https://n8n.juanda.pro/webhook/contact-form`
- **Environments:** Production, Preview, Development

#### Variable 4: VITE_WEBHOOK_TOKEN
- **Name:** `VITE_WEBHOOK_TOKEN`
- **Value:** `jJkKI()/55dÑLdk55`
- **Environments:** Production, Preview, Development

### 5. Realizar Redeploy

**IMPORTANTE:** Después de agregar las variables, DEBES hacer un redeploy:

1. Ve a la pestaña **"Deployments"**
2. Encuentra el último deployment
3. Haz clic en los **tres puntos (...)** al lado del deployment
4. Selecciona **"Redeploy"**
5. Confirma el redeploy

## 🧪 Verificación

### Opción 1: Usar Herramienta de Diagnóstico

1. Una vez completado el redeploy, ve a `https://juanda.pro`
2. Abre las herramientas de desarrollador (F12)
3. Ve a la pestaña **Console**
4. Copia y pega el contenido de `test_produccion_webhook.html` en la consola
5. Ejecuta las pruebas para verificar que las variables están disponibles

### Opción 2: Probar el Formulario

1. Ve a `https://juanda.pro/contacto`
2. Llena el formulario con datos de prueba
3. Envía el formulario
4. Verifica que se envíe correctamente

## 🔍 Troubleshooting

### Si las variables no aparecen después del redeploy:

1. **Verificar nombres:** Asegúrate de que los nombres de las variables sean exactos (incluyendo `VITE_`)
2. **Verificar valores:** Confirma que los valores no tengan espacios extra al inicio o final
3. **Verificar environments:** Asegúrate de que "Production" esté seleccionado
4. **Esperar:** A veces toma unos minutos para que las variables estén disponibles
5. **Redeploy adicional:** Si es necesario, haz otro redeploy

### Si el webhook sigue fallando:

1. **Verificar URL del webhook:** Confirma que `https://n8n.juanda.pro/webhook/contact-form` sea accesible
2. **Verificar token:** Confirma que el token `jJkKI()/55dÑLdk55` sea correcto
3. **Verificar n8n:** Asegúrate de que el servidor n8n esté funcionando

## 📝 Checklist de Verificación

- [ ] Variables agregadas en Vercel
- [ ] Redeploy completado
- [ ] Variables disponibles en producción
- [ ] Formulario funcionando
- [ ] Webhook respondiendo correctamente
- [ ] Emails llegando correctamente

## 🎯 Resultado Esperado

Después de seguir estos pasos:

✅ **El formulario de contacto funcionará en producción**
✅ **Los emails se enviarán correctamente**
✅ **No habrá diferencias entre desarrollo y producción**

---

**Nota:** Este proceso debe resolver completamente el problema del formulario en producción. Si persisten los problemas después de seguir estos pasos, revisar la configuración del servidor n8n.