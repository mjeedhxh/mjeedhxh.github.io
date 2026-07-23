import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// The site is served from the root of a user GitHub Pages site
// (https://mjeedhxh.github.io/), so the base path is "/".
export default defineConfig({
  base: '/',
  plugins: [react(), tailwindcss()],
})
