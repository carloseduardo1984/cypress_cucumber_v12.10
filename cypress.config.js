const { defineConfig } = require('cypress')

module.exports = defineConfig({
  retries: {   //numero de tentativas
    runMode: 0, 
    openMode: 0,
  },
  video: false,
  screenshotOnRunFailure: true,
  experimentalFetchPolyfill: false,
  defaultCommandTimeout: 3000, //tempo em espera de elementos
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    experimentalSessionAndOrigin: false,
    specPattern: 'cypress/e2e/**/*.feature', //configuração do cucumber
  },
})
