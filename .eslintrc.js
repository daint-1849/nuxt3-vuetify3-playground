/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-strongly-recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:prettier/recommended",
  ],
  plugins: ["@typescript-eslint"],
  parser: "vue-eslint-parser",
  parserOptions: {
    sourceType: "module",
    ecmaVersion: "latest",
    extraFileExtensions: [".vue"],
    parser: {
      js: "espree",
      ts: "@typescript-eslint/parser",
    },
  },
  rules: {
    "no-undef": 0,
  },
  overrides: [
    {
      files: [
        "./components/**/*.{ts,vue}",
        "./layouts/**/*.{ts,vue}",
        "./pages/**/*.{ts,vue}",
      ],
      rules: {
        "vue/multi-word-component-names": 0,
      },
    },
    {
      files: [".eslintrc.js", "./*.config.js"],
      env: {
        node: true,
      },
    },
  ],
};
