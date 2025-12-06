<template>
  <div class="w-full">
    <div class="flex flex-col">
        <LabelWithDivider text="不同类型和状态的Avatar" />
        <div class=" flex justify-center space-x-4 ">
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

        <LabelWithDivider text="不同大小的Avatar" :marginTop="16"/>

        <div class="flex justify-center items-center space-x-4 ">
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

        <LabelWithDivider text="Alternative text" :marginTop="16"/>

        <div class="mt-16 flex justify-center space-x-4 ">
            <fwb-avatar img="/images/Ronaldo_avatar1.jpg"         
            alt="Alternative text"
            size="lg"
            status="online"/>
        </div>

        <LabelWithDivider text="FwbAvatarStack:叠加的Avatar" :marginTop="16"/>
        <div class="grid gap-2">
            <fwb-avatar-stack>
            <fwb-avatar img="/images/width_256/armor_stand.jpg" rounded stacked />
            <fwb-avatar img="/images/width_256/breakfast.jpg" rounded stacked />
            <fwb-avatar img="/images/width_256/deer_hog_croc.jpg" rounded stacked />
            <fwb-avatar img="/images/width_256/flower.jpeg" rounded stacked />
            <fwb-avatar img="/images/width_256/model_bears.jpg" rounded stacked />
            </fwb-avatar-stack>
            <fwb-avatar-stack>
            <fwb-avatar img="/images/width_256/model_plane.jpg" rounded stacked />
            <fwb-avatar img="/images/width_256/old_university.jpg" rounded stacked />
            <fwb-avatar img="/images/width_256/seashore.jpeg" rounded stacked />
            <fwb-avatar img="/images/width_256/shanghai.jpeg" rounded stacked />
            <fwb-avatar img="/images/width_256/sunflower.jpeg" rounded stacked />
            <fwb-avatar img="/images/width_256/sunset_clouds.jpeg" rounded stacked />
            <fwb-avatar img="/images/width_256/sunset_glow.jpeg" rounded stacked />
            <fwb-avatar img="/images/width_256/vine.jpeg" rounded stacked />
            <fwb-avatar img="/images/width_256/water_lily.jpeg" rounded stacked />
            <fwb-avatar-stack-counter href="#" total="99" />
            </fwb-avatar-stack>

            <LabelWithDivider text="Control distance of avatars, gap-big" :show-divider="false"/>
            <div class="avatar-stack-gap-big">
                <fwb-avatar-stack>
                <fwb-avatar img="/images/width_256/water_lily.jpeg"  stacked />
                <fwb-avatar img="/images/width_256/seashore.jpeg" rounded stacked />
                <fwb-avatar img="/images/width_256/sunset_clouds.jpeg" rounded stacked />
                </fwb-avatar-stack>
            </div>

            <LabelWithDivider text="Control distance of avatars, gap-small" :show-divider="false"/>
            <div class="avatar-stack-gap-small">
                <fwb-avatar-stack>
                <fwb-avatar img="/images/width_256/shanghai.jpeg" rounded stacked />
                <fwb-avatar img="/images/width_256/sunflower.jpeg" rounded stacked />
                <fwb-avatar img="/images/width_256/seashore.jpeg" rounded stacked />
                </fwb-avatar-stack>
            </div>

        </div>

        <LabelWithDivider text="Placeholder icon" :marginTop="16"/>
        <div class="flex justify-center space-x-4">
            <fwb-avatar />
            <fwb-avatar rounded />
        </div>

        <LabelWithDivider text="Placeholder initials" :marginTop="16"/>
        <div class="flex justify-center space-x-4 ">
            <!-- 自定义类名，用于样式定位 -->
            <fwb-avatar initials="JD" class="avatar-primary" />
            <fwb-avatar initials="JD" rounded class="avatar-secondary" />
            <fwb-avatar initials="天大地大何处是我家" rounded class="avatar-custom" />
            
            <div class="avatar-secondary">
                <fwb-avatar initials="天大地大何处是我家" rounded />
            </div>
            <div class="avatar-primary1">
                <fwb-avatar initials="JD" />
            </div>
        </div>

        <LabelWithDivider text="Alternative Placeholder Icon" :marginTop="16"/>
        <div class="vp-raw flex justify-center space-x-4 ">
            <fwb-avatar>
            <template #placeholder>
                <svg class="w-12 h-12" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </template>
            </fwb-avatar>
            <fwb-avatar rounded>
            <template #placeholder>
                <svg class="w-12 h-12" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </template>
            </fwb-avatar>
        </div>

        <LabelWithDivider text="" :marginTop="16" :showArrow="false"/>
    </div>
  </div>

</template>

<script setup>
    import { FwbAvatar, FwbAvatarStack, FwbAvatarStackCounter  } from 'flowbite-vue'
    import LabelWithDivider from '@/components/LabelWithDivider.vue'
</script>

<style>
/* This is the color under initial and its surrounding. 这是最底层的颜色 */
.avatar-custom {
  background-color: #ef4444 !important;
  color: #fff !important;
}
</style>

<style scoped>

/* Override the stack spacing */
::v-deep(.avatar-stack-gap-big .flex.-space-x-4) {
  /* Remove Tailwind spacing class effect */
  margin-left: 0 !important;
  gap: 0 !important;

  /* Custom spacing you want */
  display: flex;
  margin-right: 0;
}

::v-deep(.avatar-stack-gap-big .relative + .relative) {
  margin-left: 20px; /* <== adjust this value freely */
}



/* Override the stack spacing */
::v-deep(.avatar-stack-gap-small .flex.-space-x-4) {
  /* Remove Tailwind spacing class effect */
  margin-left: 0 !important;
  gap: 0 !important;

  /* Custom spacing you want */
  display: flex;
  margin-right: 0;
}

::v-deep(.avatar-stack-gap-small .relative + .relative) {
  margin-left: -30px; /* <== adjust this value freely */
}


/* .avatar-primary bg color*/
::v-deep(.avatar-primary .flex.w-10.h-10) {
  background-color: #047a2f !important;
}

/* .avatar-primary Text color */
::v-deep(.avatar-primary .font-medium) {
  color: #cfed0c !important;
}


::v-deep(.avatar-secondary .flex.w-10.h-10) {
  background-color: #c13bf6 !important;
}

::v-deep(.avatar-secondary .font-medium) {
  color: #340101 !important;
}


::v-deep(.avatar-custom .flex.w-10.h-10) {
  background-color: #4507ef !important;
}

::v-deep(.avatar-custom .font-medium) {
  color: #e0f568 !important;
}

::v-deep(.avatar-primary1 .flex.w-10.h-10) {
  background-color: #3b82f6 !important;
}

::v-deep(.avatar-primary1 .font-medium) {
  color: #fff !important;
}
</style>