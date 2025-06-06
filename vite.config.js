import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite"; // Cambiar esta línea

export default defineConfig({
  plugins: [react(), tailwindcss()],
});
