<script setup lang="ts">
import type { AvatarProps } from '@blank/types'
import { computed } from 'vue'

const props = withDefaults(defineProps<AvatarProps>(), {
    size: 'medium',
    rounded: 'none',
    src: '',
    name: '',
})

const initials = computed(() => {
    if (!props.name)
        return ''
    return props.name
        .split(' ')
        .map(word => word.charAt(0).toUpperCase())
        .join('')
        .slice(0, 2)
})
</script>

<template>
    <div
        :class="`blank__avatar ${props.size} ${props.rounded ? 'rounded' : ''}`"
        :aria-label="props.name ? `Avatar of ${props.name}` : 'User avatar'"
        role="img"
    >
        <img
            v-if="props.src"
            :src="props.src"
            :alt="props.name ? `Avatar of ${props.name}` : 'User avatar'"
            class="src"
            :aria-hidden="!props.name"
        >

        <span
            v-else-if="initials"
            class="initials"
            :aria-hidden="!initials"
        >
            {{ initials }}
        </span>

        <img
            v-else
            alt="Default avatar"
            class="src"
            aria-hidden="true"
        >
    </div>
</template>
