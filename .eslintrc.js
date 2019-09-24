module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: 'eslint:recommended',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'legacy-decorators'],
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  rules: {
    'react/jsx-uses-vars': 2,
    'react/prop-types': 0,
  },
  parser: 'babel-eslint',
};
