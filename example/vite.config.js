import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    watch: {
      ignored: ['!../dist/**'],
    },
  },
  resolve: {
    alias: {
      '@gr8g1/use-your-work': resolve(__dirname, '../dist/index.esm.js'),
    },
  },
})
