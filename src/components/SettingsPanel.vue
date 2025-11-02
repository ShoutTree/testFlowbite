<!-- SettingsPanel.vue -->
<template>
    <div class="p-4 border-r border-gray-300 dark:border-gray-700">
      <button
        @click="toggle"
        class="px-4 py-2 rounded bg-cyan-600 hover:bg-cyan-700 text-white"
      >
        Toggle Dark Mode
      </button>
  
      <div class="mt-4">
        <label for="pageSelect" class="block mb-1">Go to page:</label>
        <select
          id="pageSelect"
          v-model="selectedRoute"
          @change="navigate"
          class="border rounded p-2 dark:bg-gray-800 dark:border-gray-600"
        >
          <option v-for="page in pages" :key="page.path" :value="page.path">
            {{ page.name }}
          </option>
        </select>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  import { useRouter, useRoute } from 'vue-router'
  
  const emit = defineEmits<{ (e: 'toggleDarkMode'): void }>()
  const router = useRouter()
  const route = useRoute()
  
  const toggle = () => emit('toggleDarkMode')
  
  // Define all available routes
  const pages = [
    { name: 'Alert', path: '/' },
    { name: 'Accordion', path: '/Accordion' },
    { name: 'AccordionDarkHover', path: '/AccordionDarkHover' },
    
  ]
  
  const selectedRoute = ref(route.path)
  
  function navigate() {
    router.push(selectedRoute.value)
  }
  </script>
  