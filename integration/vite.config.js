import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: {
        main: resolve(__dirname, "lib/main.ts"),
        client: resolve(__dirname, "lib/client.ts"),
        server: resolve(__dirname, "lib/server.ts"),
      },
      formats: ["es"],
    },
    rollupOptions: {
      external: ["vue", "vue-server-renderer", "vite-plugin-vue2"],
    },
  },
});
