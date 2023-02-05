import type { CreateElement } from "vue";

export const buildScopedSlots = (
  h: CreateElement,
  slotted: Record<string, string>
) => {
  return Object.keys(slotted).reduce((acc, name) => {
    return {
      ...acc,
      [name]: () => h("astro-slot", { domProps: { innerHTML: slotted[name] } }),
    };
  }, {});
};
