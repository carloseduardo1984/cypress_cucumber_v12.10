const cucumber = require("cypress-cucumber-preprocessor").default;
//const browserify = require("@cypress/browserify-preprocessor");

module.exports = (on) => {
        on("file:preprocessor", cucumber());

};



