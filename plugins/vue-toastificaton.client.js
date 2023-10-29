import { defineNuxtPlugin } from '#app'
import Toast, {useToast} from 'vue-toastification'
import 'vue-toastification/dist/index.css'
const toast = useToast()
export default defineNuxtPlugin((nuxtApp) => {
    const options = {
        position: "bottom-right",
        timeout: 2000,
    }
    nuxtApp.vueApp.use(Toast, options)

    return {
        provide: {
            successToast: (message) => {
                toast.success(message)
            },
            errorToast: (message) => {
                toast.error(message)
            }
        }
    }
})