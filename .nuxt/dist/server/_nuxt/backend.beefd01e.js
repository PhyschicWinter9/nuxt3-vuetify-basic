import { _ as _export_sfc, d as useDisplay, a as __nuxt_component_0 } from "../server.mjs";
import { defineComponent, ref, resolveComponent, withCtx, createVNode, unref, toDisplayString, openBlock, createBlock, Fragment, renderList, useSSRContext, mergeProps, createTextVNode, isRef, renderSlot } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrRenderSlot } from "vue/server-renderer";
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
const _imports_0 = "" + globalThis.__publicAssetsURL("images/users/sirirat.jpg");
const sidebarItems = [
  {
    title: "Dashboard",
    icon: "mdi-view-dashboard-outline",
    to: "/backend/dashboard"
  },
  {
    title: "Products",
    icon: "mdi-storefront-outline",
    to: "/backend/product"
  },
  {
    title: "Orders",
    icon: "mdi-cart-outline",
    to: "/backend/order"
  },
  {
    title: "Reports",
    icon: "mdi-chart-line",
    to: "/backend/report"
  },
  {
    title: "Settings",
    icon: "mdi-cog-outline",
    to: "/backend/setting"
  }
];
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Sidebar",
  __ssrInlineRender: true,
  setup(__props) {
    const sidebarMenu = ref(sidebarItems);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_avatar = resolveComponent("v-avatar");
      const _component_v_list = resolveComponent("v-list");
      const _component_v_list_item = resolveComponent("v-list-item");
      const _component_v_icon = resolveComponent("v-icon");
      const _component_v_list_item_title = resolveComponent("v-list-item-title");
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-a49af52b><div class="scrollnavbar" data-v-a49af52b><div class="profile" data-v-a49af52b><div class="profile-pic" data-v-a49af52b>`);
      _push(ssrRenderComponent(_component_v_avatar, { size: "45" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0)} width="50" alt="Julia" data-v-a49af52b${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_0,
                width: "50",
                alt: "Julia"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="profile-name" data-v-a49af52b><h5 data-v-a49af52b>Julia Roberts</h5></div></div>`);
      _push(ssrRenderComponent(_component_v_list, { class: "pa-4" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(sidebarMenu), (item, i) => {
              _push2(ssrRenderComponent(_component_v_list_item, {
                to: item.to,
                rounded: "lg",
                class: "mb-1"
              }, {
                prepend: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_v_icon, {
                      icon: item.icon
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_v_icon, {
                        icon: item.icon
                      }, null, 8, ["icon"])
                    ];
                  }
                }),
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_v_list_item_title, null, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_v_list_item_title, {
                        textContent: toDisplayString(item.title)
                      }, null, 8, ["textContent"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(sidebarMenu), (item, i) => {
                return openBlock(), createBlock(_component_v_list_item, {
                  key: i,
                  to: item.to,
                  rounded: "lg",
                  class: "mb-1"
                }, {
                  prepend: withCtx(() => [
                    createVNode(_component_v_icon, {
                      icon: item.icon
                    }, null, 8, ["icon"])
                  ]),
                  default: withCtx(() => [
                    createVNode(_component_v_list_item_title, {
                      textContent: toDisplayString(item.title)
                    }, null, 8, ["textContent"])
                  ]),
                  _: 2
                }, 1032, ["to"]);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const Sidebar_vue_vue_type_style_index_0_scoped_a49af52b_lang = "";
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/backendComponents/sidebar/Sidebar.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Sidebar = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-a49af52b"]]);
const message = [
  {
    image: "1.jpg",
    avatarstatus: "success",
    title: "Romen Joined the Team!",
    desc: "Congratulate him",
    time: "9:30 AM"
  },
  {
    image: "2.jpg",
    avatarstatus: "warning",
    title: "New message received",
    desc: "Salma sent you new message",
    time: "9:08 AM"
  },
  {
    image: "3.jpg",
    avatarstatus: "error",
    title: "New Payment received",
    desc: "Check your earnings",
    time: "9:08 AM"
  },
  {
    image: "4.jpg",
    avatarstatus: "success",
    title: "Jolly completed tasks",
    desc: "Assign her new tasks",
    time: "9:08 AM"
  }
];
const notification = [
  {
    color: "error",
    icon: "mdi-bell-outline",
    title: "Luanch Admin",
    desc: "Just see the my new admin!"
  },
  {
    color: "primary",
    icon: "mdi-bell-outline",
    title: "Event today",
    desc: "Just a reminder that you have event"
  },
  {
    color: "warning",
    icon: "mdi-bell-outline",
    title: "Settings",
    desc: "You can customize this template as you want"
  },
  {
    color: "secondary",
    icon: "mdi-bell-outline",
    title: "Johny John",
    desc: "Assign her new tasks"
  }
];
const profile = [
  {
    color: "error",
    icon: "mdi-account-edit",
    title: "\u0E42\u0E1B\u0E23\u0E44\u0E1F\u0E25\u0E4C",
    desc: "\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E1A\u0E31\u0E0D\u0E0A\u0E35"
  },
  {
    color: "warning",
    icon: "mdi-message-settings-outline",
    title: "\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21",
    desc: "\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E41\u0E25\u0E30\u0E2D\u0E35\u0E40\u0E21\u0E25\u0E4C"
  },
  {
    color: "secondary",
    icon: "mdi-book-edit-outline",
    title: "\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21\u0E02\u0E2D\u0E07\u0E09\u0E31\u0E19",
    desc: "\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21\u0E41\u0E15\u0E48\u0E25\u0E30\u0E27\u0E31\u0E19"
  }
];
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    const href = ref(void 0);
    const messages = ref(message);
    const notifications = ref(notification);
    const userprofile = ref(profile);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_menu = resolveComponent("v-menu");
      const _component_v_btn = resolveComponent("v-btn");
      const _component_v_badge = resolveComponent("v-badge");
      const _component_v_icon = resolveComponent("v-icon");
      const _component_v_list = resolveComponent("v-list");
      const _component_v_chip = resolveComponent("v-chip");
      const _component_v_list_item = resolveComponent("v-list-item");
      const _component_v_avatar = resolveComponent("v-avatar");
      const _component_v_img = resolveComponent("v-img");
      _push(ssrRenderComponent(_component_v_menu, mergeProps({
        anchor: "bottom end",
        origin: "auto",
        "min-width": "300"
      }, _attrs), {
        activator: withCtx(({ props }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="d-flex"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_v_btn, {
              icon: "",
              class: "ms-3",
              color: "lighten-2"
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_badge, {
                    color: "error",
                    dot: ""
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_icon, null, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`mdi-message`);
                            } else {
                              return [
                                createTextVNode("mdi-message")
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_icon, null, {
                            default: withCtx(() => [
                              createTextVNode("mdi-message")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_menu, {
                    activator: "parent",
                    anchor: "bottom end",
                    origin: "auto",
                    "max-width": "300"
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_list, {
                          class: "pa-5",
                          elevation: "10",
                          rounded: "lg"
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<h4 class="d-flex"${_scopeId4}> \u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21 `);
                              _push5(ssrRenderComponent(_component_v_chip, {
                                label: "",
                                small: "",
                                color: "secondary",
                                class: "ml-auto"
                              }, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` 5 new `);
                                  } else {
                                    return [
                                      createTextVNode(" 5 new ")
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                              _push5(`</h4><!--[-->`);
                              ssrRenderList(unref(messages), (item, i) => {
                                _push5(ssrRenderComponent(_component_v_list_item, {
                                  class: "my-2 pa-3",
                                  key: i,
                                  rounded: "lg",
                                  value: item,
                                  onClick: unref(href),
                                  title: item.title,
                                  subtitle: item.desc
                                }, {
                                  prepend: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_v_avatar, { size: "50" }, {
                                        default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(_component_v_img, {
                                              src: `/images/users/${item.image}`,
                                              alt: item.image,
                                              width: "50"
                                            }, null, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(_component_v_img, {
                                                src: `/images/users/${item.image}`,
                                                alt: item.image,
                                                width: "50"
                                              }, null, 8, ["src", "alt"])
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_v_avatar, { size: "50" }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_img, {
                                              src: `/images/users/${item.image}`,
                                              alt: item.image,
                                              width: "50"
                                            }, null, 8, ["src", "alt"])
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
                              _push5(ssrRenderComponent(_component_v_btn, {
                                flat: "",
                                color: "primary",
                                class: "mt-4",
                                variant: "tonal",
                                block: ""
                              }, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`\u0E14\u0E39\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14`);
                                  } else {
                                    return [
                                      createTextVNode("\u0E14\u0E39\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14")
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode("h4", { class: "d-flex" }, [
                                  createTextVNode(" \u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21 "),
                                  createVNode(_component_v_chip, {
                                    label: "",
                                    small: "",
                                    color: "secondary",
                                    class: "ml-auto"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" 5 new ")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(messages), (item, i) => {
                                  return openBlock(), createBlock(_component_v_list_item, {
                                    class: "my-2 pa-3",
                                    key: i,
                                    rounded: "lg",
                                    value: item,
                                    onClick: unref(href),
                                    title: item.title,
                                    subtitle: item.desc
                                  }, {
                                    prepend: withCtx(() => [
                                      createVNode(_component_v_avatar, { size: "50" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_img, {
                                            src: `/images/users/${item.image}`,
                                            alt: item.image,
                                            width: "50"
                                          }, null, 8, ["src", "alt"])
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1032, ["value", "onClick", "title", "subtitle"]);
                                }), 128)),
                                createVNode(_component_v_btn, {
                                  flat: "",
                                  color: "primary",
                                  class: "mt-4",
                                  variant: "tonal",
                                  block: ""
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u0E14\u0E39\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_list, {
                            class: "pa-5",
                            elevation: "10",
                            rounded: "lg"
                          }, {
                            default: withCtx(() => [
                              createVNode("h4", { class: "d-flex" }, [
                                createTextVNode(" \u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21 "),
                                createVNode(_component_v_chip, {
                                  label: "",
                                  small: "",
                                  color: "secondary",
                                  class: "ml-auto"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" 5 new ")
                                  ]),
                                  _: 1
                                })
                              ]),
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(messages), (item, i) => {
                                return openBlock(), createBlock(_component_v_list_item, {
                                  class: "my-2 pa-3",
                                  key: i,
                                  rounded: "lg",
                                  value: item,
                                  onClick: unref(href),
                                  title: item.title,
                                  subtitle: item.desc
                                }, {
                                  prepend: withCtx(() => [
                                    createVNode(_component_v_avatar, { size: "50" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_img, {
                                          src: `/images/users/${item.image}`,
                                          alt: item.image,
                                          width: "50"
                                        }, null, 8, ["src", "alt"])
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1032, ["value", "onClick", "title", "subtitle"]);
                              }), 128)),
                              createVNode(_component_v_btn, {
                                flat: "",
                                color: "primary",
                                class: "mt-4",
                                variant: "tonal",
                                block: ""
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("\u0E14\u0E39\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_badge, {
                      color: "error",
                      dot: ""
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_icon, null, {
                          default: withCtx(() => [
                            createTextVNode("mdi-message")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_menu, {
                      activator: "parent",
                      anchor: "bottom end",
                      origin: "auto",
                      "max-width": "300"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_list, {
                          class: "pa-5",
                          elevation: "10",
                          rounded: "lg"
                        }, {
                          default: withCtx(() => [
                            createVNode("h4", { class: "d-flex" }, [
                              createTextVNode(" \u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21 "),
                              createVNode(_component_v_chip, {
                                label: "",
                                small: "",
                                color: "secondary",
                                class: "ml-auto"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" 5 new ")
                                ]),
                                _: 1
                              })
                            ]),
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(messages), (item, i) => {
                              return openBlock(), createBlock(_component_v_list_item, {
                                class: "my-2 pa-3",
                                key: i,
                                rounded: "lg",
                                value: item,
                                onClick: unref(href),
                                title: item.title,
                                subtitle: item.desc
                              }, {
                                prepend: withCtx(() => [
                                  createVNode(_component_v_avatar, { size: "50" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_img, {
                                        src: `/images/users/${item.image}`,
                                        alt: item.image,
                                        width: "50"
                                      }, null, 8, ["src", "alt"])
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1032, ["value", "onClick", "title", "subtitle"]);
                            }), 128)),
                            createVNode(_component_v_btn, {
                              flat: "",
                              color: "primary",
                              class: "mt-4",
                              variant: "tonal",
                              block: ""
                            }, {
                              default: withCtx(() => [
                                createTextVNode("\u0E14\u0E39\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14")
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
              _: 2
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_btn, {
              icon: "",
              class: "ms-3",
              color: "lighten-2"
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_badge, {
                    color: "error",
                    dot: ""
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_icon, null, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`mdi-bell`);
                            } else {
                              return [
                                createTextVNode("mdi-bell")
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_icon, null, {
                            default: withCtx(() => [
                              createTextVNode("mdi-bell")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_menu, {
                    activator: "parent",
                    "max-width": "300"
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_list, {
                          class: "pa-6",
                          elevation: "10",
                          rounded: "lg"
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<h4 class="d-flex"${_scopeId4}> \u0E01\u0E32\u0E23\u0E41\u0E08\u0E49\u0E07\u0E40\u0E15\u0E37\u0E2D\u0E19 `);
                              _push5(ssrRenderComponent(_component_v_chip, {
                                class: "ml-auto",
                                label: "",
                                small: "",
                                color: "error"
                              }, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` 5 new `);
                                  } else {
                                    return [
                                      createTextVNode(" 5 new ")
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                              _push5(`</h4><!--[-->`);
                              ssrRenderList(unref(notifications), (item, i) => {
                                _push5(ssrRenderComponent(_component_v_list_item, {
                                  class: "pa-3 mt-2",
                                  key: i,
                                  value: item,
                                  onClick: unref(href),
                                  rounded: "lg",
                                  title: item.title,
                                  subtitle: item.desc
                                }, {
                                  prepend: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_v_btn, {
                                        color: item.color,
                                        icon: "",
                                        variant: "tonal",
                                        elevation: "0",
                                        class: "mr-3"
                                      }, {
                                        default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(_component_v_icon, {
                                              icon: item.icon,
                                              size: "24"
                                            }, null, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(_component_v_icon, {
                                                icon: item.icon,
                                                size: "24"
                                              }, null, 8, ["icon"])
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_v_btn, {
                                          color: item.color,
                                          icon: "",
                                          variant: "tonal",
                                          elevation: "0",
                                          class: "mr-3"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_icon, {
                                              icon: item.icon,
                                              size: "24"
                                            }, null, 8, ["icon"])
                                          ]),
                                          _: 2
                                        }, 1032, ["color"])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              });
                              _push5(`<!--]-->`);
                              _push5(ssrRenderComponent(_component_v_btn, {
                                block: "",
                                variant: "elevated",
                                color: "secondary",
                                class: "mt-4 py-4"
                              }, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`\u0E14\u0E39\u0E01\u0E32\u0E23\u0E41\u0E08\u0E49\u0E07\u0E40\u0E15\u0E37\u0E2D\u0E19\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14`);
                                  } else {
                                    return [
                                      createTextVNode("\u0E14\u0E39\u0E01\u0E32\u0E23\u0E41\u0E08\u0E49\u0E07\u0E40\u0E15\u0E37\u0E2D\u0E19\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14")
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode("h4", { class: "d-flex" }, [
                                  createTextVNode(" \u0E01\u0E32\u0E23\u0E41\u0E08\u0E49\u0E07\u0E40\u0E15\u0E37\u0E2D\u0E19 "),
                                  createVNode(_component_v_chip, {
                                    class: "ml-auto",
                                    label: "",
                                    small: "",
                                    color: "error"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" 5 new ")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(notifications), (item, i) => {
                                  return openBlock(), createBlock(_component_v_list_item, {
                                    class: "pa-3 mt-2",
                                    key: i,
                                    value: item,
                                    onClick: unref(href),
                                    rounded: "lg",
                                    title: item.title,
                                    subtitle: item.desc
                                  }, {
                                    prepend: withCtx(() => [
                                      createVNode(_component_v_btn, {
                                        color: item.color,
                                        icon: "",
                                        variant: "tonal",
                                        elevation: "0",
                                        class: "mr-3"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_icon, {
                                            icon: item.icon,
                                            size: "24"
                                          }, null, 8, ["icon"])
                                        ]),
                                        _: 2
                                      }, 1032, ["color"])
                                    ]),
                                    _: 2
                                  }, 1032, ["value", "onClick", "title", "subtitle"]);
                                }), 128)),
                                createVNode(_component_v_btn, {
                                  block: "",
                                  variant: "elevated",
                                  color: "secondary",
                                  class: "mt-4 py-4"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u0E14\u0E39\u0E01\u0E32\u0E23\u0E41\u0E08\u0E49\u0E07\u0E40\u0E15\u0E37\u0E2D\u0E19\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_list, {
                            class: "pa-6",
                            elevation: "10",
                            rounded: "lg"
                          }, {
                            default: withCtx(() => [
                              createVNode("h4", { class: "d-flex" }, [
                                createTextVNode(" \u0E01\u0E32\u0E23\u0E41\u0E08\u0E49\u0E07\u0E40\u0E15\u0E37\u0E2D\u0E19 "),
                                createVNode(_component_v_chip, {
                                  class: "ml-auto",
                                  label: "",
                                  small: "",
                                  color: "error"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" 5 new ")
                                  ]),
                                  _: 1
                                })
                              ]),
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(notifications), (item, i) => {
                                return openBlock(), createBlock(_component_v_list_item, {
                                  class: "pa-3 mt-2",
                                  key: i,
                                  value: item,
                                  onClick: unref(href),
                                  rounded: "lg",
                                  title: item.title,
                                  subtitle: item.desc
                                }, {
                                  prepend: withCtx(() => [
                                    createVNode(_component_v_btn, {
                                      color: item.color,
                                      icon: "",
                                      variant: "tonal",
                                      elevation: "0",
                                      class: "mr-3"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_icon, {
                                          icon: item.icon,
                                          size: "24"
                                        }, null, 8, ["icon"])
                                      ]),
                                      _: 2
                                    }, 1032, ["color"])
                                  ]),
                                  _: 2
                                }, 1032, ["value", "onClick", "title", "subtitle"]);
                              }), 128)),
                              createVNode(_component_v_btn, {
                                block: "",
                                variant: "elevated",
                                color: "secondary",
                                class: "mt-4 py-4"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("\u0E14\u0E39\u0E01\u0E32\u0E23\u0E41\u0E08\u0E49\u0E07\u0E40\u0E15\u0E37\u0E2D\u0E19\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_badge, {
                      color: "error",
                      dot: ""
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_icon, null, {
                          default: withCtx(() => [
                            createTextVNode("mdi-bell")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_menu, {
                      activator: "parent",
                      "max-width": "300"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_list, {
                          class: "pa-6",
                          elevation: "10",
                          rounded: "lg"
                        }, {
                          default: withCtx(() => [
                            createVNode("h4", { class: "d-flex" }, [
                              createTextVNode(" \u0E01\u0E32\u0E23\u0E41\u0E08\u0E49\u0E07\u0E40\u0E15\u0E37\u0E2D\u0E19 "),
                              createVNode(_component_v_chip, {
                                class: "ml-auto",
                                label: "",
                                small: "",
                                color: "error"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" 5 new ")
                                ]),
                                _: 1
                              })
                            ]),
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(notifications), (item, i) => {
                              return openBlock(), createBlock(_component_v_list_item, {
                                class: "pa-3 mt-2",
                                key: i,
                                value: item,
                                onClick: unref(href),
                                rounded: "lg",
                                title: item.title,
                                subtitle: item.desc
                              }, {
                                prepend: withCtx(() => [
                                  createVNode(_component_v_btn, {
                                    color: item.color,
                                    icon: "",
                                    variant: "tonal",
                                    elevation: "0",
                                    class: "mr-3"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_icon, {
                                        icon: item.icon,
                                        size: "24"
                                      }, null, 8, ["icon"])
                                    ]),
                                    _: 2
                                  }, 1032, ["color"])
                                ]),
                                _: 2
                              }, 1032, ["value", "onClick", "title", "subtitle"]);
                            }), 128)),
                            createVNode(_component_v_btn, {
                              block: "",
                              variant: "elevated",
                              color: "secondary",
                              class: "mt-4 py-4"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("\u0E14\u0E39\u0E01\u0E32\u0E23\u0E41\u0E08\u0E49\u0E07\u0E40\u0E15\u0E37\u0E2D\u0E19\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14")
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
              _: 2
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_btn, {
              icon: "",
              class: "mx-3"
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_avatar, { size: "35" }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<img${ssrRenderAttr("src", _imports_0)} width="35" alt="Sirirat"${_scopeId3}>`);
                      } else {
                        return [
                          createVNode("img", {
                            src: _imports_0,
                            width: "35",
                            alt: "Sirirat"
                          })
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_menu, { activator: "parent" }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_list, {
                          class: "pa-6",
                          elevation: "10",
                          rounded: "lg"
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<h4 class="font-weight-medium fs-18"${_scopeId4}>\u0E42\u0E1B\u0E23\u0E44\u0E1F\u0E25\u0E4C\u0E02\u0E2D\u0E07\u0E09\u0E31\u0E19</h4><div class="d-flex align-center my-4"${_scopeId4}><img${ssrRenderAttr("src", _imports_0)} alt="Julia Roberts" class="rounded-circle" width="90"${_scopeId4}><div class="ml-4"${_scopeId4}><h4 class="font-weight-medium fs-18"${_scopeId4}>Julia Roberts</h4><span class="subtitle-2 font-weight-light"${_scopeId4}>Administrator</span><div class="d-flex align-center"${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_v_icon, {
                                icon: "mdi-email-outline",
                                class: "d-flex grey--text",
                                size: "16"
                              }, null, _parent5, _scopeId4));
                              _push5(`<span class="subtitle-2 font-weight-light ml-1"${_scopeId4}>info@itgenius.com</span></div></div></div><!--[-->`);
                              ssrRenderList(unref(userprofile), (item, index) => {
                                _push5(ssrRenderComponent(_component_v_list_item, {
                                  class: "pa-3 mb-2",
                                  key: index,
                                  value: index,
                                  title: item.title,
                                  subtitle: item.desc
                                }, {
                                  prepend: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_v_btn, {
                                        color: item.color,
                                        variant: "tonal",
                                        icon: "",
                                        elevation: "0",
                                        class: "mr-3"
                                      }, {
                                        default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(_component_v_icon, {
                                              icon: item.icon,
                                              size: "24"
                                            }, null, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(_component_v_icon, {
                                                icon: item.icon,
                                                size: "24"
                                              }, null, 8, ["icon"])
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_v_btn, {
                                          color: item.color,
                                          variant: "tonal",
                                          icon: "",
                                          elevation: "0",
                                          class: "mr-3"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_icon, {
                                              icon: item.icon,
                                              size: "24"
                                            }, null, 8, ["icon"])
                                          ]),
                                          _: 2
                                        }, 1032, ["color"])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              });
                              _push5(`<!--]-->`);
                              _push5(ssrRenderComponent(_component_v_btn, {
                                block: "",
                                color: "secondary",
                                variant: "tonal",
                                class: "mt-4 py-4",
                                to: "/auth/login"
                              }, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`\u0E2D\u0E2D\u0E01\u0E08\u0E32\u0E01\u0E23\u0E30\u0E1A\u0E1A`);
                                  } else {
                                    return [
                                      createTextVNode("\u0E2D\u0E2D\u0E01\u0E08\u0E32\u0E01\u0E23\u0E30\u0E1A\u0E1A")
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode("h4", { class: "font-weight-medium fs-18" }, "\u0E42\u0E1B\u0E23\u0E44\u0E1F\u0E25\u0E4C\u0E02\u0E2D\u0E07\u0E09\u0E31\u0E19"),
                                createVNode("div", { class: "d-flex align-center my-4" }, [
                                  createVNode("img", {
                                    src: _imports_0,
                                    alt: "Julia Roberts",
                                    class: "rounded-circle",
                                    width: "90"
                                  }),
                                  createVNode("div", { class: "ml-4" }, [
                                    createVNode("h4", { class: "font-weight-medium fs-18" }, "Julia Roberts"),
                                    createVNode("span", { class: "subtitle-2 font-weight-light" }, "Administrator"),
                                    createVNode("div", { class: "d-flex align-center" }, [
                                      createVNode(_component_v_icon, {
                                        icon: "mdi-email-outline",
                                        class: "d-flex grey--text",
                                        size: "16"
                                      }),
                                      createVNode("span", { class: "subtitle-2 font-weight-light ml-1" }, "info@itgenius.com")
                                    ])
                                  ])
                                ]),
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(userprofile), (item, index) => {
                                  return openBlock(), createBlock(_component_v_list_item, {
                                    class: "pa-3 mb-2",
                                    key: index,
                                    value: index,
                                    title: item.title,
                                    subtitle: item.desc
                                  }, {
                                    prepend: withCtx(() => [
                                      createVNode(_component_v_btn, {
                                        color: item.color,
                                        variant: "tonal",
                                        icon: "",
                                        elevation: "0",
                                        class: "mr-3"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_icon, {
                                            icon: item.icon,
                                            size: "24"
                                          }, null, 8, ["icon"])
                                        ]),
                                        _: 2
                                      }, 1032, ["color"])
                                    ]),
                                    _: 2
                                  }, 1032, ["value", "title", "subtitle"]);
                                }), 128)),
                                createVNode(_component_v_btn, {
                                  block: "",
                                  color: "secondary",
                                  variant: "tonal",
                                  class: "mt-4 py-4",
                                  to: "/auth/login"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u0E2D\u0E2D\u0E01\u0E08\u0E32\u0E01\u0E23\u0E30\u0E1A\u0E1A")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_list, {
                            class: "pa-6",
                            elevation: "10",
                            rounded: "lg"
                          }, {
                            default: withCtx(() => [
                              createVNode("h4", { class: "font-weight-medium fs-18" }, "\u0E42\u0E1B\u0E23\u0E44\u0E1F\u0E25\u0E4C\u0E02\u0E2D\u0E07\u0E09\u0E31\u0E19"),
                              createVNode("div", { class: "d-flex align-center my-4" }, [
                                createVNode("img", {
                                  src: _imports_0,
                                  alt: "Julia Roberts",
                                  class: "rounded-circle",
                                  width: "90"
                                }),
                                createVNode("div", { class: "ml-4" }, [
                                  createVNode("h4", { class: "font-weight-medium fs-18" }, "Julia Roberts"),
                                  createVNode("span", { class: "subtitle-2 font-weight-light" }, "Administrator"),
                                  createVNode("div", { class: "d-flex align-center" }, [
                                    createVNode(_component_v_icon, {
                                      icon: "mdi-email-outline",
                                      class: "d-flex grey--text",
                                      size: "16"
                                    }),
                                    createVNode("span", { class: "subtitle-2 font-weight-light ml-1" }, "info@itgenius.com")
                                  ])
                                ])
                              ]),
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(userprofile), (item, index) => {
                                return openBlock(), createBlock(_component_v_list_item, {
                                  class: "pa-3 mb-2",
                                  key: index,
                                  value: index,
                                  title: item.title,
                                  subtitle: item.desc
                                }, {
                                  prepend: withCtx(() => [
                                    createVNode(_component_v_btn, {
                                      color: item.color,
                                      variant: "tonal",
                                      icon: "",
                                      elevation: "0",
                                      class: "mr-3"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_icon, {
                                          icon: item.icon,
                                          size: "24"
                                        }, null, 8, ["icon"])
                                      ]),
                                      _: 2
                                    }, 1032, ["color"])
                                  ]),
                                  _: 2
                                }, 1032, ["value", "title", "subtitle"]);
                              }), 128)),
                              createVNode(_component_v_btn, {
                                block: "",
                                color: "secondary",
                                variant: "tonal",
                                class: "mt-4 py-4",
                                to: "/auth/login"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("\u0E2D\u0E2D\u0E01\u0E08\u0E32\u0E01\u0E23\u0E30\u0E1A\u0E1A")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_avatar, { size: "35" }, {
                      default: withCtx(() => [
                        createVNode("img", {
                          src: _imports_0,
                          width: "35",
                          alt: "Sirirat"
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_menu, { activator: "parent" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_list, {
                          class: "pa-6",
                          elevation: "10",
                          rounded: "lg"
                        }, {
                          default: withCtx(() => [
                            createVNode("h4", { class: "font-weight-medium fs-18" }, "\u0E42\u0E1B\u0E23\u0E44\u0E1F\u0E25\u0E4C\u0E02\u0E2D\u0E07\u0E09\u0E31\u0E19"),
                            createVNode("div", { class: "d-flex align-center my-4" }, [
                              createVNode("img", {
                                src: _imports_0,
                                alt: "Julia Roberts",
                                class: "rounded-circle",
                                width: "90"
                              }),
                              createVNode("div", { class: "ml-4" }, [
                                createVNode("h4", { class: "font-weight-medium fs-18" }, "Julia Roberts"),
                                createVNode("span", { class: "subtitle-2 font-weight-light" }, "Administrator"),
                                createVNode("div", { class: "d-flex align-center" }, [
                                  createVNode(_component_v_icon, {
                                    icon: "mdi-email-outline",
                                    class: "d-flex grey--text",
                                    size: "16"
                                  }),
                                  createVNode("span", { class: "subtitle-2 font-weight-light ml-1" }, "info@itgenius.com")
                                ])
                              ])
                            ]),
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(userprofile), (item, index) => {
                              return openBlock(), createBlock(_component_v_list_item, {
                                class: "pa-3 mb-2",
                                key: index,
                                value: index,
                                title: item.title,
                                subtitle: item.desc
                              }, {
                                prepend: withCtx(() => [
                                  createVNode(_component_v_btn, {
                                    color: item.color,
                                    variant: "tonal",
                                    icon: "",
                                    elevation: "0",
                                    class: "mr-3"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_icon, {
                                        icon: item.icon,
                                        size: "24"
                                      }, null, 8, ["icon"])
                                    ]),
                                    _: 2
                                  }, 1032, ["color"])
                                ]),
                                _: 2
                              }, 1032, ["value", "title", "subtitle"]);
                            }), 128)),
                            createVNode(_component_v_btn, {
                              block: "",
                              color: "secondary",
                              variant: "tonal",
                              class: "mt-4 py-4",
                              to: "/auth/login"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("\u0E2D\u0E2D\u0E01\u0E08\u0E32\u0E01\u0E23\u0E30\u0E1A\u0E1A")
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
              _: 2
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "d-flex" }, [
                createVNode(_component_v_btn, {
                  icon: "",
                  class: "ms-3",
                  color: "lighten-2"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_v_badge, {
                      color: "error",
                      dot: ""
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_icon, null, {
                          default: withCtx(() => [
                            createTextVNode("mdi-message")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_menu, {
                      activator: "parent",
                      anchor: "bottom end",
                      origin: "auto",
                      "max-width": "300"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_list, {
                          class: "pa-5",
                          elevation: "10",
                          rounded: "lg"
                        }, {
                          default: withCtx(() => [
                            createVNode("h4", { class: "d-flex" }, [
                              createTextVNode(" \u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21 "),
                              createVNode(_component_v_chip, {
                                label: "",
                                small: "",
                                color: "secondary",
                                class: "ml-auto"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" 5 new ")
                                ]),
                                _: 1
                              })
                            ]),
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(messages), (item, i) => {
                              return openBlock(), createBlock(_component_v_list_item, {
                                class: "my-2 pa-3",
                                key: i,
                                rounded: "lg",
                                value: item,
                                onClick: unref(href),
                                title: item.title,
                                subtitle: item.desc
                              }, {
                                prepend: withCtx(() => [
                                  createVNode(_component_v_avatar, { size: "50" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_img, {
                                        src: `/images/users/${item.image}`,
                                        alt: item.image,
                                        width: "50"
                                      }, null, 8, ["src", "alt"])
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1032, ["value", "onClick", "title", "subtitle"]);
                            }), 128)),
                            createVNode(_component_v_btn, {
                              flat: "",
                              color: "primary",
                              class: "mt-4",
                              variant: "tonal",
                              block: ""
                            }, {
                              default: withCtx(() => [
                                createTextVNode("\u0E14\u0E39\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14")
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
                }),
                createVNode(_component_v_btn, {
                  icon: "",
                  class: "ms-3",
                  color: "lighten-2"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_v_badge, {
                      color: "error",
                      dot: ""
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_icon, null, {
                          default: withCtx(() => [
                            createTextVNode("mdi-bell")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_menu, {
                      activator: "parent",
                      "max-width": "300"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_list, {
                          class: "pa-6",
                          elevation: "10",
                          rounded: "lg"
                        }, {
                          default: withCtx(() => [
                            createVNode("h4", { class: "d-flex" }, [
                              createTextVNode(" \u0E01\u0E32\u0E23\u0E41\u0E08\u0E49\u0E07\u0E40\u0E15\u0E37\u0E2D\u0E19 "),
                              createVNode(_component_v_chip, {
                                class: "ml-auto",
                                label: "",
                                small: "",
                                color: "error"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" 5 new ")
                                ]),
                                _: 1
                              })
                            ]),
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(notifications), (item, i) => {
                              return openBlock(), createBlock(_component_v_list_item, {
                                class: "pa-3 mt-2",
                                key: i,
                                value: item,
                                onClick: unref(href),
                                rounded: "lg",
                                title: item.title,
                                subtitle: item.desc
                              }, {
                                prepend: withCtx(() => [
                                  createVNode(_component_v_btn, {
                                    color: item.color,
                                    icon: "",
                                    variant: "tonal",
                                    elevation: "0",
                                    class: "mr-3"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_icon, {
                                        icon: item.icon,
                                        size: "24"
                                      }, null, 8, ["icon"])
                                    ]),
                                    _: 2
                                  }, 1032, ["color"])
                                ]),
                                _: 2
                              }, 1032, ["value", "onClick", "title", "subtitle"]);
                            }), 128)),
                            createVNode(_component_v_btn, {
                              block: "",
                              variant: "elevated",
                              color: "secondary",
                              class: "mt-4 py-4"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("\u0E14\u0E39\u0E01\u0E32\u0E23\u0E41\u0E08\u0E49\u0E07\u0E40\u0E15\u0E37\u0E2D\u0E19\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14")
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
                }),
                createVNode(_component_v_btn, {
                  icon: "",
                  class: "mx-3"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_v_avatar, { size: "35" }, {
                      default: withCtx(() => [
                        createVNode("img", {
                          src: _imports_0,
                          width: "35",
                          alt: "Sirirat"
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_menu, { activator: "parent" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_list, {
                          class: "pa-6",
                          elevation: "10",
                          rounded: "lg"
                        }, {
                          default: withCtx(() => [
                            createVNode("h4", { class: "font-weight-medium fs-18" }, "\u0E42\u0E1B\u0E23\u0E44\u0E1F\u0E25\u0E4C\u0E02\u0E2D\u0E07\u0E09\u0E31\u0E19"),
                            createVNode("div", { class: "d-flex align-center my-4" }, [
                              createVNode("img", {
                                src: _imports_0,
                                alt: "Julia Roberts",
                                class: "rounded-circle",
                                width: "90"
                              }),
                              createVNode("div", { class: "ml-4" }, [
                                createVNode("h4", { class: "font-weight-medium fs-18" }, "Julia Roberts"),
                                createVNode("span", { class: "subtitle-2 font-weight-light" }, "Administrator"),
                                createVNode("div", { class: "d-flex align-center" }, [
                                  createVNode(_component_v_icon, {
                                    icon: "mdi-email-outline",
                                    class: "d-flex grey--text",
                                    size: "16"
                                  }),
                                  createVNode("span", { class: "subtitle-2 font-weight-light ml-1" }, "info@itgenius.com")
                                ])
                              ])
                            ]),
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(userprofile), (item, index) => {
                              return openBlock(), createBlock(_component_v_list_item, {
                                class: "pa-3 mb-2",
                                key: index,
                                value: index,
                                title: item.title,
                                subtitle: item.desc
                              }, {
                                prepend: withCtx(() => [
                                  createVNode(_component_v_btn, {
                                    color: item.color,
                                    variant: "tonal",
                                    icon: "",
                                    elevation: "0",
                                    class: "mr-3"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_icon, {
                                        icon: item.icon,
                                        size: "24"
                                      }, null, 8, ["icon"])
                                    ]),
                                    _: 2
                                  }, 1032, ["color"])
                                ]),
                                _: 2
                              }, 1032, ["value", "title", "subtitle"]);
                            }), 128)),
                            createVNode(_component_v_btn, {
                              block: "",
                              color: "secondary",
                              variant: "tonal",
                              class: "mt-4 py-4",
                              to: "/auth/login"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("\u0E2D\u0E2D\u0E01\u0E08\u0E32\u0E01\u0E23\u0E30\u0E1A\u0E1A")
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
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/backendComponents/header/Header.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "backend",
  __ssrInlineRender: true,
  setup(__props) {
    const drawer = ref(true);
    const { mdAndUp, mdAndDown } = useDisplay();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_app = resolveComponent("v-app");
      const _component_v_app_bar = resolveComponent("v-app-bar");
      const _component_NuxtLink = __nuxt_component_0;
      const _component_v_app_bar_nav_icon = resolveComponent("v-app-bar-nav-icon");
      const _component_v_spacer = resolveComponent("v-spacer");
      const _component_v_main = resolveComponent("v-main");
      const _component_v_navigation_drawer = resolveComponent("v-navigation-drawer");
      const _component_v_container = resolveComponent("v-container");
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-7943296c>`);
      _push(ssrRenderComponent(_component_v_app, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_app_bar, {
              elevation: "0",
              color: "primary"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="pe-5" data-v-7943296c${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_NuxtLink, {
                    to: "/backend/dashboard",
                    class: "d-flex brand"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` NuxtPress `);
                      } else {
                        return [
                          createTextVNode(" NuxtPress ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(_component_v_app_bar_nav_icon, {
                    class: "",
                    onClick: ($event) => drawer.value = !unref(drawer)
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_spacer, null, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_sfc_main$1, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("div", { class: "pe-5" }, [
                      createVNode(_component_NuxtLink, {
                        to: "/backend/dashboard",
                        class: "d-flex brand"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" NuxtPress ")
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode(_component_v_app_bar_nav_icon, {
                      class: "",
                      onClick: ($event) => drawer.value = !unref(drawer)
                    }, null, 8, ["onClick"]),
                    createVNode(_component_v_spacer),
                    createVNode(_sfc_main$1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_main, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_navigation_drawer, {
                    left: "",
                    permanent: unref(mdAndUp),
                    elevation: "10",
                    app: "",
                    temporary: unref(mdAndDown),
                    modelValue: unref(drawer),
                    "onUpdate:modelValue": ($event) => isRef(drawer) ? drawer.value = $event : null,
                    "expand-on-hover": ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(Sidebar, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(Sidebar)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_container, {
                    fluid: "",
                    class: "page-wrapper"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push4, _parent4, _scopeId3);
                      } else {
                        return [
                          renderSlot(_ctx.$slots, "default", {}, void 0, true)
                        ];
                      }
                    }),
                    _: 3
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_navigation_drawer, {
                      left: "",
                      permanent: unref(mdAndUp),
                      elevation: "10",
                      app: "",
                      temporary: unref(mdAndDown),
                      modelValue: unref(drawer),
                      "onUpdate:modelValue": ($event) => isRef(drawer) ? drawer.value = $event : null,
                      "expand-on-hover": ""
                    }, {
                      default: withCtx(() => [
                        createVNode(Sidebar)
                      ]),
                      _: 1
                    }, 8, ["permanent", "temporary", "modelValue", "onUpdate:modelValue"]),
                    createVNode(_component_v_container, {
                      fluid: "",
                      class: "page-wrapper"
                    }, {
                      default: withCtx(() => [
                        renderSlot(_ctx.$slots, "default", {}, void 0, true)
                      ]),
                      _: 3
                    })
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_app_bar, {
                elevation: "0",
                color: "primary"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "pe-5" }, [
                    createVNode(_component_NuxtLink, {
                      to: "/backend/dashboard",
                      class: "d-flex brand"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" NuxtPress ")
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode(_component_v_app_bar_nav_icon, {
                    class: "",
                    onClick: ($event) => drawer.value = !unref(drawer)
                  }, null, 8, ["onClick"]),
                  createVNode(_component_v_spacer),
                  createVNode(_sfc_main$1)
                ]),
                _: 1
              }),
              createVNode(_component_v_main, null, {
                default: withCtx(() => [
                  createVNode(_component_v_navigation_drawer, {
                    left: "",
                    permanent: unref(mdAndUp),
                    elevation: "10",
                    app: "",
                    temporary: unref(mdAndDown),
                    modelValue: unref(drawer),
                    "onUpdate:modelValue": ($event) => isRef(drawer) ? drawer.value = $event : null,
                    "expand-on-hover": ""
                  }, {
                    default: withCtx(() => [
                      createVNode(Sidebar)
                    ]),
                    _: 1
                  }, 8, ["permanent", "temporary", "modelValue", "onUpdate:modelValue"]),
                  createVNode(_component_v_container, {
                    fluid: "",
                    class: "page-wrapper"
                  }, {
                    default: withCtx(() => [
                      renderSlot(_ctx.$slots, "default", {}, void 0, true)
                    ]),
                    _: 3
                  })
                ]),
                _: 3
              })
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`</div>`);
    };
  }
});
const backend_vue_vue_type_style_index_0_scoped_7943296c_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/backend.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const backend = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-7943296c"]]);
export {
  backend as default
};
//# sourceMappingURL=backend.beefd01e.js.map
