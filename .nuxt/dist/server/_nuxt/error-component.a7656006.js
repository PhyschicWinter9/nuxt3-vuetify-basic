import { defineComponent, ref, resolveComponent, mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import { u as useHead } from "./composables.79d89de8.js";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
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
  __name: "error",
  __ssrInlineRender: true,
  setup(__props) {
    const title = ref("404-\u0E44\u0E21\u0E48\u0E1E\u0E1A\u0E2B\u0E19\u0E49\u0E32\u0E17\u0E35\u0E48\u0E40\u0E23\u0E35\u0E22\u0E01");
    useHead({
      meta: [{ content: title }],
      titleTemplate: () => {
        return "404-\u0E44\u0E21\u0E48\u0E1E\u0E1A\u0E2B\u0E19\u0E49\u0E32\u0E17\u0E35\u0E48\u0E40\u0E23\u0E35\u0E22\u0E01";
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_btn = resolveComponent("v-btn");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "error-main blue-grey lighten-5" }, _attrs))}><div class="py-12 error-box"><div class="text-center"><h1 class="error-title error--text">404</h1><h3 class="text-uppercase error-subtitle">\u0E44\u0E21\u0E48\u0E21\u0E35\u0E2B\u0E19\u0E49\u0E32\u0E17\u0E35\u0E48\u0E40\u0E23\u0E35\u0E22\u0E01 !</h3><p class="text-grey-darken-1 mt-4 mb-4"> \u0E2B\u0E19\u0E49\u0E32\u0E17\u0E35\u0E48\u0E04\u0E38\u0E13\u0E40\u0E23\u0E35\u0E22\u0E01\u0E44\u0E14\u0E49\u0E2B\u0E32\u0E22\u0E44\u0E1B \u0E44\u0E21\u0E48\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E40\u0E23\u0E35\u0E22\u0E01\u0E44\u0E14\u0E49 </p>`);
      _push(ssrRenderComponent(_component_v_btn, {
        color: "secondary",
        to: "/"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u0E01\u0E25\u0E31\u0E1A\u0E2B\u0E19\u0E49\u0E32\u0E2B\u0E25\u0E31\u0E01`);
          } else {
            return [
              createTextVNode("\u0E01\u0E25\u0E31\u0E1A\u0E2B\u0E19\u0E49\u0E32\u0E2B\u0E25\u0E31\u0E01")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const error_vue_vue_type_style_index_0_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("error.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=error-component.a7656006.js.map
