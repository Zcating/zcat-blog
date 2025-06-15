import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import checkFile from 'eslint-plugin-check-file';

import { defineConfig } from "eslint/config";


export default defineConfig([
  { 
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"], plugins: { js }, extends: ["js/recommended"] 
  },
  { files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"], languageOptions: { globals: globals.browser } },
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    files: ["app/**/*.*"],
    plugins: {
      'check-file': checkFile,
      'react': pluginReact
    },
    rules: {
      "react/react-in-jsx-scope": "off",
      'check-file/filename-naming-convention': [
        'error',
        {
          '**/*.{jsx,tsx,js,ts}': 'KEBAB_CASE',
          '**/*.component.{jsx,tsx,js,ts}': 'KEBAB_CASE',
        },
      ],
      'check-file/folder-naming-convention': [
        'error',
        {
          'app/**/*': 'KEBAB_CASE',
          'app/**/!(__tests__)/': 'KEBAB_CASE',
        },
      ],
    }
  }
]);
