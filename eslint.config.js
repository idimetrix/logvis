import js from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';
import importPlugin from 'eslint-plugin-import';
import eslintComments from 'eslint-plugin-eslint-comments';
import prettier from 'eslint-config-prettier';

export default [
  js.configs.recommended,
  {
    files: ['src/**/*.ts'],
    languageOptions: {
      parser: tsparser,
      parserOptions: {
        project: './tsconfig.json',
        ecmaVersion: 2022,
        sourceType: 'module',
      },
      globals: {
        BigInt: true,
        console: true,
        WebAssembly: true,
        window: true,
        global: true,
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
      import: importPlugin,
      'eslint-comments': eslintComments,
    },
    rules: {
      ...tseslint.configs.recommended.rules,
      ...tseslint.configs['recommended-requiring-type-checking'].rules,
      ...eslintComments.configs.recommended.rules,
      '@typescript-eslint/explicit-module-boundary-types': 'error',
      '@typescript-eslint/no-inferrable-types': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/prefer-nullish-coalescing': 'error',
      '@typescript-eslint/prefer-optional-chain': 'error',
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/no-floating-promises': 'error',
      'eslint-comments/disable-enable-pair': [
        'error',
        { allowWholeFile: true },
      ],
      'eslint-comments/no-unused-disable': 'error',
      'import/order': [
        'error',
        { 'newlines-between': 'always', alphabetize: { order: 'asc' } },
      ],
      'sort-imports': [
        'error',
        { ignoreDeclarationSort: true, ignoreCase: true },
      ],
    },
  },
  {
    ignores: ['node_modules/**', 'build/**', 'coverage/**', '*.js'],
  },
  prettier,
];
