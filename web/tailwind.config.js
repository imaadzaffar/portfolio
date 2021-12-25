module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        header: 'Work Sans',
        body: 'Inter',
      },
    },
  },
  variants: {
    extend: {
      animation: ['hover'],
    },
  },
}
