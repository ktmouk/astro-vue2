import { defineConfig } from "astro/config";
import vue2 from "astro-vue2";

// https://astro.build/config
export default defineConfig({
  integrations: [vue2()],
});
