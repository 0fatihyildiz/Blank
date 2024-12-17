<script setup lang="ts">
import { Item } from '@blank/vue';
</script>

<template>
        <div class="content">
            <slot />
        </div>
</template>

<style scoped lang="postcss">
.content {
    @apply col-span-11 mr-12 px-12 bg-blue-500;
}
</style>