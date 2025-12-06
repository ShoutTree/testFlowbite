<template>
    <LabelWithDivider text="Basic example"/>
    <fwb-button-group>
      <fwb-button>Button Default</fwb-button>
      <fwb-button color="purple">Button Purple</fwb-button>
      <fwb-button color="alternative">Button Alternative</fwb-button>
      <fwb-button color="red">Button Red</fwb-button>
    </fwb-button-group>

    <!-- <LabelWithDivider text="Manually set button's styles in Button Group." :marginTop="16"/>
    <fwb-button-group class="btn-group flex divide-x divide-gray-200 dark:divide-gray-700">
        <fwb-button class="rounded-none rounded-l-lg">Button Default</fwb-button>
        <fwb-button color="purple" class="rounded-none">Button Purple</fwb-button>
        <fwb-button color="alternative" class="rounded-none">Button Alternative</fwb-button>
        <fwb-button color="red" class="rounded-none rounded-r-lg">Button Red</fwb-button>
    </fwb-button-group> -->

    <LabelWithDivider text="Basic example" :marginTop="16"/>
    <fwb-button-group>
        <fwb-button outline>Button 1</fwb-button>
        <fwb-button outline>Button 2</fwb-button>
        <fwb-button outline>Button 3</fwb-button>
        <fwb-button outline>
        Button 4
        <template #suffix>
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path clip-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" fill-rule="evenodd" />
            </svg>
        </template>
        </fwb-button>        
    </fwb-button-group>

    <!-- <LabelWithDivider text="Manually set button's styles in Button Group." :marginTop="16"/>
    <fwb-button-group>
        <fwb-button class="rounded-none rounded-l-lg" outline>Button 1</fwb-button>
        <fwb-button class="rounded-none" outline>Button 2</fwb-button>
        <fwb-button class="rounded-none" outline>Button 3</fwb-button>
        <fwb-button class="rounded-none rounded-r-lg" outline>
        Button 4
        <template #suffix>
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path clip-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" fill-rule="evenodd" />
            </svg>
        </template>
        </fwb-button>        
    </fwb-button-group> -->

    <LabelWithDivider text="DropDown, Manually set button's styles." :marginTop="16"/>
    <fwb-button-group>
        <fwb-button>Button 1</fwb-button>
        <fwb-button>Button 2</fwb-button>
        <fwb-dropdown text="Dropdown">
          <fwb-list-group>

          <fwb-list-group-item> 
              <a href="/Button" class="block w-full h-full text-left"> Button </a>  
          </fwb-list-group-item>
          <fwb-list-group-item> 
            <p class="p-2 text-left">
                This is a test dropdown
            </p>
          </fwb-list-group-item>
        </fwb-list-group>

        </fwb-dropdown>
        <fwb-dropdown text="Dropdown with list">
        <fwb-list-group>
            <fwb-list-group-item> 
              <a href="/Avatar" class="block w-full h-full text-left"> Avatar </a>  
            </fwb-list-group-item>
            <!-- <fwb-dropdown-link href="/Avatar"> Avatar </fwb-dropdown-link> -->
            <fwb-list-group-item href="#"> These </fwb-list-group-item>
            <fwb-list-group-item href="#"> are </fwb-list-group-item>
            <fwb-list-group-item href="#"> some </fwb-list-group-item>
            <fwb-list-group-item href="#"> list </fwb-list-group-item>
            <fwb-list-group-item href="#"> items </fwb-list-group-item>
        </fwb-list-group>
        </fwb-dropdown>
    </fwb-button-group>

    <LabelWithDivider text="" :marginTop="16" :showArrow="false"/>

  </template>
  
  <script setup>
  import { FwbButtonGroup, FwbButton, FwbDropdown, FwbListGroupItem, FwbListGroup } from 'flowbite-vue'

  import LabelWithDivider from './LabelWithDivider.vue'

  </script>

