import js from "@eslint/js";
import reactPlugin from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import jsxA11y from "eslint-plugin-jsx-a11y";
import globals from "globals";

export default [
  {
    files: ["**/*.{js,jsx}"],
    ignores: ["dist/**", "node_modules/**"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.es2021,
      },
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: {
      react: reactPlugin,
      "react-hooks": reactHooks,
      "jsx-a11y": jsxA11y,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...reactPlugin.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      ...jsxA11y.configs.recommended.rules,
      
      // 🔧 Custom rule overrides
      "no-unused-vars": "warn",
      "react/react-in-jsx-scope": "off", // not needed for React 17+
      "react/prop-types": "off", // disable if using TypeScript or props validation manually
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "react/jsx-no-comment-textnodes": "warn",
      "jsx-a11y/accessible-emoji": "warn",
      "jsx-a11y/aria-role": "error",
      "jsx-a11y/click-events-have-key-events": "error",
      "jsx-a11y/no-static-element-interactions": "warn",
      "jsx-a11y/alt-text": "error",
      "jsx-a11y/label-has-associated-control": "error",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
];

// import js from '@eslint/js'
// import globals from 'globals'
// import reactHooks from 'eslint-plugin-react-hooks'
// import reactRefresh from 'eslint-plugin-react-refresh'
// import { defineConfig, globalIgnores } from 'eslint/config'

// export default defineConfig([
//   globalIgnores(['dist']),
//   {
//     files: ['**/*.{js,jsx}'],
//     extends: [
//       js.configs.recommended,
//       reactHooks.configs['recommended-latest'],
//       reactRefresh.configs.vite,
//     ],
//     languageOptions: {
//       ecmaVersion: 2020,
//       globals: globals.browser,
//       parserOptions: {
//         ecmaVersion: 'latest',
//         ecmaFeatures: { jsx: true },
//         sourceType: 'module',
//       },
//     },
//     rules: {
//       'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
//     },
//   },
// ])
