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
    <div :class="`blank avatar ${props.size} ${props.rounded ? 'rounded' : ''}`">
        <img v-if="props.src" :src="props.src" :alt="props.name" class="src">
        <span v-else-if="initials">{{ initials }}</span>
        <img v-else alt="default avatar" class="src">
    </div>
</template>
