import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Flowbite from './Flowbite.vue'
// import Flowbite_Accordion from './Flowbite_Accordion.vue'
import Flowbite_Accordion from './Flowbite_AccordionDarkHover.vue'

// createApp(App).mount('#app')
// createApp(Flowbite).mount('#app')
createApp(Flowbite_Accordion).mount('#app')
