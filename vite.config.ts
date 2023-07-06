import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import Icons from "unplugin-icons/vite";
import svgr from "vite-plugin-svgr";
import tsconfigPaths from "vite-tsconfig-paths";
import { visualizer } from "rollup-plugin-visualizer";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    // add any port you want
    port: 3005,
    host: true,
  },
  plugins: [
    react(),
    Icons({ compiler: "jsx", jsx: "react" }),
    svgr(),
    tsconfigPaths(),
    visualizer({
      emitFile: true,
      filename: "stats.html",
    }),
  ],
});
