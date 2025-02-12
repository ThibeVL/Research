import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import vuetify from '../vuetify'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vuetify) // 🚀 Vuetify toevoegen

app.mount('#app')
