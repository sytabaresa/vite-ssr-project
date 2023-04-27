import react from '@vitejs/plugin-react'
import ssr from 'vite-plugin-ssr/plugin'
import {
    VitePWA
} from 'vite-plugin-pwa'

export default {
    plugins: [
        react(),
        ssr({
            prerender: true
        }),
        VitePWA({
            registerType: 'autoUpdate'
        })
    ]
}