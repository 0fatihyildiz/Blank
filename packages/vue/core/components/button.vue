<script setup lang="ts">
import type { ButtonProps } from '@blank/types'
import { computed, inject, onMounted, ref } from 'vue'

const props = withDefaults(defineProps<ButtonProps>(), {
    variant: 'primary',
    size: 'medium',
    appearance: 'default',
    disabled: false,
})

const variant = ref(props.variant)
const size = ref(props.size)
const appearance = ref(props.appearance)

const buttonGroup = inject('buttonGroup') as {
    size: 'small' | 'medium' | 'large'
}

onMounted(() => {
    if (buttonGroup) {
        size.value = buttonGroup.size || size.value
        variant.value = 'secondary'
        appearance.value = 'default'
    }
})

const classes = computed(() => ({
    [appearance.value]: true,
    [variant.value]: true,
    [size.value]: true,
}))
</script>

<template>
    <button
        class="blank button"
        :class="classes"
        :disabled="props.disabled"
        role="button"
        :aria-disabled="props.disabled ? 'true' : 'false'"
        aria-label="Button"
    >
        <slot />
    </button>
</template>
