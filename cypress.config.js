module.exports = {
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
  env: {
    baseUrl: 'https://www.saucedemo.com/',
    validUser: 'standard_user',
    validPassword: 'secret_sauce'
    },
};
