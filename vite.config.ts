// import { defineConfig } from 'vite'
// import viteReact from '@vitejs/plugin-react'
// import tailwindcss from '@tailwindcss/vite'

// import { TanStackRouterVite } from '@tanstack/router-plugin/vite'
// import { resolve } from 'node:path'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [
//     TanStackRouterVite({ autoCodeSplitting: true }),
//     viteReact(),
//     tailwindcss(),
//   ],
//   test: {
//     globals: true,
//     environment: 'jsdom',
//   },
//   resolve: {
//     alias: {
//       '@': resolve(__dirname, './src'),
//     },
//   },
// })

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './', // Critical for IONOS deployment
  publicDir: 'public',
  build: {
    outDir: 'dist',
    emptyOutDir: true
  }
})