<template>
  <div class="w-full">
    <div class="flex flex-col">
        <div class="mb-16 flex justify-center space-x-4">
            <fwb-avatar img="/images/Ronaldo_avatar.jpg" />
            <fwb-avatar img="/images/Ronaldo_avatar.jpg" rounded />
            <fwb-avatar bordered img="/images/Ronaldo_avatar.jpg" />
            <fwb-avatar bordered img="/images/Ronaldo_avatar.jpg" 
            rounded />
            <fwb-avatar img="/images/Ronaldo_avatar.jpg" 
            status="online" />
            <fwb-avatar img="/images/Ronaldo_avatar.jpg" 
            rounded
            status="busy" />
            <fwb-avatar img="/images/Ronaldo_avatar.jpg" 
            status-position="bottom-left"
            status="away" />
            <fwb-avatar img="/images/Ronaldo_avatar.jpg" 
            rounded
            status-position="bottom-right"
            status="offline" />
        </div>

        <div class="flex justify-center items-center space-x-4">
            <fwb-avatar img="/images/Ronaldo_avatar.jpg" 
            size="xs"
            status="online" />
            <fwb-avatar img="/images/Ronaldo_avatar.jpg" 
            size="sm"
            rounded
            status="busy" />
            <fwb-avatar img="/images/Ronaldo_avatar.jpg" 
            size="md"
            status-position="bottom-left"
            status="away" />
            <fwb-avatar img="/images/Ronaldo_avatar.jpg" 
            size="lg"
            rounded
            status-position="bottom-right"
            status="offline" />
            <fwb-avatar img="/images/Ronaldo_avatar.jpg" 
            size="xl"
            bordered        
            status-position="bottom-right"
            status="offline" />
        </div>

        <div class="mt-16 flex justify-center space-x-4">
            <fwb-avatar img="/images/Ronaldo_avatar1.jpg"         
            alt="Alternative text"
            size="lg"
            status="online"/>
        </div>
    </div>
  </div>
</template>

<script setup>
    import { FwbAvatar } from 'flowbite-vue'
</script>