import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Portofolio-Card/", // <-- Ganti dengan nama repository Anda, misal "/portfolio-celestiq/"
})