/** @type {import('eslint').Linter.Config} */

module.exports = {
  root: true,
  extends: [
    'next',
    'airbnb',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/jsx-runtime',
    'plugin:jsx-a11y/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['import', 'jsx-a11y', 'react', 'react-hooks', '@typescript-eslint'],
  rules: {
    'react/require-default-props': ['off'],
    'react/jsx-curly-brace-presence': ['error', { props: 'always', children: 'never' }],
    'react/jsx-filename-extension': ['error', { extensions: ['.ts', '.tsx'] }],
    'react/jsx-props-no-spreading': ['off'],
    'import/prefer-default-export': ['off'],
    'import/extensions': ['off'],
    'react/jsx-no-useless-fragment': ['error', { allowExpressions: true }],
    'no-unused-vars': [
      'error',
      {
        'vars': 'all',
        'args': 'all',
        'varsIgnorePattern': '^_',
        'argsIgnorePattern': '^_',
        'destructuredArrayIgnorePattern': '^_',
        'caughtErrorsIgnorePattern': '^_',
      },
    ],
    '@typescript-eslint/consistent-type-imports': ['error'],
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
};
