# juanda.pro

> Sitio web personal y profesional de Juan David Rodríguez - Vue.js, TypeScript, Supabase

## 🚀 Descripción

**juanda.pro** es mi sitio web personal que combina un blog técnico con mi portfolio profesional. Desarrollado con tecnologías modernas, ofrece una experiencia de usuario fluida y un diseño responsive que se adapta perfectamente tanto al modo claro como oscuro.

## ✨ Características Principales

- 🎨 **Diseño Moderno**: Interfaz limpia y profesional con soporte completo para modo oscuro
- 📱 **Totalmente Responsive**: Optimizado para todos los dispositivos
- ⚡ **Alto Rendimiento**: Construido con Vue 3 y Vite para máxima velocidad
- 📝 **Blog Dinámico**: Sistema de artículos con categorías y filtros
- 🔍 **SEO Optimizado**: Meta tags dinámicos y estructura semántica
- 🌐 **Multiidioma**: Preparado para contenido en español e inglés
- 📧 **Formulario de Contacto**: Integración con webhooks para gestión de mensajes
- 🔒 **Cumplimiento Legal**: Políticas de privacidad y cookies incluidas

## 🛠️ Stack Tecnológico

### Frontend
- **Vue.js 3** - Framework principal con Composition API
- **TypeScript** - Tipado estático para mayor robustez
- **Vite** - Build tool ultrarrápido
- **Vue Router 4** - Enrutamiento SPA
- **Tailwind CSS** - Framework de utilidades CSS
- **Heroicons** - Iconografía consistente
- **GSAP** - Animaciones fluidas
- **@vueuse/core** - Utilidades de composición

### Backend & Servicios
- **Supabase** - Base de datos y autenticación
- **Vercel** - Hosting y despliegue automático
- **n8n** - Automatización de webhooks

### Herramientas de Desarrollo
- **ESLint + Prettier** - Linting y formateo de código
- **TypeScript** - Verificación de tipos
- **PostCSS + Autoprefixer** - Procesamiento CSS

## 📁 Estructura del Proyecto

```
juanda.pro/
├── app/                          # Aplicación Vue.js principal
│   ├── src/
│   │   ├── components/           # Componentes reutilizables
│   │   ├── views/               # Páginas principales
│   │   ├── composables/         # Lógica de composición
│   │   ├── data/               # Datos estáticos
│   │   ├── assets/             # Recursos estáticos
│   │   └── router/             # Configuración de rutas
│   ├── package.json
│   └── vite.config.ts
├── supabase/                    # Configuración de Supabase
│   ├── functions/              # Edge Functions
│   └── migrations/             # Migraciones de BD
├── .trae/                      # Documentación técnica completa
│   └── documents/
├── robots.txt
├── vercel.json
└── README.md
```

## 🎯 Páginas Principales

### 🏠 Home (`/`)
Página de inicio con hero section, presentación de servicios y metodología "Tres Pilares".

### 📝 Blog (`/blog`)
Listado de artículos técnicos con sistema de filtros por categoría y búsqueda.

### 👤 Soy (`/soy`)
Página personal con mi historia, motivación y filosofía profesional.

### 📧 Contacto (`/contacto`)
Formulario interactivo paso a paso con validación y envío a webhook.

### 📄 Legales
- `/privacy-policy` - Política de privacidad
- `/cookies-policy` - Política de cookies

## 🚀 Desarrollo Local

### Prerrequisitos
- Node.js 18+ 
- npm o yarn

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/juanda-pro/juanda.pro.git
cd juanda.pro

# Instalar dependencias
cd app
npm install

# Configurar variables de entorno
cp .env.example .env.local
# Editar .env.local con tus credenciales de Supabase

# Iniciar servidor de desarrollo
npm run dev
```

### Scripts Disponibles

```bash
npm run dev      # Servidor de desarrollo
npm run build    # Build de producción
npm run preview  # Preview del build
npm run lint     # Linting del código
```

## 🎨 Sistema de Diseño

### Paleta de Colores
- **Primarios**: Grises neutros para texto y fondos
- **Acentos**: Azul vibrante para CTAs y enlaces
- **Semánticos**: Verde, amarillo y rojo para estados

### Tipografía
- **Headings**: Plus Jakarta Sans (font-heading)
- **Body**: Figtree (font-sans)
- **Code**: JetBrains Mono (font-mono)
- **Serif**: Lora (font-serif)

### Modo Oscuro
Soporte completo con variables CSS dinámicas y transiciones suaves.

## 📊 Base de Datos

### Tablas Principales
- `articles` - Artículos del blog
- `categories` - Categorías de contenido
- `resources` - Recursos y enlaces

## 🔧 Configuración

### Variables de Entorno
```env
VITE_SUPABASE_URL=tu_supabase_url
VITE_SUPABASE_ANON_KEY=tu_supabase_anon_key
VITE_WEBHOOK_URL=tu_webhook_url
```

### Despliegue en Vercel
El proyecto está configurado para despliegue automático en Vercel con:
- Build automático desde `app/`
- Variables de entorno configuradas
- Redirects y rewrites incluidos

## 📚 Documentación

La documentación técnica completa se encuentra en `.trae/documents/` e incluye:

- **Arquitectura técnica** detallada
- **Documentación de vistas** (8 páginas principales)
- **Documentación de componentes** (7 componentes críticos)
- **Guías de desarrollo** y mejores prácticas
- **Bitácoras de trabajo** y decisiones técnicas

## 🤝 Contribución

Este es un proyecto personal, pero si encuentras algún bug o tienes sugerencias:

1. Abre un issue describiendo el problema
2. Si quieres contribuir con código, haz un fork y crea un PR
3. Asegúrate de seguir las convenciones de código existentes

## 📄 Licencia

Este proyecto es de uso personal. El código está disponible para referencia y aprendizaje.

## 📞 Contacto

- **Web**: [juanda.pro](https://juanda.pro)
- **Email**: [contacto@juanda.pro](mailto:contacto@juanda.pro)
- **LinkedIn**: [Juan David Rodríguez](https://linkedin.com/in/juandarodriguez)

---

**Desarrollado con ❤️ por Juan David Rodríguez**

*Última actualización: Agosto 2025*