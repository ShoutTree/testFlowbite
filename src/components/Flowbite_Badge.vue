<template>
    <LabelWithDivider text="Default badge"/>
    <div class="flex space-x-2">
        <fwb-badge>Default</fwb-badge>
        <fwb-badge type="dark">Dark</fwb-badge>
        <fwb-badge type="red">Red</fwb-badge>
        <fwb-badge type="green">Green</fwb-badge>
        <fwb-badge type="yellow">Yellow</fwb-badge>
        <fwb-badge type="indigo">Indigo</fwb-badge>
        <fwb-badge type="purple">Purple</fwb-badge>
        <fwb-badge type="pink">Pink</fwb-badge>
    </div>

    <LabelWithDivider text="Large badges" :marginTop="16"/>
    <div class="flex space-x-2">
        <fwb-badge size="xs">Default</fwb-badge>
        <fwb-badge size="xs" type="dark">Dark</fwb-badge>
        <fwb-badge size="xs" type="red">Red</fwb-badge>
        <fwb-badge size="xs" type="green">Green</fwb-badge>
        <fwb-badge size="sm" type="yellow">Yellow</fwb-badge>
        <fwb-badge size="sm" type="indigo">Indigo</fwb-badge>
        <fwb-badge size="sm" type="purple">Purple</fwb-badge>
        <fwb-badge size="sm" type="pink">Pink</fwb-badge>
    </div>

    <LabelWithDivider text="Badges As Links，带href的颜色都不能通过type修改了，可以在style.css中修改，参见下面Avatar的修改。" :marginTop="16"/>
    <div class="flex space-x-2">
        <!-- 样式在style.css中搜badge-yellow。 带了href，type颜色就没用了-->
        <fwb-badge href="Avatar" type="yellow" class="badge-yellow">
            Avatar
        </fwb-badge>
        <!-- 使用Flowbite的Badge的带href的默认色，带了href，type颜色就没用了-->
        <fwb-badge href="Alert" type="indigo" size="sm">
            Alert
        </fwb-badge>
    </div>

    <LabelWithDivider text="Badges with icon" :marginTop="16"/>
    <div class="flex space-x-2">
        <fwb-badge>
            <template #icon>
            <svg aria-hidden="true" class="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" fill-rule="evenodd" />
            </svg>
            </template>
            Default
        </fwb-badge>
        <fwb-badge size="sm" type="dark">
            <template #icon>
            <svg aria-hidden="true" class="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" fill-rule="evenodd" />
            </svg>
            </template>
            Dark
        </fwb-badge>
    </div>

    <LabelWithDivider text="Badges with icon only." :marginTop="16"/>
    <div class="flex space-x-2">
        <fwb-badge>
            <template #icon>
            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" fill-rule="evenodd" />
            </svg>
            </template>
        </fwb-badge>
        <fwb-badge type="dark">
            <template #icon>
            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" fill-rule="evenodd" />
            </svg>
            </template>
        </fwb-badge>
        <fwb-badge size="sm" type="green">
            <template #icon>
            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" fill-rule="evenodd" />
            </svg>
            </template>
        </fwb-badge>
    </div>

    <LabelWithDivider text="" :marginTop="16" :showArrow="false"/>

</template>
  
<script setup>
import { FwbBadge } from 'flowbite-vue'
import LabelWithDivider from './LabelWithDivider.vue'
</script>

