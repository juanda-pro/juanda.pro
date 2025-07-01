/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'lg': '1.15rem', // Aumentado desde 1.125rem por defecto
      },
      fontFamily: {
        // Fuentes base del proyecto
        sans: ['"Figtree"', 'sans-serif'],
        heading: ['"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],

        // Clases específicas del laboratorio (se mantienen por referencia)
        'heading-1': ['"Plus Jakarta Sans"', 'sans-serif'],
        'body-1': ['"Figtree"', 'sans-serif'],
        'heading-2': ['"Playfair Display"', 'serif'],
        'body-2': ['"Lora"', 'serif'],
        'heading-3': ['"Manrope"', 'sans-serif'],
        'body-3': ['"Source Serif Pro"', 'serif'],
        'mono-1': ['"JetBrains Mono"', 'monospace'],
        'heading-4': ['"Montserrat"', 'sans-serif'],
        'body-4': ['"Lato"', 'sans-serif'],
        'heading-5': ['"Nunito"', 'sans-serif'],
        'body-5': ['"Figtree"', 'sans-serif'],
        'heading-6': ['"Lato"', 'sans-serif'],
        'body-6': ['"Lora"', 'serif'],
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
        'accent-error': '#DC2626', // Darker red

        'text-on-accent': '#FFFFFF', // Para texto sobre 'brand-accent'

        'dot-light': 'rgba(0, 0, 0, 0.18)',
        'dot-dark': 'rgba(255, 255, 255, 0.11)',
      },
      fontFamily: {
        serif: ['Lora', 'serif'],
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
