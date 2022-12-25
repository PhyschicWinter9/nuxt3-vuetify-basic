import { u as useHead } from "./composables.79d89de8.js";
import { defineComponent, ref, resolveComponent, mergeProps, withCtx, unref, isRef, createTextVNode, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { _ as _imports_0 } from "./dark-logo-icon.a0a168a1.js";
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
  __name: "forgotpass",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "\u0E25\u0E37\u0E21\u0E23\u0E2B\u0E31\u0E2A\u0E1C\u0E48\u0E32\u0E19",
      meta: [
        {
          name: "keywords",
          content: "\u0E25\u0E37\u0E21\u0E23\u0E2B\u0E31\u0E2A\u0E1C\u0E48\u0E32\u0E19, Nuxt 3, Backend"
        },
        {
          name: "Description",
          content: "\u0E25\u0E37\u0E21\u0E23\u0E2B\u0E31\u0E2A\u0E1C\u0E48\u0E32\u0E19 Nuxt 3,  IT Genius Engineering"
        }
      ]
    });
    const valid = ref(true);
    const email = ref("");
    const emailRules = ref([
      (v) => !!v || "\u0E15\u0E49\u0E2D\u0E07\u0E1B\u0E49\u0E2D\u0E19\u0E2D\u0E35\u0E40\u0E21\u0E25\u0E4C",
      (v) => /.+@.+\..+/.test(v) || "\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E2D\u0E35\u0E40\u0E21\u0E25\u0E4C\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07"
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_container = resolveComponent("v-container");
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_card = resolveComponent("v-card");
      const _component_v_form = resolveComponent("v-form");
      const _component_v_text_field = resolveComponent("v-text-field");
      const _component_v_btn = resolveComponent("v-btn");
      _push(ssrRenderComponent(_component_v_container, mergeProps({
        id: "login",
        class: "fill-height justify-center",
        tag: "section"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_row, {
              justify: "center",
              class: "h-100vh",
              align: "center"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_col, {
                    lg: "6",
                    md: "8",
                    sm: "12",
                    xl: "6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_card, { elevation: "10" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_row, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_col, { lg: "12" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<div class="pa-7 pa-sm-12"${_scopeId6}><p class="text-center"${_scopeId6}><img${ssrRenderAttr("src", _imports_0)}${_scopeId6}></p><h2 class="font-weight-bold text-center mt-4 text--darken-2"${_scopeId6}>\u0E25\u0E37\u0E21\u0E23\u0E2B\u0E31\u0E2A\u0E1C\u0E48\u0E32\u0E19</h2>`);
                                          _push7(ssrRenderComponent(_component_v_form, {
                                            ref: "form",
                                            modelValue: unref(valid),
                                            "onUpdate:modelValue": ($event) => isRef(valid) ? valid.value = $event : null,
                                            "lazy-validation": "",
                                            action: "/dashboards/analytical"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_text_field, {
                                                  modelValue: unref(email),
                                                  "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                                                  rules: unref(emailRules),
                                                  label: "E-mail",
                                                  class: "mt-4",
                                                  required: "",
                                                  variant: "outlined"
                                                }, null, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(_component_v_btn, {
                                                  color: "primary",
                                                  to: "/auth/login",
                                                  block: "",
                                                  class: "py-6 mt-4",
                                                  size: "x-large",
                                                  submit: ""
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`\u0E2A\u0E48\u0E07\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25`);
                                                    } else {
                                                      return [
                                                        createTextVNode("\u0E2A\u0E48\u0E07\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(`<div class="text-center mt-6"${_scopeId7}>`);
                                                _push8(ssrRenderComponent(_component_v_btn, {
                                                  variant: "text",
                                                  class: "mb-4",
                                                  to: "/auth/login"
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`<i class="mdi mdi-arrow-left"${_scopeId8}></i> \u0E01\u0E25\u0E31\u0E1A\u0E2B\u0E19\u0E49\u0E32\u0E40\u0E02\u0E49\u0E32\u0E23\u0E30\u0E1A\u0E1A`);
                                                    } else {
                                                      return [
                                                        createVNode("i", { class: "mdi mdi-arrow-left" }),
                                                        createTextVNode(" \u0E01\u0E25\u0E31\u0E1A\u0E2B\u0E19\u0E49\u0E32\u0E40\u0E02\u0E49\u0E32\u0E23\u0E30\u0E1A\u0E1A")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(`</div>`);
                                              } else {
                                                return [
                                                  createVNode(_component_v_text_field, {
                                                    modelValue: unref(email),
                                                    "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                                                    rules: unref(emailRules),
                                                    label: "E-mail",
                                                    class: "mt-4",
                                                    required: "",
                                                    variant: "outlined"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                                  createVNode(_component_v_btn, {
                                                    color: "primary",
                                                    to: "/auth/login",
                                                    block: "",
                                                    class: "py-6 mt-4",
                                                    size: "x-large",
                                                    submit: ""
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("\u0E2A\u0E48\u0E07\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode("div", { class: "text-center mt-6" }, [
                                                    createVNode(_component_v_btn, {
                                                      variant: "text",
                                                      class: "mb-4",
                                                      to: "/auth/login"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode("i", { class: "mdi mdi-arrow-left" }),
                                                        createTextVNode(" \u0E01\u0E25\u0E31\u0E1A\u0E2B\u0E19\u0E49\u0E32\u0E40\u0E02\u0E49\u0E32\u0E23\u0E30\u0E1A\u0E1A")
                                                      ]),
                                                      _: 1
                                                    })
                                                  ])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(`</div>`);
                                        } else {
                                          return [
                                            createVNode("div", { class: "pa-7 pa-sm-12" }, [
                                              createVNode("p", { class: "text-center" }, [
                                                createVNode("img", { src: _imports_0 })
                                              ]),
                                              createVNode("h2", { class: "font-weight-bold text-center mt-4 text--darken-2" }, "\u0E25\u0E37\u0E21\u0E23\u0E2B\u0E31\u0E2A\u0E1C\u0E48\u0E32\u0E19"),
                                              createVNode(_component_v_form, {
                                                ref: "form",
                                                modelValue: unref(valid),
                                                "onUpdate:modelValue": ($event) => isRef(valid) ? valid.value = $event : null,
                                                "lazy-validation": "",
                                                action: "/dashboards/analytical"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_text_field, {
                                                    modelValue: unref(email),
                                                    "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                                                    rules: unref(emailRules),
                                                    label: "E-mail",
                                                    class: "mt-4",
                                                    required: "",
                                                    variant: "outlined"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                                  createVNode(_component_v_btn, {
                                                    color: "primary",
                                                    to: "/auth/login",
                                                    block: "",
                                                    class: "py-6 mt-4",
                                                    size: "x-large",
                                                    submit: ""
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("\u0E2A\u0E48\u0E07\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode("div", { class: "text-center mt-6" }, [
                                                    createVNode(_component_v_btn, {
                                                      variant: "text",
                                                      class: "mb-4",
                                                      to: "/auth/login"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode("i", { class: "mdi mdi-arrow-left" }),
                                                        createTextVNode(" \u0E01\u0E25\u0E31\u0E1A\u0E2B\u0E19\u0E49\u0E32\u0E40\u0E02\u0E49\u0E32\u0E23\u0E30\u0E1A\u0E1A")
                                                      ]),
                                                      _: 1
                                                    })
                                                  ])
                                                ]),
                                                _: 1
                                              }, 8, ["modelValue", "onUpdate:modelValue"])
                                            ])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_col, { lg: "12" }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "pa-7 pa-sm-12" }, [
                                            createVNode("p", { class: "text-center" }, [
                                              createVNode("img", { src: _imports_0 })
                                            ]),
                                            createVNode("h2", { class: "font-weight-bold text-center mt-4 text--darken-2" }, "\u0E25\u0E37\u0E21\u0E23\u0E2B\u0E31\u0E2A\u0E1C\u0E48\u0E32\u0E19"),
                                            createVNode(_component_v_form, {
                                              ref: "form",
                                              modelValue: unref(valid),
                                              "onUpdate:modelValue": ($event) => isRef(valid) ? valid.value = $event : null,
                                              "lazy-validation": "",
                                              action: "/dashboards/analytical"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_text_field, {
                                                  modelValue: unref(email),
                                                  "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                                                  rules: unref(emailRules),
                                                  label: "E-mail",
                                                  class: "mt-4",
                                                  required: "",
                                                  variant: "outlined"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                                createVNode(_component_v_btn, {
                                                  color: "primary",
                                                  to: "/auth/login",
                                                  block: "",
                                                  class: "py-6 mt-4",
                                                  size: "x-large",
                                                  submit: ""
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("\u0E2A\u0E48\u0E07\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode("div", { class: "text-center mt-6" }, [
                                                  createVNode(_component_v_btn, {
                                                    variant: "text",
                                                    class: "mb-4",
                                                    to: "/auth/login"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode("i", { class: "mdi mdi-arrow-left" }),
                                                      createTextVNode(" \u0E01\u0E25\u0E31\u0E1A\u0E2B\u0E19\u0E49\u0E32\u0E40\u0E02\u0E49\u0E32\u0E23\u0E30\u0E1A\u0E1A")
                                                    ]),
                                                    _: 1
                                                  })
                                                ])
                                              ]),
                                              _: 1
                                            }, 8, ["modelValue", "onUpdate:modelValue"])
                                          ])
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_row, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_col, { lg: "12" }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "pa-7 pa-sm-12" }, [
                                          createVNode("p", { class: "text-center" }, [
                                            createVNode("img", { src: _imports_0 })
                                          ]),
                                          createVNode("h2", { class: "font-weight-bold text-center mt-4 text--darken-2" }, "\u0E25\u0E37\u0E21\u0E23\u0E2B\u0E31\u0E2A\u0E1C\u0E48\u0E32\u0E19"),
                                          createVNode(_component_v_form, {
                                            ref: "form",
                                            modelValue: unref(valid),
                                            "onUpdate:modelValue": ($event) => isRef(valid) ? valid.value = $event : null,
                                            "lazy-validation": "",
                                            action: "/dashboards/analytical"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_text_field, {
                                                modelValue: unref(email),
                                                "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                                                rules: unref(emailRules),
                                                label: "E-mail",
                                                class: "mt-4",
                                                required: "",
                                                variant: "outlined"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                              createVNode(_component_v_btn, {
                                                color: "primary",
                                                to: "/auth/login",
                                                block: "",
                                                class: "py-6 mt-4",
                                                size: "x-large",
                                                submit: ""
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode("\u0E2A\u0E48\u0E07\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode("div", { class: "text-center mt-6" }, [
                                                createVNode(_component_v_btn, {
                                                  variant: "text",
                                                  class: "mb-4",
                                                  to: "/auth/login"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode("i", { class: "mdi mdi-arrow-left" }),
                                                    createTextVNode(" \u0E01\u0E25\u0E31\u0E1A\u0E2B\u0E19\u0E49\u0E32\u0E40\u0E02\u0E49\u0E32\u0E23\u0E30\u0E1A\u0E1A")
                                                  ]),
                                                  _: 1
                                                })
                                              ])
                                            ]),
                                            _: 1
                                          }, 8, ["modelValue", "onUpdate:modelValue"])
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
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_card, { elevation: "10" }, {
                            default: withCtx(() => [
                              createVNode(_component_v_row, null, {
                                default: withCtx(() => [
                                  createVNode(_component_v_col, { lg: "12" }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "pa-7 pa-sm-12" }, [
                                        createVNode("p", { class: "text-center" }, [
                                          createVNode("img", { src: _imports_0 })
                                        ]),
                                        createVNode("h2", { class: "font-weight-bold text-center mt-4 text--darken-2" }, "\u0E25\u0E37\u0E21\u0E23\u0E2B\u0E31\u0E2A\u0E1C\u0E48\u0E32\u0E19"),
                                        createVNode(_component_v_form, {
                                          ref: "form",
                                          modelValue: unref(valid),
                                          "onUpdate:modelValue": ($event) => isRef(valid) ? valid.value = $event : null,
                                          "lazy-validation": "",
                                          action: "/dashboards/analytical"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_text_field, {
                                              modelValue: unref(email),
                                              "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                                              rules: unref(emailRules),
                                              label: "E-mail",
                                              class: "mt-4",
                                              required: "",
                                              variant: "outlined"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                            createVNode(_component_v_btn, {
                                              color: "primary",
                                              to: "/auth/login",
                                              block: "",
                                              class: "py-6 mt-4",
                                              size: "x-large",
                                              submit: ""
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode("\u0E2A\u0E48\u0E07\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode("div", { class: "text-center mt-6" }, [
                                              createVNode(_component_v_btn, {
                                                variant: "text",
                                                class: "mb-4",
                                                to: "/auth/login"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode("i", { class: "mdi mdi-arrow-left" }),
                                                  createTextVNode(" \u0E01\u0E25\u0E31\u0E1A\u0E2B\u0E19\u0E49\u0E32\u0E40\u0E02\u0E49\u0E32\u0E23\u0E30\u0E1A\u0E1A")
                                                ]),
                                                _: 1
                                              })
                                            ])
                                          ]),
                                          _: 1
                                        }, 8, ["modelValue", "onUpdate:modelValue"])
                                      ])
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
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_col, {
                      lg: "6",
                      md: "8",
                      sm: "12",
                      xl: "6"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_card, { elevation: "10" }, {
                          default: withCtx(() => [
                            createVNode(_component_v_row, null, {
                              default: withCtx(() => [
                                createVNode(_component_v_col, { lg: "12" }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "pa-7 pa-sm-12" }, [
                                      createVNode("p", { class: "text-center" }, [
                                        createVNode("img", { src: _imports_0 })
                                      ]),
                                      createVNode("h2", { class: "font-weight-bold text-center mt-4 text--darken-2" }, "\u0E25\u0E37\u0E21\u0E23\u0E2B\u0E31\u0E2A\u0E1C\u0E48\u0E32\u0E19"),
                                      createVNode(_component_v_form, {
                                        ref: "form",
                                        modelValue: unref(valid),
                                        "onUpdate:modelValue": ($event) => isRef(valid) ? valid.value = $event : null,
                                        "lazy-validation": "",
                                        action: "/dashboards/analytical"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_text_field, {
                                            modelValue: unref(email),
                                            "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                                            rules: unref(emailRules),
                                            label: "E-mail",
                                            class: "mt-4",
                                            required: "",
                                            variant: "outlined"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                          createVNode(_component_v_btn, {
                                            color: "primary",
                                            to: "/auth/login",
                                            block: "",
                                            class: "py-6 mt-4",
                                            size: "x-large",
                                            submit: ""
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode("\u0E2A\u0E48\u0E07\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode("div", { class: "text-center mt-6" }, [
                                            createVNode(_component_v_btn, {
                                              variant: "text",
                                              class: "mb-4",
                                              to: "/auth/login"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode("i", { class: "mdi mdi-arrow-left" }),
                                                createTextVNode(" \u0E01\u0E25\u0E31\u0E1A\u0E2B\u0E19\u0E49\u0E32\u0E40\u0E02\u0E49\u0E32\u0E23\u0E30\u0E1A\u0E1A")
                                              ]),
                                              _: 1
                                            })
                                          ])
                                        ]),
                                        _: 1
                                      }, 8, ["modelValue", "onUpdate:modelValue"])
                                    ])
                                  ]),
                                  _: 1
                                })
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
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_row, {
                justify: "center",
                class: "h-100vh",
                align: "center"
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_col, {
                    lg: "6",
                    md: "8",
                    sm: "12",
                    xl: "6"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_card, { elevation: "10" }, {
                        default: withCtx(() => [
                          createVNode(_component_v_row, null, {
                            default: withCtx(() => [
                              createVNode(_component_v_col, { lg: "12" }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "pa-7 pa-sm-12" }, [
                                    createVNode("p", { class: "text-center" }, [
                                      createVNode("img", { src: _imports_0 })
                                    ]),
                                    createVNode("h2", { class: "font-weight-bold text-center mt-4 text--darken-2" }, "\u0E25\u0E37\u0E21\u0E23\u0E2B\u0E31\u0E2A\u0E1C\u0E48\u0E32\u0E19"),
                                    createVNode(_component_v_form, {
                                      ref: "form",
                                      modelValue: unref(valid),
                                      "onUpdate:modelValue": ($event) => isRef(valid) ? valid.value = $event : null,
                                      "lazy-validation": "",
                                      action: "/dashboards/analytical"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_text_field, {
                                          modelValue: unref(email),
                                          "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                                          rules: unref(emailRules),
                                          label: "E-mail",
                                          class: "mt-4",
                                          required: "",
                                          variant: "outlined"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                        createVNode(_component_v_btn, {
                                          color: "primary",
                                          to: "/auth/login",
                                          block: "",
                                          class: "py-6 mt-4",
                                          size: "x-large",
                                          submit: ""
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("\u0E2A\u0E48\u0E07\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode("div", { class: "text-center mt-6" }, [
                                          createVNode(_component_v_btn, {
                                            variant: "text",
                                            class: "mb-4",
                                            to: "/auth/login"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode("i", { class: "mdi mdi-arrow-left" }),
                                              createTextVNode(" \u0E01\u0E25\u0E31\u0E1A\u0E2B\u0E19\u0E49\u0E32\u0E40\u0E02\u0E49\u0E32\u0E23\u0E30\u0E1A\u0E1A")
                                            ]),
                                            _: 1
                                          })
                                        ])
                                      ]),
                                      _: 1
                                    }, 8, ["modelValue", "onUpdate:modelValue"])
                                  ])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
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
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/auth/forgotpass.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=forgotpass.bfcb977a.js.map
