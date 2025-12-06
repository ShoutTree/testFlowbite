<template>    
    <LabelWithDivider text="Basic Carousel"/>
    <fwb-carousel :pictures="pictures"
    />

    <LabelWithDivider text="手动封装轮播：完全控制容器和图片尺寸，还可以设置轮播间隔时间" :marginTop="16"/>
    <!-- 完全自定义轮播：无 Flowbite 样式耦合，彻底控制尺寸 -->
    <div class="custom-carousel relative mx-auto w-full max-w-3xl h-[500px] overflow-hidden rounded-lg">
        <!-- 轮播图片容器 -->
        <div class="carousel-inner h-full w-full">
        <img 
            v-for="(pic, index) in pictures" 
            :key="index"
            :src="pic.src" 
            :alt="pic.alt"
            class="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
            :class="{ 
            'opacity-100 z-10': index === activeIndex, // 图片层级降低，按钮层级更高
            'opacity-0 z-0 pointer-events-none': index !== activeIndex 
            }"
        >
        </div>

        <!-- 指示器 -->
        <div class="absolute bottom-5 left-1/2 z-30 flex -translate-x-1/2 space-x-3">
        <button 
            v-for="(pic, index) in pictures" 
            :key="index"
            @click="activeIndex = index"
            class="size-3 rounded-full transition-all duration-300"
            :class="{ 
            'bg-white scale-110': index === activeIndex, 
            'bg-white/50 hover:bg-white/80': index !== activeIndex 
            }"
            :aria-label="`Slide ${index + 1}`"
        ></button>
        </div>

        <!-- 上下页按钮：调整定位 + 增大点击区域 + 视觉分离 -->
        <!-- 上一页按钮：左对齐，远离中心 -->
        <button 
        @click="prev()" 
        class="absolute left-0 top-0 z-40 flex h-full w-20 items-center justify-start px-4 focus:outline-none"
        aria-label="Previous slide"
        >
        <span class="inline-flex size-10 items-center justify-center rounded-full bg-white/30 hover:bg-white/50 text-white transition-all">
            ←
        </span>
        </button>
        <!-- 下一页按钮：右对齐，远离中心 -->
        <button 
        @click="next()" 
        class="absolute right-0 top-0 z-40 flex h-full w-20 items-center justify-end px-4 focus:outline-none"
        aria-label="Next slide"
        >
        <span class="inline-flex size-10 items-center justify-center rounded-full bg-white/30 hover:bg-white/50 text-white transition-all">
            →
        </span>
        </button>
    </div>

    <LabelWithDivider text="Carousel without controls" :marginTop="16"/>
    <div>
        <fwb-carousel no-controls :pictures="pictures" />
    </div>

    <LabelWithDivider text="Carousel without indicators" :marginTop="16"/>
    <div>
        <fwb-carousel no-indicators :pictures="pictures" />
    </div>

    <LabelWithDivider text="Carousel with slide animation" :marginTop="16"/>
    <div>
        <fwb-carousel :pictures="pictures" slide />
    </div>

    <LabelWithDivider text="Carousel with slide animation，这个可以控制间隔时间" :marginTop="16"/>
    <div>
        <fwb-carousel :pictures="pictures" slide :slide-interval="500"/>
    </div>

    <LabelWithDivider text="" :marginTop="16" :showArrow="false"/>

</template>


<script setup>
import { FwbCarousel } from 'flowbite-vue'
import LabelWithDivider from './LabelWithDivider.vue'

import { ref } from 'vue'

// 1. 必须声明 activeIndex（修复核心报错）
const activeIndex = ref(0)

// 2. 轮播图片数据
const pictures = [
  { src: '/images/original/armor_stand.jpg', alt: 'Image 1' },
  { src: '/images/original/flower.jpeg', alt: 'Image 2' },
  { src: '/images/original/seashore.jpeg', alt: 'Image 3' }
]

// 3. 上下页逻辑
const prev = () => {
  activeIndex.value = activeIndex.value === 0 
    ? pictures.length - 1 
    : activeIndex.value - 1
}

const next = () => {
  activeIndex.value = activeIndex.value === pictures.length - 1 
    ? 0 
    : activeIndex.value + 1
}

// 可选：自动轮播
const autoPlay = setInterval(() => {
  next()
}, 1000)

// 组件卸载时清除自动轮播
import { onUnmounted } from 'vue'
onUnmounted(() => {
  clearInterval(autoPlay)
})
</script>

<!-- 无需穿透，直接控制样式 -->
<style scoped>
.custom-carousel {
  /* 可根据需求调整高度，比如响应式 */
  @apply md:h-[600px] lg:h-[700px];
}

/* 按钮样式优化 */
.custom-carousel button {
  border: none;
  cursor: pointer;
}

/* 图片过渡动画 */
.carousel-inner img {
  object-fit: cover; /* 等比裁剪填满容器，无空白 */
  /* 若想完整显示图片，改为：
  object-fit: contain;
  background-color: #f1f5f9;
  */
}
</style>