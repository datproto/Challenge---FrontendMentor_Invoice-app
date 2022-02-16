module.exports = {
  important: true,
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./stories/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      purple: {
        100: '#9277FF',
        200: '#7C5DFA'
      },
      navi: {
        100: '#252945',
        200: '#1E2139',
        300: '#141625'
      },
      blueGray: {
        100: '#DFE3FA',
        200: '#888EB0',
        300: '#7E88C3',
      },
      dark: '#0C0E16',
      lightGray: '#F8F8FB',
      white: '#FFF',
      red: {
        100: '#FF9797',
        200: '#EC5756'
      }
    },
    extend: {},
  },
  plugins: [
    // require('@tailwindcss/forms'),
  ],
  variants: {
    extend: {
      backgroundColor: ['group-hover'],
      textColor: ['group-hover'],
      outline: ['group-hover', 'hover'],
    }
  },
}
