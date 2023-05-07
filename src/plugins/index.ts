import { loadFonts } from './webfontloader'
import vuetify from './vuetify'
import router from '../router'
import { createPinia  } from 'pinia'

// Types
import type { App } from 'vue'

export function registerPlugins (app: App) {
  loadFonts()
  app
    .use(createPinia())
    .use(vuetify)
    .use(router)
}
