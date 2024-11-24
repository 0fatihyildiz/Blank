<script setup lang="ts">
import type { BadgeProps } from '@blank/types'
import { defineProps, withDefaults } from 'vue'

const props = withDefaults(defineProps<BadgeProps>(), {
    size: 'small',
    variant: 'default',
    onClick: undefined,
})
</script>

<template>
    <div
        class="blank badge"
        :class="[props.variant, props.size, { clickable: props.onClick }]"
        role="button"
        :aria-label="`Badge ${props.variant} ${props.size}`"
        :tabindex="props.onClick ? 0 : -1"
        :aria-disabled="!props.onClick"
        @click="props.onClick"
    >
        <slot />
    </div>
</template>
