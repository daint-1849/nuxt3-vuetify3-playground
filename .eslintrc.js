/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-strongly-recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:import/recommended",
    "plugin:prettier/recommended",
  ],
  plugins: ["@typescript-eslint"],
  parser: "vue-eslint-parser",
  parserOptions: {
    sourceType: "module",
    ecmaVersion: "latest",
    extraFileExtensions: [".vue"],
    parser: {
      // Script parser for `<script>`
      js: "espree",

      // Script parser for `<script lang="ts">`
      ts: "@typescript-eslint/parser",
    },
    project: "./tsconfig.eslint.json",
    ecmaFeatures: {
      jsx: false,
    },
  },
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts"],
    },
    "import/resolver": {
      typescript: {
        project: "./tsconfig.eslint.json",
      },
    },
  },
  rules: {
    "prettier/prettier": "warn",
    "no-undef": "off",

    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        varsIgnorePattern: "^_",
        argsIgnorePattern: "^_",
      },
    ],

    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
          "object",
        ],
        "newlines-between": "always",
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
  },
  overrides: [
    {
      files: [
        "./src/components/**/*.{ts,vue}",
        "./src/layouts/**/*.{ts,vue}",
        "./src/pages/**/*.{ts,vue}",
      ],
      rules: {
        "vue/multi-word-component-names": 0,
      },
    },
    {
      files: ["./.eslintrc.js", "./*.config.ts", "./*.config.js"],
      env: {
        node: true,
      },
    },
  ],
};
