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
        class="blank__badge"
        :class="[props.variant, props.size, { clickable: props.onClick }]"
        @click="props.onClick"
    >
        <slot />
    </div>
</template>

<style scoped>
.clickable {
    cursor: pointer;
}
</style>
