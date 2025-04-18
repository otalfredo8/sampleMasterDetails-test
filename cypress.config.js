const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: "tests/**/*.cy.js",
    supportFile: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      return config;
    },
  },
});
