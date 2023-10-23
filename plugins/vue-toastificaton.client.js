import { defineNuxtPlugin } from '#app'
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'

export default defineNuxtPlugin((nuxtApp) => {
    const options = {
        position: "bottom-right",
        timeout: 2000,
    }
    nuxtApp.vueApp.use(Toast, options)
})