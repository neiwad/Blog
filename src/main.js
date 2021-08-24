import DefaultLayout from '~/layouts/Default.vue'
import Container from "@/components/Container";

import './main.css'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.component('Container', Container)
}
