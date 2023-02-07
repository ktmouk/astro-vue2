# astro-vue2

This is the proof of concept if Astro can integrate with Vue 2, not 3. I got curious about whether Astro can support Vue2 technically and I made it. It isn't meant for production use.

## How to run

It is easy to run this project, like below.
If you don't install the pnpm, please install it referring to [pnpm's installation](https://pnpm.io/installation) in advaince.

```sh
# Run in dev mode.
pnpm install
pnpm dev

# Or build and look at it in preview mode. it also works fine!
pnpm install
pnpm preview
```

## Folder structure

This repository consists of two packages managed by the pnpm workspace.

### `/integration`

This is the library for Astro can integrate with Vue2.
I made it while referencing [Vue3 plugin](https://github.com/withastro/astro/tree/main/packages/integrations/vue/), which is offical integration.

### `/astro`

This is the Astro project to test above plugin. It uses plugins at [astro.config.mjs](https://github.com/ktmouk/astro-vue2/blob/main/astro/astro.config.mjs).

## License
MIT
