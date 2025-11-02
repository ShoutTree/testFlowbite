<template>
  <div :class="{ dark: isDark }">
    <div class="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white transition-colors">
      <div class="flex">
        <!-- Settings panel -->
        <SettingsPanel @toggleDarkMode="toggleDarkMode" />

        <!-- Routed content -->
        <router-view />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import SettingsPanel from './components/SettingsPanel.vue'

const isDark = ref(false)

function toggleDarkMode() {
  isDark.value = !isDark.value
  document.documentElement.classList.toggle('dark', isDark.value)
}
</script>


<style scoped>
@reference "./style.css";
</style>
