import { defineComponent, ref, resolveComponent, withCtx, unref, createTextVNode, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, isRef, useSSRContext, renderSlot } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderSlot } from "vue/server-renderer";
import { d as useDisplay, a as __nuxt_component_0, _ as _export_sfc } from "../server.mjs";
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
const headerItems = [
  {
    title: "\u0E2B\u0E19\u0E49\u0E32\u0E2B\u0E25\u0E31\u0E01",
    to: "/"
  },
  {
    title: "\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E01\u0E31\u0E1A\u0E40\u0E23\u0E32",
    to: "/about"
  },
  {
    title: "\u0E1A\u0E25\u0E47\u0E2D\u0E01",
    to: "/blog"
  },
  {
    title: "\u0E15\u0E34\u0E14\u0E15\u0E48\u0E2D\u0E40\u0E23\u0E32",
    to: "/contact"
  },
  {
    title: "\u0E40\u0E02\u0E49\u0E32\u0E2A\u0E39\u0E48\u0E23\u0E30\u0E1A\u0E1A",
    to: "/auth/login"
  }
];
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    const drawer = ref(false);
    const { mdAndUp } = useDisplay();
    const headerMenu = ref(headerItems);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_app_bar = resolveComponent("v-app-bar");
      const _component_v_app_bar_nav_icon = resolveComponent("v-app-bar-nav-icon");
      const _component_NuxtLink = __nuxt_component_0;
      const _component_v_container = resolveComponent("v-container");
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_toolbar_title = resolveComponent("v-toolbar-title");
      const _component_v_btn = resolveComponent("v-btn");
      const _component_v_icon = resolveComponent("v-icon");
      const _component_v_navigation_drawer = resolveComponent("v-navigation-drawer");
      const _component_v_list = resolveComponent("v-list");
      const _component_v_list_item = resolveComponent("v-list-item");
      const _component_v_list_item_title = resolveComponent("v-list-item-title");
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-974d2c5d>`);
      _push(ssrRenderComponent(_component_v_app_bar, {
        app: "",
        color: "blue accent-4",
        dark: "",
        elevation: "0"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_app_bar_nav_icon, {
              onClick: ($event) => drawer.value = !unref(drawer),
              class: "d-block d-sm-none"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "/",
              class: "d-block d-lg-none brand ml-8"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`NuxtPress`);
                } else {
                  return [
                    createTextVNode("NuxtPress")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_container, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_row, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_col, {
                          class: "d-none d-lg-block",
                          sm: "12",
                          md: "12",
                          lg: "4"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_toolbar_title, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_NuxtLink, {
                                      to: "/",
                                      class: "d-flex brand mt-2"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`NuxtPress`);
                                        } else {
                                          return [
                                            createTextVNode("NuxtPress")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_NuxtLink, {
                                        to: "/",
                                        class: "d-flex brand mt-2"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("NuxtPress")
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
                                createVNode(_component_v_toolbar_title, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_NuxtLink, {
                                      to: "/",
                                      class: "d-flex brand mt-2"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("NuxtPress")
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
                        _push4(ssrRenderComponent(_component_v_col, {
                          class: "d-none d-sm-block text-end",
                          sm: "12",
                          md: "12",
                          lg: "8"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<!--[-->`);
                              ssrRenderList(unref(headerMenu), (item, i) => {
                                _push5(ssrRenderComponent(_component_v_btn, {
                                  class: "menu",
                                  to: item.to,
                                  key: i
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`${ssrInterpolate(item.title)}`);
                                    } else {
                                      return [
                                        createTextVNode(toDisplayString(item.title), 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              });
                              _push5(`<!--]-->`);
                              _push5(ssrRenderComponent(_component_v_btn, {
                                class: "menu",
                                icon: ""
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_icon, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`mdi-magnify`);
                                        } else {
                                          return [
                                            createTextVNode("mdi-magnify")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_icon, null, {
                                        default: withCtx(() => [
                                          createTextVNode("mdi-magnify")
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
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(headerMenu), (item, i) => {
                                  return openBlock(), createBlock(_component_v_btn, {
                                    class: "menu",
                                    to: item.to,
                                    key: i
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(item.title), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["to"]);
                                }), 128)),
                                createVNode(_component_v_btn, {
                                  class: "menu",
                                  icon: ""
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_icon, null, {
                                      default: withCtx(() => [
                                        createTextVNode("mdi-magnify")
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
                          createVNode(_component_v_col, {
                            class: "d-none d-lg-block",
                            sm: "12",
                            md: "12",
                            lg: "4"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_toolbar_title, null, {
                                default: withCtx(() => [
                                  createVNode(_component_NuxtLink, {
                                    to: "/",
                                    class: "d-flex brand mt-2"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("NuxtPress")
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
                            class: "d-none d-sm-block text-end",
                            sm: "12",
                            md: "12",
                            lg: "8"
                          }, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(headerMenu), (item, i) => {
                                return openBlock(), createBlock(_component_v_btn, {
                                  class: "menu",
                                  to: item.to,
                                  key: i
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(item.title), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["to"]);
                              }), 128)),
                              createVNode(_component_v_btn, {
                                class: "menu",
                                icon: ""
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_icon, null, {
                                    default: withCtx(() => [
                                      createTextVNode("mdi-magnify")
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
                    createVNode(_component_v_row, null, {
                      default: withCtx(() => [
                        createVNode(_component_v_col, {
                          class: "d-none d-lg-block",
                          sm: "12",
                          md: "12",
                          lg: "4"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_toolbar_title, null, {
                              default: withCtx(() => [
                                createVNode(_component_NuxtLink, {
                                  to: "/",
                                  class: "d-flex brand mt-2"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("NuxtPress")
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
                          class: "d-none d-sm-block text-end",
                          sm: "12",
                          md: "12",
                          lg: "8"
                        }, {
                          default: withCtx(() => [
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(headerMenu), (item, i) => {
                              return openBlock(), createBlock(_component_v_btn, {
                                class: "menu",
                                to: item.to,
                                key: i
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(item.title), 1)
                                ]),
                                _: 2
                              }, 1032, ["to"]);
                            }), 128)),
                            createVNode(_component_v_btn, {
                              class: "menu",
                              icon: ""
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_icon, null, {
                                  default: withCtx(() => [
                                    createTextVNode("mdi-magnify")
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
              createVNode(_component_v_app_bar_nav_icon, {
                onClick: ($event) => drawer.value = !unref(drawer),
                class: "d-block d-sm-none"
              }, null, 8, ["onClick"]),
              createVNode(_component_NuxtLink, {
                to: "/",
                class: "d-block d-lg-none brand ml-8"
              }, {
                default: withCtx(() => [
                  createTextVNode("NuxtPress")
                ]),
                _: 1
              }),
              createVNode(_component_v_container, null, {
                default: withCtx(() => [
                  createVNode(_component_v_row, null, {
                    default: withCtx(() => [
                      createVNode(_component_v_col, {
                        class: "d-none d-lg-block",
                        sm: "12",
                        md: "12",
                        lg: "4"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_toolbar_title, null, {
                            default: withCtx(() => [
                              createVNode(_component_NuxtLink, {
                                to: "/",
                                class: "d-flex brand mt-2"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("NuxtPress")
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
                        class: "d-none d-sm-block text-end",
                        sm: "12",
                        md: "12",
                        lg: "8"
                      }, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(headerMenu), (item, i) => {
                            return openBlock(), createBlock(_component_v_btn, {
                              class: "menu",
                              to: item.to,
                              key: i
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.title), 1)
                              ]),
                              _: 2
                            }, 1032, ["to"]);
                          }), 128)),
                          createVNode(_component_v_btn, {
                            class: "menu",
                            icon: ""
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_icon, null, {
                                default: withCtx(() => [
                                  createTextVNode("mdi-magnify")
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
      _push(ssrRenderComponent(_component_v_navigation_drawer, {
        left: "",
        elevation: "10",
        app: "",
        temporary: unref(mdAndUp),
        modelValue: unref(drawer),
        "onUpdate:modelValue": ($event) => isRef(drawer) ? drawer.value = $event : null,
        "expand-on-hover": ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_list, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(unref(headerMenu), (item, i) => {
                    _push3(ssrRenderComponent(_component_v_list_item, {
                      to: item.to,
                      class: "mb-1",
                      key: i
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_v_list_item_title, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(item.title)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(item.title), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
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
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(headerMenu), (item, i) => {
                      return openBlock(), createBlock(_component_v_list_item, {
                        to: item.to,
                        class: "mb-1",
                        key: i
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_list_item_title, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(item.title), 1)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1032, ["to"]);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_list, null, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(headerMenu), (item, i) => {
                    return openBlock(), createBlock(_component_v_list_item, {
                      to: item.to,
                      class: "mb-1",
                      key: i
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_list_item_title, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(item.title), 1)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1032, ["to"]);
                  }), 128))
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
const Header_vue_vue_type_style_index_0_scoped_974d2c5d_lang = "";
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landing/Header.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Header = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-974d2c5d"]]);
const Footer_vue_vue_type_style_index_0_scoped_703d2738_lang = "";
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_v_footer = resolveComponent("v-footer");
  const _component_v_container = resolveComponent("v-container");
  const _component_v_row = resolveComponent("v-row");
  const _component_v_col = resolveComponent("v-col");
  const _component_v_icon = resolveComponent("v-icon");
  _push(ssrRenderComponent(_component_v_footer, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_container, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_row, { class: "py-0" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_v_col, {
                      cols: "12",
                      sm: "6",
                      md: "6",
                      lg: "3",
                      class: "px-0"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<h4 class="font-weight-bold font-18 mt-5" data-v-703d2738${_scopeId4}>Address</h4><p class="mt-2 mb-0" data-v-703d2738${_scopeId4}>3/499 Ladprao Wanghin 68 Bangkok 10230</p>`);
                        } else {
                          return [
                            createVNode("h4", { class: "font-weight-bold font-18 mt-5" }, "Address"),
                            createVNode("p", { class: "mt-2 mb-0" }, "3/499 Ladprao Wanghin 68 Bangkok 10230")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_v_col, {
                      cols: "12",
                      sm: "6",
                      md: "6",
                      lg: "3",
                      class: "px-0"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<h4 class="font-weight-bold font-18 mt-5" data-v-703d2738${_scopeId4}>Phone</h4><p class="mt-2 mb-0" data-v-703d2738${_scopeId4}>Reception : +66 02 570-8449</p><p data-v-703d2738${_scopeId4}>Office : +66 02 570-8449</p>`);
                        } else {
                          return [
                            createVNode("h4", { class: "font-weight-bold font-18 mt-5" }, "Phone"),
                            createVNode("p", { class: "mt-2 mb-0" }, "Reception : +66 02 570-8449"),
                            createVNode("p", null, "Office : +66 02 570-8449")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_v_col, {
                      cols: "12",
                      sm: "6",
                      md: "6",
                      lg: "3",
                      class: "px-0"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<h4 class="font-weight-bold font-18 mt-5" data-v-703d2738${_scopeId4}>Email</h4><p class="mt-2 mb-0" data-v-703d2738${_scopeId4}> Office : <a class="dark-link" href="/" data-v-703d2738${_scopeId4}>contact@itgenius.co.th</a></p><p data-v-703d2738${_scopeId4}> Site : <a class="dark-link" href="https://www.itgenius.co.th/" data-v-703d2738${_scopeId4}>itgenius.co.th</a></p>`);
                        } else {
                          return [
                            createVNode("h4", { class: "font-weight-bold font-18 mt-5" }, "Email"),
                            createVNode("p", { class: "mt-2 mb-0" }, [
                              createTextVNode(" Office : "),
                              createVNode("a", {
                                class: "dark-link",
                                href: "/"
                              }, "contact@itgenius.co.th")
                            ]),
                            createVNode("p", null, [
                              createTextVNode(" Site : "),
                              createVNode("a", {
                                class: "dark-link",
                                href: "https://www.itgenius.co.th/"
                              }, "itgenius.co.th")
                            ])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_v_col, {
                      cols: "12",
                      sm: "6",
                      md: "6",
                      lg: "3",
                      class: "px-0"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<h4 class="font-weight-bold font-18 mt-5" data-v-703d2738${_scopeId4}>Social</h4><div class="social-icons mt-2" data-v-703d2738${_scopeId4}><a href="#" class="ml-0" data-v-703d2738${_scopeId4}>`);
                          _push5(ssrRenderComponent(_component_v_icon, {
                            icon: "mdi mdi-facebook",
                            size: "24"
                          }, null, _parent5, _scopeId4));
                          _push5(`</a><a href="#" data-v-703d2738${_scopeId4}>`);
                          _push5(ssrRenderComponent(_component_v_icon, {
                            icon: "mdi mdi-twitter",
                            size: "24"
                          }, null, _parent5, _scopeId4));
                          _push5(`</a><a href="#" data-v-703d2738${_scopeId4}>`);
                          _push5(ssrRenderComponent(_component_v_icon, {
                            icon: "mdi mdi-youtube",
                            size: "24"
                          }, null, _parent5, _scopeId4));
                          _push5(`</a><a href="#" data-v-703d2738${_scopeId4}>`);
                          _push5(ssrRenderComponent(_component_v_icon, {
                            icon: "mdi mdi-instagram",
                            size: "24"
                          }, null, _parent5, _scopeId4));
                          _push5(`</a></div>`);
                        } else {
                          return [
                            createVNode("h4", { class: "font-weight-bold font-18 mt-5" }, "Social"),
                            createVNode("div", { class: "social-icons mt-2" }, [
                              createVNode("a", {
                                href: "#",
                                class: "ml-0"
                              }, [
                                createVNode(_component_v_icon, {
                                  icon: "mdi mdi-facebook",
                                  size: "24"
                                })
                              ]),
                              createVNode("a", { href: "#" }, [
                                createVNode(_component_v_icon, {
                                  icon: "mdi mdi-twitter",
                                  size: "24"
                                })
                              ]),
                              createVNode("a", { href: "#" }, [
                                createVNode(_component_v_icon, {
                                  icon: "mdi mdi-youtube",
                                  size: "24"
                                })
                              ]),
                              createVNode("a", { href: "#" }, [
                                createVNode(_component_v_icon, {
                                  icon: "mdi mdi-instagram",
                                  size: "24"
                                })
                              ])
                            ])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_v_col, {
                        cols: "12",
                        sm: "6",
                        md: "6",
                        lg: "3",
                        class: "px-0"
                      }, {
                        default: withCtx(() => [
                          createVNode("h4", { class: "font-weight-bold font-18 mt-5" }, "Address"),
                          createVNode("p", { class: "mt-2 mb-0" }, "3/499 Ladprao Wanghin 68 Bangkok 10230")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_col, {
                        cols: "12",
                        sm: "6",
                        md: "6",
                        lg: "3",
                        class: "px-0"
                      }, {
                        default: withCtx(() => [
                          createVNode("h4", { class: "font-weight-bold font-18 mt-5" }, "Phone"),
                          createVNode("p", { class: "mt-2 mb-0" }, "Reception : +66 02 570-8449"),
                          createVNode("p", null, "Office : +66 02 570-8449")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_col, {
                        cols: "12",
                        sm: "6",
                        md: "6",
                        lg: "3",
                        class: "px-0"
                      }, {
                        default: withCtx(() => [
                          createVNode("h4", { class: "font-weight-bold font-18 mt-5" }, "Email"),
                          createVNode("p", { class: "mt-2 mb-0" }, [
                            createTextVNode(" Office : "),
                            createVNode("a", {
                              class: "dark-link",
                              href: "/"
                            }, "contact@itgenius.co.th")
                          ]),
                          createVNode("p", null, [
                            createTextVNode(" Site : "),
                            createVNode("a", {
                              class: "dark-link",
                              href: "https://www.itgenius.co.th/"
                            }, "itgenius.co.th")
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_col, {
                        cols: "12",
                        sm: "6",
                        md: "6",
                        lg: "3",
                        class: "px-0"
                      }, {
                        default: withCtx(() => [
                          createVNode("h4", { class: "font-weight-bold font-18 mt-5" }, "Social"),
                          createVNode("div", { class: "social-icons mt-2" }, [
                            createVNode("a", {
                              href: "#",
                              class: "ml-0"
                            }, [
                              createVNode(_component_v_icon, {
                                icon: "mdi mdi-facebook",
                                size: "24"
                              })
                            ]),
                            createVNode("a", { href: "#" }, [
                              createVNode(_component_v_icon, {
                                icon: "mdi mdi-twitter",
                                size: "24"
                              })
                            ]),
                            createVNode("a", { href: "#" }, [
                              createVNode(_component_v_icon, {
                                icon: "mdi mdi-youtube",
                                size: "24"
                              })
                            ]),
                            createVNode("a", { href: "#" }, [
                              createVNode(_component_v_icon, {
                                icon: "mdi mdi-instagram",
                                size: "24"
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
              }, _parent3, _scopeId2));
              _push3(`<div class="footer-bottom-bar font-14 mt-10 mb-5" data-v-703d2738${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_v_row, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_v_col, {
                      sm: "12",
                      md: "6",
                      lg: "6",
                      class: "px-0 py-0"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<p data-v-703d2738${_scopeId4}>All Rights Reserved by<a href="https://www.itgenius.co.th/" class="link" data-v-703d2738${_scopeId4}>itgenius.co.th</a></p>`);
                        } else {
                          return [
                            createVNode("p", null, [
                              createTextVNode("All Rights Reserved by"),
                              createVNode("a", {
                                href: "https://www.itgenius.co.th/",
                                class: "link"
                              }, "itgenius.co.th")
                            ])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_v_col, {
                      sm: "12",
                      md: "6",
                      lg: "6",
                      class: "px-0 py-0 text-md-right"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<a href="#" class="link px-0" data-v-703d2738${_scopeId4}>Terms</a><a href="#" class="link px-4" data-v-703d2738${_scopeId4}>Legal</a><a href="#" class="link px-4" data-v-703d2738${_scopeId4}>Privacy</a>`);
                        } else {
                          return [
                            createVNode("a", {
                              href: "#",
                              class: "link px-0"
                            }, "Terms"),
                            createVNode("a", {
                              href: "#",
                              class: "link px-4"
                            }, "Legal"),
                            createVNode("a", {
                              href: "#",
                              class: "link px-4"
                            }, "Privacy")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_v_col, {
                        sm: "12",
                        md: "6",
                        lg: "6",
                        class: "px-0 py-0"
                      }, {
                        default: withCtx(() => [
                          createVNode("p", null, [
                            createTextVNode("All Rights Reserved by"),
                            createVNode("a", {
                              href: "https://www.itgenius.co.th/",
                              class: "link"
                            }, "itgenius.co.th")
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_col, {
                        sm: "12",
                        md: "6",
                        lg: "6",
                        class: "px-0 py-0 text-md-right"
                      }, {
                        default: withCtx(() => [
                          createVNode("a", {
                            href: "#",
                            class: "link px-0"
                          }, "Terms"),
                          createVNode("a", {
                            href: "#",
                            class: "link px-4"
                          }, "Legal"),
                          createVNode("a", {
                            href: "#",
                            class: "link px-4"
                          }, "Privacy")
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
                createVNode(_component_v_row, { class: "py-0" }, {
                  default: withCtx(() => [
                    createVNode(_component_v_col, {
                      cols: "12",
                      sm: "6",
                      md: "6",
                      lg: "3",
                      class: "px-0"
                    }, {
                      default: withCtx(() => [
                        createVNode("h4", { class: "font-weight-bold font-18 mt-5" }, "Address"),
                        createVNode("p", { class: "mt-2 mb-0" }, "3/499 Ladprao Wanghin 68 Bangkok 10230")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_col, {
                      cols: "12",
                      sm: "6",
                      md: "6",
                      lg: "3",
                      class: "px-0"
                    }, {
                      default: withCtx(() => [
                        createVNode("h4", { class: "font-weight-bold font-18 mt-5" }, "Phone"),
                        createVNode("p", { class: "mt-2 mb-0" }, "Reception : +66 02 570-8449"),
                        createVNode("p", null, "Office : +66 02 570-8449")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_col, {
                      cols: "12",
                      sm: "6",
                      md: "6",
                      lg: "3",
                      class: "px-0"
                    }, {
                      default: withCtx(() => [
                        createVNode("h4", { class: "font-weight-bold font-18 mt-5" }, "Email"),
                        createVNode("p", { class: "mt-2 mb-0" }, [
                          createTextVNode(" Office : "),
                          createVNode("a", {
                            class: "dark-link",
                            href: "/"
                          }, "contact@itgenius.co.th")
                        ]),
                        createVNode("p", null, [
                          createTextVNode(" Site : "),
                          createVNode("a", {
                            class: "dark-link",
                            href: "https://www.itgenius.co.th/"
                          }, "itgenius.co.th")
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_col, {
                      cols: "12",
                      sm: "6",
                      md: "6",
                      lg: "3",
                      class: "px-0"
                    }, {
                      default: withCtx(() => [
                        createVNode("h4", { class: "font-weight-bold font-18 mt-5" }, "Social"),
                        createVNode("div", { class: "social-icons mt-2" }, [
                          createVNode("a", {
                            href: "#",
                            class: "ml-0"
                          }, [
                            createVNode(_component_v_icon, {
                              icon: "mdi mdi-facebook",
                              size: "24"
                            })
                          ]),
                          createVNode("a", { href: "#" }, [
                            createVNode(_component_v_icon, {
                              icon: "mdi mdi-twitter",
                              size: "24"
                            })
                          ]),
                          createVNode("a", { href: "#" }, [
                            createVNode(_component_v_icon, {
                              icon: "mdi mdi-youtube",
                              size: "24"
                            })
                          ]),
                          createVNode("a", { href: "#" }, [
                            createVNode(_component_v_icon, {
                              icon: "mdi mdi-instagram",
                              size: "24"
                            })
                          ])
                        ])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode("div", { class: "footer-bottom-bar font-14 mt-10 mb-5" }, [
                  createVNode(_component_v_row, null, {
                    default: withCtx(() => [
                      createVNode(_component_v_col, {
                        sm: "12",
                        md: "6",
                        lg: "6",
                        class: "px-0 py-0"
                      }, {
                        default: withCtx(() => [
                          createVNode("p", null, [
                            createTextVNode("All Rights Reserved by"),
                            createVNode("a", {
                              href: "https://www.itgenius.co.th/",
                              class: "link"
                            }, "itgenius.co.th")
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_col, {
                        sm: "12",
                        md: "6",
                        lg: "6",
                        class: "px-0 py-0 text-md-right"
                      }, {
                        default: withCtx(() => [
                          createVNode("a", {
                            href: "#",
                            class: "link px-0"
                          }, "Terms"),
                          createVNode("a", {
                            href: "#",
                            class: "link px-4"
                          }, "Legal"),
                          createVNode("a", {
                            href: "#",
                            class: "link px-4"
                          }, "Privacy")
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
          createVNode(_component_v_container, null, {
            default: withCtx(() => [
              createVNode(_component_v_row, { class: "py-0" }, {
                default: withCtx(() => [
                  createVNode(_component_v_col, {
                    cols: "12",
                    sm: "6",
                    md: "6",
                    lg: "3",
                    class: "px-0"
                  }, {
                    default: withCtx(() => [
                      createVNode("h4", { class: "font-weight-bold font-18 mt-5" }, "Address"),
                      createVNode("p", { class: "mt-2 mb-0" }, "3/499 Ladprao Wanghin 68 Bangkok 10230")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_col, {
                    cols: "12",
                    sm: "6",
                    md: "6",
                    lg: "3",
                    class: "px-0"
                  }, {
                    default: withCtx(() => [
                      createVNode("h4", { class: "font-weight-bold font-18 mt-5" }, "Phone"),
                      createVNode("p", { class: "mt-2 mb-0" }, "Reception : +66 02 570-8449"),
                      createVNode("p", null, "Office : +66 02 570-8449")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_col, {
                    cols: "12",
                    sm: "6",
                    md: "6",
                    lg: "3",
                    class: "px-0"
                  }, {
                    default: withCtx(() => [
                      createVNode("h4", { class: "font-weight-bold font-18 mt-5" }, "Email"),
                      createVNode("p", { class: "mt-2 mb-0" }, [
                        createTextVNode(" Office : "),
                        createVNode("a", {
                          class: "dark-link",
                          href: "/"
                        }, "contact@itgenius.co.th")
                      ]),
                      createVNode("p", null, [
                        createTextVNode(" Site : "),
                        createVNode("a", {
                          class: "dark-link",
                          href: "https://www.itgenius.co.th/"
                        }, "itgenius.co.th")
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_col, {
                    cols: "12",
                    sm: "6",
                    md: "6",
                    lg: "3",
                    class: "px-0"
                  }, {
                    default: withCtx(() => [
                      createVNode("h4", { class: "font-weight-bold font-18 mt-5" }, "Social"),
                      createVNode("div", { class: "social-icons mt-2" }, [
                        createVNode("a", {
                          href: "#",
                          class: "ml-0"
                        }, [
                          createVNode(_component_v_icon, {
                            icon: "mdi mdi-facebook",
                            size: "24"
                          })
                        ]),
                        createVNode("a", { href: "#" }, [
                          createVNode(_component_v_icon, {
                            icon: "mdi mdi-twitter",
                            size: "24"
                          })
                        ]),
                        createVNode("a", { href: "#" }, [
                          createVNode(_component_v_icon, {
                            icon: "mdi mdi-youtube",
                            size: "24"
                          })
                        ]),
                        createVNode("a", { href: "#" }, [
                          createVNode(_component_v_icon, {
                            icon: "mdi mdi-instagram",
                            size: "24"
                          })
                        ])
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode("div", { class: "footer-bottom-bar font-14 mt-10 mb-5" }, [
                createVNode(_component_v_row, null, {
                  default: withCtx(() => [
                    createVNode(_component_v_col, {
                      sm: "12",
                      md: "6",
                      lg: "6",
                      class: "px-0 py-0"
                    }, {
                      default: withCtx(() => [
                        createVNode("p", null, [
                          createTextVNode("All Rights Reserved by"),
                          createVNode("a", {
                            href: "https://www.itgenius.co.th/",
                            class: "link"
                          }, "itgenius.co.th")
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_col, {
                      sm: "12",
                      md: "6",
                      lg: "6",
                      class: "px-0 py-0 text-md-right"
                    }, {
                      default: withCtx(() => [
                        createVNode("a", {
                          href: "#",
                          class: "link px-0"
                        }, "Terms"),
                        createVNode("a", {
                          href: "#",
                          class: "link px-4"
                        }, "Legal"),
                        createVNode("a", {
                          href: "#",
                          class: "link px-4"
                        }, "Privacy")
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landing/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Footer = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-703d2738"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_app = resolveComponent("v-app");
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_v_app, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(Header, null, null, _parent2, _scopeId));
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            _push2(ssrRenderComponent(Footer, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(Header),
              renderSlot(_ctx.$slots, "default"),
              createVNode(Footer)
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`</div>`);
    };
  }
});
const default_vue_vue_type_style_index_0_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=default.c8938bb4.js.map
