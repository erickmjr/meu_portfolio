import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // O chunk do Three.js (~900 kB) é carregado sob demanda, depois da
    // entrada do hero, e não pesa no carregamento inicial.
    chunkSizeWarningLimit: 1000,
  },
})
