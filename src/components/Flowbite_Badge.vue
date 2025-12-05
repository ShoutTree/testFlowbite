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
</template>
  
<script setup>
import { FwbBadge } from 'flowbite-vue'
import LabelWithDivider from './LabelWithDivider.vue'
</script>

