import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
        tailwindcss(),
  ],
  theme: {
  extend: {
    colors: {
      darkBg: "#0f0f0f",
      accentOrange: "#ffad66",
      accentBlue: "#1f3b6d",
    },
  },
}
})
