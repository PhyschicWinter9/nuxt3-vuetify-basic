import { resolveComponent, mergeProps, withCtx, renderSlot, useSSRContext } from 'file://E:/Unversity/NuxttJS%20Workshop/Basic%20NuxtJS/Workshop/nuxt3-vuetify-workshop-day4/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrRenderSlot } from 'file://E:/Unversity/NuxttJS%20Workshop/Basic%20NuxtJS/Workshop/nuxt3-vuetify-workshop-day4/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './server.mjs';
import 'file://E:/Unversity/NuxttJS%20Workshop/Basic%20NuxtJS/Workshop/nuxt3-vuetify-workshop-day4/node_modules/ofetch/dist/node.mjs';
import 'file://E:/Unversity/NuxttJS%20Workshop/Basic%20NuxtJS/Workshop/nuxt3-vuetify-workshop-day4/node_modules/hookable/dist/index.mjs';
import 'file://E:/Unversity/NuxttJS%20Workshop/Basic%20NuxtJS/Workshop/nuxt3-vuetify-workshop-day4/node_modules/unctx/dist/index.mjs';
import 'file://E:/Unversity/NuxttJS%20Workshop/Basic%20NuxtJS/Workshop/nuxt3-vuetify-workshop-day4/node_modules/ufo/dist/index.mjs';
import 'file://E:/Unversity/NuxttJS%20Workshop/Basic%20NuxtJS/Workshop/nuxt3-vuetify-workshop-day4/node_modules/h3/dist/index.mjs';
import 'file://E:/Unversity/NuxttJS%20Workshop/Basic%20NuxtJS/Workshop/nuxt3-vuetify-workshop-day4/node_modules/@unhead/vue/dist/index.mjs';
import 'file://E:/Unversity/NuxttJS%20Workshop/Basic%20NuxtJS/Workshop/nuxt3-vuetify-workshop-day4/node_modules/@unhead/dom/dist/index.mjs';
import 'file://E:/Unversity/NuxttJS%20Workshop/Basic%20NuxtJS/Workshop/nuxt3-vuetify-workshop-day4/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file://E:/Unversity/NuxttJS%20Workshop/Basic%20NuxtJS/Workshop/nuxt3-vuetify-workshop-day4/node_modules/defu/dist/defu.mjs';
import './nitro-prerenderer.mjs';
import 'file://E:/Unversity/NuxttJS%20Workshop/Basic%20NuxtJS/Workshop/nuxt3-vuetify-workshop-day4/node_modules/node-fetch-native/dist/polyfill.mjs';
import 'file://E:/Unversity/NuxttJS%20Workshop/Basic%20NuxtJS/Workshop/nuxt3-vuetify-workshop-day4/node_modules/destr/dist/index.mjs';
import 'file://E:/Unversity/NuxttJS%20Workshop/Basic%20NuxtJS/Workshop/nuxt3-vuetify-workshop-day4/node_modules/unenv/runtime/fetch/index.mjs';
import 'file://E:/Unversity/NuxttJS%20Workshop/Basic%20NuxtJS/Workshop/nuxt3-vuetify-workshop-day4/node_modules/scule/dist/index.mjs';
import 'file://E:/Unversity/NuxttJS%20Workshop/Basic%20NuxtJS/Workshop/nuxt3-vuetify-workshop-day4/node_modules/ohash/dist/index.mjs';
import 'file://E:/Unversity/NuxttJS%20Workshop/Basic%20NuxtJS/Workshop/nuxt3-vuetify-workshop-day4/node_modules/unstorage/dist/index.mjs';
import 'file://E:/Unversity/NuxttJS%20Workshop/Basic%20NuxtJS/Workshop/nuxt3-vuetify-workshop-day4/node_modules/unstorage/dist/drivers/fs.mjs';
import 'file://E:/Unversity/NuxttJS%20Workshop/Basic%20NuxtJS/Workshop/nuxt3-vuetify-workshop-day4/node_modules/radix3/dist/index.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_v_app = resolveComponent("v-app");
  _push(ssrRenderComponent(_component_v_app, mergeProps({
    theme: "light",
    class: "verticalLayout"
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
      } else {
        return [
          renderSlot(_ctx.$slots, "default")
        ];
      }
    }),
    _: 3
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/auth.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const auth = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { auth as default };
//# sourceMappingURL=auth.73d6f65a.mjs.map
