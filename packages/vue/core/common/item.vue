<script setup lang="ts">
import type { ItemProps } from '@blank/types'

const { col = 'full' } = defineProps<ItemProps>()
</script>

<template>
    <div class="blank item" :class="col">
        <slot />
    </div>
</template>
