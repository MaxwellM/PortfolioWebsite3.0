/* eslint-env node */

module.exports = {
  plugins: {
    //'tailwindcss/nesting': {},
    '@tailwindcss/postcss': {},
    //tailwindcss: {},
    //autoprefixer: {},
    // 'postcss-preset-env': {
    //   features: {'nesting-rules': false},
    // },
    ...(process.env.NODE_ENV === 'production' ? {cssnano: {}} : {}),
  },
};
