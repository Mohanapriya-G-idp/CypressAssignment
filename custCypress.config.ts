import { defineConfig } from "cypress";

export default defineConfig({
 e2e: {
    baseUrl:"https://www.google.com/",
    pageLoadTimeout:10000,
    defaultCommandTimeout:6000,
    execTimeout:5000,
    watchForFileChanges:false,
  },
  env:{
    username:'testing purpose'
  }
});
