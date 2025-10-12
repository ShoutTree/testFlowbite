<template>
  <button @click="toggleDark" class="border p-2 rounded">
    Toggle Dark Mode
  </button>
  <fwb-accordion>
    <fwb-accordion-panel
      v-for="(panel, i) in panels"
      :key="i"
      :class="{ 'border-b-0': i !== panels.length - 1 }"
      class="border border-cyan-700"
      @show="() => (panel.isVisible = true)"
      @hide="() => (panel.isVisible = false)"
    >
      <fwb-accordion-header
        class="w-full justify-center rounded-none border-0 bg-white hover:bg-cyan-200 dark:bg-cyan-800 dark:text-white dark:hover:bg-cyan-700 [&>svg]:m-0"
        :active-class="'bg-lime-200 hover:bg-lime-300 dark:bg-lime-500 dark:text-black dark:hover:bg-lime-400'"
      >
        Item {{ i+1 }} ({{ panel.isVisible ? 'open' : 'closed' }})
      </fwb-accordion-header>
      <fwb-accordion-content class="border-t border-t-cyan-700 text-center ">
        <p>{{ panel.content }}</p>
      </fwb-accordion-content>
    </fwb-accordion-panel>
  </fwb-accordion>
</template>

<script setup>
import { ref } from 'vue'
import {
  FwbAccordion,
  FwbAccordionContent,
  FwbAccordionHeader,
  FwbAccordionPanel,
} from 'flowbite-vue'

const panels = ref([
  { isVisible: false, content: 'Lorem ipsum...' },
  { isVisible: false, content: 'Lorem ipsum...' },
  { isVisible: false, content: 'Lorem ipsum...' },
])

const toggleDark = () => {
  document.documentElement.classList.toggle('dark')
}
</script>