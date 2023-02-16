// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ['~/assets/css/main.css',
        "~/assets/css/background_img.css",
        "~/assets/css/faq_accordion.css",
        "~/assets/css/manual-style.css",
        "~/assets/css/rating.css",
        "~/assets/css/responsive.css",
    ],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    app: {
        head: {
            link: [{ rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.4.1/css/all.css' }]
        },
    },
    modules: [
        '@nuxtjs/i18n',
    ],

    i18n: {
        defaultLocale: 'bn',
        langDir: 'lang',
        locales: [
            {
                code: 'en',
                file: 'en.json'
            },
            {
                code: 'bn',
                file: 'bn.json'
            }
        ],
        vueI18n: {
            // If fallback is needed, you need to define
            fallbackLocale: 'en',
        },
    }
})
