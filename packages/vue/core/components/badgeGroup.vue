<script setup lang="ts">
import type { BadgeGroupProps } from '@blank/types'
import { Icon } from '@iconify/vue'
import { defineProps, withDefaults } from 'vue'

const props = withDefaults(defineProps<BadgeGroupProps>(), {
    variant: 'default',
    onClick: undefined,
})
</script>

<template>
    <div
        class="blank__badge-group" :class="[props.variant || '', { clickable: props.onClick }]"
    >
        <div
            v-for="(badge, index) in props.badges"
            :key="index"
            class="blank__badge small"
            :style="{ backgroundColor: badge.backgroundColor || 'transparent', color: badge.color || '#000' }"
        >
            <span>{{ badge.label }}</span>
            <Icon v-if="badge.icon" :icon="badge.icon" />
        </div>
    </div>
</template>
