<script setup lang="ts">
import { Icon, Item, Tabs, TabsList, TabsTrigger, Text, Button } from '@blank/vue';

const sidebarData = [
    {
     label:'Components',
     data:[{categoryName:'Introduction', icon:null},{categoryName:'Introduction', icon:null}]
    },
    {
     label:'Templates',
     data:[{categoryName:'Introduction', icon:null}]
    },
    {
     label:'Blocks',
     data:[{categoryName:'Introduction', icon:null}]
    },
    ]

</script>

<template>
    <Item class="sidebar" col="4">
        <Tabs default-value="0" type="segmented" class="w-full">
            <TabsList>
                <TabsTrigger value="vue" class="gap-2">
                    <Icon name="remix:vuejs-fill" class="size-4 flex-shrink-0" />
                    Vue
                </TabsTrigger>
                <TabsTrigger value="react" class="gap-2">
                    <Icon name="remix:reactjs-fill" class="size-4 flex-shrink-0" />
                    React
                </TabsTrigger>
            </TabsList>  
        </Tabs>
        <div 
         v-for="(section, index) in sidebarData" 
         :key="index" 
          class="sidebar-section"
         >

         <Text class="section-label">{{ section.label }}</Text>
      
        <ul class="">
         <li
           v-for="(item, itemIndex) in section.data" 
           :key="itemIndex" 
           class="category-item"
         >

           <span v-if="item.icon" class="icon">{{ item.icon }}</span>
           <Text class="subItem">{{ item.categoryName }}</Text>
          </li>
        </ul>
        </div>
    </Item>
   
</template>

<style scoped lang="postcss">
    .sidebar {
        @apply pl-10 flex justify-center flex-col items-start;
    }

    .sidebar-section {
        @apply my-1 ;
    }
    
    .subItem {
        @apply pl-4 text-[#707070] my-2 text-sm cursor-pointer;
    }

    .section-label {
        @apply text-[#2e2e2e] text-sm cursor-pointer; 
    }

    

    
</style>