eConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/swap/",
  plugins: [react()],
  define: {
    global: "globalThis"
  }
});


