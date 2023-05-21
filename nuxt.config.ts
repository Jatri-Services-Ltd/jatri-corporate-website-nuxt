// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ['~/assets/css/main.css',
        "~/assets/css/background_img.css",
        "~/assets/css/faq_accordion.css",
        "~/assets/css/manual-style.css",
        "~/assets/css/rating.css",
        "~/assets/css/responsive.css",
        "~/assets/fonts/solaimanlipi.css",
    ],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    app: {
        head: {
            link: [
                { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.4.1/css/all.css' },
                { rel: 'icon', type: 'image/x-icon', href: '/loader-icon.png' }
            ],
            title: 'Jatri',
            meta: [
                {
                  'http-equiv': "X-UA-Compatible",
                  content: "IE=edge"
                },
                {
                    'name': 'google',
                    content: 'notranslate'
                }
            ]
        },
    },
    modules: [
        '@nuxtjs/i18n',
    ],
    plugins:[],

    i18n: {
        detectBrowserLanguage: {
            useCookie: true,
            cookieKey: 'j_lang',
            alwaysRedirect: false
          },
        defaultLocale: 'bn',
        langDir: 'lang',
        locales: [
            {
                code: 'en',
                file: 'en.json',
                iso:'en-US',
                dir: 'ltr'


            },
            {
                code: 'bn',
                file: 'bn.json',
                iso:'bn-BD',
                dir: 'rtl'
            }
        ],
        vueI18n: {
            // If fallback is needed, you need to define
            fallbackLocale: 'en',
        },
    },
})
