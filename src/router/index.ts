import { createRouter, createWebHistory } from 'vue-router'
import Flowbite_Home from '../components/Flowbite_Home.vue'
import Flowbite_Alert from '../components/Flowbite_Alert.vue'
import Flowbite_Accordion from '../components/Flowbite_Accordion.vue'
import Flowbite_AccordionDarkHover from '../components/Flowbite_AccordionDarkHover.vue'
import Flowbite_Avatar from '../components/Flowbite_Avatar.vue'
import Flowbite_Badge from '../components/Flowbite_Badge.vue'
import Flowbite_BreadCrumb from '../components/Flowbite_BreadCrumb.vue'
import Flowbite_Button from '../components/Flowbite_Button.vue'
import Flowbite_ButtonGroup from '../components/Flowbite_ButtonGroup.vue'

export const routes = [
  { path: '/', 
    component: Flowbite_Home, 
    meta: { 
      breadcrumb: 'Home' 
    }
  },
  { path: '/Alert', 
    component: Flowbite_Alert,
    meta: { 
        breadcrumb: 'Alert' 
    }
  },
  { path: '/Accordion', 
    component: Flowbite_Accordion,
    meta: { 
        breadcrumb: 'Accordion' 
    }
  },
  { path: '/AccordionDarkHover', 
    component: Flowbite_AccordionDarkHover,
    meta: { 
        breadcrumb: 'AccordionDarkHover'
    }
  },
  { path: '/Avatar',
    component: Flowbite_Avatar,
    meta: { 
        breadcrumb: 'Avatar' 
    }
  },
  { path: '/Badge',
    component: Flowbite_Badge,
    meta: { 
        breadcrumb: 'Badge' 
    }
  },
  { path: '/BreadCrumb',
    component: Flowbite_BreadCrumb,
    meta: { 
        breadcrumb: 'BreadCrumb' 
    }
  },
  { path: '/Button',
    component: Flowbite_Button,
    meta: { 
        breadcrumb: 'Button' 
    }
  },
  { path: '/ButtonGroup',
    component: Flowbite_ButtonGroup,
    meta: { 
        breadcrumb: 'ButtonGroup' 
    }
  },
  
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
