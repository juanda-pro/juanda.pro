# Configuraciones del Proyecto

## 📁 Estructura de Configuración

El proyecto utiliza múltiples archivos de configuración para diferentes herramientas y aspectos del desarrollo.

## ⚡ Vite Configuration

**Archivo:** `app/vite.config.ts`

```typescript
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
```

### Características:
- **Plugin Vue:** Soporte completo para Vue 3 SFC
- **Alias @:** Mapeo a `./src` para imports absolutos
- **ES Modules:** Configuración nativa para ESM

## 🎨 Tailwind CSS Configuration

**Archivo:** `app/tailwind.config.js`

### Modo Oscuro
```javascript
darkMode: 'class' // Activado por clase CSS
```

### Content Sources
```javascript
content: [
  "./index.html",
  "./src/**/*.{vue,js,ts,jsx,tsx}",
  "../Referencias/**/*.md" // Para contenido de artículos
]
```

### Sistema de Colores Personalizado

#### Colores de Marca
- **brand-dark:** `#1D1E23` - Color principal oscuro
- **brand-accent:** `#206372` - Azul corporativo (modo claro), `#F5DF4D` - Amarillo dorado (modo oscuro)
- **brand-accent-darker:** `#D9B40C` - Variante más oscura
- **brand-accent-light:** `#FEF3C7` - Variante más clara

#### Fondos
- **bg-light:** `#FFFFFF` - Fondo claro
- **bg-dark:** `#1D1E23` - Fondo oscuro

#### Superficies
- **surface-light:** `#F5F5F5` - Superficie clara
- **surface-dark:** `#28282D` - Superficie oscura
- **surface-deeper-dark:** `#202023` - Superficie más profunda

#### Textos
- **primary-light:** `#262626` - Texto principal claro
- **secondary-light:** `#374151` - Texto secundario claro
- **primary-dark:** `#FFFFFF` - Texto principal oscuro
- **secondary-dark:** `#E5E7EB` - Texto secundario oscuro

#### Bordes y Divisores
- **border-light/dark:** `#E5E7EB` / `#374151`
- **divider-light/dark:** `#E5E7EB` / `#374151`

#### Colores de Estado
- **accent-info:** `#4338CA` (claro) / `#A78BFA` (oscuro)
- **accent-success:** `#059669`
- **accent-error:** `#DC2626`

#### Efectos Especiales
- **dot-light:** `rgba(0, 0, 0, 0.18)` - Puntos decorativos
- **dot-dark:** `rgba(255, 255, 255, 0.11)` - Puntos decorativos oscuros

### Tipografías Personalizadas

```javascript
fontFamily: {
  sans: ['"Figtree"', 'sans-serif'],      // Fuente principal
  serif: ['"Lora"', 'serif'],             // Para contenido largo
  heading: ['"Plus Jakarta Sans"', 'sans-serif'], // Títulos
  mono: ['"JetBrains Mono"', 'monospace']  // Código
}
```

### Tamaños de Fuente
```javascript
fontSize: {
  'lg': '1.15rem' // Aumentado desde 1.125rem por defecto
}
```

### Plugins
- **@tailwindcss/typography:** Para estilado de contenido rich text

## 📦 Package.json Scripts

**Archivo:** `app/package.json`

```json
{
  "scripts": {
    "dev": "vite",                    // Servidor de desarrollo
    "build": "vue-tsc --noEmit && vite build", // Build de producción
    "preview": "vite preview",        // Preview del build
    "lint": "eslint . --ext .vue,.js,.jsx,.cjs,.mjs,.ts,.tsx,.cts,.mts --fix --ignore-path .gitignore"
  }
}
```

## 🔧 TypeScript Configuration

**Archivo:** `app/tsconfig.json`

### Configuración Base
- Extiende `@vue/tsconfig/tsconfig.dom.json`
- Soporte para Vue 3 y DOM APIs
- Strict mode habilitado
- Path mapping para alias `@`

## 📝 PostCSS Configuration

**Archivo:** `app/postcss.config.js`

```javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

### Plugins:
- **tailwindcss:** Procesamiento de utilidades
- **autoprefixer:** Prefijos automáticos para compatibilidad

## 🚀 Vercel Configuration

**Archivo:** `app/vercel.json`

### Configuración de Deployment
- Build command personalizado
- Output directory configurado
- Headers de seguridad
- Redirects y rewrites

## 🔍 ESLint Configuration

### Reglas Principales
- **Vue 3:** Reglas específicas para Vue
- **TypeScript:** Integración completa
- **Prettier:** Formateo automático
- **Auto-fix:** Corrección automática en lint

### Archivos Incluidos
```
.vue, .js, .jsx, .cjs, .mjs, .ts, .tsx, .cts, .mts
```

## 🌐 Variables de Entorno

**Archivo:** `app/.env`

```bash
VITE_SUPABASE_URL=https://ubjgqpfiegynmwdunqwf.supabase.co
VITE_SUPABASE_ANON_KEY=[key]
```

### Convenciones
- Prefijo `VITE_` para variables del cliente
- Variables sensibles en `.env.local` (no versionado)
- Variables de producción en Vercel dashboard

## 🗃️ Supabase Configuration

**Archivo:** `app/src/supabaseClient.ts`

```typescript
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
```

### Características
- Cliente singleton
- Variables de entorno tipadas
- Configuración mínima para máxima compatibilidad

## 📊 Configuraciones de Build

### Desarrollo
- **HMR:** Hot Module Replacement habilitado
- **Source maps:** Completos para debugging
- **Type checking:** En tiempo real con vue-tsc

### Producción
- **Minificación:** Automática con Vite
- **Tree shaking:** Eliminación de código no usado
- **Code splitting:** Automático por rutas
- **Asset optimization:** Imágenes y fonts optimizados

## 🔐 Configuraciones de Seguridad

### Headers HTTP
- **CSP:** Content Security Policy
- **HSTS:** HTTP Strict Transport Security
- **X-Frame-Options:** Protección contra clickjacking
- **X-Content-Type-Options:** Prevención de MIME sniffing

### Validación
- **Client-side:** Vue + TypeScript
- **Server-side:** Supabase Edge Functions
- **Sanitización:** Automática en Supabase

## 🎯 Optimizaciones

### Performance
- **Lazy loading:** Rutas cargadas bajo demanda
- **Dynamic imports:** Componentes pesados diferidos
- **Asset preloading:** Recursos críticos precargados

### SEO
- **Meta tags:** Configurados por ruta
- **Structured data:** Schema.org markup
- **Sitemap:** Generación automática

## 🔄 Configuraciones de CI/CD

### Vercel
- **Auto-deploy:** Desde push a main
- **Preview deployments:** Para PRs
- **Environment variables:** Configuradas en dashboard
- **Build cache:** Optimizado para builds rápidos

### Git Hooks (Futuro)
- **Pre-commit:** Lint y type check
- **Pre-push:** Tests unitarios
- **Commit message:** Conventional commits

## 📱 Configuraciones Responsive

### Breakpoints (Tailwind)
```javascript
// Breakpoints por defecto de Tailwind
sm: '640px',   // Móvil grande
md: '768px',   // Tablet
lg: '1024px',  // Desktop pequeño
xl: '1280px',  // Desktop
'2xl': '1536px' // Desktop grande
```

### Estrategia
- **Mobile-first:** Diseño desde móvil hacia desktop
- **Progressive enhancement:** Funcionalidades adicionales en pantallas grandes
- **Touch-friendly:** Elementos mínimo 44px en móvil

## 🔮 Configuraciones Futuras

### Testing
- **Vitest:** Para tests unitarios
- **Cypress:** Para tests E2E
- **Testing Library:** Para tests de componentes

### Monitoreo
- **Sentry:** Error tracking y performance
- **Google Analytics:** Métricas de uso
- **Lighthouse CI:** Monitoreo continuo de performance

### Desarrollo
- **Storybook:** Documentación de componentes
- **Chromatic:** Visual regression testing
- **Husky:** Git hooks automatizados