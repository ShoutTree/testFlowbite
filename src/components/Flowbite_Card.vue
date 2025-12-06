<template>
    <LabelWithDivider text="Basic example"/>

    <fwb-card href="#" class="w-sm">
      <div class="p-5">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Noteworthy technology acquisitions 2021
        </h5>
        <p class="font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
        </p>
      </div>
    </fwb-card>

    <div class="text-left mt-16">
        <h5>这是 h5 的默认大小</h5>
        <h2>这是 h2 的默认大小</h2>
    </div>
    
    <LabelWithDivider text="Prop - image" :marginTop="16"/>
    <fwb-card
      img-alt="Desk"
      img-src="https://flowbite.com/docs/images/blog/image-1.jpg"
      variant="image"
      class="w-md"
    >
      <div class="p-5">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Noteworthy technology acquisitions 2021 <br>
          这个h5标签被text-2xl类名（来自tailwind）覆盖了。
        </h5>
        <p class="font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order. <br>
          h1,h2,...这些标签，需要在style.css 中添加额外支持，否则都被tailwind的设置覆盖无法使用。tailwind的设计理念：所有样式通过类名控制
        </p>
      </div>
    </fwb-card>

    <LabelWithDivider text="Prop - horizontal" :marginTop="16"/>
    <fwb-card
      img-alt="Desk"
      img-src="https://flowbite.com/docs/images/blog/image-4.jpg"
      variant="horizontal"
      class="w-lg"
    >
      <div class="p-5">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Noteworthy technology acquisitions 2021
        </h5>
        <p class="font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
        </p>
      </div>
    </fwb-card>


    <LabelWithDivider text="自定义图片容器，限制高度" :marginTop="16"/>
    <!-- 关键：保留 fwb-card 基础样式，去掉插槽依赖，直接写原生内容 -->
    <fwb-card
        class="w-md flex flex-col"
        style="min-height: 500px; overflow: hidden;"
    >
        <!-- 1. 原生图片容器（不依赖 #image 插槽） -->
        <div class="h-80 overflow-hidden">
        <img 
            src="https://flowbite.com/docs/images/blog/image-1.jpg" 
            alt="Desk" 
            class="w-full h-full object-cover"
        >
        </div>

        <!-- 2. 原生文字内容（不依赖 #body 插槽） -->
        <div class="p-4 text-gray-800 dark:text-white flex-grow">
        <h3 class="text-xl font-bold mb-3">竖版卡片标题</h3>
        <p class="mb-2">这是卡片正文内容，100%显示</p>
        <p>第二行文字，测试多行内容</p>
        <p class="mt-4 text-gray-600">底部辅助文字</p>
        </div>
    </fwb-card>

    <LabelWithDivider text="" :marginTop="16" :showArrow="false"/>

</template>

<script setup>
import { FwbCard } from 'flowbite-vue'
import LabelWithDivider from './LabelWithDivider.vue'

</script>
