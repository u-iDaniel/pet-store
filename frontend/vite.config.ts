import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
// If using path and __dirname then need to import @types/node

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Needs lines below for path aliasing
  resolve: {
    alias: {
      "@pages": "/src/pages",
      "@styles": "/src/styles"
    }
  }
})
