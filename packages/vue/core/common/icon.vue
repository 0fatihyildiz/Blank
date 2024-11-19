<script setup lang="ts">
import type { IconProps } from '@blank/types'
import { Cryptocurrency, Logos, Payment, Remix } from '@blank/icons'
import { addCollection, Icon } from '@iconify/vue'
import { computed } from 'vue'

const { size = 'medium', ...props } = defineProps<IconProps>()

const defaultInherit = ['cryptocurrency', 'payment']

const inheritIcon = computed(() => defaultInherit.includes(props.name.split(':')[0]))

addCollection(Cryptocurrency)
addCollection(Logos)
addCollection(Payment)
addCollection(Remix)

const sizes = {
    small: 16,
    medium: 24,
    large: 32,
}
</script>

<template>
    <Icon :icon="name" :color="(inheritIcon || inherit) ? 'transparent' : color" :width="sizes[size]" :height="sizes[size]" />
</template>
