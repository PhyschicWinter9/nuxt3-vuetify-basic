import { u as useHead } from './composables.79d89de8.mjs';
import { defineComponent, ref, resolveComponent, mergeProps, withCtx, createTextVNode, unref, isRef, createVNode, useSSRContext } from 'file://E:/Unversity/NuxttJS%20Workshop/Basic%20NuxtJS/Workshop/nuxt3-vuetify-workshop-day4/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrRenderAttr } from 'file://E:/Unversity/NuxttJS%20Workshop/Basic%20NuxtJS/Workshop/nuxt3-vuetify-workshop-day4/node_modules/vue/server-renderer/index.mjs';
import { _ as _imports_0 } from './dark-logo-icon.a0a168a1.mjs';
import './server.mjs';
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
  __name: "register",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "\u0E25\u0E07\u0E17\u0E30\u0E40\u0E1A\u0E35\u0E22\u0E19",
      meta: [
        {
          name: "keywords",
          content: "\u0E25\u0E07\u0E17\u0E30\u0E40\u0E1A\u0E35\u0E22\u0E19, Nuxt 3, Backend"
        },
        {
          name: "Description",
          content: "\u0E25\u0E07\u0E17\u0E30\u0E40\u0E1A\u0E35\u0E22\u0E19 Nuxt 3,  IT Genius Engineering"
        }
      ]
    });
    const checkbox = ref(false);
    const valid = ref(true);
    ref(false);
    const password = ref("");
    const email = ref("");
    const passwordRules = ref([
      (v) => !!v || "\u0E15\u0E49\u0E2D\u0E07\u0E1B\u0E49\u0E2D\u0E19\u0E23\u0E2B\u0E31\u0E2A\u0E1C\u0E48\u0E32\u0E19",
      (v) => v && v.length >= 8 || "\u0E23\u0E2B\u0E31\u0E2A\u0E1C\u0E48\u0E32\u0E19\u0E15\u0E49\u0E2D\u0E07\u0E44\u0E21\u0E48\u0E19\u0E49\u0E2D\u0E22\u0E01\u0E27\u0E48\u0E32 8 \u0E2B\u0E25\u0E31\u0E01"
    ]);
    const emailRules = ref([
      (v) => !!v || "\u0E15\u0E49\u0E2D\u0E07\u0E1B\u0E49\u0E2D\u0E19\u0E2D\u0E35\u0E40\u0E21\u0E25\u0E4C",
      (v) => /.+@.+\..+/.test(v) || "\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E2D\u0E35\u0E40\u0E21\u0E25\u0E4C\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07"
    ]);
    const fname = ref("");
    const fnameRules = ref([
      (v) => !!v || "\u0E15\u0E49\u0E2D\u0E07\u0E1B\u0E49\u0E2D\u0E19\u0E0A\u0E37\u0E48\u0E2D\u0E2A\u0E01\u0E38\u0E25",
      (v) => v && v.length >= 3 || "\u0E0A\u0E37\u0E48\u0E2D\u0E15\u0E49\u0E2D\u0E07\u0E44\u0E21\u0E48\u0E19\u0E49\u0E2D\u0E22\u0E01\u0E27\u0E48\u0E32 8 \u0E15\u0E31\u0E27\u0E2D\u0E31\u0E01\u0E29\u0E23"
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_container = resolveComponent("v-container");
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_card = resolveComponent("v-card");
      const _component_v_btn = resolveComponent("v-btn");
      const _component_v_form = resolveComponent("v-form");
      const _component_v_text_field = resolveComponent("v-text-field");
      const _component_v_checkbox = resolveComponent("v-checkbox");
      const _component_v_icon = resolveComponent("v-icon");
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
                    sm: "12",
                    md: "12",
                    lg: "12",
                    xl: "7"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_card, { elevation: "10" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_row, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_col, {
                                      lg: "5",
                                      class: "pr-0"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<div class="pa-7 pa-sm-12"${_scopeId6}><p class="text-center"${_scopeId6}><img${ssrRenderAttr("src", _imports_0)}${_scopeId6}></p><h2 class="font-weight-bold text-center mt-4 blue-grey--text text--darken-2"${_scopeId6}> \u0E25\u0E07\u0E17\u0E30\u0E40\u0E1A\u0E35\u0E22\u0E19 </h2><h6 class="text-subtitle-1 text-center text-grey-darken-1"${_scopeId6}> \u0E40\u0E1B\u0E47\u0E19\u0E2A\u0E21\u0E32\u0E0A\u0E34\u0E01\u0E2D\u0E22\u0E39\u0E48\u0E41\u0E25\u0E49\u0E27\u0E43\u0E0A\u0E48\u0E21\u0E31\u0E49\u0E22 ? `);
                                          _push7(ssrRenderComponent(_component_v_btn, {
                                            to: "/auth/login",
                                            variant: "plain"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`\u0E40\u0E02\u0E49\u0E32\u0E2A\u0E39\u0E48\u0E23\u0E30\u0E1A\u0E1A`);
                                              } else {
                                                return [
                                                  createTextVNode("\u0E40\u0E02\u0E49\u0E32\u0E2A\u0E39\u0E48\u0E23\u0E30\u0E1A\u0E1A")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(`</h6>`);
                                          _push7(ssrRenderComponent(_component_v_form, {
                                            ref: "form",
                                            modelValue: unref(valid),
                                            "onUpdate:modelValue": ($event) => isRef(valid) ? valid.value = $event : null,
                                            "lazy-validation": "",
                                            action: "/pages/boxedlogin"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_text_field, {
                                                  modelValue: unref(fname),
                                                  "onUpdate:modelValue": ($event) => isRef(fname) ? fname.value = $event : null,
                                                  rules: unref(fnameRules),
                                                  label: "\u0E0A\u0E37\u0E48\u0E2D-\u0E2A\u0E01\u0E38\u0E25",
                                                  class: "mt-4",
                                                  required: "",
                                                  variant: "outlined"
                                                }, null, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(_component_v_text_field, {
                                                  modelValue: unref(email),
                                                  "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                                                  rules: unref(emailRules),
                                                  label: "\u0E2D\u0E35\u0E40\u0E21\u0E25\u0E4C",
                                                  class: "mt-4",
                                                  required: "",
                                                  variant: "outlined"
                                                }, null, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(_component_v_text_field, {
                                                  modelValue: unref(password),
                                                  "onUpdate:modelValue": ($event) => isRef(password) ? password.value = $event : null,
                                                  counter: 8,
                                                  rules: unref(passwordRules),
                                                  label: "\u0E23\u0E2B\u0E31\u0E2A\u0E1C\u0E48\u0E32\u0E19",
                                                  class: "mt-4",
                                                  required: "",
                                                  variant: "outlined",
                                                  type: "password"
                                                }, null, _parent8, _scopeId7));
                                                _push8(`<div class="d-block d-sm-flex align-center mb-4 mb-sm-0"${_scopeId7}>`);
                                                _push8(ssrRenderComponent(_component_v_checkbox, {
                                                  modelValue: unref(checkbox),
                                                  "onUpdate:modelValue": ($event) => isRef(checkbox) ? checkbox.value = $event : null,
                                                  rules: [(v) => !!v || "You must agree to continue!"],
                                                  label: "\u0E09\u0E31\u0E19\u0E22\u0E2D\u0E21\u0E23\u0E31\u0E1A\u0E40\u0E07\u0E37\u0E48\u0E2D\u0E19\u0E44\u0E02\u0E01\u0E32\u0E23\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19",
                                                  required: "",
                                                  "hide-details": ""
                                                }, null, _parent8, _scopeId7));
                                                _push8(`</div>`);
                                                _push8(ssrRenderComponent(_component_v_btn, {
                                                  color: "primary",
                                                  block: "",
                                                  class: "mr-4 py-6",
                                                  size: "x-large",
                                                  submit: ""
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`\u0E25\u0E07\u0E17\u0E30\u0E40\u0E1A\u0E35\u0E22\u0E19`);
                                                    } else {
                                                      return [
                                                        createTextVNode("\u0E25\u0E07\u0E17\u0E30\u0E40\u0E1A\u0E35\u0E22\u0E19")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_text_field, {
                                                    modelValue: unref(fname),
                                                    "onUpdate:modelValue": ($event) => isRef(fname) ? fname.value = $event : null,
                                                    rules: unref(fnameRules),
                                                    label: "\u0E0A\u0E37\u0E48\u0E2D-\u0E2A\u0E01\u0E38\u0E25",
                                                    class: "mt-4",
                                                    required: "",
                                                    variant: "outlined"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                                  createVNode(_component_v_text_field, {
                                                    modelValue: unref(email),
                                                    "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                                                    rules: unref(emailRules),
                                                    label: "\u0E2D\u0E35\u0E40\u0E21\u0E25\u0E4C",
                                                    class: "mt-4",
                                                    required: "",
                                                    variant: "outlined"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                                  createVNode(_component_v_text_field, {
                                                    modelValue: unref(password),
                                                    "onUpdate:modelValue": ($event) => isRef(password) ? password.value = $event : null,
                                                    counter: 8,
                                                    rules: unref(passwordRules),
                                                    label: "\u0E23\u0E2B\u0E31\u0E2A\u0E1C\u0E48\u0E32\u0E19",
                                                    class: "mt-4",
                                                    required: "",
                                                    variant: "outlined",
                                                    type: "password"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                                  createVNode("div", { class: "d-block d-sm-flex align-center mb-4 mb-sm-0" }, [
                                                    createVNode(_component_v_checkbox, {
                                                      modelValue: unref(checkbox),
                                                      "onUpdate:modelValue": ($event) => isRef(checkbox) ? checkbox.value = $event : null,
                                                      rules: [(v) => !!v || "You must agree to continue!"],
                                                      label: "\u0E09\u0E31\u0E19\u0E22\u0E2D\u0E21\u0E23\u0E31\u0E1A\u0E40\u0E07\u0E37\u0E48\u0E2D\u0E19\u0E44\u0E02\u0E01\u0E32\u0E23\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19",
                                                      required: "",
                                                      "hide-details": ""
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                                  ]),
                                                  createVNode(_component_v_btn, {
                                                    color: "primary",
                                                    block: "",
                                                    class: "mr-4 py-6",
                                                    size: "x-large",
                                                    submit: ""
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("\u0E25\u0E07\u0E17\u0E30\u0E40\u0E1A\u0E35\u0E22\u0E19")
                                                    ]),
                                                    _: 1
                                                  })
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(`<div class="text-center mt-6"${_scopeId6}><div class="d-flex align-center justify-center gap-2"${_scopeId6}>`);
                                          _push7(ssrRenderComponent(_component_v_btn, {
                                            icon: "",
                                            color: "secondary"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_icon, null, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`mdi-twitter`);
                                                    } else {
                                                      return [
                                                        createTextVNode("mdi-twitter")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_icon, null, {
                                                    default: withCtx(() => [
                                                      createTextVNode("mdi-twitter")
                                                    ]),
                                                    _: 1
                                                  })
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_btn, {
                                            icon: "",
                                            color: "primary"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_icon, null, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`mdi-github`);
                                                    } else {
                                                      return [
                                                        createTextVNode("mdi-github")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_icon, null, {
                                                    default: withCtx(() => [
                                                      createTextVNode("mdi-github")
                                                    ]),
                                                    _: 1
                                                  })
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(`</div></div></div>`);
                                        } else {
                                          return [
                                            createVNode("div", { class: "pa-7 pa-sm-12" }, [
                                              createVNode("p", { class: "text-center" }, [
                                                createVNode("img", { src: _imports_0 })
                                              ]),
                                              createVNode("h2", { class: "font-weight-bold text-center mt-4 blue-grey--text text--darken-2" }, " \u0E25\u0E07\u0E17\u0E30\u0E40\u0E1A\u0E35\u0E22\u0E19 "),
                                              createVNode("h6", { class: "text-subtitle-1 text-center text-grey-darken-1" }, [
                                                createTextVNode(" \u0E40\u0E1B\u0E47\u0E19\u0E2A\u0E21\u0E32\u0E0A\u0E34\u0E01\u0E2D\u0E22\u0E39\u0E48\u0E41\u0E25\u0E49\u0E27\u0E43\u0E0A\u0E48\u0E21\u0E31\u0E49\u0E22 ? "),
                                                createVNode(_component_v_btn, {
                                                  to: "/auth/login",
                                                  variant: "plain"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("\u0E40\u0E02\u0E49\u0E32\u0E2A\u0E39\u0E48\u0E23\u0E30\u0E1A\u0E1A")
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              createVNode(_component_v_form, {
                                                ref: "form",
                                                modelValue: unref(valid),
                                                "onUpdate:modelValue": ($event) => isRef(valid) ? valid.value = $event : null,
                                                "lazy-validation": "",
                                                action: "/pages/boxedlogin"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_text_field, {
                                                    modelValue: unref(fname),
                                                    "onUpdate:modelValue": ($event) => isRef(fname) ? fname.value = $event : null,
                                                    rules: unref(fnameRules),
                                                    label: "\u0E0A\u0E37\u0E48\u0E2D-\u0E2A\u0E01\u0E38\u0E25",
                                                    class: "mt-4",
                                                    required: "",
                                                    variant: "outlined"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                                  createVNode(_component_v_text_field, {
                                                    modelValue: unref(email),
                                                    "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                                                    rules: unref(emailRules),
                                                    label: "\u0E2D\u0E35\u0E40\u0E21\u0E25\u0E4C",
                                                    class: "mt-4",
                                                    required: "",
                                                    variant: "outlined"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                                  createVNode(_component_v_text_field, {
                                                    modelValue: unref(password),
                                                    "onUpdate:modelValue": ($event) => isRef(password) ? password.value = $event : null,
                                                    counter: 8,
                                                    rules: unref(passwordRules),
                                                    label: "\u0E23\u0E2B\u0E31\u0E2A\u0E1C\u0E48\u0E32\u0E19",
                                                    class: "mt-4",
                                                    required: "",
                                                    variant: "outlined",
                                                    type: "password"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                                  createVNode("div", { class: "d-block d-sm-flex align-center mb-4 mb-sm-0" }, [
                                                    createVNode(_component_v_checkbox, {
                                                      modelValue: unref(checkbox),
                                                      "onUpdate:modelValue": ($event) => isRef(checkbox) ? checkbox.value = $event : null,
                                                      rules: [(v) => !!v || "You must agree to continue!"],
                                                      label: "\u0E09\u0E31\u0E19\u0E22\u0E2D\u0E21\u0E23\u0E31\u0E1A\u0E40\u0E07\u0E37\u0E48\u0E2D\u0E19\u0E44\u0E02\u0E01\u0E32\u0E23\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19",
                                                      required: "",
                                                      "hide-details": ""
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                                  ]),
                                                  createVNode(_component_v_btn, {
                                                    color: "primary",
                                                    block: "",
                                                    class: "mr-4 py-6",
                                                    size: "x-large",
                                                    submit: ""
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("\u0E25\u0E07\u0E17\u0E30\u0E40\u0E1A\u0E35\u0E22\u0E19")
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              }, 8, ["modelValue", "onUpdate:modelValue"]),
                                              createVNode("div", { class: "text-center mt-6" }, [
                                                createVNode("div", { class: "d-flex align-center justify-center gap-2" }, [
                                                  createVNode(_component_v_btn, {
                                                    icon: "",
                                                    color: "secondary"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_icon, null, {
                                                        default: withCtx(() => [
                                                          createTextVNode("mdi-twitter")
                                                        ]),
                                                        _: 1
                                                      })
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_v_btn, {
                                                    icon: "",
                                                    color: "primary"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_v_icon, null, {
                                                        default: withCtx(() => [
                                                          createTextVNode("mdi-github")
                                                        ]),
                                                        _: 1
                                                      })
                                                    ]),
                                                    _: 1
                                                  })
                                                ])
                                              ])
                                            ])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_col, {
                                      lg: "7",
                                      class: "bg-primary d-none d-md-flex align-center justify-center"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<div class="d-none d-sm-block"${_scopeId6}><div class="d-flex align-center pa-10"${_scopeId6}><div${_scopeId6}><h2 class="text-h4 text-white font-weight-medium"${_scopeId6}> \u0E01\u0E32\u0E23\u0E2D\u0E2D\u0E01\u0E41\u0E1A\u0E1A\u0E17\u0E35\u0E48\u0E44\u0E21\u0E48\u0E21\u0E35\u0E2A\u0E34\u0E49\u0E19\u0E2A\u0E38\u0E14 \u0E40\u0E23\u0E32\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E21\u0E31\u0E19\u0E14\u0E49\u0E27\u0E22\u0E23\u0E31\u0E01\u0E41\u0E25\u0E30\u0E43\u0E2A\u0E48\u0E43\u0E08 </h2><h6 class="text-subtitle-1 mt-4 text-white font-weight-regular"${_scopeId6}> \u0E44\u0E2D\u0E17\u0E35\u0E08\u0E35\u0E40\u0E19\u0E35\u0E22\u0E2A\u0E0A\u0E48\u0E27\u0E22\u0E43\u0E2B\u0E49\u0E19\u0E31\u0E01\u0E1E\u0E31\u0E12\u0E19\u0E32\u0E44\u0E14\u0E49\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E49\u0E39\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E40\u0E15\u0E34\u0E21 \u0E1C\u0E48\u0E32\u0E19\u0E2B\u0E25\u0E31\u0E01\u0E2A\u0E39\u0E15\u0E23\u0E01\u0E32\u0E23\u0E2D\u0E1A\u0E23\u0E21\u0E17\u0E35\u0E48\u0E2B\u0E25\u0E32\u0E01\u0E2B\u0E25\u0E32\u0E22 \u0E04\u0E23\u0E2D\u0E1A\u0E04\u0E25\u0E38\u0E21\u0E17\u0E38\u0E01\u0E14\u0E49\u0E32\u0E19 \u0E17\u0E31\u0E49\u0E07\u0E2D\u0E2D\u0E01\u0E41\u0E1A\u0E1A \u0E42\u0E1B\u0E23\u0E41\u0E01\u0E23\u0E21\u0E21\u0E34\u0E48\u0E07 \u0E10\u0E32\u0E19\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25 \u0E42\u0E21\u0E1A\u0E32\u0E22\u0E41\u0E2D\u0E1E \u0E15\u0E25\u0E2D\u0E14\u0E08\u0E19 devops \u0E41\u0E25\u0E30\u0E2D\u0E37\u0E48\u0E19\u0E46 </h6>`);
                                          _push7(ssrRenderComponent(_component_v_btn, {
                                            class: "mt-6 text-capitalize",
                                            size: "x-large",
                                            variant: "outlined",
                                            color: "white"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E40\u0E15\u0E34\u0E21`);
                                              } else {
                                                return [
                                                  createTextVNode("\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E40\u0E15\u0E34\u0E21")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(`</div></div></div>`);
                                        } else {
                                          return [
                                            createVNode("div", { class: "d-none d-sm-block" }, [
                                              createVNode("div", { class: "d-flex align-center pa-10" }, [
                                                createVNode("div", null, [
                                                  createVNode("h2", { class: "text-h4 text-white font-weight-medium" }, " \u0E01\u0E32\u0E23\u0E2D\u0E2D\u0E01\u0E41\u0E1A\u0E1A\u0E17\u0E35\u0E48\u0E44\u0E21\u0E48\u0E21\u0E35\u0E2A\u0E34\u0E49\u0E19\u0E2A\u0E38\u0E14 \u0E40\u0E23\u0E32\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E21\u0E31\u0E19\u0E14\u0E49\u0E27\u0E22\u0E23\u0E31\u0E01\u0E41\u0E25\u0E30\u0E43\u0E2A\u0E48\u0E43\u0E08 "),
                                                  createVNode("h6", { class: "text-subtitle-1 mt-4 text-white font-weight-regular" }, " \u0E44\u0E2D\u0E17\u0E35\u0E08\u0E35\u0E40\u0E19\u0E35\u0E22\u0E2A\u0E0A\u0E48\u0E27\u0E22\u0E43\u0E2B\u0E49\u0E19\u0E31\u0E01\u0E1E\u0E31\u0E12\u0E19\u0E32\u0E44\u0E14\u0E49\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E49\u0E39\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E40\u0E15\u0E34\u0E21 \u0E1C\u0E48\u0E32\u0E19\u0E2B\u0E25\u0E31\u0E01\u0E2A\u0E39\u0E15\u0E23\u0E01\u0E32\u0E23\u0E2D\u0E1A\u0E23\u0E21\u0E17\u0E35\u0E48\u0E2B\u0E25\u0E32\u0E01\u0E2B\u0E25\u0E32\u0E22 \u0E04\u0E23\u0E2D\u0E1A\u0E04\u0E25\u0E38\u0E21\u0E17\u0E38\u0E01\u0E14\u0E49\u0E32\u0E19 \u0E17\u0E31\u0E49\u0E07\u0E2D\u0E2D\u0E01\u0E41\u0E1A\u0E1A \u0E42\u0E1B\u0E23\u0E41\u0E01\u0E23\u0E21\u0E21\u0E34\u0E48\u0E07 \u0E10\u0E32\u0E19\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25 \u0E42\u0E21\u0E1A\u0E32\u0E22\u0E41\u0E2D\u0E1E \u0E15\u0E25\u0E2D\u0E14\u0E08\u0E19 devops \u0E41\u0E25\u0E30\u0E2D\u0E37\u0E48\u0E19\u0E46 "),
                                                  createVNode(_component_v_btn, {
                                                    class: "mt-6 text-capitalize",
                                                    size: "x-large",
                                                    variant: "outlined",
                                                    color: "white"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E40\u0E15\u0E34\u0E21")
                                                    ]),
                                                    _: 1
                                                  })
                                                ])
                                              ])
                                            ])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_col, {
                                        lg: "5",
                                        class: "pr-0"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "pa-7 pa-sm-12" }, [
                                            createVNode("p", { class: "text-center" }, [
                                              createVNode("img", { src: _imports_0 })
                                            ]),
                                            createVNode("h2", { class: "font-weight-bold text-center mt-4 blue-grey--text text--darken-2" }, " \u0E25\u0E07\u0E17\u0E30\u0E40\u0E1A\u0E35\u0E22\u0E19 "),
                                            createVNode("h6", { class: "text-subtitle-1 text-center text-grey-darken-1" }, [
                                              createTextVNode(" \u0E40\u0E1B\u0E47\u0E19\u0E2A\u0E21\u0E32\u0E0A\u0E34\u0E01\u0E2D\u0E22\u0E39\u0E48\u0E41\u0E25\u0E49\u0E27\u0E43\u0E0A\u0E48\u0E21\u0E31\u0E49\u0E22 ? "),
                                              createVNode(_component_v_btn, {
                                                to: "/auth/login",
                                                variant: "plain"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode("\u0E40\u0E02\u0E49\u0E32\u0E2A\u0E39\u0E48\u0E23\u0E30\u0E1A\u0E1A")
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            createVNode(_component_v_form, {
                                              ref: "form",
                                              modelValue: unref(valid),
                                              "onUpdate:modelValue": ($event) => isRef(valid) ? valid.value = $event : null,
                                              "lazy-validation": "",
                                              action: "/pages/boxedlogin"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_text_field, {
                                                  modelValue: unref(fname),
                                                  "onUpdate:modelValue": ($event) => isRef(fname) ? fname.value = $event : null,
                                                  rules: unref(fnameRules),
                                                  label: "\u0E0A\u0E37\u0E48\u0E2D-\u0E2A\u0E01\u0E38\u0E25",
                                                  class: "mt-4",
                                                  required: "",
                                                  variant: "outlined"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                                createVNode(_component_v_text_field, {
                                                  modelValue: unref(email),
                                                  "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                                                  rules: unref(emailRules),
                                                  label: "\u0E2D\u0E35\u0E40\u0E21\u0E25\u0E4C",
                                                  class: "mt-4",
                                                  required: "",
                                                  variant: "outlined"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                                createVNode(_component_v_text_field, {
                                                  modelValue: unref(password),
                                                  "onUpdate:modelValue": ($event) => isRef(password) ? password.value = $event : null,
                                                  counter: 8,
                                                  rules: unref(passwordRules),
                                                  label: "\u0E23\u0E2B\u0E31\u0E2A\u0E1C\u0E48\u0E32\u0E19",
                                                  class: "mt-4",
                                                  required: "",
                                                  variant: "outlined",
                                                  type: "password"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                                createVNode("div", { class: "d-block d-sm-flex align-center mb-4 mb-sm-0" }, [
                                                  createVNode(_component_v_checkbox, {
                                                    modelValue: unref(checkbox),
                                                    "onUpdate:modelValue": ($event) => isRef(checkbox) ? checkbox.value = $event : null,
                                                    rules: [(v) => !!v || "You must agree to continue!"],
                                                    label: "\u0E09\u0E31\u0E19\u0E22\u0E2D\u0E21\u0E23\u0E31\u0E1A\u0E40\u0E07\u0E37\u0E48\u0E2D\u0E19\u0E44\u0E02\u0E01\u0E32\u0E23\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19",
                                                    required: "",
                                                    "hide-details": ""
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                                ]),
                                                createVNode(_component_v_btn, {
                                                  color: "primary",
                                                  block: "",
                                                  class: "mr-4 py-6",
                                                  size: "x-large",
                                                  submit: ""
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("\u0E25\u0E07\u0E17\u0E30\u0E40\u0E1A\u0E35\u0E22\u0E19")
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            }, 8, ["modelValue", "onUpdate:modelValue"]),
                                            createVNode("div", { class: "text-center mt-6" }, [
                                              createVNode("div", { class: "d-flex align-center justify-center gap-2" }, [
                                                createVNode(_component_v_btn, {
                                                  icon: "",
                                                  color: "secondary"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_icon, null, {
                                                      default: withCtx(() => [
                                                        createTextVNode("mdi-twitter")
                                                      ]),
                                                      _: 1
                                                    })
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_v_btn, {
                                                  icon: "",
                                                  color: "primary"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_v_icon, null, {
                                                      default: withCtx(() => [
                                                        createTextVNode("mdi-github")
                                                      ]),
                                                      _: 1
                                                    })
                                                  ]),
                                                  _: 1
                                                })
                                              ])
                                            ])
                                          ])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_col, {
                                        lg: "7",
                                        class: "bg-primary d-none d-md-flex align-center justify-center"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "d-none d-sm-block" }, [
                                            createVNode("div", { class: "d-flex align-center pa-10" }, [
                                              createVNode("div", null, [
                                                createVNode("h2", { class: "text-h4 text-white font-weight-medium" }, " \u0E01\u0E32\u0E23\u0E2D\u0E2D\u0E01\u0E41\u0E1A\u0E1A\u0E17\u0E35\u0E48\u0E44\u0E21\u0E48\u0E21\u0E35\u0E2A\u0E34\u0E49\u0E19\u0E2A\u0E38\u0E14 \u0E40\u0E23\u0E32\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E21\u0E31\u0E19\u0E14\u0E49\u0E27\u0E22\u0E23\u0E31\u0E01\u0E41\u0E25\u0E30\u0E43\u0E2A\u0E48\u0E43\u0E08 "),
                                                createVNode("h6", { class: "text-subtitle-1 mt-4 text-white font-weight-regular" }, " \u0E44\u0E2D\u0E17\u0E35\u0E08\u0E35\u0E40\u0E19\u0E35\u0E22\u0E2A\u0E0A\u0E48\u0E27\u0E22\u0E43\u0E2B\u0E49\u0E19\u0E31\u0E01\u0E1E\u0E31\u0E12\u0E19\u0E32\u0E44\u0E14\u0E49\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E49\u0E39\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E40\u0E15\u0E34\u0E21 \u0E1C\u0E48\u0E32\u0E19\u0E2B\u0E25\u0E31\u0E01\u0E2A\u0E39\u0E15\u0E23\u0E01\u0E32\u0E23\u0E2D\u0E1A\u0E23\u0E21\u0E17\u0E35\u0E48\u0E2B\u0E25\u0E32\u0E01\u0E2B\u0E25\u0E32\u0E22 \u0E04\u0E23\u0E2D\u0E1A\u0E04\u0E25\u0E38\u0E21\u0E17\u0E38\u0E01\u0E14\u0E49\u0E32\u0E19 \u0E17\u0E31\u0E49\u0E07\u0E2D\u0E2D\u0E01\u0E41\u0E1A\u0E1A \u0E42\u0E1B\u0E23\u0E41\u0E01\u0E23\u0E21\u0E21\u0E34\u0E48\u0E07 \u0E10\u0E32\u0E19\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25 \u0E42\u0E21\u0E1A\u0E32\u0E22\u0E41\u0E2D\u0E1E \u0E15\u0E25\u0E2D\u0E14\u0E08\u0E19 devops \u0E41\u0E25\u0E30\u0E2D\u0E37\u0E48\u0E19\u0E46 "),
                                                createVNode(_component_v_btn, {
                                                  class: "mt-6 text-capitalize",
                                                  size: "x-large",
                                                  variant: "outlined",
                                                  color: "white"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E40\u0E15\u0E34\u0E21")
                                                  ]),
                                                  _: 1
                                                })
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
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_row, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_col, {
                                      lg: "5",
                                      class: "pr-0"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "pa-7 pa-sm-12" }, [
                                          createVNode("p", { class: "text-center" }, [
                                            createVNode("img", { src: _imports_0 })
                                          ]),
                                          createVNode("h2", { class: "font-weight-bold text-center mt-4 blue-grey--text text--darken-2" }, " \u0E25\u0E07\u0E17\u0E30\u0E40\u0E1A\u0E35\u0E22\u0E19 "),
                                          createVNode("h6", { class: "text-subtitle-1 text-center text-grey-darken-1" }, [
                                            createTextVNode(" \u0E40\u0E1B\u0E47\u0E19\u0E2A\u0E21\u0E32\u0E0A\u0E34\u0E01\u0E2D\u0E22\u0E39\u0E48\u0E41\u0E25\u0E49\u0E27\u0E43\u0E0A\u0E48\u0E21\u0E31\u0E49\u0E22 ? "),
                                            createVNode(_component_v_btn, {
                                              to: "/auth/login",
                                              variant: "plain"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode("\u0E40\u0E02\u0E49\u0E32\u0E2A\u0E39\u0E48\u0E23\u0E30\u0E1A\u0E1A")
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          createVNode(_component_v_form, {
                                            ref: "form",
                                            modelValue: unref(valid),
                                            "onUpdate:modelValue": ($event) => isRef(valid) ? valid.value = $event : null,
                                            "lazy-validation": "",
                                            action: "/pages/boxedlogin"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_text_field, {
                                                modelValue: unref(fname),
                                                "onUpdate:modelValue": ($event) => isRef(fname) ? fname.value = $event : null,
                                                rules: unref(fnameRules),
                                                label: "\u0E0A\u0E37\u0E48\u0E2D-\u0E2A\u0E01\u0E38\u0E25",
                                                class: "mt-4",
                                                required: "",
                                                variant: "outlined"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                              createVNode(_component_v_text_field, {
                                                modelValue: unref(email),
                                                "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                                                rules: unref(emailRules),
                                                label: "\u0E2D\u0E35\u0E40\u0E21\u0E25\u0E4C",
                                                class: "mt-4",
                                                required: "",
                                                variant: "outlined"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                              createVNode(_component_v_text_field, {
                                                modelValue: unref(password),
                                                "onUpdate:modelValue": ($event) => isRef(password) ? password.value = $event : null,
                                                counter: 8,
                                                rules: unref(passwordRules),
                                                label: "\u0E23\u0E2B\u0E31\u0E2A\u0E1C\u0E48\u0E32\u0E19",
                                                class: "mt-4",
                                                required: "",
                                                variant: "outlined",
                                                type: "password"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                              createVNode("div", { class: "d-block d-sm-flex align-center mb-4 mb-sm-0" }, [
                                                createVNode(_component_v_checkbox, {
                                                  modelValue: unref(checkbox),
                                                  "onUpdate:modelValue": ($event) => isRef(checkbox) ? checkbox.value = $event : null,
                                                  rules: [(v) => !!v || "You must agree to continue!"],
                                                  label: "\u0E09\u0E31\u0E19\u0E22\u0E2D\u0E21\u0E23\u0E31\u0E1A\u0E40\u0E07\u0E37\u0E48\u0E2D\u0E19\u0E44\u0E02\u0E01\u0E32\u0E23\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19",
                                                  required: "",
                                                  "hide-details": ""
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                              ]),
                                              createVNode(_component_v_btn, {
                                                color: "primary",
                                                block: "",
                                                class: "mr-4 py-6",
                                                size: "x-large",
                                                submit: ""
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode("\u0E25\u0E07\u0E17\u0E30\u0E40\u0E1A\u0E35\u0E22\u0E19")
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          }, 8, ["modelValue", "onUpdate:modelValue"]),
                                          createVNode("div", { class: "text-center mt-6" }, [
                                            createVNode("div", { class: "d-flex align-center justify-center gap-2" }, [
                                              createVNode(_component_v_btn, {
                                                icon: "",
                                                color: "secondary"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_icon, null, {
                                                    default: withCtx(() => [
                                                      createTextVNode("mdi-twitter")
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_v_btn, {
                                                icon: "",
                                                color: "primary"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_icon, null, {
                                                    default: withCtx(() => [
                                                      createTextVNode("mdi-github")
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              })
                                            ])
                                          ])
                                        ])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_col, {
                                      lg: "7",
                                      class: "bg-primary d-none d-md-flex align-center justify-center"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "d-none d-sm-block" }, [
                                          createVNode("div", { class: "d-flex align-center pa-10" }, [
                                            createVNode("div", null, [
                                              createVNode("h2", { class: "text-h4 text-white font-weight-medium" }, " \u0E01\u0E32\u0E23\u0E2D\u0E2D\u0E01\u0E41\u0E1A\u0E1A\u0E17\u0E35\u0E48\u0E44\u0E21\u0E48\u0E21\u0E35\u0E2A\u0E34\u0E49\u0E19\u0E2A\u0E38\u0E14 \u0E40\u0E23\u0E32\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E21\u0E31\u0E19\u0E14\u0E49\u0E27\u0E22\u0E23\u0E31\u0E01\u0E41\u0E25\u0E30\u0E43\u0E2A\u0E48\u0E43\u0E08 "),
                                              createVNode("h6", { class: "text-subtitle-1 mt-4 text-white font-weight-regular" }, " \u0E44\u0E2D\u0E17\u0E35\u0E08\u0E35\u0E40\u0E19\u0E35\u0E22\u0E2A\u0E0A\u0E48\u0E27\u0E22\u0E43\u0E2B\u0E49\u0E19\u0E31\u0E01\u0E1E\u0E31\u0E12\u0E19\u0E32\u0E44\u0E14\u0E49\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E49\u0E39\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E40\u0E15\u0E34\u0E21 \u0E1C\u0E48\u0E32\u0E19\u0E2B\u0E25\u0E31\u0E01\u0E2A\u0E39\u0E15\u0E23\u0E01\u0E32\u0E23\u0E2D\u0E1A\u0E23\u0E21\u0E17\u0E35\u0E48\u0E2B\u0E25\u0E32\u0E01\u0E2B\u0E25\u0E32\u0E22 \u0E04\u0E23\u0E2D\u0E1A\u0E04\u0E25\u0E38\u0E21\u0E17\u0E38\u0E01\u0E14\u0E49\u0E32\u0E19 \u0E17\u0E31\u0E49\u0E07\u0E2D\u0E2D\u0E01\u0E41\u0E1A\u0E1A \u0E42\u0E1B\u0E23\u0E41\u0E01\u0E23\u0E21\u0E21\u0E34\u0E48\u0E07 \u0E10\u0E32\u0E19\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25 \u0E42\u0E21\u0E1A\u0E32\u0E22\u0E41\u0E2D\u0E1E \u0E15\u0E25\u0E2D\u0E14\u0E08\u0E19 devops \u0E41\u0E25\u0E30\u0E2D\u0E37\u0E48\u0E19\u0E46 "),
                                              createVNode(_component_v_btn, {
                                                class: "mt-6 text-capitalize",
                                                size: "x-large",
                                                variant: "outlined",
                                                color: "white"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode("\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E40\u0E15\u0E34\u0E21")
                                                ]),
                                                _: 1
                                              })
                                            ])
                                          ])
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
                                  createVNode(_component_v_col, {
                                    lg: "5",
                                    class: "pr-0"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "pa-7 pa-sm-12" }, [
                                        createVNode("p", { class: "text-center" }, [
                                          createVNode("img", { src: _imports_0 })
                                        ]),
                                        createVNode("h2", { class: "font-weight-bold text-center mt-4 blue-grey--text text--darken-2" }, " \u0E25\u0E07\u0E17\u0E30\u0E40\u0E1A\u0E35\u0E22\u0E19 "),
                                        createVNode("h6", { class: "text-subtitle-1 text-center text-grey-darken-1" }, [
                                          createTextVNode(" \u0E40\u0E1B\u0E47\u0E19\u0E2A\u0E21\u0E32\u0E0A\u0E34\u0E01\u0E2D\u0E22\u0E39\u0E48\u0E41\u0E25\u0E49\u0E27\u0E43\u0E0A\u0E48\u0E21\u0E31\u0E49\u0E22 ? "),
                                          createVNode(_component_v_btn, {
                                            to: "/auth/login",
                                            variant: "plain"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode("\u0E40\u0E02\u0E49\u0E32\u0E2A\u0E39\u0E48\u0E23\u0E30\u0E1A\u0E1A")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        createVNode(_component_v_form, {
                                          ref: "form",
                                          modelValue: unref(valid),
                                          "onUpdate:modelValue": ($event) => isRef(valid) ? valid.value = $event : null,
                                          "lazy-validation": "",
                                          action: "/pages/boxedlogin"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_text_field, {
                                              modelValue: unref(fname),
                                              "onUpdate:modelValue": ($event) => isRef(fname) ? fname.value = $event : null,
                                              rules: unref(fnameRules),
                                              label: "\u0E0A\u0E37\u0E48\u0E2D-\u0E2A\u0E01\u0E38\u0E25",
                                              class: "mt-4",
                                              required: "",
                                              variant: "outlined"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                            createVNode(_component_v_text_field, {
                                              modelValue: unref(email),
                                              "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                                              rules: unref(emailRules),
                                              label: "\u0E2D\u0E35\u0E40\u0E21\u0E25\u0E4C",
                                              class: "mt-4",
                                              required: "",
                                              variant: "outlined"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                            createVNode(_component_v_text_field, {
                                              modelValue: unref(password),
                                              "onUpdate:modelValue": ($event) => isRef(password) ? password.value = $event : null,
                                              counter: 8,
                                              rules: unref(passwordRules),
                                              label: "\u0E23\u0E2B\u0E31\u0E2A\u0E1C\u0E48\u0E32\u0E19",
                                              class: "mt-4",
                                              required: "",
                                              variant: "outlined",
                                              type: "password"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                            createVNode("div", { class: "d-block d-sm-flex align-center mb-4 mb-sm-0" }, [
                                              createVNode(_component_v_checkbox, {
                                                modelValue: unref(checkbox),
                                                "onUpdate:modelValue": ($event) => isRef(checkbox) ? checkbox.value = $event : null,
                                                rules: [(v) => !!v || "You must agree to continue!"],
                                                label: "\u0E09\u0E31\u0E19\u0E22\u0E2D\u0E21\u0E23\u0E31\u0E1A\u0E40\u0E07\u0E37\u0E48\u0E2D\u0E19\u0E44\u0E02\u0E01\u0E32\u0E23\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19",
                                                required: "",
                                                "hide-details": ""
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                            ]),
                                            createVNode(_component_v_btn, {
                                              color: "primary",
                                              block: "",
                                              class: "mr-4 py-6",
                                              size: "x-large",
                                              submit: ""
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode("\u0E25\u0E07\u0E17\u0E30\u0E40\u0E1A\u0E35\u0E22\u0E19")
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }, 8, ["modelValue", "onUpdate:modelValue"]),
                                        createVNode("div", { class: "text-center mt-6" }, [
                                          createVNode("div", { class: "d-flex align-center justify-center gap-2" }, [
                                            createVNode(_component_v_btn, {
                                              icon: "",
                                              color: "secondary"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_icon, null, {
                                                  default: withCtx(() => [
                                                    createTextVNode("mdi-twitter")
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_btn, {
                                              icon: "",
                                              color: "primary"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_icon, null, {
                                                  default: withCtx(() => [
                                                    createTextVNode("mdi-github")
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            })
                                          ])
                                        ])
                                      ])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_col, {
                                    lg: "7",
                                    class: "bg-primary d-none d-md-flex align-center justify-center"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "d-none d-sm-block" }, [
                                        createVNode("div", { class: "d-flex align-center pa-10" }, [
                                          createVNode("div", null, [
                                            createVNode("h2", { class: "text-h4 text-white font-weight-medium" }, " \u0E01\u0E32\u0E23\u0E2D\u0E2D\u0E01\u0E41\u0E1A\u0E1A\u0E17\u0E35\u0E48\u0E44\u0E21\u0E48\u0E21\u0E35\u0E2A\u0E34\u0E49\u0E19\u0E2A\u0E38\u0E14 \u0E40\u0E23\u0E32\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E21\u0E31\u0E19\u0E14\u0E49\u0E27\u0E22\u0E23\u0E31\u0E01\u0E41\u0E25\u0E30\u0E43\u0E2A\u0E48\u0E43\u0E08 "),
                                            createVNode("h6", { class: "text-subtitle-1 mt-4 text-white font-weight-regular" }, " \u0E44\u0E2D\u0E17\u0E35\u0E08\u0E35\u0E40\u0E19\u0E35\u0E22\u0E2A\u0E0A\u0E48\u0E27\u0E22\u0E43\u0E2B\u0E49\u0E19\u0E31\u0E01\u0E1E\u0E31\u0E12\u0E19\u0E32\u0E44\u0E14\u0E49\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E49\u0E39\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E40\u0E15\u0E34\u0E21 \u0E1C\u0E48\u0E32\u0E19\u0E2B\u0E25\u0E31\u0E01\u0E2A\u0E39\u0E15\u0E23\u0E01\u0E32\u0E23\u0E2D\u0E1A\u0E23\u0E21\u0E17\u0E35\u0E48\u0E2B\u0E25\u0E32\u0E01\u0E2B\u0E25\u0E32\u0E22 \u0E04\u0E23\u0E2D\u0E1A\u0E04\u0E25\u0E38\u0E21\u0E17\u0E38\u0E01\u0E14\u0E49\u0E32\u0E19 \u0E17\u0E31\u0E49\u0E07\u0E2D\u0E2D\u0E01\u0E41\u0E1A\u0E1A \u0E42\u0E1B\u0E23\u0E41\u0E01\u0E23\u0E21\u0E21\u0E34\u0E48\u0E07 \u0E10\u0E32\u0E19\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25 \u0E42\u0E21\u0E1A\u0E32\u0E22\u0E41\u0E2D\u0E1E \u0E15\u0E25\u0E2D\u0E14\u0E08\u0E19 devops \u0E41\u0E25\u0E30\u0E2D\u0E37\u0E48\u0E19\u0E46 "),
                                            createVNode(_component_v_btn, {
                                              class: "mt-6 text-capitalize",
                                              size: "x-large",
                                              variant: "outlined",
                                              color: "white"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode("\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E40\u0E15\u0E34\u0E21")
                                              ]),
                                              _: 1
                                            })
                                          ])
                                        ])
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
                      sm: "12",
                      md: "12",
                      lg: "12",
                      xl: "7"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_card, { elevation: "10" }, {
                          default: withCtx(() => [
                            createVNode(_component_v_row, null, {
                              default: withCtx(() => [
                                createVNode(_component_v_col, {
                                  lg: "5",
                                  class: "pr-0"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "pa-7 pa-sm-12" }, [
                                      createVNode("p", { class: "text-center" }, [
                                        createVNode("img", { src: _imports_0 })
                                      ]),
                                      createVNode("h2", { class: "font-weight-bold text-center mt-4 blue-grey--text text--darken-2" }, " \u0E25\u0E07\u0E17\u0E30\u0E40\u0E1A\u0E35\u0E22\u0E19 "),
                                      createVNode("h6", { class: "text-subtitle-1 text-center text-grey-darken-1" }, [
                                        createTextVNode(" \u0E40\u0E1B\u0E47\u0E19\u0E2A\u0E21\u0E32\u0E0A\u0E34\u0E01\u0E2D\u0E22\u0E39\u0E48\u0E41\u0E25\u0E49\u0E27\u0E43\u0E0A\u0E48\u0E21\u0E31\u0E49\u0E22 ? "),
                                        createVNode(_component_v_btn, {
                                          to: "/auth/login",
                                          variant: "plain"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("\u0E40\u0E02\u0E49\u0E32\u0E2A\u0E39\u0E48\u0E23\u0E30\u0E1A\u0E1A")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      createVNode(_component_v_form, {
                                        ref: "form",
                                        modelValue: unref(valid),
                                        "onUpdate:modelValue": ($event) => isRef(valid) ? valid.value = $event : null,
                                        "lazy-validation": "",
                                        action: "/pages/boxedlogin"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_text_field, {
                                            modelValue: unref(fname),
                                            "onUpdate:modelValue": ($event) => isRef(fname) ? fname.value = $event : null,
                                            rules: unref(fnameRules),
                                            label: "\u0E0A\u0E37\u0E48\u0E2D-\u0E2A\u0E01\u0E38\u0E25",
                                            class: "mt-4",
                                            required: "",
                                            variant: "outlined"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                          createVNode(_component_v_text_field, {
                                            modelValue: unref(email),
                                            "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                                            rules: unref(emailRules),
                                            label: "\u0E2D\u0E35\u0E40\u0E21\u0E25\u0E4C",
                                            class: "mt-4",
                                            required: "",
                                            variant: "outlined"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                          createVNode(_component_v_text_field, {
                                            modelValue: unref(password),
                                            "onUpdate:modelValue": ($event) => isRef(password) ? password.value = $event : null,
                                            counter: 8,
                                            rules: unref(passwordRules),
                                            label: "\u0E23\u0E2B\u0E31\u0E2A\u0E1C\u0E48\u0E32\u0E19",
                                            class: "mt-4",
                                            required: "",
                                            variant: "outlined",
                                            type: "password"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                          createVNode("div", { class: "d-block d-sm-flex align-center mb-4 mb-sm-0" }, [
                                            createVNode(_component_v_checkbox, {
                                              modelValue: unref(checkbox),
                                              "onUpdate:modelValue": ($event) => isRef(checkbox) ? checkbox.value = $event : null,
                                              rules: [(v) => !!v || "You must agree to continue!"],
                                              label: "\u0E09\u0E31\u0E19\u0E22\u0E2D\u0E21\u0E23\u0E31\u0E1A\u0E40\u0E07\u0E37\u0E48\u0E2D\u0E19\u0E44\u0E02\u0E01\u0E32\u0E23\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19",
                                              required: "",
                                              "hide-details": ""
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                          ]),
                                          createVNode(_component_v_btn, {
                                            color: "primary",
                                            block: "",
                                            class: "mr-4 py-6",
                                            size: "x-large",
                                            submit: ""
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode("\u0E25\u0E07\u0E17\u0E30\u0E40\u0E1A\u0E35\u0E22\u0E19")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }, 8, ["modelValue", "onUpdate:modelValue"]),
                                      createVNode("div", { class: "text-center mt-6" }, [
                                        createVNode("div", { class: "d-flex align-center justify-center gap-2" }, [
                                          createVNode(_component_v_btn, {
                                            icon: "",
                                            color: "secondary"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_icon, null, {
                                                default: withCtx(() => [
                                                  createTextVNode("mdi-twitter")
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_btn, {
                                            icon: "",
                                            color: "primary"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_icon, null, {
                                                default: withCtx(() => [
                                                  createTextVNode("mdi-github")
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          })
                                        ])
                                      ])
                                    ])
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_col, {
                                  lg: "7",
                                  class: "bg-primary d-none d-md-flex align-center justify-center"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "d-none d-sm-block" }, [
                                      createVNode("div", { class: "d-flex align-center pa-10" }, [
                                        createVNode("div", null, [
                                          createVNode("h2", { class: "text-h4 text-white font-weight-medium" }, " \u0E01\u0E32\u0E23\u0E2D\u0E2D\u0E01\u0E41\u0E1A\u0E1A\u0E17\u0E35\u0E48\u0E44\u0E21\u0E48\u0E21\u0E35\u0E2A\u0E34\u0E49\u0E19\u0E2A\u0E38\u0E14 \u0E40\u0E23\u0E32\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E21\u0E31\u0E19\u0E14\u0E49\u0E27\u0E22\u0E23\u0E31\u0E01\u0E41\u0E25\u0E30\u0E43\u0E2A\u0E48\u0E43\u0E08 "),
                                          createVNode("h6", { class: "text-subtitle-1 mt-4 text-white font-weight-regular" }, " \u0E44\u0E2D\u0E17\u0E35\u0E08\u0E35\u0E40\u0E19\u0E35\u0E22\u0E2A\u0E0A\u0E48\u0E27\u0E22\u0E43\u0E2B\u0E49\u0E19\u0E31\u0E01\u0E1E\u0E31\u0E12\u0E19\u0E32\u0E44\u0E14\u0E49\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E49\u0E39\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E40\u0E15\u0E34\u0E21 \u0E1C\u0E48\u0E32\u0E19\u0E2B\u0E25\u0E31\u0E01\u0E2A\u0E39\u0E15\u0E23\u0E01\u0E32\u0E23\u0E2D\u0E1A\u0E23\u0E21\u0E17\u0E35\u0E48\u0E2B\u0E25\u0E32\u0E01\u0E2B\u0E25\u0E32\u0E22 \u0E04\u0E23\u0E2D\u0E1A\u0E04\u0E25\u0E38\u0E21\u0E17\u0E38\u0E01\u0E14\u0E49\u0E32\u0E19 \u0E17\u0E31\u0E49\u0E07\u0E2D\u0E2D\u0E01\u0E41\u0E1A\u0E1A \u0E42\u0E1B\u0E23\u0E41\u0E01\u0E23\u0E21\u0E21\u0E34\u0E48\u0E07 \u0E10\u0E32\u0E19\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25 \u0E42\u0E21\u0E1A\u0E32\u0E22\u0E41\u0E2D\u0E1E \u0E15\u0E25\u0E2D\u0E14\u0E08\u0E19 devops \u0E41\u0E25\u0E30\u0E2D\u0E37\u0E48\u0E19\u0E46 "),
                                          createVNode(_component_v_btn, {
                                            class: "mt-6 text-capitalize",
                                            size: "x-large",
                                            variant: "outlined",
                                            color: "white"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode("\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E40\u0E15\u0E34\u0E21")
                                            ]),
                                            _: 1
                                          })
                                        ])
                                      ])
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
                    sm: "12",
                    md: "12",
                    lg: "12",
                    xl: "7"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_card, { elevation: "10" }, {
                        default: withCtx(() => [
                          createVNode(_component_v_row, null, {
                            default: withCtx(() => [
                              createVNode(_component_v_col, {
                                lg: "5",
                                class: "pr-0"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "pa-7 pa-sm-12" }, [
                                    createVNode("p", { class: "text-center" }, [
                                      createVNode("img", { src: _imports_0 })
                                    ]),
                                    createVNode("h2", { class: "font-weight-bold text-center mt-4 blue-grey--text text--darken-2" }, " \u0E25\u0E07\u0E17\u0E30\u0E40\u0E1A\u0E35\u0E22\u0E19 "),
                                    createVNode("h6", { class: "text-subtitle-1 text-center text-grey-darken-1" }, [
                                      createTextVNode(" \u0E40\u0E1B\u0E47\u0E19\u0E2A\u0E21\u0E32\u0E0A\u0E34\u0E01\u0E2D\u0E22\u0E39\u0E48\u0E41\u0E25\u0E49\u0E27\u0E43\u0E0A\u0E48\u0E21\u0E31\u0E49\u0E22 ? "),
                                      createVNode(_component_v_btn, {
                                        to: "/auth/login",
                                        variant: "plain"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("\u0E40\u0E02\u0E49\u0E32\u0E2A\u0E39\u0E48\u0E23\u0E30\u0E1A\u0E1A")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    createVNode(_component_v_form, {
                                      ref: "form",
                                      modelValue: unref(valid),
                                      "onUpdate:modelValue": ($event) => isRef(valid) ? valid.value = $event : null,
                                      "lazy-validation": "",
                                      action: "/pages/boxedlogin"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_text_field, {
                                          modelValue: unref(fname),
                                          "onUpdate:modelValue": ($event) => isRef(fname) ? fname.value = $event : null,
                                          rules: unref(fnameRules),
                                          label: "\u0E0A\u0E37\u0E48\u0E2D-\u0E2A\u0E01\u0E38\u0E25",
                                          class: "mt-4",
                                          required: "",
                                          variant: "outlined"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                        createVNode(_component_v_text_field, {
                                          modelValue: unref(email),
                                          "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                                          rules: unref(emailRules),
                                          label: "\u0E2D\u0E35\u0E40\u0E21\u0E25\u0E4C",
                                          class: "mt-4",
                                          required: "",
                                          variant: "outlined"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                        createVNode(_component_v_text_field, {
                                          modelValue: unref(password),
                                          "onUpdate:modelValue": ($event) => isRef(password) ? password.value = $event : null,
                                          counter: 8,
                                          rules: unref(passwordRules),
                                          label: "\u0E23\u0E2B\u0E31\u0E2A\u0E1C\u0E48\u0E32\u0E19",
                                          class: "mt-4",
                                          required: "",
                                          variant: "outlined",
                                          type: "password"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                        createVNode("div", { class: "d-block d-sm-flex align-center mb-4 mb-sm-0" }, [
                                          createVNode(_component_v_checkbox, {
                                            modelValue: unref(checkbox),
                                            "onUpdate:modelValue": ($event) => isRef(checkbox) ? checkbox.value = $event : null,
                                            rules: [(v) => !!v || "You must agree to continue!"],
                                            label: "\u0E09\u0E31\u0E19\u0E22\u0E2D\u0E21\u0E23\u0E31\u0E1A\u0E40\u0E07\u0E37\u0E48\u0E2D\u0E19\u0E44\u0E02\u0E01\u0E32\u0E23\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19",
                                            required: "",
                                            "hide-details": ""
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                        ]),
                                        createVNode(_component_v_btn, {
                                          color: "primary",
                                          block: "",
                                          class: "mr-4 py-6",
                                          size: "x-large",
                                          submit: ""
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("\u0E25\u0E07\u0E17\u0E30\u0E40\u0E1A\u0E35\u0E22\u0E19")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }, 8, ["modelValue", "onUpdate:modelValue"]),
                                    createVNode("div", { class: "text-center mt-6" }, [
                                      createVNode("div", { class: "d-flex align-center justify-center gap-2" }, [
                                        createVNode(_component_v_btn, {
                                          icon: "",
                                          color: "secondary"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_icon, null, {
                                              default: withCtx(() => [
                                                createTextVNode("mdi-twitter")
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_btn, {
                                          icon: "",
                                          color: "primary"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_icon, null, {
                                              default: withCtx(() => [
                                                createTextVNode("mdi-github")
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        })
                                      ])
                                    ])
                                  ])
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_col, {
                                lg: "7",
                                class: "bg-primary d-none d-md-flex align-center justify-center"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "d-none d-sm-block" }, [
                                    createVNode("div", { class: "d-flex align-center pa-10" }, [
                                      createVNode("div", null, [
                                        createVNode("h2", { class: "text-h4 text-white font-weight-medium" }, " \u0E01\u0E32\u0E23\u0E2D\u0E2D\u0E01\u0E41\u0E1A\u0E1A\u0E17\u0E35\u0E48\u0E44\u0E21\u0E48\u0E21\u0E35\u0E2A\u0E34\u0E49\u0E19\u0E2A\u0E38\u0E14 \u0E40\u0E23\u0E32\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E21\u0E31\u0E19\u0E14\u0E49\u0E27\u0E22\u0E23\u0E31\u0E01\u0E41\u0E25\u0E30\u0E43\u0E2A\u0E48\u0E43\u0E08 "),
                                        createVNode("h6", { class: "text-subtitle-1 mt-4 text-white font-weight-regular" }, " \u0E44\u0E2D\u0E17\u0E35\u0E08\u0E35\u0E40\u0E19\u0E35\u0E22\u0E2A\u0E0A\u0E48\u0E27\u0E22\u0E43\u0E2B\u0E49\u0E19\u0E31\u0E01\u0E1E\u0E31\u0E12\u0E19\u0E32\u0E44\u0E14\u0E49\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E49\u0E39\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E40\u0E15\u0E34\u0E21 \u0E1C\u0E48\u0E32\u0E19\u0E2B\u0E25\u0E31\u0E01\u0E2A\u0E39\u0E15\u0E23\u0E01\u0E32\u0E23\u0E2D\u0E1A\u0E23\u0E21\u0E17\u0E35\u0E48\u0E2B\u0E25\u0E32\u0E01\u0E2B\u0E25\u0E32\u0E22 \u0E04\u0E23\u0E2D\u0E1A\u0E04\u0E25\u0E38\u0E21\u0E17\u0E38\u0E01\u0E14\u0E49\u0E32\u0E19 \u0E17\u0E31\u0E49\u0E07\u0E2D\u0E2D\u0E01\u0E41\u0E1A\u0E1A \u0E42\u0E1B\u0E23\u0E41\u0E01\u0E23\u0E21\u0E21\u0E34\u0E48\u0E07 \u0E10\u0E32\u0E19\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25 \u0E42\u0E21\u0E1A\u0E32\u0E22\u0E41\u0E2D\u0E1E \u0E15\u0E25\u0E2D\u0E14\u0E08\u0E19 devops \u0E41\u0E25\u0E30\u0E2D\u0E37\u0E48\u0E19\u0E46 "),
                                        createVNode(_component_v_btn, {
                                          class: "mt-6 text-capitalize",
                                          size: "x-large",
                                          variant: "outlined",
                                          color: "white"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E40\u0E15\u0E34\u0E21")
                                          ]),
                                          _: 1
                                        })
                                      ])
                                    ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/auth/register.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=register.35592669.mjs.map
