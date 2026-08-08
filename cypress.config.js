require("dotenv").config();

const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
const {
  createEsbuildPlugin,
} = require("@badeball/cypress-cucumber-preprocessor/esbuild");

module.exports = defineConfig({
  e2e: {
    baseUrl: process.env.BASE_URL,

    env: {
      TRELLO_ACTION_ID: process.env.TRELLO_ACTION_ID,
      API_CREATE_ACCOUNT_URL: process.env.API_CREATE_ACCOUNT_URL,
    },
    specPattern: [
      "cypress/e2e/features/**/*.feature",
       "cypress/e2e/api/**/*.cy.js",
    ],

    supportFile: "cypress/support/e2e.js",

    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);

      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      return config;
    },
  },

  defaultCommandTimeout: Number(process.env.DEFAULT_TIMEOUT || 10000),
  requestTimeout: Number(process.env.DEFAULT_TIMEOUT || 10000),
  responseTimeout: Number(process.env.DEFAULT_TIMEOUT || 10000),

  video: true,
  screenshotOnRunFailure: true,
});