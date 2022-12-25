import { u as useHead } from "./composables.79d89de8.js";
import { defineComponent, useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
import "../server.mjs";
import "ofetch";
import "#internal/nitro";
import "hookable";
import "unctx";
import "destr";
import "ufo";
import "h3";
import "@unhead/vue";
import "@unhead/dom";
import "vue-router";
import "defu";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "report",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Report",
      meta: [
        {
          name: "keywords",
          content: "Report, Nuxt 3, Backend"
        },
        {
          name: "Description",
          content: "Report Nuxt 3,  IT Genius Engineering"
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><h1>Report</h1><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis similique dolorum quisquam voluptate atque laborum est aliquam? Veritatis dolor, labore eligendi ullam ipsum animi corporis hic non nam est laborum.</p></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/backend/report.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=report.4cf32b0d.js.map
