# Guía de Deployment

## 🚀 Plataforma de Deployment

**Plataforma Principal:** Vercel  
**Tipo:** Serverless Static Site Generation  
**CDN:** Vercel Edge Network  
**Dominio:** Personalizado (juanda.pro)  

## 📋 Configuración de Vercel

### Configuración Básica

**Framework:** Vue.js  
**Build Command:** `npm run build`  
**Output Directory:** `dist`  
**Install Command:** `npm install`  
**Development Command:** `npm run dev`  

### Variables de Entorno

#### Producción
```bash
VITE_SUPABASE_URL=https://ubjgqpfiegynmwdunqwf.supabase.co
VITE_SUPABASE_ANON_KEY=[production_key]
NODE_ENV=production
```

#### Preview/Staging
```bash
VITE_SUPABASE_URL=https://ubjgqpfiegynmwdunqwf.supabase.co
VITE_SUPABASE_ANON_KEY=[staging_key]
NODE_ENV=staging
```

### Configuración de vercel.json

```json
{
  "buildCommand": "cd app && npm run build",
  "outputDirectory": "app/dist",
  "installCommand": "cd app && npm install",
  "framework": "vite",
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    }
  ],
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

## 🔄 Proceso de Deployment

### Deployment Automático

1. **Push a main branch**
   ```bash
   git add .
   git commit -m "feat: nueva funcionalidad"
   git push origin main
   ```

2. **Vercel detecta el cambio**
   - Webhook automático desde GitHub
   - Inicia build process
   - Ejecuta tests (si están configurados)

3. **Build Process**
   ```bash
   cd app
   npm install
   npm run build
   ```

4. **Deploy a producción**
   - Assets optimizados
   - CDN distribution
   - DNS update automático

### Preview Deployments

- **Trigger:** Pull Request o push a branch
- **URL:** Única por deployment
- **Duración:** Permanente hasta merge/close
- **Uso:** Testing y review

## 🌐 Configuración de Dominio

### Dominio Principal
- **Dominio:** juanda.pro
- **SSL:** Automático (Let's Encrypt)
- **HTTPS:** Forzado
- **WWW:** Redirect a apex domain

### DNS Configuration
```
Type: A
Name: @
Value: 76.76.19.61 (Vercel IP)

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

## 📊 Monitoreo de Deployment

### Métricas de Vercel
- **Build time:** Tiempo de construcción
- **Deploy time:** Tiempo total de deployment
- **Bundle size:** Tamaño del bundle
- **Function duration:** Tiempo de ejecución de functions

### Analytics
- **Core Web Vitals:** Automático
- **Real User Monitoring:** Incluido
- **Error tracking:** Básico incluido

## 🔧 Configuración de Build

### Optimizaciones de Build

```javascript
// vite.config.ts optimizations
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['vue', 'vue-router'],
          ui: ['@headlessui/vue', '@heroicons/vue'],
          utils: ['@vueuse/core']
        }
      }
    },
    chunkSizeWarningLimit: 1000
  }
})
```

### Cache Strategy
- **Static assets:** Cache-Control: max-age=31536000
- **HTML:** Cache-Control: max-age=0
- **API responses:** Configurado en Supabase

## 🔐 Configuración de Seguridad

### Headers de Seguridad
```json
{
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "DENY",
  "X-XSS-Protection": "1; mode=block",
  "Strict-Transport-Security": "max-age=31536000; includeSubDomains",
  "Content-Security-Policy": "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'"
}
```

### Environment Security
- **API Keys:** Solo en variables de entorno
- **Secrets:** Nunca en código fuente
- **CORS:** Configurado en Supabase

## 🚨 Rollback Strategy

### Rollback Automático
1. **Acceder a Vercel Dashboard**
2. **Seleccionar deployment anterior**
3. **Promote to Production**
4. **Verificar funcionamiento**

### Rollback Manual
```bash
# Revertir commit
git revert HEAD
git push origin main

# O rollback a commit específico
git reset --hard <commit-hash>
git push --force origin main
```

## 📈 Performance Optimization

### Bundle Analysis
```bash
# Analizar bundle size
npm run build -- --analyze

# Lighthouse CI (futuro)
npx lhci autorun
```

### Optimizaciones Implementadas
- **Code splitting:** Por rutas
- **Lazy loading:** Componentes pesados
- **Tree shaking:** Eliminación de código no usado
- **Asset optimization:** Imágenes y fonts

## 🔄 CI/CD Pipeline

### Workflow Actual
```
Developer → Git Push → GitHub → Vercel Webhook → Build → Deploy → Live
```

### Workflow Futuro (con Tests)
```
Developer → Git Push → GitHub Actions → Tests → Vercel → Deploy → Live
```

## 🌍 Multi-Environment Setup

### Environments
1. **Development:** Local development
2. **Preview:** Feature branches
3. **Staging:** Pre-production testing
4. **Production:** Live site

### Branch Strategy
```
main → Production
staging → Staging environment
feature/* → Preview deployments
```

## 📱 Edge Functions (Supabase)

### Contact Form Function
**Endpoint:** `/functions/v1/contact-form`  
**Method:** POST  
**Purpose:** Procesar formulario de contacto  

```typescript
// Deployment command
supabase functions deploy contact-form

// Local testing
supabase functions serve
```

## 🔍 Troubleshooting

### Problemas Comunes

#### Build Failures
```bash
# Limpiar cache
rm -rf node_modules package-lock.json
npm install

# Verificar TypeScript
npm run type-check

# Verificar linting
npm run lint
```

#### Deployment Issues
1. **Verificar variables de entorno**
2. **Comprobar build logs en Vercel**
3. **Validar configuración de vercel.json**
4. **Revisar límites de Vercel**

#### Performance Issues
1. **Analizar bundle size**
2. **Optimizar imágenes**
3. **Revisar lazy loading**
4. **Verificar Core Web Vitals**

### Logs y Debugging
```bash
# Vercel CLI
npx vercel logs

# Local debugging
npm run dev
npm run preview
```

## 📋 Checklist de Deployment

### Pre-deployment
- [ ] Tests pasando
- [ ] Lint sin errores
- [ ] TypeScript sin errores
- [ ] Build local exitoso
- [ ] Variables de entorno configuradas
- [ ] Performance verificada

### Post-deployment
- [ ] Site accesible
- [ ] Funcionalidades críticas funcionando
- [ ] Formulario de contacto operativo
- [ ] Core Web Vitals en verde
- [ ] SSL certificate válido
- [ ] Analytics funcionando

## 🔮 Mejoras Futuras

### Automatización
- **GitHub Actions:** CI/CD completo
- **Automated testing:** Unit + E2E
- **Performance monitoring:** Lighthouse CI
- **Security scanning:** Dependencias y vulnerabilidades

### Monitoring
- **Sentry:** Error tracking avanzado
- **DataDog:** APM y logs
- **Uptime monitoring:** Pingdom o similar

### Optimization
- **Image optimization:** Next.js Image component
- **Service Worker:** Caching avanzado
- **Preloading:** Critical resources
- **Bundle optimization:** Advanced splitting