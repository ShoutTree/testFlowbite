<!-- AppBreadcrumb.vue -->
<template>
    <fwb-breadcrumb>
      <fwb-breadcrumb-item
        v-for="(item, index) in breadcrumbList"
        :key="index"
        :href="item.path"
        :home="index === 0"
      >
        {{ item.meta.breadcrumb }}
      </fwb-breadcrumb-item>
    </fwb-breadcrumb>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { FwbBreadcrumb, FwbBreadcrumbItem } from 'flowbite-vue'

const route = useRoute()

// All parent routes in order → extracted from matched records
const breadcrumbList = computed(() => {
  const matched = route.matched

  // If the first breadcrumb is not Home, insert Home manually
  if (matched.length === 0 || matched[0].path !== '/') {
    return [
      { path: '/', meta: { breadcrumb: 'Home' } },
      ...matched
    ]
  }

  return matched
})

</script>
