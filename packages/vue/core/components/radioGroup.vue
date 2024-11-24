<script setup lang="ts">
import type { RadioGroupProps } from '@blank/types'
import { computed, defineEmits, provide, toRef } from 'vue'

const props = withDefaults(defineProps<RadioGroupProps>(), {
    size: 'medium',
    direction: 'left-group',
})

const emit = defineEmits(['update:modelValue'])
const modelValue = toRef(props, 'modelValue')

provide('radioGroup', {
    size: props.size,
    direction: props.direction,
    modelValue,
    updateValue: (value: string) => emit('update:modelValue', value),
})

const classes = computed(() => ({
    [props.size]: true,
    [props.direction]: true,
}))
</script>

<template>
    <div
        :class="classes"
        class="blank radio-group"
        role="radiogroup"
        aria-labelledby="radio-group-label"
        aria-describedby="radio-group-description"
    >
        <slot />
    </div>
</template>
