<script setup lang="ts">
import type { IconProps } from '@blank/types'
import { Cryptocurrency, Logos, Payment, Remix } from '@blank/icons'
import { addCollection, Icon } from '@iconify/vue'

defineProps<IconProps>()

addCollection(Cryptocurrency)
addCollection(Logos)
addCollection(Payment)
addCollection(Remix)
</script>

<template>
    <Icon :icon="name" :color="inherit ? 'transparent' : color" :width="size" :height="size" />
</template>
