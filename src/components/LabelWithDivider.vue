<template>
  <div class="w-full">
    <!-- 左对齐 label + 向下箭头 -->
    <label 
      class="block mb-2 font-medium text-gray-100 dark:text-gray-300 text-left flex items-center gap-1.5"
      :style="{ marginBottom: mb || '0.5rem' }"
    >
      <!-- 文本 -->
      <span>{{ text }}</span>
      <!-- 🔴 简约直线向下箭头（无下拉感） -->
      <svg 
        v-if="showArrow"
        class="w-3.5 h-3.5" 
        :style="{ color: arrowColor || 'inherit' }"
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8v8m0 0l-4-4m4 4l4-4" />
      </svg>
    </label>
    
    <!-- 分割线（可选） -->
    <hr 
      v-if="showDivider"
      class="my-8 border-t-[0.5px]"
      :style="{ 
        borderColor: borderColor || 'rgba(229, 231, 235, 0.2)',
        margin: dividerMargin || '1rem 0 2rem' 
      }"
    />
  </div>
</template>

<script setup>
const props = defineProps({
  text: { type: String, required: true }, // label 文本
  mb: { type: String, default: '0.5rem' }, // label 底部间距
  borderColor: { type: String, default: 'rgba(229, 231, 235, 0.2)' }, // 分割线颜色
  dividerMargin: { type: String, default: '1rem 0 2rem' }, // 分割线间距
  showDivider: { type: Boolean, default: true }, // 是否显示分割线
  showArrow: { type: Boolean, default: true }, // 🔴 是否显示向下箭头（默认显示）
  arrowColor: { type: String, default: 'inherit' } // 🔴 箭头颜色（默认继承文字色）
})
</script>