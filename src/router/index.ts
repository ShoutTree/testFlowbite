import { createRouter, createWebHistory } from 'vue-router'
import Flowbite_Alert from '../components/Flowbite_Alert.vue'
import Flowbite_Accordion from '../components/Flowbite_Accordion.vue'
import Flowbite_AccordionDarkHover from '../components/Flowbite_AccordionDarkHover.vue'

const routes = [
  { path: '/', component: Flowbite_Alert },
  { path: '/Accordion', component: Flowbite_Accordion },
  { path: '/AccordionDarkHover', component: Flowbite_AccordionDarkHover },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
