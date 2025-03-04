import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  base: "/QuoteGenerator/",
  server: {
    host: '172.16.2.191', // This makes Vite accessible on your local network
    port: 3000, // Aapka port, jo bhi aap use kar rahe hain (default 5173 hota hai)
  }
})
