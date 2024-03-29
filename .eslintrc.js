'use strict'

module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint/eslint-plugin', 'eslint-plugin-tsdoc', 'jsx-a11y', 'react'],
  extends: ['plugin:react/recommended', 'plugin:@typescript-eslint/recommended', 'plugin:jsx-a11y/recommended'],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    jest: true,
    browser: true,
    node: true,
    es6: true,
  },
  rules: {
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': ['error'],
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'no-undef': 'off',
      },
    },
  ],

  ignorePatterns: ['configs/', 'dist/', 'tools/', 'build/', 'docs/', 'coverage/', '*.config.js', '*.d.ts'],
}
