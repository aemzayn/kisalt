module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        laptop: "url('/images/screen/laptop.png')",
      },
    },
    fontFamily: {
      sans: [
        'Work Sans',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
      ],
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
