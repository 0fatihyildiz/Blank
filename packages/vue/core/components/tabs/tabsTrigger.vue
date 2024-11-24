<script setup lang="ts">
import type { TabsTriggerProps } from '@blank/types'
import { computed, defineProps, inject } from 'vue'
import { TABS_CONTEXT_KEY } from '.'

const props = defineProps<TabsTriggerProps>()
const context = inject(TABS_CONTEXT_KEY)

if (!context) {
    throw new Error('TabsTrigger must be used within a Tabs provider')
}

const isActive = computed(() => context.activeValue.value === props.value)

const classes = computed(() => [
    'blank tabs-trigger',
    isActive.value && 'blank tabs-trigger--active',
    props.className,
])
</script>

<template>
    <button
        :class="classes"
        role="tab"
        :aria-selected="isActive"
        @click="context?.onClickTab(props.value)"
    >
        <slot />
    </button>
</template>
