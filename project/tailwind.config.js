export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        warm: {
          50: 'var(--color-warm-50)',
          100: 'var(--color-warm-100)',
          200: 'var(--color-warm-200)',
          300: 'var(--color-warm-300)',
          400: 'var(--color-warm-400)',
          500: 'var(--color-warm-500)',
          600: 'var(--color-warm-600)',
          700: 'var(--color-warm-700)',
          800: 'var(--color-warm-800)',
          900: 'var(--color-warm-900)',
        }
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        sans: ['Source Sans Pro', 'sans-serif'],
      }
    }
  },
  plugins: [],
}