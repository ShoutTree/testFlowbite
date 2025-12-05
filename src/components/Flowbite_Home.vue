<template>
    <LabelWithDivider text="HomePage" />
    <!-- 用 v-for 循环渲染所有链接，一行代码搞定 -->
    <div v-for="item in pageLinks" :key="item.id" class="mt-2"> <!-- mt-2 可选，增加链接间距 -->
      <a :href="`${item.hash}`">{{ item.name }}</a>
    </div>
  </template>
  
  <script setup>
  // 抽离所有页面链接为数组（新增/删除只需改这里）
  const pageLinks = [
    { id: 1, hash: 'Accordion', name: 'Accordion' },
    { id: 2, hash: 'AccordionDarkHover', name: 'AccordionDarkHover' },
    { id: 3, hash: 'Alert', name: 'Alert' },
    { id: 4, hash: 'Avatar', name: 'Avatar' },
    { id: 5, hash: 'Badge', name: 'Badge' },
    { id: 6, hash: 'BreadCrumb', name: 'BreadCrumb' },
    // 新增页面只需加一行数组项即可
    // { id: 7, hash: 'Button', name: 'Button' },
  ]

  import LabelWithDivider from './LabelWithDivider.vue'
  </script>
  
  <style scoped>
  /* 可选：给链接加基础样式，更美观 */
  a {
    text-decoration: none;
    color: #3b82f6;
  }
  a:hover {
    color: #2563eb;
    text-decoration: underline;
  }
  </style>
  