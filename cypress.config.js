const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin =
  require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin =
  require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

module.exports = defineConfig({
  //component: {
    //devServer: {
      //framework: "react", // Sesuaikan framework yang digunakan
      //bundler: "webpack",
      //webpackConfig: require("./webpack.config.js"), // Sesuaikan dengan konfigurasi Webpack
    //},
  //},

  e2e: {
    async setupNodeEvents(on, config) {
      // Menambahkan plugin Cucumber
      await addCucumberPreprocessorPlugin(on, config);

      // Menggunakan esbuild plugin untuk mendukung file .feature
      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      // Task tambahan jika diperlukan
      on("task", {
        log: (message) => {
          console.log(message);
          return null;
        },
      });

      return config;
    },
    // Mengatur specPattern agar mendukung file .feature dan file non-Cucumber
    specPattern: ["cypress/e2e/**/*.feature"],
    supportFile: "cypress/support/e2e.js",
    stepDefinitions: "cypress/support/step_definitions/**/*.js",
  },
});