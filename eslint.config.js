const { defineConfig } = require("eslint/config");

module.exports = defineConfig([
  {
    files: ["**/*.js"],

    ignores: [
      "node_modules/**",
      "cypress/videos/**",
      "cypress/screenshots/**",
    ],

    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",

      globals: {
        require: "readonly",
        module: "readonly",
        process: "readonly",
        console: "readonly",

        Cypress: "readonly",
        cy: "readonly",
        describe: "readonly",
        context: "readonly",
        it: "readonly",
        before: "readonly",
        beforeEach: "readonly",
        after: "readonly",
        afterEach: "readonly",
        expect: "readonly",
      },
    },

    rules: {
      "no-undef": "error",
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "no-redeclare": "error",
    },
  },
]);