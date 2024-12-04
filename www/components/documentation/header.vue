<script setup lang="ts">
import { Button, Icon, Input, Item, Tabs, TabsList, TabsTrigger } from '@blank/vue';

const search = ref<string>('');
</script>

<template>
    <Item col="full" class="header">
        <NuxtImg src="logo.svg" alt="Blank" class="logo" />

        <Input id="search-input" v-model="search" :tail="{ size: 'small', name: 'remix:search-2-line' }"
            placeholder="Search" />
    </Item>
</template>

<style scoped lang="postcss">
.header {
    @apply px-12 flex justify-between items-center;

    .logo {
        @apply size-8;
    }


    .navigation {
        @apply flex gap-4;
    }
}
</style>
