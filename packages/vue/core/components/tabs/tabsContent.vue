<script setup lang="ts">
import type { TabsContentProps } from '@blank/types'
import { computed, defineProps, inject } from 'vue'
import { TABS_CONTEXT_KEY } from '.'

const props = defineProps<TabsContentProps>()
const context = inject(TABS_CONTEXT_KEY)

if (!context) {
    throw new Error('TabsContent must be used within a Tabs provider')
}

const isActive = computed(() => context.activeValue.value === props.value)
</script>

<template>
    <div v-if="isActive" class="blank__tabs-content" :class="[props.className]" role="tabpanel">
        <slot />
    </div>
</template>
