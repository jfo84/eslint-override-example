module.exports = {
  root: true,
  parser: 'babel-eslint',
  env: {
    node: true,
    es6: true
  },
  extends: [
    'eslint:recommended',
    'plugin:ember-suave/recommended'
  ],
  rules: {
    'keyword-spacing': 'error'
  },
};
