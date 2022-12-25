import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "auth" | "backend" | "default"
declare module "E:/Unversity/NuxttJS Workshop/Basic NuxtJS/Workshop/nuxt3-vuetify-workshop-day4/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}