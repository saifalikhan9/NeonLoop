import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port : 3000,
    proxy : {
      "/api" : {
        target : "https://neonbackend.onrender.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '/api'),
      }
    }
  },
  plugins: [react()],
  build: { chunkSizeWarningLimit: 2000, },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
