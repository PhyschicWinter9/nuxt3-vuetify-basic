import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "E:/Unversity/NuxttJS Workshop/Basic NuxtJS/Workshop/nuxt3-vuetify-workshop-day4/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}