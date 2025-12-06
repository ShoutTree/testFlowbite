import { createApp } from 'vue'
import './style.css'
import router from './router'
import App from './App.vue'
import Flowbite from './components/Flowbite.vue'

// import Flowbite_Accordion from './Flowbite_Accordion.vue'

// import Flowbite_Accordion from './components/Flowbite_AccordionDarkHover.vue'
// import Flowbite_Alert from './components/Flowbite_Alert.vue'
// import SettingsPanel from './components/SettingsPanel.vue'
// import Flowbite_Avatar from './components/Flowbite_Avatar.vue'


const app = createApp(App)
// createApp(Flowbite)
// createApp(Flowbite_Accordion)
// createApp(Flowbite_Alert)
// createApp(SettingsPanel)

app.use(router)
app.mount('#app')

  