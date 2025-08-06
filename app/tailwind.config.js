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
      colors: {
        'brand-dark': '#121214',
        'brand-accent': '#F6C90E',
        'brand-accent-darker': '#D9B40C',
        'brand-accent-light': '#FEF3C7',
        
        'bg-light': '#FFFFFF',
        'bg-dark': '#121214',
        
        'surface-light': '#F5F5F5',
        'surface-dark': '#28282D',
        'surface-deeper-dark': '#202023',

        'primary-light': '#121214',
        'secondary-light': '#374151', // Aumentado contraste
        'primary-dark': '#FFFFFF',
        'secondary-dark': '#E5E7EB', // Aumentado contraste

        'border-light': '#E5E7EB',
        'border-dark': '#374151',

        'divider-light': '#E5E7EB',
        'divider-dark': '#374151',

        'surface-accent-light': '#F3F4F6',
        'surface-accent-dark': '#374151',

        'accent-info': '#4338CA', // Indigo for light mode
        'accent-info-dark': '#A78BFA', // Lighter purple for dark mode contrast
        'accent-success': '#059669', // Darker green
        'accent-success-dark': '#34D399', // Lighter green for dark mode
        'accent-warning': '#D97706', // Darker amber
        'accent-warning-dark': '#FBBF24', // Lighter amber for dark mode
        'accent-error': '#DC2626', // Darker red
        'accent-error-dark': '#F87171' // Lighter red for dark mode
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'bounce-gentle': 'bounceGentle 2s infinite'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        bounceGentle: {
          '0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0)' },
          '40%': { transform: 'translateY(-10px)' },
          '60%': { transform: 'translateY(-5px)' }
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}