module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        'inset-sm': 'inset 0 2px 4px rgba(0, 0, 0, 0.3)',
        'inset-md': 'inset 0 4px 8px rgba(0, 0, 0, 0.3)',
        'inset-lg': 'inset 0 6px 12px rgba(0, 0, 0, 0.4)',
        'inset-xl': 'inset 0 6px 12px rgba(0, 0, 0, 0.6)',
        'custom_shadow': '0 0 20px rgba(29, 78, 216, 0.3)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}