import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import removeConsole from 'vite-plugin-remove-console'

export default defineConfig(({ command, mode }) => {
  const isProduction = mode === 'production'

  return {
    plugins: [
      vue(),
      isProduction && removeConsole(), // only apply in production
    ].filter(Boolean),
    optimizeDeps: {
      include: ['popmotion', 'framesync'],
    },
    build: {
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
      },
    },
  }
})
