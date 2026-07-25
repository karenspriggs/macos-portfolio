import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite";
import {resolve, dirname} from 'path'
import {fileURLtoPath} from 'url'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '#components': resolve(dirname(fileURLtoPath(import.meta.url)), 'components'),
      '#constants': resolve(dirname(fileURLtoPath(import.meta.url)), 'constants'),
      '#store': resolve(dirname(fileURLtoPath(import.meta.url)), 'store'),
      '#hoc': resolve(dirname(fileURLtoPath(import.meta.url)), 'hoc'),
      '#windows': resolve(dirname(fileURLtoPath(import.meta.url)), 'windows'),
    }
  }
})
