<script setup lang="ts">
import { Icon, Item, Tabs, TabsList, TabsTrigger } from '@blank/vue';
</script>

<template>
    <Item col="3">
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
    </Item>
</template>

<style scoped lang="postcss">
.sidebar {
    @apply flex justify-between items-center bg-red-500;

}
</style>