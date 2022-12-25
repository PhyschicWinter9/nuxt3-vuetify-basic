import { useSSRContext, defineComponent, ref, resolveComponent, mergeProps, withCtx, createVNode, unref, createTextVNode } from 'file://E:/Unversity/NuxttJS%20Workshop/Basic%20NuxtJS/Workshop/nuxt3-vuetify-workshop-day4/node_modules/vue/index.mjs';
import { u as useHead } from './composables.79d89de8.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'file://E:/Unversity/NuxttJS%20Workshop/Basic%20NuxtJS/Workshop/nuxt3-vuetify-workshop-day4/node_modules/vue/server-renderer/index.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "contact",
  __ssrInlineRender: true,
  setup(__props) {
    const data = ref({
      name: "",
      email: ""
    });
    useHead({
      title: "\u0E15\u0E34\u0E14\u0E15\u0E48\u0E2D\u0E40\u0E23\u0E32",
      meta: [
        {
          name: "keywords",
          content: "\u0E15\u0E34\u0E14\u0E15\u0E48\u0E2D\u0E40\u0E23\u0E32, Nuxt 3, Backend"
        },
        {
          name: "Description",
          content: "\u0E15\u0E34\u0E14\u0E15\u0E48\u0E2D\u0E40\u0E23\u0E32 Nuxt 3,  IT Genius Engineering"
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_container = resolveComponent("v-container");
      const _component_v_text_field = resolveComponent("v-text-field");
      const _component_v_textarea = resolveComponent("v-textarea");
      const _component_v_btn = resolveComponent("v-btn");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mb-5" }, _attrs))} data-v-d04ec600><div class="wrapper" data-v-d04ec600>`);
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
                  _push3(`<div class="text-center" data-v-d04ec600${_scopeId2}><h2 class="ui-title font-weight-bold text-white mb-4" data-v-d04ec600${_scopeId2}>\u0E15\u0E34\u0E14\u0E15\u0E48\u0E2D\u0E40\u0E23\u0E32</h2><p class="text-white" data-v-d04ec600${_scopeId2}> Here you can check Demos we created you can easily use it. Its quite easy to Create your own dream website &amp; dashboard in No-time. </p></div>`);
                } else {
                  return [
                    createVNode("div", { class: "text-center" }, [
                      createVNode("h2", { class: "ui-title font-weight-bold text-white mb-4" }, "\u0E15\u0E34\u0E14\u0E15\u0E48\u0E2D\u0E40\u0E23\u0E32"),
                      createVNode("p", { class: "text-white" }, " Here you can check Demos we created you can easily use it. Its quite easy to Create your own dream website & dashboard in No-time. ")
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
                    createVNode("h2", { class: "ui-title font-weight-bold text-white mb-4" }, "\u0E15\u0E34\u0E14\u0E15\u0E48\u0E2D\u0E40\u0E23\u0E32"),
                    createVNode("p", { class: "text-white" }, " Here you can check Demos we created you can easily use it. Its quite easy to Create your own dream website & dashboard in No-time. ")
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
            _push2(ssrRenderComponent(_component_v_row, { justify: "center" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_col, {
                    cols: "12",
                    sm: "12",
                    md: "12",
                    lg: "8"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div data-v-d04ec600${_scopeId3}><h2 class="font-weight-medium mb-5" data-v-d04ec600${_scopeId3}> \u0E1D\u0E32\u0E01\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E16\u0E36\u0E07\u0E40\u0E23\u0E32 </h2><form data-v-d04ec600${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_v_row, { class: "mt-15" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_col, {
                                cols: "12",
                                md: "6",
                                class: "py-0 pl-0"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_text_field, {
                                      label: "Name",
                                      outlined: "",
                                      modelValue: unref(data).name,
                                      "onUpdate:modelValue": ($event) => unref(data).name = $event,
                                      placeholder: "Name"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_text_field, {
                                        label: "Name",
                                        outlined: "",
                                        modelValue: unref(data).name,
                                        "onUpdate:modelValue": ($event) => unref(data).name = $event,
                                        placeholder: "Name"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_col, {
                                cols: "12",
                                md: "6",
                                class: "py-0 pl-0"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_text_field, {
                                      label: "Email",
                                      outlined: "",
                                      type: "email",
                                      modelValue: unref(data).email,
                                      "onUpdate:modelValue": ($event) => unref(data).email = $event,
                                      placeholder: "Email"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_text_field, {
                                        label: "Email",
                                        outlined: "",
                                        type: "email",
                                        modelValue: unref(data).email,
                                        "onUpdate:modelValue": ($event) => unref(data).email = $event,
                                        placeholder: "Email"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_col, {
                                cols: "12",
                                class: "py-0 pl-0"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_textarea, {
                                      name: "message",
                                      outlined: "",
                                      label: "Message",
                                      rows: "3"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_textarea, {
                                        name: "message",
                                        outlined: "",
                                        label: "Message",
                                        rows: "3"
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_col, {
                                  cols: "12",
                                  md: "6",
                                  class: "py-0 pl-0"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_text_field, {
                                      label: "Name",
                                      outlined: "",
                                      modelValue: unref(data).name,
                                      "onUpdate:modelValue": ($event) => unref(data).name = $event,
                                      placeholder: "Name"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_col, {
                                  cols: "12",
                                  md: "6",
                                  class: "py-0 pl-0"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_text_field, {
                                      label: "Email",
                                      outlined: "",
                                      type: "email",
                                      modelValue: unref(data).email,
                                      "onUpdate:modelValue": ($event) => unref(data).email = $event,
                                      placeholder: "Email"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_col, {
                                  cols: "12",
                                  class: "py-0 pl-0"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_textarea, {
                                      name: "message",
                                      outlined: "",
                                      label: "Message",
                                      rows: "3"
                                    })
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_btn, {
                          nuxt: "",
                          to: "/contact",
                          class: "btn-custom-md btn-danger-gradient",
                          outlined: "",
                          color: "error",
                          elevation: "0"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` \u0E2A\u0E48\u0E07\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25 `);
                            } else {
                              return [
                                createTextVNode(" \u0E2A\u0E48\u0E07\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25 ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</form></div>`);
                      } else {
                        return [
                          createVNode("div", null, [
                            createVNode("h2", { class: "font-weight-medium mb-5" }, " \u0E1D\u0E32\u0E01\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E16\u0E36\u0E07\u0E40\u0E23\u0E32 "),
                            createVNode("form", null, [
                              createVNode(_component_v_row, { class: "mt-15" }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_col, {
                                    cols: "12",
                                    md: "6",
                                    class: "py-0 pl-0"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_text_field, {
                                        label: "Name",
                                        outlined: "",
                                        modelValue: unref(data).name,
                                        "onUpdate:modelValue": ($event) => unref(data).name = $event,
                                        placeholder: "Name"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_col, {
                                    cols: "12",
                                    md: "6",
                                    class: "py-0 pl-0"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_text_field, {
                                        label: "Email",
                                        outlined: "",
                                        type: "email",
                                        modelValue: unref(data).email,
                                        "onUpdate:modelValue": ($event) => unref(data).email = $event,
                                        placeholder: "Email"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_col, {
                                    cols: "12",
                                    class: "py-0 pl-0"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_textarea, {
                                        name: "message",
                                        outlined: "",
                                        label: "Message",
                                        rows: "3"
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_btn, {
                                nuxt: "",
                                to: "/contact",
                                class: "btn-custom-md btn-danger-gradient",
                                outlined: "",
                                color: "error",
                                elevation: "0"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" \u0E2A\u0E48\u0E07\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25 ")
                                ]),
                                _: 1
                              })
                            ])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_col, {
                    cols: "12",
                    sm: "12",
                    md: "12",
                    lg: "4"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="primary" data-v-d04ec600${_scopeId3}><h2 class="detail-title font-weight-medium" data-v-d04ec600${_scopeId3}> \u0E2A\u0E16\u0E32\u0E1A\u0E31\u0E19\u0E44\u0E2D\u0E17\u0E35\u0E08\u0E35\u0E40\u0E19\u0E35\u0E22\u0E2A </h2><p class="mt-5" data-v-d04ec600${_scopeId3}>\u0E40\u0E25\u0E02\u0E17\u0E35\u0E48 3/449 Ladprao 68</p><p class="mb-5" data-v-d04ec600${_scopeId3}>info@itgenius.com</p><p class="mt-5" data-v-d04ec600${_scopeId3}>\u0E40\u0E25\u0E02\u0E17\u0E35\u0E48 5 Ladprao Ave.</p><p data-v-d04ec600${_scopeId3}>Ladprao Road, BKK 10230</p></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "primary" }, [
                            createVNode("h2", { class: "detail-title font-weight-medium" }, " \u0E2A\u0E16\u0E32\u0E1A\u0E31\u0E19\u0E44\u0E2D\u0E17\u0E35\u0E08\u0E35\u0E40\u0E19\u0E35\u0E22\u0E2A "),
                            createVNode("p", { class: "mt-5" }, "\u0E40\u0E25\u0E02\u0E17\u0E35\u0E48 3/449 Ladprao 68"),
                            createVNode("p", { class: "mb-5" }, "info@itgenius.com"),
                            createVNode("p", { class: "mt-5" }, "\u0E40\u0E25\u0E02\u0E17\u0E35\u0E48 5 Ladprao Ave."),
                            createVNode("p", null, "Ladprao Road, BKK 10230")
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_col, {
                      cols: "12",
                      sm: "12",
                      md: "12",
                      lg: "8"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", null, [
                          createVNode("h2", { class: "font-weight-medium mb-5" }, " \u0E1D\u0E32\u0E01\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E16\u0E36\u0E07\u0E40\u0E23\u0E32 "),
                          createVNode("form", null, [
                            createVNode(_component_v_row, { class: "mt-15" }, {
                              default: withCtx(() => [
                                createVNode(_component_v_col, {
                                  cols: "12",
                                  md: "6",
                                  class: "py-0 pl-0"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_text_field, {
                                      label: "Name",
                                      outlined: "",
                                      modelValue: unref(data).name,
                                      "onUpdate:modelValue": ($event) => unref(data).name = $event,
                                      placeholder: "Name"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_col, {
                                  cols: "12",
                                  md: "6",
                                  class: "py-0 pl-0"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_text_field, {
                                      label: "Email",
                                      outlined: "",
                                      type: "email",
                                      modelValue: unref(data).email,
                                      "onUpdate:modelValue": ($event) => unref(data).email = $event,
                                      placeholder: "Email"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_col, {
                                  cols: "12",
                                  class: "py-0 pl-0"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_textarea, {
                                      name: "message",
                                      outlined: "",
                                      label: "Message",
                                      rows: "3"
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_btn, {
                              nuxt: "",
                              to: "/contact",
                              class: "btn-custom-md btn-danger-gradient",
                              outlined: "",
                              color: "error",
                              elevation: "0"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" \u0E2A\u0E48\u0E07\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25 ")
                              ]),
                              _: 1
                            })
                          ])
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_col, {
                      cols: "12",
                      sm: "12",
                      md: "12",
                      lg: "4"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "primary" }, [
                          createVNode("h2", { class: "detail-title font-weight-medium" }, " \u0E2A\u0E16\u0E32\u0E1A\u0E31\u0E19\u0E44\u0E2D\u0E17\u0E35\u0E08\u0E35\u0E40\u0E19\u0E35\u0E22\u0E2A "),
                          createVNode("p", { class: "mt-5" }, "\u0E40\u0E25\u0E02\u0E17\u0E35\u0E48 3/449 Ladprao 68"),
                          createVNode("p", { class: "mb-5" }, "info@itgenius.com"),
                          createVNode("p", { class: "mt-5" }, "\u0E40\u0E25\u0E02\u0E17\u0E35\u0E48 5 Ladprao Ave."),
                          createVNode("p", null, "Ladprao Road, BKK 10230")
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
              createVNode(_component_v_row, { justify: "center" }, {
                default: withCtx(() => [
                  createVNode(_component_v_col, {
                    cols: "12",
                    sm: "12",
                    md: "12",
                    lg: "8"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", null, [
                        createVNode("h2", { class: "font-weight-medium mb-5" }, " \u0E1D\u0E32\u0E01\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E16\u0E36\u0E07\u0E40\u0E23\u0E32 "),
                        createVNode("form", null, [
                          createVNode(_component_v_row, { class: "mt-15" }, {
                            default: withCtx(() => [
                              createVNode(_component_v_col, {
                                cols: "12",
                                md: "6",
                                class: "py-0 pl-0"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_text_field, {
                                    label: "Name",
                                    outlined: "",
                                    modelValue: unref(data).name,
                                    "onUpdate:modelValue": ($event) => unref(data).name = $event,
                                    placeholder: "Name"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_col, {
                                cols: "12",
                                md: "6",
                                class: "py-0 pl-0"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_text_field, {
                                    label: "Email",
                                    outlined: "",
                                    type: "email",
                                    modelValue: unref(data).email,
                                    "onUpdate:modelValue": ($event) => unref(data).email = $event,
                                    placeholder: "Email"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_col, {
                                cols: "12",
                                class: "py-0 pl-0"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_textarea, {
                                    name: "message",
                                    outlined: "",
                                    label: "Message",
                                    rows: "3"
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_btn, {
                            nuxt: "",
                            to: "/contact",
                            class: "btn-custom-md btn-danger-gradient",
                            outlined: "",
                            color: "error",
                            elevation: "0"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \u0E2A\u0E48\u0E07\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25 ")
                            ]),
                            _: 1
                          })
                        ])
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_col, {
                    cols: "12",
                    sm: "12",
                    md: "12",
                    lg: "4"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "primary" }, [
                        createVNode("h2", { class: "detail-title font-weight-medium" }, " \u0E2A\u0E16\u0E32\u0E1A\u0E31\u0E19\u0E44\u0E2D\u0E17\u0E35\u0E08\u0E35\u0E40\u0E19\u0E35\u0E22\u0E2A "),
                        createVNode("p", { class: "mt-5" }, "\u0E40\u0E25\u0E02\u0E17\u0E35\u0E48 3/449 Ladprao 68"),
                        createVNode("p", { class: "mb-5" }, "info@itgenius.com"),
                        createVNode("p", { class: "mt-5" }, "\u0E40\u0E25\u0E02\u0E17\u0E35\u0E48 5 Ladprao Ave."),
                        createVNode("p", null, "Ladprao Road, BKK 10230")
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
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const contact = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d04ec600"]]);

export { contact as default };
//# sourceMappingURL=contact.d9a95e1e.mjs.map
