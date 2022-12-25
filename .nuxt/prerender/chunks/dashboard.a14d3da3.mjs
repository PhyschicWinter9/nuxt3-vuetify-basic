import { u as useHead } from './composables.79d89de8.mjs';
import { useSSRContext, defineComponent, resolveComponent, withCtx, createVNode, ref, unref, isRef, openBlock, createBlock, createCommentVNode, mergeProps, createTextVNode, toDisplayString, Fragment, renderList } from 'file://E:/Unversity/NuxttJS%20Workshop/Basic%20NuxtJS/Workshop/nuxt3-vuetify-workshop-day4/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrInterpolate, ssrRenderStyle, ssrRenderAttrs } from 'file://E:/Unversity/NuxttJS%20Workshop/Basic%20NuxtJS/Workshop/nuxt3-vuetify-workshop-day4/node_modules/vue/server-renderer/index.mjs';
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

const _imports_0$3 = "" + globalThis.__publicAssetsURL("images/users/businessmen.png");
const _sfc_main$h = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs) {
  const _component_v_card = resolveComponent("v-card");
  const _component_v_card_text = resolveComponent("v-card-text");
  const _component_v_icon = resolveComponent("v-icon");
  const _component_v_btn = resolveComponent("v-btn");
  _push(ssrRenderComponent(_component_v_card, mergeProps({ class: "position-relative overflow-hidden" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_0$3)} class="bg-img-1" alt="Congratulation" data-v-1aed4bae${_scopeId}>`);
        _push2(ssrRenderComponent(_component_v_card_text, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<h3 class="title text-h6 overlay-title font-weight-medium" data-v-1aed4bae${_scopeId2}> \u0E22\u0E34\u0E19\u0E14\u0E35\u0E15\u0E49\u0E2D\u0E19\u0E23\u0E31\u0E1A\u0E04\u0E38\u0E13 Julia </h3><h2 class="title text-h5 font-weight-bold d-flex align-end" data-v-1aed4bae${_scopeId2}> $39,358 <span class="text-subtitle-1 ml-2 d-flex align-center font-weight-medium" data-v-1aed4bae${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_v_icon, {
                icon: "mdi-arrow-top-left",
                size: "18"
              }, null, _parent3, _scopeId2));
              _push3(` +9%</span></h2>`);
              _push3(ssrRenderComponent(_component_v_btn, {
                color: "primary",
                class: "mt-8"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(` \u0E14\u0E32\u0E27\u0E19\u0E4C\u0E42\u0E2B\u0E25\u0E14\u0E17\u0E35\u0E48\u0E19\u0E35\u0E48 `);
                  } else {
                    return [
                      createTextVNode(" \u0E14\u0E32\u0E27\u0E19\u0E4C\u0E42\u0E2B\u0E25\u0E14\u0E17\u0E35\u0E48\u0E19\u0E35\u0E48 ")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode("h3", { class: "title text-h6 overlay-title font-weight-medium" }, " \u0E22\u0E34\u0E19\u0E14\u0E35\u0E15\u0E49\u0E2D\u0E19\u0E23\u0E31\u0E1A\u0E04\u0E38\u0E13 Julia "),
                createVNode("h2", { class: "title text-h5 font-weight-bold d-flex align-end" }, [
                  createTextVNode(" $39,358 "),
                  createVNode("span", { class: "text-subtitle-1 ml-2 d-flex align-center font-weight-medium" }, [
                    createVNode(_component_v_icon, {
                      icon: "mdi-arrow-top-left",
                      size: "18"
                    }),
                    createTextVNode(" +9%")
                  ])
                ]),
                createVNode(_component_v_btn, {
                  color: "primary",
                  class: "mt-8"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" \u0E14\u0E32\u0E27\u0E19\u0E4C\u0E42\u0E2B\u0E25\u0E14\u0E17\u0E35\u0E48\u0E19\u0E35\u0E48 ")
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
            src: _imports_0$3,
            class: "bg-img-1",
            alt: "Congratulation"
          }),
          createVNode(_component_v_card_text, null, {
            default: withCtx(() => [
              createVNode("h3", { class: "title text-h6 overlay-title font-weight-medium" }, " \u0E22\u0E34\u0E19\u0E14\u0E35\u0E15\u0E49\u0E2D\u0E19\u0E23\u0E31\u0E1A\u0E04\u0E38\u0E13 Julia "),
              createVNode("h2", { class: "title text-h5 font-weight-bold d-flex align-end" }, [
                createTextVNode(" $39,358 "),
                createVNode("span", { class: "text-subtitle-1 ml-2 d-flex align-center font-weight-medium" }, [
                  createVNode(_component_v_icon, {
                    icon: "mdi-arrow-top-left",
                    size: "18"
                  }),
                  createTextVNode(" +9%")
                ])
              ]),
              createVNode(_component_v_btn, {
                color: "primary",
                class: "mt-8"
              }, {
                default: withCtx(() => [
                  createTextVNode(" \u0E14\u0E32\u0E27\u0E19\u0E4C\u0E42\u0E2B\u0E25\u0E14\u0E17\u0E35\u0E48\u0E19\u0E35\u0E48 ")
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dashboardComponents/modern/congratulation-card/CongratulationCard.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const CongratulationCard = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["ssrRender", _sfc_ssrRender$5], ["__scopeId", "data-v-1aed4bae"]]);
const _sfc_main$g = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  const _component_v_card = resolveComponent("v-card");
  const _component_v_card_text = resolveComponent("v-card-text");
  const _component_v_spacer = resolveComponent("v-spacer");
  const _component_v_btn = resolveComponent("v-btn");
  const _component_v_icon = resolveComponent("v-icon");
  _push(ssrRenderComponent(_component_v_card, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_card_text, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="d-flex align-start"${_scopeId2}><h2 class="title text-h6 font-weight-medium mt-1"${_scopeId2}>\u0E22\u0E2D\u0E14\u0E2A\u0E31\u0E48\u0E07\u0E0B\u0E37\u0E49\u0E2D</h2>`);
              _push3(ssrRenderComponent(_component_v_spacer, null, null, _parent3, _scopeId2));
              _push3(`<div class="ml-auto"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_v_btn, {
                color: "secondary",
                icon: ""
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_v_icon, { icon: "mdi-shopping-outline" }, null, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_v_icon, { icon: "mdi-shopping-outline" })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</div></div><div class="mt-9"${_scopeId2}><h2 class="title font-weight-medium text-h5"${_scopeId2}>2,367</h2><span class="text-subtitle-1 font-weight-medium text-medium-emphasis"${_scopeId2}>\u0E2D\u0E2D\u0E40\u0E14\u0E2D\u0E23\u0E4C\u0E43\u0E19\u0E40\u0E14\u0E37\u0E2D\u0E19\u0E19\u0E35\u0E49</span></div>`);
            } else {
              return [
                createVNode("div", { class: "d-flex align-start" }, [
                  createVNode("h2", { class: "title text-h6 font-weight-medium mt-1" }, "\u0E22\u0E2D\u0E14\u0E2A\u0E31\u0E48\u0E07\u0E0B\u0E37\u0E49\u0E2D"),
                  createVNode(_component_v_spacer),
                  createVNode("div", { class: "ml-auto" }, [
                    createVNode(_component_v_btn, {
                      color: "secondary",
                      icon: ""
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_icon, { icon: "mdi-shopping-outline" })
                      ]),
                      _: 1
                    })
                  ])
                ]),
                createVNode("div", { class: "mt-9" }, [
                  createVNode("h2", { class: "title font-weight-medium text-h5" }, "2,367"),
                  createVNode("span", { class: "text-subtitle-1 font-weight-medium text-medium-emphasis" }, "\u0E2D\u0E2D\u0E40\u0E14\u0E2D\u0E23\u0E4C\u0E43\u0E19\u0E40\u0E14\u0E37\u0E2D\u0E19\u0E19\u0E35\u0E49")
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_v_card_text, null, {
            default: withCtx(() => [
              createVNode("div", { class: "d-flex align-start" }, [
                createVNode("h2", { class: "title text-h6 font-weight-medium mt-1" }, "\u0E22\u0E2D\u0E14\u0E2A\u0E31\u0E48\u0E07\u0E0B\u0E37\u0E49\u0E2D"),
                createVNode(_component_v_spacer),
                createVNode("div", { class: "ml-auto" }, [
                  createVNode(_component_v_btn, {
                    color: "secondary",
                    icon: ""
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_icon, { icon: "mdi-shopping-outline" })
                    ]),
                    _: 1
                  })
                ])
              ]),
              createVNode("div", { class: "mt-9" }, [
                createVNode("h2", { class: "title font-weight-medium text-h5" }, "2,367"),
                createVNode("span", { class: "text-subtitle-1 font-weight-medium text-medium-emphasis" }, "\u0E2D\u0E2D\u0E40\u0E14\u0E2D\u0E23\u0E4C\u0E43\u0E19\u0E40\u0E14\u0E37\u0E2D\u0E19\u0E19\u0E35\u0E49")
              ])
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dashboardComponents/modern/purchases/Purchases.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const Purchases = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$f = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  const _component_v_card = resolveComponent("v-card");
  const _component_v_card_text = resolveComponent("v-card-text");
  const _component_v_spacer = resolveComponent("v-spacer");
  const _component_v_btn = resolveComponent("v-btn");
  const _component_v_icon = resolveComponent("v-icon");
  _push(ssrRenderComponent(_component_v_card, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_card_text, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="d-flex align-start"${_scopeId2}><h2 class="title text-h6 font-weight-medium mt-1"${_scopeId2}>\u0E23\u0E32\u0E22\u0E44\u0E14\u0E49\u0E23\u0E27\u0E21</h2>`);
              _push3(ssrRenderComponent(_component_v_spacer, null, null, _parent3, _scopeId2));
              _push3(`<div class="ml-auto"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_v_btn, {
                color: "primary",
                icon: ""
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_v_icon, { icon: "mdi-currency-usd" }, null, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_v_icon, { icon: "mdi-currency-usd" })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</div></div><div class="mt-9"${_scopeId2}><h2 class="title font-weight-medium text-h5"${_scopeId2}>$93,438.78</h2><span class="text-subtitle-1 font-weight-medium text-medium-emphasis"${_scopeId2}>\u0E22\u0E2D\u0E14\u0E23\u0E27\u0E21\u0E40\u0E14\u0E37\u0E2D\u0E19\u0E19\u0E35\u0E49</span></div>`);
            } else {
              return [
                createVNode("div", { class: "d-flex align-start" }, [
                  createVNode("h2", { class: "title text-h6 font-weight-medium mt-1" }, "\u0E23\u0E32\u0E22\u0E44\u0E14\u0E49\u0E23\u0E27\u0E21"),
                  createVNode(_component_v_spacer),
                  createVNode("div", { class: "ml-auto" }, [
                    createVNode(_component_v_btn, {
                      color: "primary",
                      icon: ""
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_icon, { icon: "mdi-currency-usd" })
                      ]),
                      _: 1
                    })
                  ])
                ]),
                createVNode("div", { class: "mt-9" }, [
                  createVNode("h2", { class: "title font-weight-medium text-h5" }, "$93,438.78"),
                  createVNode("span", { class: "text-subtitle-1 font-weight-medium text-medium-emphasis" }, "\u0E22\u0E2D\u0E14\u0E23\u0E27\u0E21\u0E40\u0E14\u0E37\u0E2D\u0E19\u0E19\u0E35\u0E49")
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_v_card_text, null, {
            default: withCtx(() => [
              createVNode("div", { class: "d-flex align-start" }, [
                createVNode("h2", { class: "title text-h6 font-weight-medium mt-1" }, "\u0E23\u0E32\u0E22\u0E44\u0E14\u0E49\u0E23\u0E27\u0E21"),
                createVNode(_component_v_spacer),
                createVNode("div", { class: "ml-auto" }, [
                  createVNode(_component_v_btn, {
                    color: "primary",
                    icon: ""
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_icon, { icon: "mdi-currency-usd" })
                    ]),
                    _: 1
                  })
                ])
              ]),
              createVNode("div", { class: "mt-9" }, [
                createVNode("h2", { class: "title font-weight-medium text-h5" }, "$93,438.78"),
                createVNode("span", { class: "text-subtitle-1 font-weight-medium text-medium-emphasis" }, "\u0E22\u0E2D\u0E14\u0E23\u0E27\u0E21\u0E40\u0E14\u0E37\u0E2D\u0E19\u0E19\u0E35\u0E49")
              ])
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dashboardComponents/modern/total-earnings/TotalEarnings.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const TotalEarnings = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["ssrRender", _sfc_ssrRender$3]]);
const RevenueChart = {
  series: [
    {
      name: "Earnings",
      data: [0, 5, 6, 8, 25, 9, 11, 24]
    },
    {
      name: "Expense",
      data: [0, 3, 1, 2, 8, 1, 5, 1]
    }
  ],
  chartOptions: {
    colors: ["#0cb9c5", "#1e88e5"],
    fill: {
      type: "solid",
      opacity: 1
    },
    chart: {
      toolbar: {
        show: false
      },
      type: "line",
      foreColor: "#adb0bb",
      fontFamily: "'DM Sans',sans-serif",
      height: 300
    },
    dataLabels: {
      enabled: false
    },
    markers: {
      size: 4,
      border: 1
    },
    legend: {
      show: false
    },
    xaxis: {
      categories: [
        "16/08",
        "17/08",
        "18/08",
        "19/08",
        "20/08",
        "21/08",
        "22/08",
        "23/08"
      ]
    },
    grid: {
      show: true,
      borderColor: "rgba(0, 0, 0, .2)",
      color: "#777e89",
      strokeDashArray: 2,
      xaxis: {
        lines: {
          show: false
        }
      },
      yaxis: {
        lines: {
          show: true
        }
      }
    },
    stroke: {
      curve: "smooth",
      width: 3
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm"
      },
      theme: "dark"
    }
  }
};
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  __name: "RevenueUpdates",
  __ssrInlineRender: true,
  setup(__props) {
    const select = ref("March");
    const items = ref(["March", "April", "May", "June"]);
    const elementVisible = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_card = resolveComponent("v-card");
      const _component_v_card_text = resolveComponent("v-card-text");
      const _component_v_spacer = resolveComponent("v-spacer");
      const _component_v_select = resolveComponent("v-select");
      const _component_apexchart = resolveComponent("apexchart");
      _push(ssrRenderComponent(_component_v_card, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_card_text, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="d-sm-flex align-start"${_scopeId2}><div${_scopeId2}><h2 class="title text-h6 font-weight-medium"${_scopeId2}>\u0E2D\u0E31\u0E1E\u0E40\u0E14\u0E17\u0E23\u0E32\u0E22\u0E44\u0E14\u0E49</h2></div>`);
                  _push3(ssrRenderComponent(_component_v_spacer, null, null, _parent3, _scopeId2));
                  _push3(`<div class="ml-auto"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_v_select, {
                    "aria-atomic": "true",
                    modelValue: unref(select),
                    "onUpdate:modelValue": ($event) => isRef(select) ? select.value = $event : null,
                    items: unref(items),
                    variant: "outlined",
                    density: "compact",
                    "hide-details": ""
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                  if (unref(elementVisible)) {
                    _push3(`<div${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_apexchart, {
                      type: "line",
                      height: "300px",
                      options: unref(RevenueChart).chartOptions,
                      series: unref(RevenueChart).series
                    }, null, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`<div class="d-flex justify-center"${_scopeId2}><div class="d-flex align-center text-primary px-2"${_scopeId2}><span class="text-overline"${_scopeId2}><i class="mdi mdi-brightness-1 mx-1"${_scopeId2}></i></span><span class="font-weight-regular"${_scopeId2}>Earnings</span></div><div class="d-flex align-center px-2 text-secondary"${_scopeId2}><span class="text-overline"${_scopeId2}><i class="mdi mdi-brightness-1 mx-1"${_scopeId2}></i></span><span class="font-weight-regular"${_scopeId2}>Expense</span></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "d-sm-flex align-start" }, [
                      createVNode("div", null, [
                        createVNode("h2", { class: "title text-h6 font-weight-medium" }, "\u0E2D\u0E31\u0E1E\u0E40\u0E14\u0E17\u0E23\u0E32\u0E22\u0E44\u0E14\u0E49")
                      ]),
                      createVNode(_component_v_spacer),
                      createVNode("div", { class: "ml-auto" }, [
                        createVNode(_component_v_select, {
                          "aria-atomic": "true",
                          modelValue: unref(select),
                          "onUpdate:modelValue": ($event) => isRef(select) ? select.value = $event : null,
                          items: unref(items),
                          variant: "outlined",
                          density: "compact",
                          "hide-details": ""
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                      ])
                    ]),
                    unref(elementVisible) ? (openBlock(), createBlock("div", { key: 0 }, [
                      createVNode(_component_apexchart, {
                        type: "line",
                        height: "300px",
                        options: unref(RevenueChart).chartOptions,
                        series: unref(RevenueChart).series
                      }, null, 8, ["options", "series"])
                    ])) : createCommentVNode("", true),
                    createVNode("div", { class: "d-flex justify-center" }, [
                      createVNode("div", { class: "d-flex align-center text-primary px-2" }, [
                        createVNode("span", { class: "text-overline" }, [
                          createVNode("i", { class: "mdi mdi-brightness-1 mx-1" })
                        ]),
                        createVNode("span", { class: "font-weight-regular" }, "Earnings")
                      ]),
                      createVNode("div", { class: "d-flex align-center px-2 text-secondary" }, [
                        createVNode("span", { class: "text-overline" }, [
                          createVNode("i", { class: "mdi mdi-brightness-1 mx-1" })
                        ]),
                        createVNode("span", { class: "font-weight-regular" }, "Expense")
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_card_text, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "d-sm-flex align-start" }, [
                    createVNode("div", null, [
                      createVNode("h2", { class: "title text-h6 font-weight-medium" }, "\u0E2D\u0E31\u0E1E\u0E40\u0E14\u0E17\u0E23\u0E32\u0E22\u0E44\u0E14\u0E49")
                    ]),
                    createVNode(_component_v_spacer),
                    createVNode("div", { class: "ml-auto" }, [
                      createVNode(_component_v_select, {
                        "aria-atomic": "true",
                        modelValue: unref(select),
                        "onUpdate:modelValue": ($event) => isRef(select) ? select.value = $event : null,
                        items: unref(items),
                        variant: "outlined",
                        density: "compact",
                        "hide-details": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                    ])
                  ]),
                  unref(elementVisible) ? (openBlock(), createBlock("div", { key: 0 }, [
                    createVNode(_component_apexchart, {
                      type: "line",
                      height: "300px",
                      options: unref(RevenueChart).chartOptions,
                      series: unref(RevenueChart).series
                    }, null, 8, ["options", "series"])
                  ])) : createCommentVNode("", true),
                  createVNode("div", { class: "d-flex justify-center" }, [
                    createVNode("div", { class: "d-flex align-center text-primary px-2" }, [
                      createVNode("span", { class: "text-overline" }, [
                        createVNode("i", { class: "mdi mdi-brightness-1 mx-1" })
                      ]),
                      createVNode("span", { class: "font-weight-regular" }, "Earnings")
                    ]),
                    createVNode("div", { class: "d-flex align-center px-2 text-secondary" }, [
                      createVNode("span", { class: "text-overline" }, [
                        createVNode("i", { class: "mdi mdi-brightness-1 mx-1" })
                      ]),
                      createVNode("span", { class: "font-weight-regular" }, "Expense")
                    ])
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dashboardComponents/modern/revenue-updates/RevenueUpdates.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const MonthlyChart = {
  series: [
    {
      name: "Monthly Earnings",
      data: [6, 10, 9, 11, 9, 10, 12, 10, 9, 11, 9, 10, 12]
    }
  ],
  chartOptions: {
    chart: {
      toolbar: {
        show: false
      },
      foreColor: "#adb0bb",
      fontFamily: "'DM Sans',sans-serif",
      type: "bar",
      height: 45,
      sparkline: {
        enabled: true
      }
    },
    colors: ["rgba(255,255,255,0.5)"],
    marker: {
      size: 0
    },
    tooltip: {
      theme: "dark"
    },
    grid: {
      show: false
    },
    stroke: {
      show: true,
      width: 2,
      curve: "smooth",
      colors: ["transparent"]
    },
    plotOptions: {
      bar: {
        horizontal: false,
        startingShape: "flat",
        endingShape: "flat",
        columnWidth: "30%",
        barHeight: "100%"
      }
    }
  }
};
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "MonthlyEarnings",
  __ssrInlineRender: true,
  setup(__props) {
    ref("March");
    ref(["March", "April", "May", "June"]);
    const elementVisible = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_card = resolveComponent("v-card");
      const _component_v_card_text = resolveComponent("v-card-text");
      const _component_apexchart = resolveComponent("apexchart");
      const _component_v_icon = resolveComponent("v-icon");
      _push(ssrRenderComponent(_component_v_card, mergeProps({ class: "mb-7 bg-secondary" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_card_text, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h3 class="title text-h6 font-weight-medium text-white"${_scopeId2}> \u0E23\u0E32\u0E22\u0E44\u0E14\u0E49\u0E41\u0E15\u0E48\u0E25\u0E30\u0E40\u0E14\u0E37\u0E2D\u0E19 </h3>`);
                  if (unref(elementVisible)) {
                    _push3(`<div class="mt-4"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_apexchart, {
                      type: "bar",
                      height: "45px",
                      options: unref(MonthlyChart).chartOptions,
                      series: unref(MonthlyChart).series
                    }, null, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`<h2 class="title text-h5 text-white mt-6 font-weight-medium d-flex align-items-end"${_scopeId2}> $39,358 <span class="text-subtitle-1 ml-2 d-flex align-center font-weight-medium"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_v_icon, {
                    icon: "mdi-arrow-top-left",
                    size: "18"
                  }, null, _parent3, _scopeId2));
                  _push3(`+9 \u0E43\u0E19\u0E2A\u0E31\u0E1B\u0E14\u0E32\u0E2B\u0E4C\u0E19\u0E35\u0E49</span></h2>`);
                } else {
                  return [
                    createVNode("h3", { class: "title text-h6 font-weight-medium text-white" }, " \u0E23\u0E32\u0E22\u0E44\u0E14\u0E49\u0E41\u0E15\u0E48\u0E25\u0E30\u0E40\u0E14\u0E37\u0E2D\u0E19 "),
                    unref(elementVisible) ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "mt-4"
                    }, [
                      createVNode(_component_apexchart, {
                        type: "bar",
                        height: "45px",
                        options: unref(MonthlyChart).chartOptions,
                        series: unref(MonthlyChart).series
                      }, null, 8, ["options", "series"])
                    ])) : createCommentVNode("", true),
                    createVNode("h2", { class: "title text-h5 text-white mt-6 font-weight-medium d-flex align-items-end" }, [
                      createTextVNode(" $39,358 "),
                      createVNode("span", { class: "text-subtitle-1 ml-2 d-flex align-center font-weight-medium" }, [
                        createVNode(_component_v_icon, {
                          icon: "mdi-arrow-top-left",
                          size: "18"
                        }),
                        createTextVNode("+9 \u0E43\u0E19\u0E2A\u0E31\u0E1B\u0E14\u0E32\u0E2B\u0E4C\u0E19\u0E35\u0E49")
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_card_text, null, {
                default: withCtx(() => [
                  createVNode("h3", { class: "title text-h6 font-weight-medium text-white" }, " \u0E23\u0E32\u0E22\u0E44\u0E14\u0E49\u0E41\u0E15\u0E48\u0E25\u0E30\u0E40\u0E14\u0E37\u0E2D\u0E19 "),
                  unref(elementVisible) ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "mt-4"
                  }, [
                    createVNode(_component_apexchart, {
                      type: "bar",
                      height: "45px",
                      options: unref(MonthlyChart).chartOptions,
                      series: unref(MonthlyChart).series
                    }, null, 8, ["options", "series"])
                  ])) : createCommentVNode("", true),
                  createVNode("h2", { class: "title text-h5 text-white mt-6 font-weight-medium d-flex align-items-end" }, [
                    createTextVNode(" $39,358 "),
                    createVNode("span", { class: "text-subtitle-1 ml-2 d-flex align-center font-weight-medium" }, [
                      createVNode(_component_v_icon, {
                        icon: "mdi-arrow-top-left",
                        size: "18"
                      }),
                      createTextVNode("+9 \u0E43\u0E19\u0E2A\u0E31\u0E1B\u0E14\u0E32\u0E2B\u0E4C\u0E19\u0E35\u0E49")
                    ])
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dashboardComponents/modern/monthly-earnings/MonthlyEarnings.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const CustomerChart = {
  series: [
    {
      name: "Customers",
      data: [1, 19, 3, 13, 2, 19]
    }
  ],
  chartOptions: {
    chart: {
      toolbar: {
        show: false
      },
      foreColor: "#adb0bb",
      fontFamily: "'DM Sans',sans-serif",
      type: "line",
      height: 55,
      sparkline: {
        enabled: true
      }
    },
    colors: ["rgb(255,255,255)"],
    marker: {
      size: 0
    },
    tooltip: {
      theme: "dark"
    },
    grid: {
      show: false
    },
    stroke: {
      show: true,
      width: 2,
      curve: "smooth"
    }
  }
};
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "Customers",
  __ssrInlineRender: true,
  setup(__props) {
    const elementVisible = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_card = resolveComponent("v-card");
      const _component_v_card_text = resolveComponent("v-card-text");
      const _component_apexchart = resolveComponent("apexchart");
      const _component_v_icon = resolveComponent("v-icon");
      _push(ssrRenderComponent(_component_v_card, mergeProps({ class: "position-relative bg-primary" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_card_text, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h2 class="title text-h6 font-weight-medium text-white"${_scopeId2}>\u0E2A\u0E16\u0E34\u0E15\u0E34\u0E25\u0E39\u0E01\u0E04\u0E49\u0E32</h2>`);
                  if (unref(elementVisible)) {
                    _push3(`<div class="mt-4"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_apexchart, {
                      type: "line",
                      height: "55px",
                      options: unref(CustomerChart).chartOptions,
                      series: unref(CustomerChart).series
                    }, null, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`<h2 class="title text-h5 text-white mt-6 font-weight-medium d-flex align-end"${_scopeId2}> $39,358 <span class="text-subtitle-1 ml-2 d-flex align-center font-weight-medium"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_v_icon, {
                    icon: "mdi-arrow-top-left",
                    size: "18"
                  }, null, _parent3, _scopeId2));
                  _push3(`+9 \u0E43\u0E19\u0E2A\u0E31\u0E1B\u0E14\u0E32\u0E2B\u0E4C\u0E19\u0E35\u0E49</span></h2>`);
                } else {
                  return [
                    createVNode("h2", { class: "title text-h6 font-weight-medium text-white" }, "\u0E2A\u0E16\u0E34\u0E15\u0E34\u0E25\u0E39\u0E01\u0E04\u0E49\u0E32"),
                    unref(elementVisible) ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "mt-4"
                    }, [
                      createVNode(_component_apexchart, {
                        type: "line",
                        height: "55px",
                        options: unref(CustomerChart).chartOptions,
                        series: unref(CustomerChart).series
                      }, null, 8, ["options", "series"])
                    ])) : createCommentVNode("", true),
                    createVNode("h2", { class: "title text-h5 text-white mt-6 font-weight-medium d-flex align-end" }, [
                      createTextVNode(" $39,358 "),
                      createVNode("span", { class: "text-subtitle-1 ml-2 d-flex align-center font-weight-medium" }, [
                        createVNode(_component_v_icon, {
                          icon: "mdi-arrow-top-left",
                          size: "18"
                        }),
                        createTextVNode("+9 \u0E43\u0E19\u0E2A\u0E31\u0E1B\u0E14\u0E32\u0E2B\u0E4C\u0E19\u0E35\u0E49")
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_card_text, null, {
                default: withCtx(() => [
                  createVNode("h2", { class: "title text-h6 font-weight-medium text-white" }, "\u0E2A\u0E16\u0E34\u0E15\u0E34\u0E25\u0E39\u0E01\u0E04\u0E49\u0E32"),
                  unref(elementVisible) ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "mt-4"
                  }, [
                    createVNode(_component_apexchart, {
                      type: "line",
                      height: "55px",
                      options: unref(CustomerChart).chartOptions,
                      series: unref(CustomerChart).series
                    }, null, 8, ["options", "series"])
                  ])) : createCommentVNode("", true),
                  createVNode("h2", { class: "title text-h5 text-white mt-6 font-weight-medium d-flex align-end" }, [
                    createTextVNode(" $39,358 "),
                    createVNode("span", { class: "text-subtitle-1 ml-2 d-flex align-center font-weight-medium" }, [
                      createVNode(_component_v_icon, {
                        icon: "mdi-arrow-top-left",
                        size: "18"
                      }),
                      createTextVNode("+9 \u0E43\u0E19\u0E2A\u0E31\u0E1B\u0E14\u0E32\u0E2B\u0E4C\u0E19\u0E35\u0E49")
                    ])
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dashboardComponents/modern/customers/Customers.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const TotalSales$1 = {
  series: [25, 35, 35],
  chartOptions: {
    labels: ["2021", "2020", "2019", "2018"],
    chart: {
      height: 280,
      type: "donut",
      foreColor: "#adb0bb",
      fontFamily: "DM sans"
    },
    colors: ["#03c9d7", "#1e88e5", "#ecf0f2"],
    dataLabels: { enabled: false },
    legend: { show: false },
    grid: {
      show: false,
      borderColor: "transparent",
      padding: { top: 0, right: 0 }
    },
    stroke: { colors: ["transparent"] },
    plotOptions: {
      pie: {
        donut: {
          size: "78%",
          background: "transparent",
          labels: {
            show: false,
            name: {
              show: true,
              fontSize: "18px",
              color: void 0,
              offsetY: -10
            },
            value: { show: false, color: "#98aab4" },
            total: { show: false, label: "Our Visitors", color: "#98aab4" }
          }
        }
      }
    },
    tooltip: { theme: "dark", fillSeriesColor: false },
    responsive: [{ breakpoint: 480, options: { chart: { height: 250 } } }]
  }
};
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "TotalSales",
  __ssrInlineRender: true,
  setup(__props) {
    const select = ref("March");
    const items = ref(["March", "April", "May", "June"]);
    const elementVisible = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_card = resolveComponent("v-card");
      const _component_v_card_text = resolveComponent("v-card-text");
      const _component_v_select = resolveComponent("v-select");
      const _component_v_divider = resolveComponent("v-divider");
      const _component_apexchart = resolveComponent("apexchart");
      const _component_v_icon = resolveComponent("v-icon");
      _push(ssrRenderComponent(_component_v_card, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_card_text, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="d-flex align-center mb-5" data-v-12985433${_scopeId2}><h2 class="title text-h6 font-weight-medium" data-v-12985433${_scopeId2}>\u0E22\u0E2D\u0E14\u0E02\u0E32\u0E22\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14</h2><div class="ml-auto" data-v-12985433${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_v_select, {
                    modelValue: unref(select),
                    "onUpdate:modelValue": ($event) => isRef(select) ? select.value = $event : null,
                    items: unref(items),
                    "hide-details": "auto",
                    variant: "outlined",
                    density: "compact",
                    "single-line": ""
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                  _push3(ssrRenderComponent(_component_v_divider, null, null, _parent3, _scopeId2));
                  _push3(`<div class="border-top mt-5 d-flex align-center" data-v-12985433${_scopeId2}><h6 class="text-subtitle-1 text-grey-darken-1 font-weight-regular" data-v-12985433${_scopeId2}> \u0E22\u0E2D\u0E14\u0E02\u0E32\u0E22\u0E17\u0E31\u0E49\u0E07\u0E1B\u0E35 </h6><div class="ml-auto" data-v-12985433${_scopeId2}><h3 class="h3 title font-weight-bold" data-v-12985433${_scopeId2}>8,364,398</h3></div></div>`);
                  if (unref(elementVisible)) {
                    _push3(`<div class="mt-5 pt-5 position-relative" data-v-12985433${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_apexchart, {
                      type: "donut",
                      height: "280px",
                      options: unref(TotalSales$1).chartOptions,
                      series: unref(TotalSales$1).series
                    }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_v_icon, {
                      icon: "mdi-cart-outline",
                      class: "text-grey-darken-1 total-sales-icon",
                      size: "35"
                    }, null, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`<div class="d-flex align-center justify-space-between mt-9" data-v-12985433${_scopeId2}><div class="d-flex align-center px-2" data-v-12985433${_scopeId2}><span data-v-12985433${_scopeId2}><span class="text-overline" data-v-12985433${_scopeId2}><i class="mdi mdi-brightness-1 text-secondary mx-1" data-v-12985433${_scopeId2}></i></span><span class="text-grey-darken-1 font-weight-medium mr-1" data-v-12985433${_scopeId2}>2021</span></span></div><div class="d-flex align-center px-2" data-v-12985433${_scopeId2}><span data-v-12985433${_scopeId2}><span class="text-overline" data-v-12985433${_scopeId2}><i class="mdi mdi-brightness-1 text-primary mx-1" data-v-12985433${_scopeId2}></i></span><span class="text-grey-darken-1 font-weight-medium mr-1" data-v-12985433${_scopeId2}>2020</span></span></div><div class="d-flex align-center px-2" data-v-12985433${_scopeId2}><span data-v-12985433${_scopeId2}><span class="text-overline" data-v-12985433${_scopeId2}><i class="mdi mdi-brightness-1 text-warning mx-1" data-v-12985433${_scopeId2}></i></span><span class="text-grey-darken-1 font-weight-medium mr-1" data-v-12985433${_scopeId2}>2019 </span></span></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "d-flex align-center mb-5" }, [
                      createVNode("h2", { class: "title text-h6 font-weight-medium" }, "\u0E22\u0E2D\u0E14\u0E02\u0E32\u0E22\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14"),
                      createVNode("div", { class: "ml-auto" }, [
                        createVNode(_component_v_select, {
                          modelValue: unref(select),
                          "onUpdate:modelValue": ($event) => isRef(select) ? select.value = $event : null,
                          items: unref(items),
                          "hide-details": "auto",
                          variant: "outlined",
                          density: "compact",
                          "single-line": ""
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                      ])
                    ]),
                    createVNode(_component_v_divider),
                    createVNode("div", { class: "border-top mt-5 d-flex align-center" }, [
                      createVNode("h6", { class: "text-subtitle-1 text-grey-darken-1 font-weight-regular" }, " \u0E22\u0E2D\u0E14\u0E02\u0E32\u0E22\u0E17\u0E31\u0E49\u0E07\u0E1B\u0E35 "),
                      createVNode("div", { class: "ml-auto" }, [
                        createVNode("h3", { class: "h3 title font-weight-bold" }, "8,364,398")
                      ])
                    ]),
                    unref(elementVisible) ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "mt-5 pt-5 position-relative"
                    }, [
                      createVNode(_component_apexchart, {
                        type: "donut",
                        height: "280px",
                        options: unref(TotalSales$1).chartOptions,
                        series: unref(TotalSales$1).series
                      }, null, 8, ["options", "series"]),
                      createVNode(_component_v_icon, {
                        icon: "mdi-cart-outline",
                        class: "text-grey-darken-1 total-sales-icon",
                        size: "35"
                      })
                    ])) : createCommentVNode("", true),
                    createVNode("div", { class: "d-flex align-center justify-space-between mt-9" }, [
                      createVNode("div", { class: "d-flex align-center px-2" }, [
                        createVNode("span", null, [
                          createVNode("span", { class: "text-overline" }, [
                            createVNode("i", { class: "mdi mdi-brightness-1 text-secondary mx-1" })
                          ]),
                          createVNode("span", { class: "text-grey-darken-1 font-weight-medium mr-1" }, "2021")
                        ])
                      ]),
                      createVNode("div", { class: "d-flex align-center px-2" }, [
                        createVNode("span", null, [
                          createVNode("span", { class: "text-overline" }, [
                            createVNode("i", { class: "mdi mdi-brightness-1 text-primary mx-1" })
                          ]),
                          createVNode("span", { class: "text-grey-darken-1 font-weight-medium mr-1" }, "2020")
                        ])
                      ]),
                      createVNode("div", { class: "d-flex align-center px-2" }, [
                        createVNode("span", null, [
                          createVNode("span", { class: "text-overline" }, [
                            createVNode("i", { class: "mdi mdi-brightness-1 text-warning mx-1" })
                          ]),
                          createVNode("span", { class: "text-grey-darken-1 font-weight-medium mr-1" }, "2019 ")
                        ])
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_card_text, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "d-flex align-center mb-5" }, [
                    createVNode("h2", { class: "title text-h6 font-weight-medium" }, "\u0E22\u0E2D\u0E14\u0E02\u0E32\u0E22\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14"),
                    createVNode("div", { class: "ml-auto" }, [
                      createVNode(_component_v_select, {
                        modelValue: unref(select),
                        "onUpdate:modelValue": ($event) => isRef(select) ? select.value = $event : null,
                        items: unref(items),
                        "hide-details": "auto",
                        variant: "outlined",
                        density: "compact",
                        "single-line": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                    ])
                  ]),
                  createVNode(_component_v_divider),
                  createVNode("div", { class: "border-top mt-5 d-flex align-center" }, [
                    createVNode("h6", { class: "text-subtitle-1 text-grey-darken-1 font-weight-regular" }, " \u0E22\u0E2D\u0E14\u0E02\u0E32\u0E22\u0E17\u0E31\u0E49\u0E07\u0E1B\u0E35 "),
                    createVNode("div", { class: "ml-auto" }, [
                      createVNode("h3", { class: "h3 title font-weight-bold" }, "8,364,398")
                    ])
                  ]),
                  unref(elementVisible) ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "mt-5 pt-5 position-relative"
                  }, [
                    createVNode(_component_apexchart, {
                      type: "donut",
                      height: "280px",
                      options: unref(TotalSales$1).chartOptions,
                      series: unref(TotalSales$1).series
                    }, null, 8, ["options", "series"]),
                    createVNode(_component_v_icon, {
                      icon: "mdi-cart-outline",
                      class: "text-grey-darken-1 total-sales-icon",
                      size: "35"
                    })
                  ])) : createCommentVNode("", true),
                  createVNode("div", { class: "d-flex align-center justify-space-between mt-9" }, [
                    createVNode("div", { class: "d-flex align-center px-2" }, [
                      createVNode("span", null, [
                        createVNode("span", { class: "text-overline" }, [
                          createVNode("i", { class: "mdi mdi-brightness-1 text-secondary mx-1" })
                        ]),
                        createVNode("span", { class: "text-grey-darken-1 font-weight-medium mr-1" }, "2021")
                      ])
                    ]),
                    createVNode("div", { class: "d-flex align-center px-2" }, [
                      createVNode("span", null, [
                        createVNode("span", { class: "text-overline" }, [
                          createVNode("i", { class: "mdi mdi-brightness-1 text-primary mx-1" })
                        ]),
                        createVNode("span", { class: "text-grey-darken-1 font-weight-medium mr-1" }, "2020")
                      ])
                    ]),
                    createVNode("div", { class: "d-flex align-center px-2" }, [
                      createVNode("span", null, [
                        createVNode("span", { class: "text-overline" }, [
                          createVNode("i", { class: "mdi mdi-brightness-1 text-warning mx-1" })
                        ]),
                        createVNode("span", { class: "text-grey-darken-1 font-weight-medium mr-1" }, "2019 ")
                      ])
                    ])
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dashboardComponents/modern/total-sales/TotalSales.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const TotalSales = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["__scopeId", "data-v-12985433"]]);
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "ProductPerformance",
  __ssrInlineRender: true,
  setup(__props) {
    const select = ref("March");
    const items = ref(["March", "April", "May", "June"]);
    const monthtable = ref([
      {
        img: "/1.jpg",
        activestate: "",
        leadname: "Sunil Joshi",
        leademail: "Web Designer",
        projectname: "Elite Admin",
        statuscolor: "blue lighten-1 white--text",
        statustext: "Low",
        money: "$3.9K"
      },
      {
        img: "/2.jpg",
        activestate: "",
        leadname: "Andrew",
        leademail: "Project Manager",
        projectname: "Real Homes",
        statuscolor: "info",
        statustext: "Medium",
        money: "$23.9K"
      },
      {
        img: "/3.jpg",
        activestate: "",
        leadname: "Bhavesh patel",
        leademail: "Developer",
        projectname: "MedicalPro Theme",
        statuscolor: "warning",
        statustext: "High",
        money: "$12.9K"
      },
      {
        img: "/4.jpg",
        activestate: "",
        leadname: "Nirav Joshi",
        leademail: "Frontend Eng",
        projectname: "Elite Admin",
        statuscolor: "error",
        statustext: "Low",
        money: "$10.9K"
      },
      {
        img: "/5.jpg",
        activestate: "",
        leadname: "Micheal Doe",
        leademail: "Content Writer",
        projectname: "Helping Hands",
        statuscolor: "success",
        statustext: "Low",
        money: "$12.9K"
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_card = resolveComponent("v-card");
      const _component_v_card_text = resolveComponent("v-card-text");
      const _component_v_spacer = resolveComponent("v-spacer");
      const _component_v_select = resolveComponent("v-select");
      const _component_v_table = resolveComponent("v-table");
      const _component_v_avatar = resolveComponent("v-avatar");
      const _component_v_chip = resolveComponent("v-chip");
      _push(ssrRenderComponent(_component_v_card, mergeProps({
        flat: "",
        class: "w-100"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_card_text, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="d-sm-flex align-center"${_scopeId2}><div${_scopeId2}><h2 class="title text-h6 font-weight-medium"${_scopeId2}>\u0E2A\u0E16\u0E34\u0E15\u0E34\u0E22\u0E2D\u0E14\u0E02\u0E32\u0E22\u0E23\u0E32\u0E22\u0E04\u0E19</h2></div>`);
                  _push3(ssrRenderComponent(_component_v_spacer, null, null, _parent3, _scopeId2));
                  _push3(`<div class="ml-auto"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_v_select, {
                    modelValue: unref(select),
                    "onUpdate:modelValue": ($event) => isRef(select) ? select.value = $event : null,
                    items: unref(items),
                    variant: "outlined",
                    density: "compact",
                    "hide-details": ""
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                  _push3(ssrRenderComponent(_component_v_table, { class: "month-table mt-5" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<thead${_scopeId3}><tr${_scopeId3}><th class="font-weight-medium text-subtitle-1"${_scopeId3}>Assigned</th><th class="font-weight-medium text-subtitle-1"${_scopeId3}>Name</th><th class="font-weight-medium text-subtitle-1"${_scopeId3}>Priority</th><th class="font-weight-medium text-subtitle-1"${_scopeId3}>Budget</th></tr></thead><tbody${_scopeId3}><!--[-->`);
                        ssrRenderList(unref(monthtable), (item) => {
                          _push4(`<tr class="${ssrRenderClass([item.activestate, "month-item"])}"${_scopeId3}><td${_scopeId3}><div class="d-flex align-center"${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_v_avatar, { size: "40" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<img${ssrRenderAttr("src", `/images/users/${item.img}`)}${ssrRenderAttr("alt", item.img)} width="40"${_scopeId4}>`);
                              } else {
                                return [
                                  createVNode("img", {
                                    src: `/images/users/${item.img}`,
                                    alt: item.img,
                                    width: "40"
                                  }, null, 8, ["src", "alt"])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(`<div class="mx-3"${_scopeId3}><h4 class="font-weight-medium text-subtitle-1 text-no-wrap"${_scopeId3}>${ssrInterpolate(item.leadname)}</h4></div></div></td><td${_scopeId3}><h5 class="font-weight-medium text-no-wrap text-body-2 text-grey-darken-1"${_scopeId3}>${ssrInterpolate(item.projectname)}</h5></td><td${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_v_chip, {
                            class: "ma-2",
                            color: item.statuscolor,
                            size: "small",
                            label: ""
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(item.statustext)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(item.statustext), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(`</td><td${_scopeId3}><h4${_scopeId3}>${ssrInterpolate(item.money)}</h4></td></tr>`);
                        });
                        _push4(`<!--]--></tbody>`);
                      } else {
                        return [
                          createVNode("thead", null, [
                            createVNode("tr", null, [
                              createVNode("th", { class: "font-weight-medium text-subtitle-1" }, "Assigned"),
                              createVNode("th", { class: "font-weight-medium text-subtitle-1" }, "Name"),
                              createVNode("th", { class: "font-weight-medium text-subtitle-1" }, "Priority"),
                              createVNode("th", { class: "font-weight-medium text-subtitle-1" }, "Budget")
                            ])
                          ]),
                          createVNode("tbody", null, [
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(monthtable), (item) => {
                              return openBlock(), createBlock("tr", {
                                key: item.leadname,
                                class: [item.activestate, "month-item"]
                              }, [
                                createVNode("td", null, [
                                  createVNode("div", { class: "d-flex align-center" }, [
                                    createVNode(_component_v_avatar, { size: "40" }, {
                                      default: withCtx(() => [
                                        createVNode("img", {
                                          src: `/images/users/${item.img}`,
                                          alt: item.img,
                                          width: "40"
                                        }, null, 8, ["src", "alt"])
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode("div", { class: "mx-3" }, [
                                      createVNode("h4", { class: "font-weight-medium text-subtitle-1 text-no-wrap" }, toDisplayString(item.leadname), 1)
                                    ])
                                  ])
                                ]),
                                createVNode("td", null, [
                                  createVNode("h5", { class: "font-weight-medium text-no-wrap text-body-2 text-grey-darken-1" }, toDisplayString(item.projectname), 1)
                                ]),
                                createVNode("td", null, [
                                  createVNode(_component_v_chip, {
                                    class: "ma-2",
                                    color: item.statuscolor,
                                    size: "small",
                                    label: ""
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(item.statustext), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["color"])
                                ]),
                                createVNode("td", null, [
                                  createVNode("h4", null, toDisplayString(item.money), 1)
                                ])
                              ], 2);
                            }), 128))
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("div", { class: "d-sm-flex align-center" }, [
                      createVNode("div", null, [
                        createVNode("h2", { class: "title text-h6 font-weight-medium" }, "\u0E2A\u0E16\u0E34\u0E15\u0E34\u0E22\u0E2D\u0E14\u0E02\u0E32\u0E22\u0E23\u0E32\u0E22\u0E04\u0E19")
                      ]),
                      createVNode(_component_v_spacer),
                      createVNode("div", { class: "ml-auto" }, [
                        createVNode(_component_v_select, {
                          modelValue: unref(select),
                          "onUpdate:modelValue": ($event) => isRef(select) ? select.value = $event : null,
                          items: unref(items),
                          variant: "outlined",
                          density: "compact",
                          "hide-details": ""
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                      ])
                    ]),
                    createVNode(_component_v_table, { class: "month-table mt-5" }, {
                      default: withCtx(() => [
                        createVNode("thead", null, [
                          createVNode("tr", null, [
                            createVNode("th", { class: "font-weight-medium text-subtitle-1" }, "Assigned"),
                            createVNode("th", { class: "font-weight-medium text-subtitle-1" }, "Name"),
                            createVNode("th", { class: "font-weight-medium text-subtitle-1" }, "Priority"),
                            createVNode("th", { class: "font-weight-medium text-subtitle-1" }, "Budget")
                          ])
                        ]),
                        createVNode("tbody", null, [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(monthtable), (item) => {
                            return openBlock(), createBlock("tr", {
                              key: item.leadname,
                              class: [item.activestate, "month-item"]
                            }, [
                              createVNode("td", null, [
                                createVNode("div", { class: "d-flex align-center" }, [
                                  createVNode(_component_v_avatar, { size: "40" }, {
                                    default: withCtx(() => [
                                      createVNode("img", {
                                        src: `/images/users/${item.img}`,
                                        alt: item.img,
                                        width: "40"
                                      }, null, 8, ["src", "alt"])
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode("div", { class: "mx-3" }, [
                                    createVNode("h4", { class: "font-weight-medium text-subtitle-1 text-no-wrap" }, toDisplayString(item.leadname), 1)
                                  ])
                                ])
                              ]),
                              createVNode("td", null, [
                                createVNode("h5", { class: "font-weight-medium text-no-wrap text-body-2 text-grey-darken-1" }, toDisplayString(item.projectname), 1)
                              ]),
                              createVNode("td", null, [
                                createVNode(_component_v_chip, {
                                  class: "ma-2",
                                  color: item.statuscolor,
                                  size: "small",
                                  label: ""
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(item.statustext), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["color"])
                              ]),
                              createVNode("td", null, [
                                createVNode("h4", null, toDisplayString(item.money), 1)
                              ])
                            ], 2);
                          }), 128))
                        ])
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
              createVNode(_component_v_card_text, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "d-sm-flex align-center" }, [
                    createVNode("div", null, [
                      createVNode("h2", { class: "title text-h6 font-weight-medium" }, "\u0E2A\u0E16\u0E34\u0E15\u0E34\u0E22\u0E2D\u0E14\u0E02\u0E32\u0E22\u0E23\u0E32\u0E22\u0E04\u0E19")
                    ]),
                    createVNode(_component_v_spacer),
                    createVNode("div", { class: "ml-auto" }, [
                      createVNode(_component_v_select, {
                        modelValue: unref(select),
                        "onUpdate:modelValue": ($event) => isRef(select) ? select.value = $event : null,
                        items: unref(items),
                        variant: "outlined",
                        density: "compact",
                        "hide-details": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                    ])
                  ]),
                  createVNode(_component_v_table, { class: "month-table mt-5" }, {
                    default: withCtx(() => [
                      createVNode("thead", null, [
                        createVNode("tr", null, [
                          createVNode("th", { class: "font-weight-medium text-subtitle-1" }, "Assigned"),
                          createVNode("th", { class: "font-weight-medium text-subtitle-1" }, "Name"),
                          createVNode("th", { class: "font-weight-medium text-subtitle-1" }, "Priority"),
                          createVNode("th", { class: "font-weight-medium text-subtitle-1" }, "Budget")
                        ])
                      ]),
                      createVNode("tbody", null, [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(monthtable), (item) => {
                          return openBlock(), createBlock("tr", {
                            key: item.leadname,
                            class: [item.activestate, "month-item"]
                          }, [
                            createVNode("td", null, [
                              createVNode("div", { class: "d-flex align-center" }, [
                                createVNode(_component_v_avatar, { size: "40" }, {
                                  default: withCtx(() => [
                                    createVNode("img", {
                                      src: `/images/users/${item.img}`,
                                      alt: item.img,
                                      width: "40"
                                    }, null, 8, ["src", "alt"])
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode("div", { class: "mx-3" }, [
                                  createVNode("h4", { class: "font-weight-medium text-subtitle-1 text-no-wrap" }, toDisplayString(item.leadname), 1)
                                ])
                              ])
                            ]),
                            createVNode("td", null, [
                              createVNode("h5", { class: "font-weight-medium text-no-wrap text-body-2 text-grey-darken-1" }, toDisplayString(item.projectname), 1)
                            ]),
                            createVNode("td", null, [
                              createVNode(_component_v_chip, {
                                class: "ma-2",
                                color: item.statuscolor,
                                size: "small",
                                label: ""
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(item.statustext), 1)
                                ]),
                                _: 2
                              }, 1032, ["color"])
                            ]),
                            createVNode("td", null, [
                              createVNode("h4", null, toDisplayString(item.money), 1)
                            ])
                          ], 2);
                        }), 128))
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dashboardComponents/modern/product-performance/ProductPerformance.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _imports_0$2 = "" + globalThis.__publicAssetsURL("images/background/blog-bg-2x.jpg");
const _imports_0$1 = "" + globalThis.__publicAssetsURL("images/users/1.jpg");
const _imports_5 = "" + globalThis.__publicAssetsURL("images/users/2.jpg");
const _imports_6 = "" + globalThis.__publicAssetsURL("images/users/3.jpg");
const _sfc_main$9 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  const _component_v_card = resolveComponent("v-card");
  const _component_v_card_text = resolveComponent("v-card-text");
  const _component_v_icon = resolveComponent("v-icon");
  const _component_v_chip = resolveComponent("v-chip");
  const _component_v_divider = resolveComponent("v-divider");
  const _component_v_avatar = resolveComponent("v-avatar");
  const _component_v_btn = resolveComponent("v-btn");
  _push(ssrRenderComponent(_component_v_card, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img style="${ssrRenderStyle({ "width": "100%" })}"${ssrRenderAttr("src", _imports_0$2)} alt="blog background"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_v_card_text, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<h3 class="font-weight-medium d-flex align-center"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_v_icon, {
                icon: "mdi-clock-outline",
                size: "20",
                class: "mr-1"
              }, null, _parent3, _scopeId2));
              _push3(` 22 March, 2021 </h3><h5 class="title font-weight-medium mb-2 mt-5 text-h6"${_scopeId2}> Super awesome, Vue 3 is coming soon! </h5>`);
              _push3(ssrRenderComponent(_component_v_chip, {
                class: "mr-2",
                label: "",
                size: "small",
                color: "primary"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(` Medium `);
                  } else {
                    return [
                      createTextVNode(" Medium ")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_chip, {
                class: "mr-2",
                label: "",
                size: "small",
                color: "error"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(` Low `);
                  } else {
                    return [
                      createTextVNode(" Low ")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_divider, { class: "mt-7" }, null, _parent3, _scopeId2));
              _push3(`<div class="d-flex align-center mt-4"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_v_avatar, { size: "40" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img width="40"${ssrRenderAttr("src", _imports_0$1)} alt="John"${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("img", {
                        width: "40",
                        src: _imports_0$1,
                        alt: "John"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_avatar, {
                size: "40",
                class: "ml-2"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img width="40"${ssrRenderAttr("src", _imports_5)} alt="John"${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("img", {
                        width: "40",
                        src: _imports_5,
                        alt: "John"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_avatar, {
                size: "40",
                class: "ml-2"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img width="40"${ssrRenderAttr("src", _imports_6)} alt="John"${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("img", {
                        width: "40",
                        src: _imports_6,
                        alt: "John"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`<div class="ml-auto"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_v_btn, {
                icon: "",
                color: "inherit"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_v_icon, {
                      icon: "mdi-chat-outline",
                      size: "22",
                      class: "text-grey-darken-1"
                    }, null, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_v_icon, {
                        icon: "mdi-chat-outline",
                        size: "22",
                        class: "text-grey-darken-1"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</div></div>`);
            } else {
              return [
                createVNode("h3", { class: "font-weight-medium d-flex align-center" }, [
                  createVNode(_component_v_icon, {
                    icon: "mdi-clock-outline",
                    size: "20",
                    class: "mr-1"
                  }),
                  createTextVNode(" 22 March, 2021 ")
                ]),
                createVNode("h5", { class: "title font-weight-medium mb-2 mt-5 text-h6" }, " Super awesome, Vue 3 is coming soon! "),
                createVNode(_component_v_chip, {
                  class: "mr-2",
                  label: "",
                  size: "small",
                  color: "primary"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Medium ")
                  ]),
                  _: 1
                }),
                createVNode(_component_v_chip, {
                  class: "mr-2",
                  label: "",
                  size: "small",
                  color: "error"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Low ")
                  ]),
                  _: 1
                }),
                createVNode(_component_v_divider, { class: "mt-7" }),
                createVNode("div", { class: "d-flex align-center mt-4" }, [
                  createVNode(_component_v_avatar, { size: "40" }, {
                    default: withCtx(() => [
                      createVNode("img", {
                        width: "40",
                        src: _imports_0$1,
                        alt: "John"
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_avatar, {
                    size: "40",
                    class: "ml-2"
                  }, {
                    default: withCtx(() => [
                      createVNode("img", {
                        width: "40",
                        src: _imports_5,
                        alt: "John"
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_avatar, {
                    size: "40",
                    class: "ml-2"
                  }, {
                    default: withCtx(() => [
                      createVNode("img", {
                        width: "40",
                        src: _imports_6,
                        alt: "John"
                      })
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "ml-auto" }, [
                    createVNode(_component_v_btn, {
                      icon: "",
                      color: "inherit"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_icon, {
                          icon: "mdi-chat-outline",
                          size: "22",
                          class: "text-grey-darken-1"
                        })
                      ]),
                      _: 1
                    })
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode("img", {
            style: { "width": "100%" },
            src: _imports_0$2,
            alt: "blog background"
          }),
          createVNode(_component_v_card_text, null, {
            default: withCtx(() => [
              createVNode("h3", { class: "font-weight-medium d-flex align-center" }, [
                createVNode(_component_v_icon, {
                  icon: "mdi-clock-outline",
                  size: "20",
                  class: "mr-1"
                }),
                createTextVNode(" 22 March, 2021 ")
              ]),
              createVNode("h5", { class: "title font-weight-medium mb-2 mt-5 text-h6" }, " Super awesome, Vue 3 is coming soon! "),
              createVNode(_component_v_chip, {
                class: "mr-2",
                label: "",
                size: "small",
                color: "primary"
              }, {
                default: withCtx(() => [
                  createTextVNode(" Medium ")
                ]),
                _: 1
              }),
              createVNode(_component_v_chip, {
                class: "mr-2",
                label: "",
                size: "small",
                color: "error"
              }, {
                default: withCtx(() => [
                  createTextVNode(" Low ")
                ]),
                _: 1
              }),
              createVNode(_component_v_divider, { class: "mt-7" }),
              createVNode("div", { class: "d-flex align-center mt-4" }, [
                createVNode(_component_v_avatar, { size: "40" }, {
                  default: withCtx(() => [
                    createVNode("img", {
                      width: "40",
                      src: _imports_0$1,
                      alt: "John"
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_v_avatar, {
                  size: "40",
                  class: "ml-2"
                }, {
                  default: withCtx(() => [
                    createVNode("img", {
                      width: "40",
                      src: _imports_5,
                      alt: "John"
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_v_avatar, {
                  size: "40",
                  class: "ml-2"
                }, {
                  default: withCtx(() => [
                    createVNode("img", {
                      width: "40",
                      src: _imports_6,
                      alt: "John"
                    })
                  ]),
                  _: 1
                }),
                createVNode("div", { class: "ml-auto" }, [
                  createVNode(_component_v_btn, {
                    icon: "",
                    color: "inherit"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_icon, {
                        icon: "mdi-chat-outline",
                        size: "22",
                        class: "text-grey-darken-1"
                      })
                    ]),
                    _: 1
                  })
                ])
              ])
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dashboardComponents/modern/blog-card/BlogCard.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const BlogCard = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$2]]);
const WeeklyStats = {
  series: [
    {
      name: "Weekly Stats",
      data: [40, 60, 50, 65]
    }
  ],
  chartOptions: {
    colors: ["#03c9d7"],
    fill: {
      colors: "#03c9d7",
      opacity: 0.05,
      type: "solid"
    },
    chart: {
      type: "area",
      height: 135,
      toolbar: {
        show: false
      },
      foreColor: "#adb0bb",
      fontFamily: "'DM Sans',sans-serif",
      sparkline: {
        enabled: true
      }
    },
    dataLabels: {
      enabled: false
    },
    markers: {
      size: 0
    },
    legend: {
      show: false
    },
    stroke: {
      show: true,
      width: 2,
      curve: "smooth"
    },
    tooltip: {
      theme: "dark"
    }
  }
};
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "WeeklyStats",
  __ssrInlineRender: true,
  setup(__props) {
    const items = ref([
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me 2" }
    ]);
    const statsData = ref([
      {
        color: "primary",
        icon: "mdi-cart-outline",
        title: "Top Sales",
        desc: "Johnathan Doe",
        percent: 68
      },
      {
        color: "warning",
        icon: "mdi-star-outline",
        title: "Best Seller",
        desc: "MaterialPro Admin",
        percent: 45
      },
      {
        color: "success",
        icon: "mdi-message-outline",
        title: "Most Commented",
        desc: "Ample Admin",
        percent: 10
      }
    ]);
    const elementVisible = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_card = resolveComponent("v-card");
      const _component_v_card_text = resolveComponent("v-card-text");
      const _component_v_spacer = resolveComponent("v-spacer");
      const _component_v_menu = resolveComponent("v-menu");
      const _component_v_btn = resolveComponent("v-btn");
      const _component_v_icon = resolveComponent("v-icon");
      const _component_v_list = resolveComponent("v-list");
      const _component_v_list_item = resolveComponent("v-list-item");
      const _component_v_list_item_title = resolveComponent("v-list-item-title");
      const _component_v_chip = resolveComponent("v-chip");
      const _component_apexchart = resolveComponent("apexchart");
      _push(ssrRenderComponent(_component_v_card, mergeProps({ class: "overflow-hidden" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_card_text, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="d-flex align-center"${_scopeId2}><h2 class="title text-h6 font-weight-medium"${_scopeId2}>\u0E2A\u0E16\u0E34\u0E15\u0E34\u0E23\u0E32\u0E22\u0E2A\u0E31\u0E1B\u0E14\u0E32\u0E2B\u0E4C</h2>`);
                  _push3(ssrRenderComponent(_component_v_spacer, null, null, _parent3, _scopeId2));
                  _push3(`<div class="ml-auto"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_v_menu, {
                    bottom: "",
                    left: ""
                  }, {
                    activator: withCtx(({ props }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_btn, mergeProps({
                          icon: "",
                          color: "inherit"
                        }, props), {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_icon, {
                                icon: "mdi-dots-horizontal",
                                size: "20"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_icon, {
                                  icon: "mdi-dots-horizontal",
                                  size: "20"
                                })
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_btn, mergeProps({
                            icon: "",
                            color: "inherit"
                          }, props), {
                            default: withCtx(() => [
                              createVNode(_component_v_icon, {
                                icon: "mdi-dots-horizontal",
                                size: "20"
                              })
                            ]),
                            _: 2
                          }, 1040)
                        ];
                      }
                    }),
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_list, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<!--[-->`);
                              ssrRenderList(unref(items), (item, i) => {
                                _push5(ssrRenderComponent(_component_v_list_item, { key: i }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_v_list_item_title, null, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(item.title)}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(item.title), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_v_list_item_title, null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(item.title), 1)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              });
                              _push5(`<!--]-->`);
                            } else {
                              return [
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(items), (item, i) => {
                                  return openBlock(), createBlock(_component_v_list_item, { key: i }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_list_item_title, null, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(item.title), 1)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 128))
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_list, null, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(items), (item, i) => {
                                return openBlock(), createBlock(_component_v_list_item, { key: i }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_list_item_title, null, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(item.title), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 128))
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></div><!--[-->`);
                  ssrRenderList(unref(statsData), (item, i) => {
                    _push3(`<div class="px-0"${_scopeId2}><div class="d-flex align-center py-4"${_scopeId2}><div class${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_v_btn, {
                      color: item.color,
                      icon: "",
                      size: "small",
                      elevation: "0",
                      class: "mr-3"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_v_icon, {
                            icon: item.icon,
                            size: "18"
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_v_icon, {
                              icon: item.icon,
                              size: "18"
                            }, null, 8, ["icon"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`</div><div class="ml-2"${_scopeId2}><h4 class="font-weight-medium text-subtitle-1 title"${_scopeId2}>${ssrInterpolate(item.title)}</h4><span class="text-grey-darken-1 text-subtitle-2 d-block text-truncate font-weight-regular"${_scopeId2}>${ssrInterpolate(item.desc)}</span></div><div class="ml-auto"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_v_chip, {
                      label: "",
                      size: "small",
                      class: "font-weight-bold",
                      color: "primary"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` +${ssrInterpolate(item.percent)}% `);
                        } else {
                          return [
                            createTextVNode(" +" + toDisplayString(item.percent) + "% ", 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`</div></div></div>`);
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    createVNode("div", { class: "d-flex align-center" }, [
                      createVNode("h2", { class: "title text-h6 font-weight-medium" }, "\u0E2A\u0E16\u0E34\u0E15\u0E34\u0E23\u0E32\u0E22\u0E2A\u0E31\u0E1B\u0E14\u0E32\u0E2B\u0E4C"),
                      createVNode(_component_v_spacer),
                      createVNode("div", { class: "ml-auto" }, [
                        createVNode(_component_v_menu, {
                          bottom: "",
                          left: ""
                        }, {
                          activator: withCtx(({ props }) => [
                            createVNode(_component_v_btn, mergeProps({
                              icon: "",
                              color: "inherit"
                            }, props), {
                              default: withCtx(() => [
                                createVNode(_component_v_icon, {
                                  icon: "mdi-dots-horizontal",
                                  size: "20"
                                })
                              ]),
                              _: 2
                            }, 1040)
                          ]),
                          default: withCtx(() => [
                            createVNode(_component_v_list, null, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(items), (item, i) => {
                                  return openBlock(), createBlock(_component_v_list_item, { key: i }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_list_item_title, null, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(item.title), 1)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 128))
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ])
                    ]),
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(statsData), (item, i) => {
                      return openBlock(), createBlock("div", {
                        class: "px-0",
                        key: i
                      }, [
                        createVNode("div", { class: "d-flex align-center py-4" }, [
                          createVNode("div", { class: "" }, [
                            createVNode(_component_v_btn, {
                              color: item.color,
                              icon: "",
                              size: "small",
                              elevation: "0",
                              class: "mr-3"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_icon, {
                                  icon: item.icon,
                                  size: "18"
                                }, null, 8, ["icon"])
                              ]),
                              _: 2
                            }, 1032, ["color"])
                          ]),
                          createVNode("div", { class: "ml-2" }, [
                            createVNode("h4", { class: "font-weight-medium text-subtitle-1 title" }, toDisplayString(item.title), 1),
                            createVNode("span", { class: "text-grey-darken-1 text-subtitle-2 d-block text-truncate font-weight-regular" }, toDisplayString(item.desc), 1)
                          ]),
                          createVNode("div", { class: "ml-auto" }, [
                            createVNode(_component_v_chip, {
                              label: "",
                              size: "small",
                              class: "font-weight-bold",
                              color: "primary"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" +" + toDisplayString(item.percent) + "% ", 1)
                              ]),
                              _: 2
                            }, 1024)
                          ])
                        ])
                      ]);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            if (unref(elementVisible)) {
              _push2(`<div class="position-relative"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_apexchart, {
                type: "area",
                height: "135px",
                options: unref(WeeklyStats).chartOptions,
                series: unref(WeeklyStats).series
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode(_component_v_card_text, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "d-flex align-center" }, [
                    createVNode("h2", { class: "title text-h6 font-weight-medium" }, "\u0E2A\u0E16\u0E34\u0E15\u0E34\u0E23\u0E32\u0E22\u0E2A\u0E31\u0E1B\u0E14\u0E32\u0E2B\u0E4C"),
                    createVNode(_component_v_spacer),
                    createVNode("div", { class: "ml-auto" }, [
                      createVNode(_component_v_menu, {
                        bottom: "",
                        left: ""
                      }, {
                        activator: withCtx(({ props }) => [
                          createVNode(_component_v_btn, mergeProps({
                            icon: "",
                            color: "inherit"
                          }, props), {
                            default: withCtx(() => [
                              createVNode(_component_v_icon, {
                                icon: "mdi-dots-horizontal",
                                size: "20"
                              })
                            ]),
                            _: 2
                          }, 1040)
                        ]),
                        default: withCtx(() => [
                          createVNode(_component_v_list, null, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(items), (item, i) => {
                                return openBlock(), createBlock(_component_v_list_item, { key: i }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_list_item_title, null, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(item.title), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 128))
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(statsData), (item, i) => {
                    return openBlock(), createBlock("div", {
                      class: "px-0",
                      key: i
                    }, [
                      createVNode("div", { class: "d-flex align-center py-4" }, [
                        createVNode("div", { class: "" }, [
                          createVNode(_component_v_btn, {
                            color: item.color,
                            icon: "",
                            size: "small",
                            elevation: "0",
                            class: "mr-3"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_icon, {
                                icon: item.icon,
                                size: "18"
                              }, null, 8, ["icon"])
                            ]),
                            _: 2
                          }, 1032, ["color"])
                        ]),
                        createVNode("div", { class: "ml-2" }, [
                          createVNode("h4", { class: "font-weight-medium text-subtitle-1 title" }, toDisplayString(item.title), 1),
                          createVNode("span", { class: "text-grey-darken-1 text-subtitle-2 d-block text-truncate font-weight-regular" }, toDisplayString(item.desc), 1)
                        ]),
                        createVNode("div", { class: "ml-auto" }, [
                          createVNode(_component_v_chip, {
                            label: "",
                            size: "small",
                            class: "font-weight-bold",
                            color: "primary"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" +" + toDisplayString(item.percent) + "% ", 1)
                            ]),
                            _: 2
                          }, 1024)
                        ])
                      ])
                    ]);
                  }), 128))
                ]),
                _: 1
              }),
              unref(elementVisible) ? (openBlock(), createBlock("div", {
                key: 0,
                class: "position-relative"
              }, [
                createVNode(_component_apexchart, {
                  type: "area",
                  height: "135px",
                  options: unref(WeeklyStats).chartOptions,
                  series: unref(WeeklyStats).series
                }, null, 8, ["options", "series"])
              ])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dashboardComponents/modern/weekly-stats/WeeklyStats.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "MedicalProBranding",
  __ssrInlineRender: true,
  setup(__props) {
    const items = ref([
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me 2" }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_card = resolveComponent("v-card");
      const _component_v_card_text = resolveComponent("v-card-text");
      const _component_v_spacer = resolveComponent("v-spacer");
      const _component_v_menu = resolveComponent("v-menu");
      const _component_v_btn = resolveComponent("v-btn");
      const _component_v_icon = resolveComponent("v-icon");
      const _component_v_list = resolveComponent("v-list");
      const _component_v_list_item = resolveComponent("v-list-item");
      const _component_v_list_item_title = resolveComponent("v-list-item-title");
      const _component_v_chip = resolveComponent("v-chip");
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_divider = resolveComponent("v-divider");
      const _component_v_avatar = resolveComponent("v-avatar");
      _push(ssrRenderComponent(_component_v_card, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_card_text, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="d-flex align-center mb-4"${_scopeId2}><h2 class="title text-h6 font-weight-medium"${_scopeId2}>\u0E41\u0E1A\u0E23\u0E19\u0E14\u0E4C\u0E43\u0E19\u0E40\u0E04\u0E23\u0E37\u0E2D</h2>`);
                  _push3(ssrRenderComponent(_component_v_spacer, null, null, _parent3, _scopeId2));
                  _push3(`<div class="ml-auto"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_v_menu, {
                    bottom: "",
                    left: ""
                  }, {
                    activator: withCtx(({ props }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_btn, mergeProps({
                          icon: "",
                          color: "inherit"
                        }, props), {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_icon, {
                                icon: "mdi-dots-horizontal",
                                size: "20"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_icon, {
                                  icon: "mdi-dots-horizontal",
                                  size: "20"
                                })
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_btn, mergeProps({
                            icon: "",
                            color: "inherit"
                          }, props), {
                            default: withCtx(() => [
                              createVNode(_component_v_icon, {
                                icon: "mdi-dots-horizontal",
                                size: "20"
                              })
                            ]),
                            _: 2
                          }, 1040)
                        ];
                      }
                    }),
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_list, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<!--[-->`);
                              ssrRenderList(unref(items), (item, i) => {
                                _push5(ssrRenderComponent(_component_v_list_item, { key: i }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_v_list_item_title, null, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(item.title)}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(item.title), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_v_list_item_title, null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(item.title), 1)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              });
                              _push5(`<!--]-->`);
                            } else {
                              return [
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(items), (item, i) => {
                                  return openBlock(), createBlock(_component_v_list_item, { key: i }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_list_item_title, null, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(item.title), 1)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 128))
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_list, null, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(items), (item, i) => {
                                return openBlock(), createBlock(_component_v_list_item, { key: i }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_list_item_title, null, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(item.title), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 128))
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                  _push3(ssrRenderComponent(_component_v_chip, {
                    color: "primary",
                    label: "",
                    size: "small"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` 16 APR, 2022 `);
                      } else {
                        return [
                          createTextVNode(" 16 APR, 2022 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_row, { class: "mt-3" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_col, { cols: "4" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<h4 class="text-subtitle-2 text-grey-darken-1 font-weight-regular"${_scopeId4}> Due Date </h4><h5 class="font-weight-medium title text-body-2 text-no-wrap"${_scopeId4}> Oct 23, 2022 </h5>`);
                            } else {
                              return [
                                createVNode("h4", { class: "text-subtitle-2 text-grey-darken-1 font-weight-regular" }, " Due Date "),
                                createVNode("h5", { class: "font-weight-medium title text-body-2 text-no-wrap" }, " Oct 23, 2022 ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_col, { cols: "4" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<h4 class="text-subtitle-2 text-grey-darken-1 font-weight-regular"${_scopeId4}> Budget </h4><h5 class="font-weight-medium title text-body-2 text-no-wrap"${_scopeId4}> $98,500 </h5>`);
                            } else {
                              return [
                                createVNode("h4", { class: "text-subtitle-2 text-grey-darken-1 font-weight-regular" }, " Budget "),
                                createVNode("h5", { class: "font-weight-medium title text-body-2 text-no-wrap" }, " $98,500 ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_col, { cols: "4" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<h4 class="text-subtitle-2 text-grey-darken-1 font-weight-regular"${_scopeId4}> Expense </h4><h5 class="font-weight-medium title text-body-2 text-no-wrap"${_scopeId4}> $63,000 </h5>`);
                            } else {
                              return [
                                createVNode("h4", { class: "text-subtitle-2 text-grey-darken-1 font-weight-regular" }, " Expense "),
                                createVNode("h5", { class: "font-weight-medium title text-body-2 text-no-wrap" }, " $63,000 ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_col, { cols: "4" }, {
                            default: withCtx(() => [
                              createVNode("h4", { class: "text-subtitle-2 text-grey-darken-1 font-weight-regular" }, " Due Date "),
                              createVNode("h5", { class: "font-weight-medium title text-body-2 text-no-wrap" }, " Oct 23, 2022 ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, { cols: "4" }, {
                            default: withCtx(() => [
                              createVNode("h4", { class: "text-subtitle-2 text-grey-darken-1 font-weight-regular" }, " Budget "),
                              createVNode("h5", { class: "font-weight-medium title text-body-2 text-no-wrap" }, " $98,500 ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, { cols: "4" }, {
                            default: withCtx(() => [
                              createVNode("h4", { class: "text-subtitle-2 text-grey-darken-1 font-weight-regular" }, " Expense "),
                              createVNode("h5", { class: "font-weight-medium title text-body-2 text-no-wrap" }, " $63,000 ")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_divider, { class: "my-3" }, null, _parent3, _scopeId2));
                  _push3(`<h5 class="title text-subtitle-1 font-weight-medium mb-2"${_scopeId2}>Teams</h5>`);
                  _push3(ssrRenderComponent(_component_v_chip, {
                    label: "",
                    size: "small",
                    color: "warning",
                    class: "mr-1"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Bootstrap `);
                      } else {
                        return [
                          createTextVNode(" Bootstrap ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_chip, {
                    label: "",
                    size: "small",
                    color: "error"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Angular `);
                      } else {
                        return [
                          createTextVNode(" Angular ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_divider, { class: "my-4" }, null, _parent3, _scopeId2));
                  _push3(`<h5 class="title text-subtitle-1 font-weight-medium mb-2"${_scopeId2}>Leaders</h5><div class="d-flex align-center"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_v_avatar, { size: "40" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<img width="40"${ssrRenderAttr("src", _imports_0$1)} alt="John"${_scopeId3}>`);
                      } else {
                        return [
                          createVNode("img", {
                            width: "40",
                            src: _imports_0$1,
                            alt: "John"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_avatar, {
                    size: "40",
                    class: "ml-2"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<img width="40"${ssrRenderAttr("src", _imports_5)} alt="John"${_scopeId3}>`);
                      } else {
                        return [
                          createVNode("img", {
                            width: "40",
                            src: _imports_5,
                            alt: "John"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_avatar, {
                    size: "40",
                    class: "ml-2"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<img width="40"${ssrRenderAttr("src", _imports_6)} alt="John"${_scopeId3}>`);
                      } else {
                        return [
                          createVNode("img", {
                            width: "40",
                            src: _imports_6,
                            alt: "John"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(_component_v_divider, { class: "my-4" }, null, _parent3, _scopeId2));
                  _push3(`<div class="d-flex justify-space-between align-center mt-5"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_v_btn, { color: "secondary" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u0E40\u0E1E\u0E34\u0E48\u0E21`);
                      } else {
                        return [
                          createTextVNode("\u0E40\u0E1E\u0E34\u0E48\u0E21")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<p class="text-body-2 ma-0 text-grey-darken-1"${_scopeId2}> 36 Recent Transactions </p></div>`);
                } else {
                  return [
                    createVNode("div", { class: "d-flex align-center mb-4" }, [
                      createVNode("h2", { class: "title text-h6 font-weight-medium" }, "\u0E41\u0E1A\u0E23\u0E19\u0E14\u0E4C\u0E43\u0E19\u0E40\u0E04\u0E23\u0E37\u0E2D"),
                      createVNode(_component_v_spacer),
                      createVNode("div", { class: "ml-auto" }, [
                        createVNode(_component_v_menu, {
                          bottom: "",
                          left: ""
                        }, {
                          activator: withCtx(({ props }) => [
                            createVNode(_component_v_btn, mergeProps({
                              icon: "",
                              color: "inherit"
                            }, props), {
                              default: withCtx(() => [
                                createVNode(_component_v_icon, {
                                  icon: "mdi-dots-horizontal",
                                  size: "20"
                                })
                              ]),
                              _: 2
                            }, 1040)
                          ]),
                          default: withCtx(() => [
                            createVNode(_component_v_list, null, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(items), (item, i) => {
                                  return openBlock(), createBlock(_component_v_list_item, { key: i }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_list_item_title, null, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(item.title), 1)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 128))
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ])
                    ]),
                    createVNode(_component_v_chip, {
                      color: "primary",
                      label: "",
                      size: "small"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" 16 APR, 2022 ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_row, { class: "mt-3" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_col, { cols: "4" }, {
                          default: withCtx(() => [
                            createVNode("h4", { class: "text-subtitle-2 text-grey-darken-1 font-weight-regular" }, " Due Date "),
                            createVNode("h5", { class: "font-weight-medium title text-body-2 text-no-wrap" }, " Oct 23, 2022 ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_col, { cols: "4" }, {
                          default: withCtx(() => [
                            createVNode("h4", { class: "text-subtitle-2 text-grey-darken-1 font-weight-regular" }, " Budget "),
                            createVNode("h5", { class: "font-weight-medium title text-body-2 text-no-wrap" }, " $98,500 ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_col, { cols: "4" }, {
                          default: withCtx(() => [
                            createVNode("h4", { class: "text-subtitle-2 text-grey-darken-1 font-weight-regular" }, " Expense "),
                            createVNode("h5", { class: "font-weight-medium title text-body-2 text-no-wrap" }, " $63,000 ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_divider, { class: "my-3" }),
                    createVNode("h5", { class: "title text-subtitle-1 font-weight-medium mb-2" }, "Teams"),
                    createVNode(_component_v_chip, {
                      label: "",
                      size: "small",
                      color: "warning",
                      class: "mr-1"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Bootstrap ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_chip, {
                      label: "",
                      size: "small",
                      color: "error"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Angular ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_divider, { class: "my-4" }),
                    createVNode("h5", { class: "title text-subtitle-1 font-weight-medium mb-2" }, "Leaders"),
                    createVNode("div", { class: "d-flex align-center" }, [
                      createVNode(_component_v_avatar, { size: "40" }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            width: "40",
                            src: _imports_0$1,
                            alt: "John"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_avatar, {
                        size: "40",
                        class: "ml-2"
                      }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            width: "40",
                            src: _imports_5,
                            alt: "John"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_avatar, {
                        size: "40",
                        class: "ml-2"
                      }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            width: "40",
                            src: _imports_6,
                            alt: "John"
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode(_component_v_divider, { class: "my-4" }),
                    createVNode("div", { class: "d-flex justify-space-between align-center mt-5" }, [
                      createVNode(_component_v_btn, { color: "secondary" }, {
                        default: withCtx(() => [
                          createTextVNode("\u0E40\u0E1E\u0E34\u0E48\u0E21")
                        ]),
                        _: 1
                      }),
                      createVNode("p", { class: "text-body-2 ma-0 text-grey-darken-1" }, " 36 Recent Transactions ")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_card_text, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "d-flex align-center mb-4" }, [
                    createVNode("h2", { class: "title text-h6 font-weight-medium" }, "\u0E41\u0E1A\u0E23\u0E19\u0E14\u0E4C\u0E43\u0E19\u0E40\u0E04\u0E23\u0E37\u0E2D"),
                    createVNode(_component_v_spacer),
                    createVNode("div", { class: "ml-auto" }, [
                      createVNode(_component_v_menu, {
                        bottom: "",
                        left: ""
                      }, {
                        activator: withCtx(({ props }) => [
                          createVNode(_component_v_btn, mergeProps({
                            icon: "",
                            color: "inherit"
                          }, props), {
                            default: withCtx(() => [
                              createVNode(_component_v_icon, {
                                icon: "mdi-dots-horizontal",
                                size: "20"
                              })
                            ]),
                            _: 2
                          }, 1040)
                        ]),
                        default: withCtx(() => [
                          createVNode(_component_v_list, null, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(items), (item, i) => {
                                return openBlock(), createBlock(_component_v_list_item, { key: i }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_list_item_title, null, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(item.title), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 128))
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  createVNode(_component_v_chip, {
                    color: "primary",
                    label: "",
                    size: "small"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" 16 APR, 2022 ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_row, { class: "mt-3" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_col, { cols: "4" }, {
                        default: withCtx(() => [
                          createVNode("h4", { class: "text-subtitle-2 text-grey-darken-1 font-weight-regular" }, " Due Date "),
                          createVNode("h5", { class: "font-weight-medium title text-body-2 text-no-wrap" }, " Oct 23, 2022 ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_col, { cols: "4" }, {
                        default: withCtx(() => [
                          createVNode("h4", { class: "text-subtitle-2 text-grey-darken-1 font-weight-regular" }, " Budget "),
                          createVNode("h5", { class: "font-weight-medium title text-body-2 text-no-wrap" }, " $98,500 ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_col, { cols: "4" }, {
                        default: withCtx(() => [
                          createVNode("h4", { class: "text-subtitle-2 text-grey-darken-1 font-weight-regular" }, " Expense "),
                          createVNode("h5", { class: "font-weight-medium title text-body-2 text-no-wrap" }, " $63,000 ")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_divider, { class: "my-3" }),
                  createVNode("h5", { class: "title text-subtitle-1 font-weight-medium mb-2" }, "Teams"),
                  createVNode(_component_v_chip, {
                    label: "",
                    size: "small",
                    color: "warning",
                    class: "mr-1"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Bootstrap ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_chip, {
                    label: "",
                    size: "small",
                    color: "error"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Angular ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_divider, { class: "my-4" }),
                  createVNode("h5", { class: "title text-subtitle-1 font-weight-medium mb-2" }, "Leaders"),
                  createVNode("div", { class: "d-flex align-center" }, [
                    createVNode(_component_v_avatar, { size: "40" }, {
                      default: withCtx(() => [
                        createVNode("img", {
                          width: "40",
                          src: _imports_0$1,
                          alt: "John"
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_avatar, {
                      size: "40",
                      class: "ml-2"
                    }, {
                      default: withCtx(() => [
                        createVNode("img", {
                          width: "40",
                          src: _imports_5,
                          alt: "John"
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_avatar, {
                      size: "40",
                      class: "ml-2"
                    }, {
                      default: withCtx(() => [
                        createVNode("img", {
                          width: "40",
                          src: _imports_6,
                          alt: "John"
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode(_component_v_divider, { class: "my-4" }),
                  createVNode("div", { class: "d-flex justify-space-between align-center mt-5" }, [
                    createVNode(_component_v_btn, { color: "secondary" }, {
                      default: withCtx(() => [
                        createTextVNode("\u0E40\u0E1E\u0E34\u0E48\u0E21")
                      ]),
                      _: 1
                    }),
                    createVNode("p", { class: "text-body-2 ma-0 text-grey-darken-1" }, " 36 Recent Transactions ")
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dashboardComponents/ecommerce/medicalpro-branding/MedicalProBranding.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _imports_0 = "" + globalThis.__publicAssetsURL("images/background/login-register.jpg");
const _sfc_main$6 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_v_card = resolveComponent("v-card");
  const _component_v_avatar = resolveComponent("v-avatar");
  const _component_v_card_text = resolveComponent("v-card-text");
  const _component_v_btn = resolveComponent("v-btn");
  const _component_v_row = resolveComponent("v-row");
  const _component_v_col = resolveComponent("v-col");
  _push(ssrRenderComponent(_component_v_card, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_0)} class="w-100" alt="login background"${_scopeId}><div class="d-flex justify-center mt-n15"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_v_avatar, { size: "100" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<img${ssrRenderAttr("src", _imports_0$1)} width="100" alt="user"${_scopeId2}>`);
            } else {
              return [
                createVNode("img", {
                  src: _imports_0$1,
                  width: "100",
                  alt: "user"
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div>`);
        _push2(ssrRenderComponent(_component_v_card_text, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="p-4 text-center justify-center"${_scopeId2}><h2 class="mb-0 mt-4 font-weight-regular"${_scopeId2}>Jonathan Dominic</h2><small${_scopeId2}>Web Designer &amp; Developer</small><br${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_v_btn, {
                rounded: "",
                color: "primary",
                class: "mt-4 px-7 mx-auto"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`\u0E15\u0E34\u0E14\u0E15\u0E32\u0E21`);
                  } else {
                    return [
                      createTextVNode("\u0E15\u0E34\u0E14\u0E15\u0E32\u0E21")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_row, { class: "mt-6 pb-4" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_v_col, { cols: "4" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<h2 class="mb-0"${_scopeId4}>1099</h2><small class${_scopeId4}>\u0E1A\u0E17\u0E04\u0E27\u0E32\u0E21</small>`);
                        } else {
                          return [
                            createVNode("h2", { class: "mb-0" }, "1099"),
                            createVNode("small", { class: "" }, "\u0E1A\u0E17\u0E04\u0E27\u0E32\u0E21")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_v_col, { cols: "4" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<h2 class="mb-0"${_scopeId4}>23,469</h2><small class${_scopeId4}>\u0E1C\u0E39\u0E49\u0E15\u0E34\u0E14\u0E15\u0E32\u0E21</small>`);
                        } else {
                          return [
                            createVNode("h2", { class: "mb-0" }, "23,469"),
                            createVNode("small", { class: "" }, "\u0E1C\u0E39\u0E49\u0E15\u0E34\u0E14\u0E15\u0E32\u0E21")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_v_col, { cols: "4" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<h2 class="mb-0"${_scopeId4}>6035</h2><small class${_scopeId4}>\u0E01\u0E33\u0E25\u0E31\u0E07\u0E15\u0E34\u0E14\u0E15\u0E32\u0E21</small>`);
                        } else {
                          return [
                            createVNode("h2", { class: "mb-0" }, "6035"),
                            createVNode("small", { class: "" }, "\u0E01\u0E33\u0E25\u0E31\u0E07\u0E15\u0E34\u0E14\u0E15\u0E32\u0E21")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_v_col, { cols: "4" }, {
                        default: withCtx(() => [
                          createVNode("h2", { class: "mb-0" }, "1099"),
                          createVNode("small", { class: "" }, "\u0E1A\u0E17\u0E04\u0E27\u0E32\u0E21")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_col, { cols: "4" }, {
                        default: withCtx(() => [
                          createVNode("h2", { class: "mb-0" }, "23,469"),
                          createVNode("small", { class: "" }, "\u0E1C\u0E39\u0E49\u0E15\u0E34\u0E14\u0E15\u0E32\u0E21")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_col, { cols: "4" }, {
                        default: withCtx(() => [
                          createVNode("h2", { class: "mb-0" }, "6035"),
                          createVNode("small", { class: "" }, "\u0E01\u0E33\u0E25\u0E31\u0E07\u0E15\u0E34\u0E14\u0E15\u0E32\u0E21")
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</div>`);
            } else {
              return [
                createVNode("div", { class: "p-4 text-center justify-center" }, [
                  createVNode("h2", { class: "mb-0 mt-4 font-weight-regular" }, "Jonathan Dominic"),
                  createVNode("small", null, "Web Designer & Developer"),
                  createVNode("br"),
                  createVNode(_component_v_btn, {
                    rounded: "",
                    color: "primary",
                    class: "mt-4 px-7 mx-auto"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("\u0E15\u0E34\u0E14\u0E15\u0E32\u0E21")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_row, { class: "mt-6 pb-4" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_col, { cols: "4" }, {
                        default: withCtx(() => [
                          createVNode("h2", { class: "mb-0" }, "1099"),
                          createVNode("small", { class: "" }, "\u0E1A\u0E17\u0E04\u0E27\u0E32\u0E21")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_col, { cols: "4" }, {
                        default: withCtx(() => [
                          createVNode("h2", { class: "mb-0" }, "23,469"),
                          createVNode("small", { class: "" }, "\u0E1C\u0E39\u0E49\u0E15\u0E34\u0E14\u0E15\u0E32\u0E21")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_col, { cols: "4" }, {
                        default: withCtx(() => [
                          createVNode("h2", { class: "mb-0" }, "6035"),
                          createVNode("small", { class: "" }, "\u0E01\u0E33\u0E25\u0E31\u0E07\u0E15\u0E34\u0E14\u0E15\u0E32\u0E21")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode("img", {
            src: _imports_0,
            class: "w-100",
            alt: "login background"
          }),
          createVNode("div", { class: "d-flex justify-center mt-n15" }, [
            createVNode(_component_v_avatar, { size: "100" }, {
              default: withCtx(() => [
                createVNode("img", {
                  src: _imports_0$1,
                  width: "100",
                  alt: "user"
                })
              ]),
              _: 1
            })
          ]),
          createVNode(_component_v_card_text, null, {
            default: withCtx(() => [
              createVNode("div", { class: "p-4 text-center justify-center" }, [
                createVNode("h2", { class: "mb-0 mt-4 font-weight-regular" }, "Jonathan Dominic"),
                createVNode("small", null, "Web Designer & Developer"),
                createVNode("br"),
                createVNode(_component_v_btn, {
                  rounded: "",
                  color: "primary",
                  class: "mt-4 px-7 mx-auto"
                }, {
                  default: withCtx(() => [
                    createTextVNode("\u0E15\u0E34\u0E14\u0E15\u0E32\u0E21")
                  ]),
                  _: 1
                }),
                createVNode(_component_v_row, { class: "mt-6 pb-4" }, {
                  default: withCtx(() => [
                    createVNode(_component_v_col, { cols: "4" }, {
                      default: withCtx(() => [
                        createVNode("h2", { class: "mb-0" }, "1099"),
                        createVNode("small", { class: "" }, "\u0E1A\u0E17\u0E04\u0E27\u0E32\u0E21")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_col, { cols: "4" }, {
                      default: withCtx(() => [
                        createVNode("h2", { class: "mb-0" }, "23,469"),
                        createVNode("small", { class: "" }, "\u0E1C\u0E39\u0E49\u0E15\u0E34\u0E14\u0E15\u0E32\u0E21")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_col, { cols: "4" }, {
                      default: withCtx(() => [
                        createVNode("h2", { class: "mb-0" }, "6035"),
                        createVNode("small", { class: "" }, "\u0E01\u0E33\u0E25\u0E31\u0E07\u0E15\u0E34\u0E14\u0E15\u0E32\u0E21")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dashboardComponents/analyticaldash/profile-card/TheProfileCard.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const TheProfileCard = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "TheMyContacts",
  __ssrInlineRender: true,
  setup(__props) {
    const messages = ref([
      {
        title: "Pavan Kumar",
        avatar: "1.jpg",
        avatarstatus: "success",
        desc: "info@wrappixel.com"
      },
      {
        title: "Sonu Nigam",
        avatar: "2.jpg",
        avatarstatus: "error",
        desc: "pamela1987@gmail.com"
      },
      {
        title: "Arijit singh",
        avatar: "3.jpg",
        avatarstatus: "warning",
        desc: "cruise1298.fiplip@gmail.com"
      },
      {
        title: "Pavan Kumar",
        avatar: "4.jpg",
        avatarstatus: "success",
        desc: "kat@gmail.com"
      }
    ]);
    function href() {
      return void 0;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_card = resolveComponent("v-card");
      const _component_v_card_text = resolveComponent("v-card-text");
      const _component_v_list = resolveComponent("v-list");
      const _component_v_list_item = resolveComponent("v-list-item");
      const _component_v_list_item_title = resolveComponent("v-list-item-title");
      const _component_v_badge = resolveComponent("v-badge");
      const _component_v_avatar = resolveComponent("v-avatar");
      _push(ssrRenderComponent(_component_v_card, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_card_text, { class: "pa-0" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="bg-primary pa-5"${_scopeId2}><h2 class=""${_scopeId2}>\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E15\u0E34\u0E14\u0E15\u0E48\u0E2D</h2><h5 class="font-weight-light"${_scopeId2}>Checkout my contacts here</h5></div><div class="pa-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_v_list, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<!--[-->`);
                        ssrRenderList(unref(messages), (item, i) => {
                          _push4(ssrRenderComponent(_component_v_list_item, {
                            key: i,
                            onClick: href
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_v_list_item_title, null, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<div class="d-flex align-center py-3"${_scopeId5}><div class="mr-3"${_scopeId5}>`);
                                      _push6(ssrRenderComponent(_component_v_badge, {
                                        bordered: "",
                                        bottom: "",
                                        color: item.avatarstatus,
                                        dot: "",
                                        "offset-x": "0",
                                        "offset-y": "0"
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(_component_v_avatar, { size: "40" }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`<img${ssrRenderAttr("src", `/images/users/${item.avatar}`)}${ssrRenderAttr("alt", item.title)} width="40"${_scopeId7}>`);
                                                } else {
                                                  return [
                                                    createVNode("img", {
                                                      src: `/images/users/${item.avatar}`,
                                                      alt: item.title,
                                                      width: "40"
                                                    }, null, 8, ["src", "alt"])
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(_component_v_avatar, { size: "40" }, {
                                                default: withCtx(() => [
                                                  createVNode("img", {
                                                    src: `/images/users/${item.avatar}`,
                                                    alt: item.title,
                                                    width: "40"
                                                  }, null, 8, ["src", "alt"])
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                      _push6(`</div><div class="mx-3"${_scopeId5}><h4 class="font-weight-medium"${_scopeId5}>${ssrInterpolate(item.title)}</h4><h6 class="truncate-text"${_scopeId5}>${ssrInterpolate(item.desc)}</h6></div></div>`);
                                    } else {
                                      return [
                                        createVNode("div", { class: "d-flex align-center py-3" }, [
                                          createVNode("div", { class: "mr-3" }, [
                                            createVNode(_component_v_badge, {
                                              bordered: "",
                                              bottom: "",
                                              color: item.avatarstatus,
                                              dot: "",
                                              "offset-x": "0",
                                              "offset-y": "0"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_avatar, { size: "40" }, {
                                                  default: withCtx(() => [
                                                    createVNode("img", {
                                                      src: `/images/users/${item.avatar}`,
                                                      alt: item.title,
                                                      width: "40"
                                                    }, null, 8, ["src", "alt"])
                                                  ]),
                                                  _: 2
                                                }, 1024)
                                              ]),
                                              _: 2
                                            }, 1032, ["color"])
                                          ]),
                                          createVNode("div", { class: "mx-3" }, [
                                            createVNode("h4", { class: "font-weight-medium" }, toDisplayString(item.title), 1),
                                            createVNode("h6", { class: "truncate-text" }, toDisplayString(item.desc), 1)
                                          ])
                                        ])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_v_list_item_title, null, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "d-flex align-center py-3" }, [
                                        createVNode("div", { class: "mr-3" }, [
                                          createVNode(_component_v_badge, {
                                            bordered: "",
                                            bottom: "",
                                            color: item.avatarstatus,
                                            dot: "",
                                            "offset-x": "0",
                                            "offset-y": "0"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_avatar, { size: "40" }, {
                                                default: withCtx(() => [
                                                  createVNode("img", {
                                                    src: `/images/users/${item.avatar}`,
                                                    alt: item.title,
                                                    width: "40"
                                                  }, null, 8, ["src", "alt"])
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ]),
                                            _: 2
                                          }, 1032, ["color"])
                                        ]),
                                        createVNode("div", { class: "mx-3" }, [
                                          createVNode("h4", { class: "font-weight-medium" }, toDisplayString(item.title), 1),
                                          createVNode("h6", { class: "truncate-text" }, toDisplayString(item.desc), 1)
                                        ])
                                      ])
                                    ]),
                                    _: 2
                                  }, 1024)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(messages), (item, i) => {
                            return openBlock(), createBlock(_component_v_list_item, {
                              key: i,
                              onClick: href
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_list_item_title, null, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "d-flex align-center py-3" }, [
                                      createVNode("div", { class: "mr-3" }, [
                                        createVNode(_component_v_badge, {
                                          bordered: "",
                                          bottom: "",
                                          color: item.avatarstatus,
                                          dot: "",
                                          "offset-x": "0",
                                          "offset-y": "0"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_avatar, { size: "40" }, {
                                              default: withCtx(() => [
                                                createVNode("img", {
                                                  src: `/images/users/${item.avatar}`,
                                                  alt: item.title,
                                                  width: "40"
                                                }, null, 8, ["src", "alt"])
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ]),
                                          _: 2
                                        }, 1032, ["color"])
                                      ]),
                                      createVNode("div", { class: "mx-3" }, [
                                        createVNode("h4", { class: "font-weight-medium" }, toDisplayString(item.title), 1),
                                        createVNode("h6", { class: "truncate-text" }, toDisplayString(item.desc), 1)
                                      ])
                                    ])
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024);
                          }), 128))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "bg-primary pa-5" }, [
                      createVNode("h2", { class: "" }, "\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E15\u0E34\u0E14\u0E15\u0E48\u0E2D"),
                      createVNode("h5", { class: "font-weight-light" }, "Checkout my contacts here")
                    ]),
                    createVNode("div", { class: "pa-4" }, [
                      createVNode(_component_v_list, null, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(messages), (item, i) => {
                            return openBlock(), createBlock(_component_v_list_item, {
                              key: i,
                              onClick: href
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_list_item_title, null, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "d-flex align-center py-3" }, [
                                      createVNode("div", { class: "mr-3" }, [
                                        createVNode(_component_v_badge, {
                                          bordered: "",
                                          bottom: "",
                                          color: item.avatarstatus,
                                          dot: "",
                                          "offset-x": "0",
                                          "offset-y": "0"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_avatar, { size: "40" }, {
                                              default: withCtx(() => [
                                                createVNode("img", {
                                                  src: `/images/users/${item.avatar}`,
                                                  alt: item.title,
                                                  width: "40"
                                                }, null, 8, ["src", "alt"])
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ]),
                                          _: 2
                                        }, 1032, ["color"])
                                      ]),
                                      createVNode("div", { class: "mx-3" }, [
                                        createVNode("h4", { class: "font-weight-medium" }, toDisplayString(item.title), 1),
                                        createVNode("h6", { class: "truncate-text" }, toDisplayString(item.desc), 1)
                                      ])
                                    ])
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024);
                          }), 128))
                        ]),
                        _: 1
                      })
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_card_text, { class: "pa-0" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "bg-primary pa-5" }, [
                    createVNode("h2", { class: "" }, "\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E15\u0E34\u0E14\u0E15\u0E48\u0E2D"),
                    createVNode("h5", { class: "font-weight-light" }, "Checkout my contacts here")
                  ]),
                  createVNode("div", { class: "pa-4" }, [
                    createVNode(_component_v_list, null, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(messages), (item, i) => {
                          return openBlock(), createBlock(_component_v_list_item, {
                            key: i,
                            onClick: href
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_list_item_title, null, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "d-flex align-center py-3" }, [
                                    createVNode("div", { class: "mr-3" }, [
                                      createVNode(_component_v_badge, {
                                        bordered: "",
                                        bottom: "",
                                        color: item.avatarstatus,
                                        dot: "",
                                        "offset-x": "0",
                                        "offset-y": "0"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_avatar, { size: "40" }, {
                                            default: withCtx(() => [
                                              createVNode("img", {
                                                src: `/images/users/${item.avatar}`,
                                                alt: item.title,
                                                width: "40"
                                              }, null, 8, ["src", "alt"])
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ]),
                                        _: 2
                                      }, 1032, ["color"])
                                    ]),
                                    createVNode("div", { class: "mx-3" }, [
                                      createVNode("h4", { class: "font-weight-medium" }, toDisplayString(item.title), 1),
                                      createVNode("h6", { class: "truncate-text" }, toDisplayString(item.desc), 1)
                                    ])
                                  ])
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1024);
                        }), 128))
                      ]),
                      _: 1
                    })
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dashboardComponents/analyticaldash/my-contacts/TheMyContacts.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _imports_1 = "" + globalThis.__publicAssetsURL("images/big/img1.jpg");
const _imports_2 = "" + globalThis.__publicAssetsURL("images/big/img2.jpg");
const _imports_3 = "" + globalThis.__publicAssetsURL("images/big/img3.jpg");
const _imports_4 = "" + globalThis.__publicAssetsURL("images/big/img4.jpg");
const _imports_7 = "" + globalThis.__publicAssetsURL("images/users/4.jpg");
const _sfc_main$4 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_v_icon = resolveComponent("v-icon");
  const _component_v_divider = resolveComponent("v-divider");
  const _component_v_btn = resolveComponent("v-btn");
  const _component_v_alert = resolveComponent("v-alert");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "profiletimeline position-relative" }, _attrs))}><div class="sl-item mt-2 mb-3"><div class="sl-left float-left me-3"><img${ssrRenderAttr("src", _imports_0$1)} width="40" alt="user" class="rounded-circle"></div><div class="sl-right"><div><div class="d-md-flex align-items-center"><h3>John Doe</h3><small class="sl-date text-muted ms-1">5 minutes ago</small></div><p>assign a new task Design weblayout</p><div class="v-row mt-3"><div class="v-col-lg-3 v-col-md-6 mb-3"><img${ssrRenderAttr("src", _imports_1)} width="100%" alt="user"></div><div class="v-col-lg-3 v-col-md-6 mb-3"><img${ssrRenderAttr("src", _imports_2)} width="100%" alt="user"></div><div class="v-col-lg-3 v-col-md-6 mb-3"><img${ssrRenderAttr("src", _imports_3)} width="100%" alt="user"></div><div class="v-col-lg-3 v-col-md-6 mb-3"><img${ssrRenderAttr("src", _imports_4)} width="100%" alt="user"></div></div><a href="/" class="text-decoration-none mr-3 text-primary">`);
  _push(ssrRenderComponent(_component_v_icon, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`mdi-message`);
      } else {
        return [
          createTextVNode("mdi-message")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(` comments</a><a href="/" class="text-decoration-none text-red">`);
  _push(ssrRenderComponent(_component_v_icon, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`mdi-heart`);
      } else {
        return [
          createTextVNode("mdi-heart")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(` 5 Likes</a></div></div></div>`);
  _push(ssrRenderComponent(_component_v_divider, null, null, _parent));
  _push(`<div class="sl-item my-4 border-top pt-4"><div class="sl-left float-left me-3"><img${ssrRenderAttr("src", _imports_5)} width="40" alt="user" class="rounded-circle"></div><div class="sl-right"><div><div class="d-md-flex align-items-center"><h3 class="">James Smith</h3><small class="sl-date text-muted ms-1">5 minutes ago</small></div><div class="mt-3 v-row"><div class="v-col-md-3"><img${ssrRenderAttr("src", _imports_4)} class="w-100" alt="user"></div><div class="v-col-md-9 mt-3 mt-md-0"><p class="fs-3"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. </p>`);
  _push(ssrRenderComponent(_component_v_btn, {
    color: "primary",
    variant: "tonal",
    flat: "",
    class: "mt-3"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Design weblayout`);
      } else {
        return [
          createTextVNode(" Design weblayout")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="text-nowrap mt-3"><a href="/" class="text-decoration-none mr-3 text-primary">`);
  _push(ssrRenderComponent(_component_v_icon, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`mdi-message`);
      } else {
        return [
          createTextVNode("mdi-message")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(` comments</a><a href="/" class="text-decoration-none text-red">`);
  _push(ssrRenderComponent(_component_v_icon, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`mdi-heart`);
      } else {
        return [
          createTextVNode("mdi-heart")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(` 5 Likes</a></div></div></div></div>`);
  _push(ssrRenderComponent(_component_v_divider, null, null, _parent));
  _push(`<div class="sl-item my-4 border-top pt-4"><div class="sl-left float-left me-3"><img${ssrRenderAttr("src", _imports_6)} width="40" alt="user" class="rounded-circle"></div><div class="sl-right"><div><div class="d-md-flex align-items-center"><h3 class="">Maria Smith</h3><small class="sl-date text-muted ms-1">5 minutes ago</small></div><p class="my-4 fs-3"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper </p></div><div class="text-nowrap mt-3"><a href="/" class="text-decoration-none mr-3 text-primary">`);
  _push(ssrRenderComponent(_component_v_icon, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`mdi-message`);
      } else {
        return [
          createTextVNode("mdi-message")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(` comments</a><a href="/" class="text-decoration-none text-red">`);
  _push(ssrRenderComponent(_component_v_icon, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`mdi-heart`);
      } else {
        return [
          createTextVNode("mdi-heart")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(` 5 Likes</a></div></div></div>`);
  _push(ssrRenderComponent(_component_v_divider, null, null, _parent));
  _push(`<div class="sl-item my-4 border-top pt-4"><div class="sl-left float-left me-3"><img${ssrRenderAttr("src", _imports_7)} width="40" alt="user" class="rounded-circle"></div><div class="sl-right"><div><div class="d-md-flex"><h3 class="">john Smith</h3><small class="sl-date text-muted ms-1">5 minutes ago</small></div>`);
  _push(ssrRenderComponent(_component_v_alert, {
    class: "mt-4 fs-3",
    color: "primary",
    variant: "tonal"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt `);
      } else {
        return [
          createTextVNode(" Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div>`);
  _push(ssrRenderComponent(_component_v_divider, null, null, _parent));
  _push(`<div class="sl-item my-4 border-top pt-4"><div class="sl-left float-left me-3"><img${ssrRenderAttr("src", _imports_0$1)} width="40" alt="user" class="rounded-circle"></div><div class="sl-right"><div><div class="d-md-flex"><h3 class="">john Smith</h3><small class="sl-date text-muted ms-1">5 minutes ago</small></div>`);
  _push(ssrRenderComponent(_component_v_alert, {
    class: "mt-4 fs-3",
    color: "secondary",
    variant: "tonal"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt `);
      } else {
        return [
          createTextVNode(" Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dashboardComponents/analyticaldash/activity-timeline/TimelineView.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const TimelineView = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "TimelineProfile",
  __ssrInlineRender: true,
  setup(__props) {
    const valueDeterminate = ref(80);
    const valueDeterminate2 = ref(90);
    const valueDeterminate3 = ref(50);
    const valueDeterminate4 = ref(70);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_progress_linear = resolveComponent("v-progress-linear");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_v_row, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_col, { cols: "12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_row, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_col, {
                          lg: "3",
                          cols: "12",
                          sm: "3",
                          class: "border-right"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<strong class="font-weight-medium"${_scopeId4}>Full Name</strong><br${_scopeId4}><p class="text-muted"${_scopeId4}>Johnathan Deo</p>`);
                            } else {
                              return [
                                createVNode("strong", { class: "font-weight-medium" }, "Full Name"),
                                createVNode("br"),
                                createVNode("p", { class: "text-muted" }, "Johnathan Deo")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_col, {
                          lg: "3",
                          cols: "12",
                          sm: "3",
                          class: "border-right"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<strong class="font-weight-medium"${_scopeId4}>Mobile</strong><br${_scopeId4}><p class="text-muted"${_scopeId4}>(123) 456 7890</p>`);
                            } else {
                              return [
                                createVNode("strong", { class: "font-weight-medium" }, "Mobile"),
                                createVNode("br"),
                                createVNode("p", { class: "text-muted" }, "(123) 456 7890")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_col, {
                          lg: "3",
                          cols: "12",
                          sm: "3",
                          class: "border-right"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<strong class="font-weight-medium"${_scopeId4}>Email</strong><br${_scopeId4}><p class="text-muted w-100 text-truncate"${_scopeId4}>johnathan@admin.com</p>`);
                            } else {
                              return [
                                createVNode("strong", { class: "font-weight-medium" }, "Email"),
                                createVNode("br"),
                                createVNode("p", { class: "text-muted w-100 text-truncate" }, "johnathan@admin.com")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_col, {
                          lg: "3",
                          cols: "12",
                          sm: "3"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<strong class="font-weight-medium"${_scopeId4}>Location</strong><br${_scopeId4}><p class="text-muted"${_scopeId4}>London</p>`);
                            } else {
                              return [
                                createVNode("strong", { class: "font-weight-medium" }, "Location"),
                                createVNode("br"),
                                createVNode("p", { class: "text-muted" }, "London")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_col, {
                            lg: "3",
                            cols: "12",
                            sm: "3",
                            class: "border-right"
                          }, {
                            default: withCtx(() => [
                              createVNode("strong", { class: "font-weight-medium" }, "Full Name"),
                              createVNode("br"),
                              createVNode("p", { class: "text-muted" }, "Johnathan Deo")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            lg: "3",
                            cols: "12",
                            sm: "3",
                            class: "border-right"
                          }, {
                            default: withCtx(() => [
                              createVNode("strong", { class: "font-weight-medium" }, "Mobile"),
                              createVNode("br"),
                              createVNode("p", { class: "text-muted" }, "(123) 456 7890")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            lg: "3",
                            cols: "12",
                            sm: "3",
                            class: "border-right"
                          }, {
                            default: withCtx(() => [
                              createVNode("strong", { class: "font-weight-medium" }, "Email"),
                              createVNode("br"),
                              createVNode("p", { class: "text-muted w-100 text-truncate" }, "johnathan@admin.com")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            lg: "3",
                            cols: "12",
                            sm: "3"
                          }, {
                            default: withCtx(() => [
                              createVNode("strong", { class: "font-weight-medium" }, "Location"),
                              createVNode("br"),
                              createVNode("p", { class: "text-muted" }, "London")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_row, null, {
                      default: withCtx(() => [
                        createVNode(_component_v_col, {
                          lg: "3",
                          cols: "12",
                          sm: "3",
                          class: "border-right"
                        }, {
                          default: withCtx(() => [
                            createVNode("strong", { class: "font-weight-medium" }, "Full Name"),
                            createVNode("br"),
                            createVNode("p", { class: "text-muted" }, "Johnathan Deo")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_col, {
                          lg: "3",
                          cols: "12",
                          sm: "3",
                          class: "border-right"
                        }, {
                          default: withCtx(() => [
                            createVNode("strong", { class: "font-weight-medium" }, "Mobile"),
                            createVNode("br"),
                            createVNode("p", { class: "text-muted" }, "(123) 456 7890")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_col, {
                          lg: "3",
                          cols: "12",
                          sm: "3",
                          class: "border-right"
                        }, {
                          default: withCtx(() => [
                            createVNode("strong", { class: "font-weight-medium" }, "Email"),
                            createVNode("br"),
                            createVNode("p", { class: "text-muted w-100 text-truncate" }, "johnathan@admin.com")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_col, {
                          lg: "3",
                          cols: "12",
                          sm: "3"
                        }, {
                          default: withCtx(() => [
                            createVNode("strong", { class: "font-weight-medium" }, "Location"),
                            createVNode("br"),
                            createVNode("p", { class: "text-muted" }, "London")
                          ]),
                          _: 1
                        })
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
              createVNode(_component_v_col, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(_component_v_row, null, {
                    default: withCtx(() => [
                      createVNode(_component_v_col, {
                        lg: "3",
                        cols: "12",
                        sm: "3",
                        class: "border-right"
                      }, {
                        default: withCtx(() => [
                          createVNode("strong", { class: "font-weight-medium" }, "Full Name"),
                          createVNode("br"),
                          createVNode("p", { class: "text-muted" }, "Johnathan Deo")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_col, {
                        lg: "3",
                        cols: "12",
                        sm: "3",
                        class: "border-right"
                      }, {
                        default: withCtx(() => [
                          createVNode("strong", { class: "font-weight-medium" }, "Mobile"),
                          createVNode("br"),
                          createVNode("p", { class: "text-muted" }, "(123) 456 7890")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_col, {
                        lg: "3",
                        cols: "12",
                        sm: "3",
                        class: "border-right"
                      }, {
                        default: withCtx(() => [
                          createVNode("strong", { class: "font-weight-medium" }, "Email"),
                          createVNode("br"),
                          createVNode("p", { class: "text-muted w-100 text-truncate" }, "johnathan@admin.com")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_col, {
                        lg: "3",
                        cols: "12",
                        sm: "3"
                      }, {
                        default: withCtx(() => [
                          createVNode("strong", { class: "font-weight-medium" }, "Location"),
                          createVNode("br"),
                          createVNode("p", { class: "text-muted" }, "London")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<p class="mt-4 border-top pt-4"> Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. </p><p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries </p><p> It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p><h3 class="title mt-4">Skill Set</h3><div class="border-top mt-5"><h5 class="mt-4 mb-0 body-1"> Wordpress <span class="float-right">80%</span></h5>`);
      _push(ssrRenderComponent(_component_v_progress_linear, {
        modelValue: valueDeterminate.value,
        "onUpdate:modelValue": ($event) => valueDeterminate.value = $event,
        color: "success",
        class: "mt-2"
      }, null, _parent));
      _push(`<h5 class="mt-4 mb-0 body-1"> HTML 5 <span class="float-right">90%</span></h5>`);
      _push(ssrRenderComponent(_component_v_progress_linear, {
        modelValue: valueDeterminate2.value,
        "onUpdate:modelValue": ($event) => valueDeterminate2.value = $event,
        color: "warning",
        class: "mt-2"
      }, null, _parent));
      _push(`<h5 class="mt-4 mb-0 body-1"> jQuery <span class="float-right">50%</span></h5>`);
      _push(ssrRenderComponent(_component_v_progress_linear, {
        modelValue: valueDeterminate3.value,
        "onUpdate:modelValue": ($event) => valueDeterminate3.value = $event,
        color: "error",
        class: "mt-2"
      }, null, _parent));
      _push(`<h5 class="mt-4 mb-0 body-1"> Photoshop <span class="float-right">70%</span>`);
      _push(ssrRenderComponent(_component_v_progress_linear, {
        modelValue: valueDeterminate4.value,
        "onUpdate:modelValue": ($event) => valueDeterminate4.value = $event,
        color: "info",
        class: "mt-2"
      }, null, _parent));
      _push(`</h5></div><!--]-->`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dashboardComponents/analyticaldash/activity-timeline/TimelineProfile.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "TimelineSettings",
  __ssrInlineRender: true,
  setup(__props) {
    const dtext = ref("George deo");
    const emailtext = ref("");
    const password = ref("");
    const placetext = ref("");
    const show1 = ref(false);
    const items = ref(["IT", "Blade Runner", "Thor"]);
    const rules = ref({
      required: (value) => !!value || "Required.",
      min: (v) => v.length >= 8 || "Min 8 characters",
      emailMatch: () => "The email and password you entered don't match"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_text_field = resolveComponent("v-text-field");
      const _component_v_textarea = resolveComponent("v-textarea");
      const _component_v_select = resolveComponent("v-select");
      const _component_v_btn = resolveComponent("v-btn");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_v_text_field, {
        modelValue: unref(dtext),
        "onUpdate:modelValue": ($event) => isRef(dtext) ? dtext.value = $event : null,
        label: "Default Text e.g. 'George deo'",
        filled: "",
        "background-color": "transparent"
      }, null, _parent));
      _push(ssrRenderComponent(_component_v_text_field, {
        type: "email",
        modelValue: unref(emailtext),
        "onUpdate:modelValue": ($event) => isRef(emailtext) ? emailtext.value = $event : null,
        label: "Email e.g. 'example@gmail.com",
        filled: "",
        "background-color": "transparent"
      }, null, _parent));
      _push(ssrRenderComponent(_component_v_text_field, {
        modelValue: unref(password),
        "onUpdate:modelValue": ($event) => isRef(password) ? password.value = $event : null,
        filled: "",
        "background-color": "transparent",
        "append-icon": unref(show1) ? "mdi-eye" : "mdi-eye-off",
        rules: [unref(rules).required, unref(rules).min],
        type: unref(show1) ? "text" : "password",
        name: "input-10-1",
        label: "Password",
        hint: "At least 8 characters",
        counter: "",
        "onClick:append": ($event) => show1.value = !unref(show1)
      }, null, _parent));
      _push(ssrRenderComponent(_component_v_text_field, {
        modelValue: unref(placetext),
        "onUpdate:modelValue": ($event) => isRef(placetext) ? placetext.value = $event : null,
        label: "Placeholder",
        placeholder: "Enter Placeholder",
        filled: "",
        "background-color": "transparent"
      }, null, _parent));
      _push(ssrRenderComponent(_component_v_textarea, {
        filled: "",
        name: "input-7-4",
        rows: "3",
        label: "Textarea",
        value: "",
        "background-color": "transparent"
      }, null, _parent));
      _push(`<div class="mt-4">`);
      _push(ssrRenderComponent(_component_v_select, {
        items: unref(items),
        filled: "",
        label: "Input Select",
        "background-color": "transparent"
      }, null, _parent));
      _push(ssrRenderComponent(_component_v_text_field, {
        label: "Helping text",
        filled: "",
        "background-color": "transparent",
        placeholder: "Helping text",
        hint: "A block of help text that breaks onto a new line and may extend beyond one line.",
        "persistent-hint": ""
      }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_v_btn, {
        class: "mt-5",
        color: "primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Submit`);
          } else {
            return [
              createTextVNode("Submit")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dashboardComponents/analyticaldash/activity-timeline/TimelineSettings.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "TheActivityTimeline",
  __ssrInlineRender: true,
  setup(__props) {
    const tab = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_card = resolveComponent("v-card");
      const _component_v_tabs = resolveComponent("v-tabs");
      const _component_v_tab = resolveComponent("v-tab");
      const _component_v_card_text = resolveComponent("v-card-text");
      const _component_v_window = resolveComponent("v-window");
      const _component_v_window_item = resolveComponent("v-window-item");
      _push(ssrRenderComponent(_component_v_card, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_tabs, {
              modelValue: unref(tab),
              "onUpdate:modelValue": ($event) => isRef(tab) ? tab.value = $event : null,
              "fixed-tabs": "",
              color: "primary",
              stacked: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_tab, { value: "one" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21`);
                      } else {
                        return [
                          createTextVNode("\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_tab, { value: "two" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u0E42\u0E1B\u0E23\u0E44\u0E1F\u0E25\u0E4C`);
                      } else {
                        return [
                          createTextVNode("\u0E42\u0E1B\u0E23\u0E44\u0E1F\u0E25\u0E4C")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_tab, { value: "three" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u0E15\u0E31\u0E49\u0E07\u0E04\u0E48\u0E32`);
                      } else {
                        return [
                          createTextVNode("\u0E15\u0E31\u0E49\u0E07\u0E04\u0E48\u0E32")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_tab, { value: "one" }, {
                      default: withCtx(() => [
                        createTextVNode("\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_tab, { value: "two" }, {
                      default: withCtx(() => [
                        createTextVNode("\u0E42\u0E1B\u0E23\u0E44\u0E1F\u0E25\u0E4C")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_tab, { value: "three" }, {
                      default: withCtx(() => [
                        createTextVNode("\u0E15\u0E31\u0E49\u0E07\u0E04\u0E48\u0E32")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_card_text, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_window, {
                    modelValue: unref(tab),
                    "onUpdate:modelValue": ($event) => isRef(tab) ? tab.value = $event : null
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_window_item, { value: "one" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(TimelineView, null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(TimelineView)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_window_item, { value: "two" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_sfc_main$3, null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_sfc_main$3)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_window_item, { value: "three" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_sfc_main$2, null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_sfc_main$2)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_window_item, { value: "one" }, {
                            default: withCtx(() => [
                              createVNode(TimelineView)
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_window_item, { value: "two" }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$3)
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_window_item, { value: "three" }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$2)
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_window, {
                      modelValue: unref(tab),
                      "onUpdate:modelValue": ($event) => isRef(tab) ? tab.value = $event : null
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_window_item, { value: "one" }, {
                          default: withCtx(() => [
                            createVNode(TimelineView)
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_window_item, { value: "two" }, {
                          default: withCtx(() => [
                            createVNode(_sfc_main$3)
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_window_item, { value: "three" }, {
                          default: withCtx(() => [
                            createVNode(_sfc_main$2)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_tabs, {
                modelValue: unref(tab),
                "onUpdate:modelValue": ($event) => isRef(tab) ? tab.value = $event : null,
                "fixed-tabs": "",
                color: "primary",
                stacked: ""
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_tab, { value: "one" }, {
                    default: withCtx(() => [
                      createTextVNode("\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_tab, { value: "two" }, {
                    default: withCtx(() => [
                      createTextVNode("\u0E42\u0E1B\u0E23\u0E44\u0E1F\u0E25\u0E4C")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_tab, { value: "three" }, {
                    default: withCtx(() => [
                      createTextVNode("\u0E15\u0E31\u0E49\u0E07\u0E04\u0E48\u0E32")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(_component_v_card_text, null, {
                default: withCtx(() => [
                  createVNode(_component_v_window, {
                    modelValue: unref(tab),
                    "onUpdate:modelValue": ($event) => isRef(tab) ? tab.value = $event : null
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_window_item, { value: "one" }, {
                        default: withCtx(() => [
                          createVNode(TimelineView)
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_window_item, { value: "two" }, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$3)
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_window_item, { value: "three" }, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$2)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/dashboardComponents/analyticaldash/activity-timeline/TheActivityTimeline.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "dashboard",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Dashboard",
      meta: [
        {
          name: "keywords",
          content: "Dashboard, Nuxt 3, Backend"
        },
        {
          name: "Description",
          content: "Dashboard Nuxt 3,  IT Genius Engineering"
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      _push(ssrRenderComponent(_component_v_row, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_col, {
              cols: "12",
              sm: "12",
              lg: "5"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(CongratulationCard, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(CongratulationCard)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_col, {
              cols: "12",
              sm: "12",
              lg: "7"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_row, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_col, { lg: "5" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(Purchases, null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(Purchases)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_col, { lg: "7" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(TotalEarnings, null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(TotalEarnings)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_col, { lg: "5" }, {
                            default: withCtx(() => [
                              createVNode(Purchases)
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, { lg: "7" }, {
                            default: withCtx(() => [
                              createVNode(TotalEarnings)
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_row, null, {
                      default: withCtx(() => [
                        createVNode(_component_v_col, { lg: "5" }, {
                          default: withCtx(() => [
                            createVNode(Purchases)
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_col, { lg: "7" }, {
                          default: withCtx(() => [
                            createVNode(TotalEarnings)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_col, {
              cols: "12",
              sm: "12",
              lg: "8"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$e, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$e)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_col, {
              cols: "12",
              sm: "12",
              lg: "4"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$d, null, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_sfc_main$c, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$d),
                    createVNode(_sfc_main$c)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_col, {
              cols: "12",
              sm: "12",
              lg: "4"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(TotalSales, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(TotalSales)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_col, {
              cols: "12",
              sm: "12",
              lg: "8"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$a, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$a)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_col, {
              cols: "12",
              sm: "12",
              lg: "4"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(TheProfileCard, null, null, _parent3, _scopeId2));
                  _push3(`<div class="mt-7"${_scopeId2}></div>`);
                  _push3(ssrRenderComponent(_sfc_main$5, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(TheProfileCard),
                    createVNode("div", { class: "mt-7" }),
                    createVNode(_sfc_main$5)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_col, {
              cols: "12",
              sm: "12",
              lg: "8"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$1, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_col, {
              cols: "12",
              lg: "4"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(BlogCard, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(BlogCard)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_col, {
              cols: "12",
              lg: "4"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$8, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$8)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_col, {
              cols: "12",
              lg: "4"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$7, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$7)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_col, {
                cols: "12",
                sm: "12",
                lg: "5"
              }, {
                default: withCtx(() => [
                  createVNode(CongratulationCard)
                ]),
                _: 1
              }),
              createVNode(_component_v_col, {
                cols: "12",
                sm: "12",
                lg: "7"
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_row, null, {
                    default: withCtx(() => [
                      createVNode(_component_v_col, { lg: "5" }, {
                        default: withCtx(() => [
                          createVNode(Purchases)
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_col, { lg: "7" }, {
                        default: withCtx(() => [
                          createVNode(TotalEarnings)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_v_col, {
                cols: "12",
                sm: "12",
                lg: "8"
              }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$e)
                ]),
                _: 1
              }),
              createVNode(_component_v_col, {
                cols: "12",
                sm: "12",
                lg: "4"
              }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$d),
                  createVNode(_sfc_main$c)
                ]),
                _: 1
              }),
              createVNode(_component_v_col, {
                cols: "12",
                sm: "12",
                lg: "4"
              }, {
                default: withCtx(() => [
                  createVNode(TotalSales)
                ]),
                _: 1
              }),
              createVNode(_component_v_col, {
                cols: "12",
                sm: "12",
                lg: "8"
              }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$a)
                ]),
                _: 1
              }),
              createVNode(_component_v_col, {
                cols: "12",
                sm: "12",
                lg: "4"
              }, {
                default: withCtx(() => [
                  createVNode(TheProfileCard),
                  createVNode("div", { class: "mt-7" }),
                  createVNode(_sfc_main$5)
                ]),
                _: 1
              }),
              createVNode(_component_v_col, {
                cols: "12",
                sm: "12",
                lg: "8"
              }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$1)
                ]),
                _: 1
              }),
              createVNode(_component_v_col, {
                cols: "12",
                lg: "4"
              }, {
                default: withCtx(() => [
                  createVNode(BlogCard)
                ]),
                _: 1
              }),
              createVNode(_component_v_col, {
                cols: "12",
                lg: "4"
              }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$8)
                ]),
                _: 1
              }),
              createVNode(_component_v_col, {
                cols: "12",
                lg: "4"
              }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$7)
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/backend/dashboard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=dashboard.a14d3da3.mjs.map
