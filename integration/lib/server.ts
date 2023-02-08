import Vue from "vue";
import { SSRLoadedRenderer } from "astro";
import { createRenderer } from "vue-server-renderer";
import { buildScopedSlots } from "./scoped-slots";

const check: SSRLoadedRenderer["ssr"]["check"] = async (
  Component,
  _props,
  _children
) => {
  return !!Component["staticRenderFns"];
};

const renderToStaticMarkup: SSRLoadedRenderer["ssr"]["renderToStaticMarkup"] =
  async (Component, props, slotted, _metadata) => {
    const instance = new Vue({
      render: (h) =>
        h(Component, { props, scopedSlots: buildScopedSlots(h, slotted) }),
    });
    const html = await createRenderer().renderToString(instance);
    return { html };
  };

export default {
  check,
  renderToStaticMarkup,
};
