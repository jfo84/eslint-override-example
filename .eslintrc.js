module.exports = {
  root: true,
  env: {
    'node': true
  },
  rules: {
    'keyword-spacing': ['error', {
      'overrides': {
        'catch': {
          'after': false,
        }
      }
    }],
    'keyword-spacing': 'error',
  },
};
