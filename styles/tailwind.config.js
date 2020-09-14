module.exports = {
  purge: [],
  theme: {
    fontFamily: {
      display: "Lato",
      sans: "Open\\ Sans, Helvetica, sans-serif",
    },
    extend: {
      rotate: {
        135: "135deg",
        270: "270deg",
      },
      width: {
        '1.25x': '125%',
        '1.5x': '150%',
        '1.75x': '175%',
        '2x': '200%',
      },
      margin: {
        '-1/4': '-25%',
        '-1/2': '-50%',
        '-3/4': '-75%',
        '-full': '-100%',
      }
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography')
  ]
};
