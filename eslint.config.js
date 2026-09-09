import js from '@eslint/js';
import ts from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import svelte from 'eslint-plugin-svelte';
import prettier from 'eslint-config-prettier';
import globals from 'globals';

export default [
  {
    ignores: [
      '**/.DS_Store',
      '**/node_modules/**',
      'build/**',
      '.svelte-kit/**',
      '.wrangler/**',
      'test-results/**',
      'playwright-report/**',
      'package/**',
      '**/.env',
      '**/.env.*',
      '!**/.env.example',
      'package-lock.json'
    ]
  },
  js.configs.recommended,
  ...ts.configs['flat/recommended'],
  ...svelte.configs['flat/recommended'],
  {
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
      parserOptions: {
        extraFileExtensions: ['.svelte']
      }
    }
  },
  {
    files: ['**/*.svelte'],
    // Preserve the existing lint policy while upgrading the plugin.
    rules: {
      'svelte/require-each-key': 'off',
      'svelte/no-navigation-without-resolve': 'off'
    },
    languageOptions: {
      parserOptions: { parser: tsParser }
    }
  },
  prettier
];
