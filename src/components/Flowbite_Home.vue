<template>
    <LabelWithDivider text="HomePage" />
    <!-- 用 v-for 循环渲染所有链接，一行代码搞定 -->
    <div v-for="item in pageLinks" :key="item.id" class="mt-2"> <!-- mt-2 可选，增加链接间距 -->
      <a :href="`${item.hash}`">{{ item.name }}</a>
    </div>
  </template>
  
  <script setup>

//   import { routes } from '../router/index.ts' // 注意：路径要和你的 index.ts 实际位置匹配
  import { routes } from '@/router/index.ts'
  
  // 处理路由数组，提取需要的字段（过滤首页 + 格式转换）
  const pageLinks = routes
  // 过滤掉首页（path: '/'），只保留子页面
  .filter(route => route.path !== '/')
  // 转换格式：path 去掉 / → hash，breadcrumb → name，自动生成 id
  .map((route, index) => ({
    id: index + 1, // 自动生成唯一 id（从 1 开始）
    hash: route.path.slice(1), // 去掉 path 开头的 /，比如 '/Alert' → 'Alert'
    name: route.meta.breadcrumb // 复用 breadcrumb 作为显示名称
  }))

//   // 抽离所有页面链接为数组（新增/删除只需改这里）
//   const pageLinks = [
//     { id: 1, hash: 'Accordion', name: 'Accordion' },
//     { id: 2, hash: 'AccordionDarkHover', name: 'AccordionDarkHover' },
//     { id: 3, hash: 'Alert', name: 'Alert' },
//     { id: 4, hash: 'Avatar', name: 'Avatar' },
//     { id: 5, hash: 'Badge', name: 'Badge' },
//     { id: 6, hash: 'BreadCrumb', name: 'BreadCrumb' },
//     // 新增页面只需加一行数组项即可
//     // { id: 7, hash: 'Button', name: 'Button' },
//   ]

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
  