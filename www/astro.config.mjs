import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'
import vercel from '@astrojs/vercel/serverless'
import vue from '@astrojs/vue'
import { defineConfig } from 'astro/config'
import astroExpressiveCode from 'astro-expressive-code'

// https://astro.build/config
export default defineConfig({
    output: 'server',
    adapter: vercel({
        webAnalytics: {
            enabled: true,
        },
    }),
    integrations: [
        vue(),
        react(),
        tailwind(),
        astroExpressiveCode({
            themes: ['poimandres', 'light-plus'],
            styleOverrides: {
                borderRadius: '0.5rem',
                borderWidth: '0px',
            },
        }),
    ],
})
