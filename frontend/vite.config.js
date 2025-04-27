import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import removeConsole from 'vite-plugin-remove-console'

export default defineConfig(({ mode }) => ({
  plugins: [
    vue(),
    mode === 'production' && removeConsole(), // apply removeConsole only in production
  ].filter(Boolean), // remove false plugins
  optimizeDeps: {
    include: ['popmotion', 'framesync'], // pre-bundling these for faster dev
  },
  build: {
    minify: 'terser', // use terser for better compression
    terserOptions: {
      compress: {
        drop_console: true, // remove console.* logs
        drop_debugger: true, // remove debugger statements
      },
    },
  },
}))
