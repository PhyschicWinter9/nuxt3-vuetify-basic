import { b as useRoute } from "../server.mjs";
import { defineComponent, withAsyncContext, resolveComponent, mergeProps, unref, withCtx, createVNode, toDisplayString, createTextVNode, useSSRContext } from "vue";
import { u as useFetch } from "./fetch.2916f06b.js";
import "destr";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import "ofetch";
import "#internal/nitro";
import "hookable";
import "unctx";
import "ufo";
import "h3";
import "@unhead/vue";
import "@unhead/dom";
import "vue-router";
import "defu";
import "ohash";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const { data: product, pending } = ([__temp, __restore] = withAsyncContext(() => useFetch(`https://www.itgenius.co.th/sandbox_api/mrta_flutter_api/public/api/news/${route.params.id}`, "$gCGZlHWk1Q")), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_container = resolveComponent("v-container");
      const _component_v_btn = resolveComponent("v-btn");
      const _component_v_icon = resolveComponent("v-icon");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mb-5" }, _attrs))}>`);
      if (!unref(pending)) {
        _push(`<div><div class="wrapper">`);
        _push(ssrRenderComponent(_component_v_row, { justify: "center" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_v_col, {
                cols: "12",
                sm: "10",
                md: "9",
                lg: "7"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="text-center"${_scopeId2}><h2 class="ui-title font-weight-bold text-white mb-4 mt-5"${_scopeId2}>${ssrInterpolate(unref(product).topic)}</h2></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "text-center" }, [
                        createVNode("h2", { class: "ui-title font-weight-bold text-white mb-4 mt-5" }, toDisplayString(unref(product).topic), 1)
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_v_col, {
                  cols: "12",
                  sm: "10",
                  md: "9",
                  lg: "7"
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "text-center" }, [
                      createVNode("h2", { class: "ui-title font-weight-bold text-white mb-4 mt-5" }, toDisplayString(unref(product).topic), 1)
                    ])
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
        _push(ssrRenderComponent(_component_v_container, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img${ssrRenderAttr("src", unref(product).imageurl)}${ssrRenderAttr("alt", unref(product).topic)} class="w-100"${_scopeId}><h3 class="my-4"${_scopeId}>${ssrInterpolate(unref(product).detail)}</h3><p class="my-4"${_scopeId}>${ssrInterpolate(unref(product).created_at)}</p><a${ssrRenderAttr("href", unref(product).linkurl)} target="_blank"${_scopeId}>\u0E2D\u0E48\u0E32\u0E19\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E40\u0E15\u0E34\u0E21</a><br${_scopeId}>`);
              _push2(ssrRenderComponent(_component_v_btn, {
                color: "primary",
                fab: "",
                dark: "",
                fixed: "",
                bottom: "",
                left: "",
                class: "mb-5 ml-5",
                onClick: () => _ctx.$router.go(-1)
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_v_icon, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`mdi-arrow-left`);
                        } else {
                          return [
                            createTextVNode("mdi-arrow-left")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_v_icon, null, {
                        default: withCtx(() => [
                          createTextVNode("mdi-arrow-left")
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode("img", {
                  src: unref(product).imageurl,
                  alt: unref(product).topic,
                  class: "w-100"
                }, null, 8, ["src", "alt"]),
                createVNode("h3", { class: "my-4" }, toDisplayString(unref(product).detail), 1),
                createVNode("p", { class: "my-4" }, toDisplayString(unref(product).created_at), 1),
                createVNode("a", {
                  href: unref(product).linkurl,
                  target: "_blank"
                }, "\u0E2D\u0E48\u0E32\u0E19\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E40\u0E15\u0E34\u0E21", 8, ["href"]),
                createVNode("br"),
                createVNode(_component_v_btn, {
                  color: "primary",
                  fab: "",
                  dark: "",
                  fixed: "",
                  bottom: "",
                  left: "",
                  class: "mb-5 ml-5",
                  onClick: () => _ctx.$router.go(-1)
                }, {
                  default: withCtx(() => [
                    createVNode(_component_v_icon, null, {
                      default: withCtx(() => [
                        createTextVNode("mdi-arrow-left")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["onClick"])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<div class="text-center py-10">Loading...</div>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blogdetail/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=_id_.a3b6e2c1.js.map
