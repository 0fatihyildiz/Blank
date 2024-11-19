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
    <div :class="`blank__avatar ${props.size} ${props.rounded ? 'rounded' : ''}`">
        <template v-if="props.src">
            <img :src="props.src" :alt="props.name" class="src">
        </template>
        <template v-else-if="initials">
            <span>{{ initials }}</span>
        </template>
        <template v-else>
            <img src="" alt="default avatar" class="src">
        </template>
    </div>
</template>
