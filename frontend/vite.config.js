export default defineConfig({
  plugins: [vue()],
  optimizeDeps: {
    include: ['popmotion', 'framesync']
  },
  build: {
    sourcemap: false
  }
})
