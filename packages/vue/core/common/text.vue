<script lang="ts" setup>
import type { TextProps } from '@blank/types'

const { tag = 'h1', weight = 600, ...props } = defineProps<TextProps>()
</script>

<template>
    <component
        :is="tag"
        class="blank text"
        :class="props.variant"
    >
        <slot />
    </component>
</template>

<style lang="stylus" scoped>
.text
    font-weight: v-bind('weight')
</style>
