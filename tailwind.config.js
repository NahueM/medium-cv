module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    screens: {
      xs: '470px',
      // => @media (min-width: 380px) { ... }

      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px'
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      dropShadow: {
        bottom: '0 5px 5px -5px #333'
      }
    },
    colors: {
      'light-blue': '#C4E2FF',
      black: '#000',
      white: '#fff',
      grey: '#8D8D8D'
    }
  },
  plugins: []
}
