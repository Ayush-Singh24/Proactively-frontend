import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // For production
  preview: {
    port: 8001,
  },
  // For dev
  server: {
    port: 8000,
  },
});
