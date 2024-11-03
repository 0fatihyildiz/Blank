<script setup lang="ts">
import type { RadioGroupProps } from '@blank/types'
import { computed, provide } from 'vue'

const props = withDefaults(defineProps<RadioGroupProps>(), {
    size: 'medium',
    direction: 'left-group',
})

provide('radioGroup', {
    size: props.size,
    direction: props.direction,
})

const classes = computed(() => ({
    [props.size]: true,
    [props.direction]: true,
}))
</script>

<template>
    <div :class="classes" class="blank__radio-group">
        <slot />
    </div>
</template>
