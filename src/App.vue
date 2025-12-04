<template>
  <div :class="{ dark: isDark }">
    <div class="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white transition-colors">
      <!-- 1. 固定 SettingsPanel 到左侧，永不移动 -->
      <div class="fixed left-0 top-0 bottom-0 w-64 border-r border-gray-300 dark:border-gray-700 z-10">
        <SettingsPanel @toggleDarkMode="toggleDarkMode" class="h-full p-4" />
      </div>

      <!-- 2. 路由容器：margin-left 等于 SettingsPanel 宽度，强制占满右侧所有空间 -->
      <div class="ml-64 min-h-screen">
        <div class="w-full h-full px-6 py-8">
          <router-view />
        </div>
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