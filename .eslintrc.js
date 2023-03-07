module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['plugin:react/recommended', 'standard', 'prettier'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react', 'prettier'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'react/no-unescaped-entities': 'off',
    'multiline-ternary': 'off',
    camelcase: 'off',
    'no-unused-vars': 'off'
  },
  settings: {
    'import/resolver': {
      node: { paths: ['src'] }
    }
  }
}
