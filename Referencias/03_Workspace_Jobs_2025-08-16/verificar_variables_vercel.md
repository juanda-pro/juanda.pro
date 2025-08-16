# 🔧 Verificación de Variables de Entorno en Vercel

## Variables Requeridas en Vercel

Para que el formulario de contacto funcione en producción, estas variables DEBEN estar configuradas en Vercel:

### 1. Variables de Supabase
```
VITE_SUPABASE_URL=https://ubjgqpfiegynmwdunqwf.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InViamdxcGZpZWd5bm13ZHVucXdmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA1OTY1MDksImV4cCI6MjA2NjE3MjUwOX0.uCZ62K0xo5c0ndcNk31D2AKTkjxXu3cCARBh0d3cnJo
```

### 2. Variables del Webhook
```
VITE_WEBHOOK_URL=https://n8n-n8n.fps4so.easypanel.host/webhook/7468f722-5d90-4d8a-aa74-79bdd480b1de
VITE_WEBHOOK_TOKEN=jJkKI()/55dÑLdk55
```

## 🚨 PROBLEMA PROBABLE

Si el formulario funciona en local pero NO en Vercel, es muy probable que **las variables de entorno no estén configuradas en Vercel**.

## ✅ Cómo Verificar en Vercel

1. Ve a [Vercel Dashboard](https://vercel.com/dashboard)
2. Selecciona el proyecto `juanda-pro`
3. Ve a **Settings** → **Environment Variables**
4. Verifica que TODAS las variables estén configuradas:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
   - `VITE_WEBHOOK_URL`
   - `VITE_WEBHOOK_TOKEN`

## 🔧 Cómo Configurar Variables en Vercel

Si faltan variables:

1. En **Environment Variables**, haz clic en **Add**
2. Agrega cada variable con su valor correspondiente
3. Asegúrate de seleccionar todos los entornos: **Production**, **Preview**, **Development**
4. Haz clic en **Save**
5. **IMPORTANTE**: Después de agregar variables, debes hacer un nuevo deploy

## 🚀 Redeploy Después de Configurar Variables

Después de configurar las variables:

1. Ve a **Deployments**
2. Haz clic en **Redeploy** en el último deployment
3. O haz un nuevo commit y push al repositorio

## 🧪 Verificación Post-Configuración

1. Abre la web en producción: https://juanda.pro
2. Abre las herramientas de desarrollador (F12)
3. Ve a la consola
4. Carga el script de diagnóstico y ejecuta:
   ```javascript
   diagnosticoWebhook.ejecutarDiagnostico()
   ```
5. Verifica que las variables aparezcan como "✅ DEFINIDAS"

## 📋 Checklist de Verificación

- [ ] Variables configuradas en Vercel
- [ ] Redeploy realizado
- [ ] Variables visibles en producción
- [ ] Webhook funcionando en producción
- [ ] Formulario enviando datos correctamente

## 🔍 Diagnóstico Adicional

Si después de configurar las variables el problema persiste:

1. Verificar logs de Vercel
2. Probar conectividad directa al webhook desde producción
3. Verificar configuración CORS del webhook
4. Revisar logs del servidor n8n

---

**Nota**: Las variables con prefijo `VITE_` son variables de entorno del cliente que se incluyen en el bundle de producción. Son seguras para usar en el frontend.