module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  ignorePatterns: [
    'lib',
    'bin',
    'node_modules',
    'dist',
    '*.{json,yaml,yml,md,css,html,gitignore,editorconfig}'
  ],
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint', 'prettier'],
  root: true,
  rules: {
    'prettier/prettier': 'warn',
    '@typescript-eslint/no-unused-vars': [
      'error',
      { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }
    ]
  }
}
