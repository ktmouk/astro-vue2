import Vue from "vue";
import { buildScopedSlots } from "./scoped-slots";

Vue.config.ignoredElements.push("astro-slot");

export default (element: any) => {
  return async (
    Component: any,
    props: any,
    slotted: Record<string, string>,
    { client }: { client: string | null }
  ) => {
    new Vue({
      render: (h) =>
        h("astro-island", [
          h(Component, { props, scopedSlots: buildScopedSlots(h, slotted) }),
        ]),
    }).$mount(element, client !== "only");
  };
};
