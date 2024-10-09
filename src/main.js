import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'

import App from './App.vue'
import './index.css'

import enMessages from './locales/en.json'
import nlMessages from './locales/nl.json'

const i18n = createI18n({
    locale: 'en',
    legacy: false,
    messages: {
        'en': enMessages,
        'nl': nlMessages
    }
})

const app = createApp(App)

app.use(i18n)
app.mount('#app')
