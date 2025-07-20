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
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: '404.html', // Required for client-side routing
          dest: '.'
        }
      ]
    })
  ],
  base: './', // Important for IONOS
  build: {
    outDir: 'dist'
  }
})