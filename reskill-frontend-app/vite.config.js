import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 4000, // Replace 4000 with your desired port number
    open: true
  },
  commonjsOptions: {
    esmExternals: true,
  },
})
