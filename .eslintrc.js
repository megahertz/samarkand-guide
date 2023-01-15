'use strict';

module.exports = {
  root: true,

  extends: ['airbnb-base', 'plugin:unicorn/recommended', 'prettier'],

  ignorePatterns: ['**/build/**', '**/node_modules/**'],

  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'script',
  },

  plugins: ['prettier'],

  overrides: [
    {
      files: ['*.ts', '*.tsx'],

      extends: [
        'airbnb',
        'airbnb-typescript',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
        'plugin:unicorn/recommended',
        'prettier',
      ],

      parser: '@typescript-eslint/parser',

      parserOptions: {
        sourceType: 'module',
        project: ['./tsconfig.json'],
        tsconfigRootDir: __dirname,
      },

      plugins: ['@typescript-eslint', 'prettier'],

      rules: {
        '@typescript-eslint/lines-between-class-members': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-unused-vars': [
          'warn',
          {
            argsIgnorePattern: '^_',
            varsIgnorePattern: '^_',
            vars: 'all',
            args: 'after-used',
            ignoreRestSiblings: true,
          },
        ],
        '@typescript-eslint/no-use-before-define': 'off',
        'react/function-component-definition': [
          'error',
          {
            namedComponents: 'function-declaration',
            unnamedComponents: 'arrow-function',
          },
        ],
        'react/jsx-no-bind': 'off',
        'react/require-default-props': 'off',
      },
    },
    {
      files: ['*.js', '*.ts', '*.tsx'],
      rules: {
        'arrow-body-style': 'off',
        'class-methods-use-this': 'off',
        'comma-dangle': ['error', 'always-multiline'],
        'func-style': ['error', 'declaration'],
        'import/no-cycle': 'off',
        'import/no-extraneous-dependencies': 'off',
        'lines-between-class-members': 'off',
        'no-await-in-loop': 'off',
        'no-console': 'off',
        'no-continue': 'off',
        'no-promise-executor-return': 'off',
        'no-return-assign': ['error', 'except-parens'],
        'no-restricted-syntax': 'off',
        'no-unused-expressions': ['error', { allowShortCircuit: true }],
        'no-unused-vars': [
          'error',
          {
            argsIgnorePattern: '^_',
            varsIgnorePattern: '^_',
            vars: 'all',
            args: 'after-used',
            ignoreRestSiblings: true,
          },
        ],
        'no-use-before-define': 'off',
        'prefer-arrow-callback': ['error', { allowNamedFunctions: true }],
        'prefer-destructuring': 'off',
        'prettier/prettier': 'error',
        'strict': ['error', 'global'],
        'unicorn/catch-error-name': ['error', { ignore: ['^e$'] }],
        'unicorn/consistent-destructuring': 'off',
        'unicorn/consistent-function-scoping': 'off',
        'unicorn/explicit-length-check': 'off',
        'unicorn/filename-case': [
          'error',
          {
            cases: {
              camelCase: true,
              pascalCase: true,
            },
          },
        ],
        'unicorn/import-style': 'off',
        'unicorn/no-abusive-eslint-disable': 'off',
        'unicorn/no-array-for-each': 'off',
        'unicorn/no-array-reduce': 'off',
        'unicorn/no-null': 'off',
        'unicorn/no-fn-reference-in-iterator': 'off',
        'unicorn/no-useless-undefined': 'off',
        'unicorn/numeric-separators-style': 'off',
        'unicorn/prefer-query-selector': 'off',
        'unicorn/prefer-regexp-test': 'off',
        'unicorn/prefer-top-level-await': 'off',
        'unicorn/prevent-abbreviations': 'off',
        'unicorn/prefer-module': 'off',
        'unicorn/prefer-node-protocol': 'off',
        'unicorn/prefer-ternary': 'off',
        'unicorn/switch-case-braces': 'off',
      },
    },
  ],
};
