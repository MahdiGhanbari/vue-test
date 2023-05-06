import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'

// css
import '@/assets/css/main.css';

const app = createApp(App)

registerPlugins(app)

app.mount('#app')
