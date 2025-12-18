import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/focusapp/'  // Replace 'focusapp' with your exact repo name!
})
