/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "../Referencias/**/*.md" // Añadido para que Tailwind no purgue los estilos del contenido de los artículos
  ],
  theme: {
    extend: {
      fontSize: {
        'lg': '1.15rem', // Aumentado desde 1.125rem por defecto
      },
      fontFamily: {
        // Fuentes base del proyecto
        sans: ['"Figtree"', 'sans-serif'],
        serif: ['"Lora"', 'serif'],
        heading: ['"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace']
      },
      textColor: {
        // === TEXTOS ===
        // Textos principales
        'primary-light': '#262626',
        'primary-dark': '#F4F4F4',
        
        // Textos secundarios
        'secondary-light': '#525252',
        'secondary-dark': '#D4D4D4',
        
        // Textos auxiliares (placeholders, hints)
        'muted-light': '#737373',
        'muted-dark': '#A3A3A3',
        
        // Textos sobre fondos de acento
        'on-accent-light': '#FFFFFF',
        'on-accent-dark': '#262626',
        
        // Acentos principales
        'accent-primary-light': '#206372',
        'accent-primary-dark': '#F5DF4D',
        
        // Acentos sutiles
        'accent-subtle-light': '#4A9BAA',
        'accent-subtle-dark': '#F7E97A',
        
        // Estados
        'success-light': '#059669',
        'success-dark': '#10B981',
        'error-light': '#DC2626',
        'error-dark': '#EF4444',
        'warning-light': '#D97706',
        'warning-dark': '#F59E0B',
        'info-light': '#2563EB',
        'info-dark': '#3B82F6',
        
        // Elementos específicos
        'placeholder-light': '#9CA3AF',
        'placeholder-dark': '#6B7280',
        'help-text-light': '#6B7280',
        'help-text-dark': '#9CA3AF',
        'nav-hint-light': '#9CA3AF',
        'nav-hint-dark': '#6B7280',
        'disabled-text-light': '#D1D5DB',
        'disabled-text-dark': '#4B5563',
      },
      colors: {
        // === FONDOS ===
        // Fondos del body
        'body-light': '#F5F5F5',
        'body-dark': '#1D1E23',
        
        // Fondos de tarjetas y componentes principales
        'card-light': '#FFFFFF',
        'card-dark': '#191A1D',
        
        // Fondos de superficie (elementos secundarios)
        'surface-light': '#F5F5F5',
        'surface-dark': '#1D1E23',
        
        // === TEXTOS ===
        // Textos principales
        'text-primary-light': '#262626',
        'text-primary-dark': '#F4F4F4',
        
        // Textos secundarios
        'text-secondary-light': '#525252',
        'text-secondary-dark': '#D4D4D4',
        
        // Textos auxiliares (placeholders, hints)
        'text-muted-light': '#737373',
        'text-muted-dark': '#A3A3A3',
        
        // Textos sobre fondos de acento
        'text-on-accent-light': '#FFFFFF',
        'text-on-accent-dark': '#262626',
        
        // === ACENTOS ===
        // Acentos principales
        'accent-primary-light': '#206372',
        'accent-primary-dark': '#F5DF4D',
        
        // Acentos sutiles (con opacidad)
        'accent-subtle-light': '#4A9BAA',
        'accent-subtle-dark': '#F7E97A',
        
        // === ESTADOS Y FEEDBACK ===
        // Estados de éxito
        'success-light': '#059669',
        'success-dark': '#10B981',
        'success-bg-light': '#F0FDF4',
        'success-bg-dark': '#064E3B',
        'success-border-light': '#BBF7D0',
        'success-border-dark': '#065F46',
        
        // Estados de error
        'error-light': '#DC2626',
        'error-dark': '#EF4444',
        'error-bg-light': '#FEF2F2',
        'error-bg-dark': '#7F1D1D',
        'error-border-light': '#FECACA',
        'error-border-dark': '#991B1B',
        
        // Estados de advertencia
        'warning-light': '#D97706',
        'warning-dark': '#F59E0B',
        'warning-bg-light': '#FFFBEB',
        'warning-bg-dark': '#78350F',
        'warning-border-light': '#FED7AA',
        'warning-border-dark': '#92400E',
        
        // Estados de información
        'info-light': '#2563EB',
        'info-dark': '#3B82F6',
        'info-bg-light': '#EFF6FF',
        'info-bg-dark': '#1E3A8A',
        'info-border-light': '#BFDBFE',
        'info-border-dark': '#1E40AF',
        
        // === BORDES Y SEPARADORES ===
        // Bordes principales
        'border-primary-light': '#E5E7EB',
        'border-primary-dark': '#374151',
        
        // Bordes de acento
        'border-accent-light': '#206372',
        'border-accent-dark': '#F5DF4D',
        
        // Bordes sutiles
        'border-subtle-light': '#F3F4F6',
        'border-subtle-dark': '#4B5563',
        
        // Separadores y líneas decorativas
        'divider-light': '#E5E7EB',
        'divider-dark': '#374151',
        
        // === ELEMENTOS ESPECÍFICOS ===
        // Placeholders en formularios
        'placeholder-light': '#9CA3AF',
        'placeholder-dark': '#6B7280',
        
        // Textos de ayuda y hints
        'help-text-light': '#6B7280',
        'help-text-dark': '#9CA3AF',
        
        // Textos de navegación
        'nav-hint-light': '#9CA3AF',
        'nav-hint-dark': '#6B7280',
        
        // Estados deshabilitados
        'disabled-text-light': '#D1D5DB',
        'disabled-bg-light': '#F9FAFB',
        'disabled-text-dark': '#4B5563',
        'disabled-bg-dark': '#1F2937',
      },

    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
