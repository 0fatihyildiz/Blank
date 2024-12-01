// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    // favicon
    app: {
        head: {
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { hid: 'description', name: 'description', content: 'Blade UI Kit' },
            ],

            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/logo.svg' },
            ],
            title: 'Blank UI Components',
        },
    },
    compatibilityDate: '2024-11-01',
    devtools: { enabled: true },
    modules: ['@nuxtjs/tailwindcss', '@nuxt/fonts', '@nuxt/image'],
    tailwindcss: {
        exposeConfig: true,
    },
})
