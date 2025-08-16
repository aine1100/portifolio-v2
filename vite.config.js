import { defineConfig } from 'vite' // Correct import from 'vite'
import react from '@vitejs/plugin-react' // Correct import for react plugin

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()], // Correct plugin usage
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          icons: ['react-icons'] // Note: ensure 'react-icons' is installed
        }
      }
    },
    chunkSizeWarningLimit: 1000 // This is fine
  }
})