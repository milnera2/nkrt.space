import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Cloudflare Pages serves `dist/`. base '/' keeps asset URLs + custom domain working.
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'dist',
  },
})
