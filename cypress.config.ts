import { defineConfig } from "cypress";

export default defineConfig({
  // reporter: 'cypress-multi-reporters',
  // reporterOptions: {
  //   configFile: 'reporter-config.json',
  // },
 e2e: {
    baseUrl:"https://www.amazon.in/",
   // pageLoadTimeout:100000,
  watchForFileChanges:false,
    setupNodeEvents(on, config) {
      
      // implement node event listeners here
    },
  },
});
