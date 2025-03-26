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
      keyframes: {
        shakeEffect: {
          '0%': { transform: 'translateY(-5px)' },
          '100%': { transform: 'translateY(5px)' },
        },
        slideInFromLeft: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        moveRight: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(20px)' },
        },
      },
      animation: {
        shakeEffect: 'shakeEffect 0.5s infinite alternate',
        slideInFromLeft: 'slideInFromLeft 1.5s ease-out',
        moveRight: 'moveRight 0.5s forwards',
      },
    },
  },
  variants: {
    extend: {
      animation: ['responsive'],
    },
  },
  plugins: [],
};
