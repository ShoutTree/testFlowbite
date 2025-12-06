<template>
  <div class="w-full">
    <!-- 左对齐 label + 向下箭头 -->
    <label 
      class="block mb-2 font-medium text-gray-100 dark:text-gray-300 text-left flex items-center gap-1.5"
      :style="{
        marginTop: computedMarginTop, // 传参则生效，无参则为 undefined（即无样式）
        marginBottom: mb || '0.5rem' 
      }"
    >
      <!-- 文本 -->
      <span>{{ text }}</span>
      <!-- 🔴 简约直线向下箭头（无下拉感） -->
      <!-- <svg 
        v-if="showArrow"
        class="w-3.5 h-3.5" 
        :style="{ color: arrowColor || 'inherit' }"
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8v8m0 0l-4-4m4 4l4-4" />
      </svg> -->

      <svg
       v-if="showArrow"
       class="w-5 h-5"
       fill="currentColor" 
       viewBox="0 0 20 20" 
       xmlns="http://www.w3.org/2000/svg"
       style="transform: rotate(90deg);"
       >
      <path clip-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" fill-rule="evenodd" />
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
import { computed } from 'vue'

const props = defineProps({
  text: { type: String, required: true }, // label 文本
  mb: { type: String, default: '0.5rem' }, // label 底部间距
  borderColor: { type: String, default: 'rgba(229, 231, 235, 0.2)' }, // 分割线颜色
  dividerMargin: { type: String, default: '1rem 0 2rem' }, // 分割线间距
  showDivider: { type: Boolean, default: true }, // 是否显示分割线
  showArrow: { type: Boolean, default: true }, // 🔴 是否显示向下箭头（默认显示）
  arrowColor: { type: String, default: 'inherit' }, // 🔴 箭头颜色（默认继承文字色）
  marginTop: { type: [String, Number], default: undefined } // 🔴 接收marginTop（支持字符串/数值，无默认值）

})

// 解析 marginTop：数值 → 对应 rem（Tailwind mt-n 规则：n*0.25rem）
const computedMarginTop = computed(() => {
  if (!props.marginTop) return undefined
  if (typeof props.marginTop === 'string') return props.marginTop
  // 数值：16 → 16*0.25rem = 4rem（对应 mt-16）
  return `${props.marginTop * 0.25}rem`
})
</script>