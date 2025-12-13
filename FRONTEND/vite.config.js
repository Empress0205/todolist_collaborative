// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react({
    // Add this to prevent fast refresh issues
    fastRefresh: false,
  })],
  server: {
    hmr: {
      overlay: false
    },
    // Try different port if 5173 has issues
    port: 4000
  }
})