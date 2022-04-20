module.exports = {
  mode: "jit",
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
],
  content: [],
  theme: {
    screens: {
      xl: { min: '1025px' }, //1024pxより大きいとき
      md: { max: '1024px', min: '600px' }, //1024より小さく、600より大きいとき
      sm: { max: '599px' }, //600より小さいとき
    },
    extend: {},
  },
  plugins: [],
};
