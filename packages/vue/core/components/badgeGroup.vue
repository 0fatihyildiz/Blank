<script setup lang="ts">
import type { BadgeGroupProps } from '@blank/types'
import { defineProps, withDefaults } from 'vue'

const props = withDefaults(defineProps<BadgeGroupProps>(), {
    variant: 'default',
    onClick: undefined,
})
</script>

<template>
    <div
        class="blank__badge-group" :class="[props.variant || '', { clickable: props.onClick }]"
        role="group"
        aria-label="Badge group"
        @click="props.onClick"
    >
        <slot />
    </div>
</template>
