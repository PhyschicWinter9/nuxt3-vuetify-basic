import { u as useHead } from './composables.79d89de8.mjs';
import { _ as _export_sfc } from './server.mjs';
import { useSSRContext, defineComponent, withAsyncContext, resolveComponent, mergeProps, withCtx, createVNode, unref, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList } from 'file://E:/Unversity/NuxttJS%20Workshop/Basic%20NuxtJS/Workshop/nuxt3-vuetify-workshop-day4/node_modules/vue/index.mjs';
import { u as useFetch } from './fetch.2916f06b.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'file://E:/Unversity/NuxttJS%20Workshop/Basic%20NuxtJS/Workshop/nuxt3-vuetify-workshop-day4/node_modules/vue/server-renderer/index.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "blog",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useHead({
      title: "\u0E1A\u0E25\u0E47\u0E2D\u0E01",
      meta: [
        {
          name: "keywords",
          content: "\u0E1A\u0E25\u0E47\u0E2D\u0E01, Nuxt 3, Backend"
        },
        {
          name: "Description",
          content: "\u0E1A\u0E25\u0E47\u0E2D\u0E01 Nuxt 3,  IT Genius Engineering"
        }
      ]
    });
    const { data: products, pending } = ([__temp, __restore] = withAsyncContext(() => useFetch("https://www.itgenius.co.th/sandbox_api/mrta_flutter_api/public/api/news", "$5sKWOZt1n5")), __temp = await __temp, __restore(), __temp);
    const getDay = (dateText) => {
      const date = new Date(dateText);
      return date.getDate();
    };
    const getMonth = (dateText) => {
      const date = new Date(dateText);
      const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      return monthNames[date.getMonth()];
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_container = resolveComponent("v-container");
      const _component_v_card = resolveComponent("v-card");
      const _component_v_img = resolveComponent("v-img");
      const _component_v_card_title = resolveComponent("v-card-title");
      const _component_v_card_subtitle = resolveComponent("v-card-subtitle");
      const _component_v_progress_circular = resolveComponent("v-progress-circular");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mb-5" }, _attrs))} data-v-3231cdbf><div class="wrapper" data-v-3231cdbf>`);
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
                  _push3(`<div class="text-center" data-v-3231cdbf${_scopeId2}><h2 class="ui-title font-weight-bold text-white mb-4" data-v-3231cdbf${_scopeId2}>\u0E1A\u0E25\u0E47\u0E2D\u0E01\u0E25\u0E48\u0E32\u0E2A\u0E38\u0E14</h2><p class="text-white" data-v-3231cdbf${_scopeId2}> You can relay on our amazing features list and also our customer services will be great experience for you without doubt and in no-time </p></div>`);
                } else {
                  return [
                    createVNode("div", { class: "text-center" }, [
                      createVNode("h2", { class: "ui-title font-weight-bold text-white mb-4" }, "\u0E1A\u0E25\u0E47\u0E2D\u0E01\u0E25\u0E48\u0E32\u0E2A\u0E38\u0E14"),
                      createVNode("p", { class: "text-white" }, " You can relay on our amazing features list and also our customer services will be great experience for you without doubt and in no-time ")
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
                    createVNode("h2", { class: "ui-title font-weight-bold text-white mb-4" }, "\u0E1A\u0E25\u0E47\u0E2D\u0E01\u0E25\u0E48\u0E32\u0E2A\u0E38\u0E14"),
                    createVNode("p", { class: "text-white" }, " You can relay on our amazing features list and also our customer services will be great experience for you without doubt and in no-time ")
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
            if (!unref(pending)) {
              _push2(ssrRenderComponent(_component_v_row, {
                class: "mt-13",
                justify: "center"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<!--[-->`);
                    ssrRenderList(unref(products), (product, index) => {
                      _push3(ssrRenderComponent(_component_v_col, {
                        cols: "12",
                        md: "6",
                        lg: "4",
                        key: index
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(_component_v_card, {
                              elevation: "0",
                              class: "blog-card overflow-hidden mb-5",
                              to: `/blogdetail/${product.id}`
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`<div class="position-relative mb-5" data-v-3231cdbf${_scopeId4}><a href="#" data-v-3231cdbf${_scopeId4}>`);
                                  _push5(ssrRenderComponent(_component_v_img, {
                                    src: product.imageurl,
                                    alt: "blog",
                                    class: "blog-img"
                                  }, null, _parent5, _scopeId4));
                                  _push5(`</a><div class="date-badge bg-info-grediant" data-v-3231cdbf${_scopeId4}>${ssrInterpolate(getMonth(product.created_at))} <span data-v-3231cdbf${_scopeId4}>${ssrInterpolate(getDay(product.created_at))}</span></div></div><div class="pa-5" data-v-3231cdbf${_scopeId4}>`);
                                  _push5(ssrRenderComponent(_component_v_card_title, null, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(`${ssrInterpolate(product.topic)}`);
                                      } else {
                                        return [
                                          createTextVNode(toDisplayString(product.topic), 1)
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                  _push5(ssrRenderComponent(_component_v_card_subtitle, { class: "mt-10 mb-10" }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(`${ssrInterpolate(product.detail)}`);
                                      } else {
                                        return [
                                          createTextVNode(toDisplayString(product.detail), 1)
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                  _push5(`<a href="#" class="text-themecolor linking text-decoration-none d-flex align-center" data-v-3231cdbf${_scopeId4}> \u0E2D\u0E48\u0E32\u0E19\u0E15\u0E48\u0E2D \xA0 <i class="mdi mdi-arrow-right" data-v-3231cdbf${_scopeId4}></i></a></div>`);
                                } else {
                                  return [
                                    createVNode("div", { class: "position-relative mb-5" }, [
                                      createVNode("a", { href: "#" }, [
                                        createVNode(_component_v_img, {
                                          src: product.imageurl,
                                          alt: "blog",
                                          class: "blog-img"
                                        }, null, 8, ["src"])
                                      ]),
                                      createVNode("div", { class: "date-badge bg-info-grediant" }, [
                                        createTextVNode(toDisplayString(getMonth(product.created_at)) + " ", 1),
                                        createVNode("span", null, toDisplayString(getDay(product.created_at)), 1)
                                      ])
                                    ]),
                                    createVNode("div", { class: "pa-5" }, [
                                      createVNode(_component_v_card_title, null, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(product.topic), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_v_card_subtitle, { class: "mt-10 mb-10" }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(product.detail), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode("a", {
                                        href: "#",
                                        class: "text-themecolor linking text-decoration-none d-flex align-center"
                                      }, [
                                        createTextVNode(" \u0E2D\u0E48\u0E32\u0E19\u0E15\u0E48\u0E2D \xA0 "),
                                        createVNode("i", { class: "mdi mdi-arrow-right" })
                                      ])
                                    ])
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(_component_v_card, {
                                elevation: "0",
                                class: "blog-card overflow-hidden mb-5",
                                to: `/blogdetail/${product.id}`
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "position-relative mb-5" }, [
                                    createVNode("a", { href: "#" }, [
                                      createVNode(_component_v_img, {
                                        src: product.imageurl,
                                        alt: "blog",
                                        class: "blog-img"
                                      }, null, 8, ["src"])
                                    ]),
                                    createVNode("div", { class: "date-badge bg-info-grediant" }, [
                                      createTextVNode(toDisplayString(getMonth(product.created_at)) + " ", 1),
                                      createVNode("span", null, toDisplayString(getDay(product.created_at)), 1)
                                    ])
                                  ]),
                                  createVNode("div", { class: "pa-5" }, [
                                    createVNode(_component_v_card_title, null, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(product.topic), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_v_card_subtitle, { class: "mt-10 mb-10" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(product.detail), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode("a", {
                                      href: "#",
                                      class: "text-themecolor linking text-decoration-none d-flex align-center"
                                    }, [
                                      createTextVNode(" \u0E2D\u0E48\u0E32\u0E19\u0E15\u0E48\u0E2D \xA0 "),
                                      createVNode("i", { class: "mdi mdi-arrow-right" })
                                    ])
                                  ])
                                ]),
                                _: 2
                              }, 1032, ["to"])
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    });
                    _push3(`<!--]-->`);
                  } else {
                    return [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(products), (product, index) => {
                        return openBlock(), createBlock(_component_v_col, {
                          cols: "12",
                          md: "6",
                          lg: "4",
                          key: index
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_card, {
                              elevation: "0",
                              class: "blog-card overflow-hidden mb-5",
                              to: `/blogdetail/${product.id}`
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "position-relative mb-5" }, [
                                  createVNode("a", { href: "#" }, [
                                    createVNode(_component_v_img, {
                                      src: product.imageurl,
                                      alt: "blog",
                                      class: "blog-img"
                                    }, null, 8, ["src"])
                                  ]),
                                  createVNode("div", { class: "date-badge bg-info-grediant" }, [
                                    createTextVNode(toDisplayString(getMonth(product.created_at)) + " ", 1),
                                    createVNode("span", null, toDisplayString(getDay(product.created_at)), 1)
                                  ])
                                ]),
                                createVNode("div", { class: "pa-5" }, [
                                  createVNode(_component_v_card_title, null, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(product.topic), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(_component_v_card_subtitle, { class: "mt-10 mb-10" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(product.detail), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode("a", {
                                    href: "#",
                                    class: "text-themecolor linking text-decoration-none d-flex align-center"
                                  }, [
                                    createTextVNode(" \u0E2D\u0E48\u0E32\u0E19\u0E15\u0E48\u0E2D \xA0 "),
                                    createVNode("i", { class: "mdi mdi-arrow-right" })
                                  ])
                                ])
                              ]),
                              _: 2
                            }, 1032, ["to"])
                          ]),
                          _: 2
                        }, 1024);
                      }), 128))
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<div class="text-center py-10" data-v-3231cdbf${_scopeId}>`);
              _push2(ssrRenderComponent(_component_v_progress_circular, {
                indeterminate: "",
                color: "primary"
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            }
          } else {
            return [
              !unref(pending) ? (openBlock(), createBlock(_component_v_row, {
                key: 0,
                class: "mt-13",
                justify: "center"
              }, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(products), (product, index) => {
                    return openBlock(), createBlock(_component_v_col, {
                      cols: "12",
                      md: "6",
                      lg: "4",
                      key: index
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_card, {
                          elevation: "0",
                          class: "blog-card overflow-hidden mb-5",
                          to: `/blogdetail/${product.id}`
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "position-relative mb-5" }, [
                              createVNode("a", { href: "#" }, [
                                createVNode(_component_v_img, {
                                  src: product.imageurl,
                                  alt: "blog",
                                  class: "blog-img"
                                }, null, 8, ["src"])
                              ]),
                              createVNode("div", { class: "date-badge bg-info-grediant" }, [
                                createTextVNode(toDisplayString(getMonth(product.created_at)) + " ", 1),
                                createVNode("span", null, toDisplayString(getDay(product.created_at)), 1)
                              ])
                            ]),
                            createVNode("div", { class: "pa-5" }, [
                              createVNode(_component_v_card_title, null, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(product.topic), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_v_card_subtitle, { class: "mt-10 mb-10" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(product.detail), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode("a", {
                                href: "#",
                                class: "text-themecolor linking text-decoration-none d-flex align-center"
                              }, [
                                createTextVNode(" \u0E2D\u0E48\u0E32\u0E19\u0E15\u0E48\u0E2D \xA0 "),
                                createVNode("i", { class: "mdi mdi-arrow-right" })
                              ])
                            ])
                          ]),
                          _: 2
                        }, 1032, ["to"])
                      ]),
                      _: 2
                    }, 1024);
                  }), 128))
                ]),
                _: 1
              })) : (openBlock(), createBlock("div", {
                key: 1,
                class: "text-center py-10"
              }, [
                createVNode(_component_v_progress_circular, {
                  indeterminate: "",
                  color: "primary"
                })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const blog = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3231cdbf"]]);

export { blog as default };
//# sourceMappingURL=blog.5e018cd8.mjs.map
