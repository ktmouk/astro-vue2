import { AstroIntegration } from "astro";
import { createVuePlugin } from "vite-plugin-vue2";

function getRenderer() {
  return {
    name: "astro-vue2",
    clientEntrypoint: "astro-vue2/client.js",
    serverEntrypoint: "astro-vue2/server.js",
  };
}

function getViteConfiguration() {
  return {
    optimizeDeps: {
      force: true,
      include: ["astro-vue2/client.js", "vue"],
      exclude: ["astro-vue2/server.js"],
    },
    plugins: [createVuePlugin()]
  };
}

export default function (): AstroIntegration {
  return {
    name: "astro-vue2",
    hooks: {
      "astro:config:setup": ({ addRenderer, updateConfig }) => {
        addRenderer(getRenderer());
        updateConfig({ vite: getViteConfiguration() });
      },
    },
  };
}
