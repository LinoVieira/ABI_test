const { defineConfig } = require('cypress');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  testFiles: '**/*.specs*',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: true,
    json: true,
  },
  e2e: {
    baseUrl: 'https://front.serverest.dev', // Base URL for API requests
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    env: {
      API_EMAIL: 'lino@lino2.com', // Replace with actual test email
      API_PASSWORD: 'lino1234',     // Replace with actual test password
    },    
    // Enable request logging for debugging purposes (optional)
    experimentalSessionAndOrigin: true
  },
});
