import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  //git-pages-repo
  base:"/tip-calculator/",
  plugins: [react()],
  
})
