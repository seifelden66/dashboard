// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    'primevue/resources/themes/saga-blue/theme.css',
    'primevue/resources/primevue.css',
    'primeicons/primeicons.css',
    "/assets/main.scss"
  ],
  
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt', '@vueuse/nuxt', '@vee-validate/nuxt'],
  veeValidate: {
    autoImports:true,
    componentNames: {
      Form: 'VeeForm',
      Field: 'VeeField',
      FieldArray: 'VeeFieldArray',
      ErrorMessage: 'VeeErrorMessage',
    },
  },
  
  build: {
    transpile: ['primevue'],
  },
  app: {
    head: {
      link: [
        
      ]
    },

  },
  devtools: { enabled: true }
})
