<script setup lang="ts">
import type { ButtonGroupProps } from '@blank/types'
import { provide } from 'vue'

const props = withDefaults(defineProps<ButtonGroupProps>(), {
    size: 'medium',
})

provide('buttonGroup', {
    size: props.size,
})
</script>

<template>
    <div
        class="blank button-group"
        role="group"
        aria-labelledby="button-group-label"
    >
        <slot />
    </div>
</template>
