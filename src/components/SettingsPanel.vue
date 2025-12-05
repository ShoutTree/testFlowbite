<template>
  <div class="h-full flex flex-col">
    <button
      @click="toggle"
      class="px-4 py-2 rounded bg-cyan-600 hover:bg-cyan-700 text-white w-full mb-6"
    >
      Toggle Dark Mode
    </button>

    <div class="mt-4">
      <label for="pageSelect" class="block mb-1 dark:text-white">Go to page:</label>
      <select
        id="pageSelect"
        v-model="selectedRoute"
        @change="navigate"
        class="border rounded p-2 dark:bg-gray-800 dark:border-gray-600 dark:text-white w-full"
      >
        <option v-for="page in pages" :key="page.path" :value="page.path">
          {{ page.name }}
        </option>
      </select>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const emit = defineEmits<{ (e: 'toggleDarkMode'): void }>()
const router = useRouter()
const route = useRoute()

const toggle = () => emit('toggleDarkMode')

const pages = [
  { name: 'Avatar', path: '/Avatar' },
  { name: 'Alert', path: '/Alert' },
  { name: 'Accordion', path: '/Accordion' },
  { name: 'AccordionDarkHover', path: '/AccordionDarkHover' },
  { name: 'Badge', path: '/Badge' },
  { name: 'BreadCrumb', path: '/BreadCrumb' },
]

const selectedRoute = ref(route.path)

watch(
  () => route.path,
  (newPath) => {
    selectedRoute.value = newPath
  }
)

function navigate() {
  router.push(selectedRoute.value)
}
</script>