import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'https://devstore-api-g7an.vercel.app',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
})
