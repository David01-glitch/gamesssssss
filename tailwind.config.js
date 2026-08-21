/** @type {import('tailwindcss').Config} */
// Recreational-magazine palette: warm white, deep navy, grass green, sky blue,
// warm orange, charcoal. Token names are kept stable across components; only the
// values below change the theme.
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#eef3f8', // soft cool page background
        warmwhite: '#ffffff', // cards / sections
        terracotta: '#e8792b', // warm orange (primary accent)
        terracottaDark: '#cf6516',
        sage: '#3f8f4f', // grass green (secondary)
        sageDark: '#2f6f3c',
        mutedblue: '#2f7fb5', // sky blue
        warmbrown: '#16305c', // deep navy (headings / nav)
        ink: '#232830', // charcoal (body text)
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 2px 10px rgba(22, 48, 92, 0.08), 0 1px 3px rgba(22, 48, 92, 0.06)',
        card: '0 6px 24px rgba(22, 48, 92, 0.10)',
      },
      borderRadius: {
        xl2: '1.25rem',
      },
      maxWidth: {
        content: '72rem',
      },
    },
  },
  plugins: [],
}
