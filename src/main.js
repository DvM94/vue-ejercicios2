import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import i18next from "i18next"

import es from "@/locals/es.json"
import en from "@/locals/en.json"

i18next.init({
  lng: 'es',
  debug: true,
  resources: {
    es: { translation: es },
    en: { translation: en }
  }
})

createApp(App).use(store).use(router).mount('#app')
