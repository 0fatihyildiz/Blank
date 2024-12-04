<script setup lang="ts">
import { Item } from '@blank/vue';
</script>

<template>
    <Item col="9" class="content">
        <slot />
    </Item>
</template>

<style scoped lang="postcss">
.content {
    @apply px-12 w-full bg-blue-500;
}
</style>