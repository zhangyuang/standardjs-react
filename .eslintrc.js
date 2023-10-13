const { existsSync } = require('fs')
const { resolve } = require('path')

const hasLintJson = existsSync(resolve(process.cwd(), './tsconfig.lint.json'))
const project = hasLintJson ? resolve(process.cwd(), './tsconfig.lint.json') : resolve(process.cwd(), './tsconfig.json')
module.exports = {
  extends: ['standard-with-typescript', 'plugin:react-hooks/recommended'],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    project,
    extraFileExtensions: ['.vue'],
    createDefaultProgram: true
  },
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/naming-convention': 'off',
    '@typescript-eslint/restrict-template-expressions': 'off',
    '@typescript-eslint/no-dynamic-delete': 'off',
    '@typescript-eslint/no-misused-promises': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-unnecessary-type-assertion': 'off',
    '@typescript-eslint/consistent-type-assertions': 'off',
    'import/export': 'off',
    '@typescript-eslint/dot-notation': ['off'],
    'padded-blocks': ['off'],
    'react-hooks/rules-of-hooks': ['off']
  }
}
