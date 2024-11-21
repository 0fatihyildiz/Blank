<script setup lang="ts">
import type { TabsProps, TabValue } from '@blank/types'
import { computed, defineProps, provide, ref } from 'vue'
import { TABS_CONTEXT_KEY } from '.'

const props = withDefaults(defineProps<TabsProps>(), { type: 'underline' })
const activeValue = ref(props.defaultValue)

function onClickTab(value: TabValue) {
    activeValue.value = value
    props.onValueChange?.(value)
}

provide(TABS_CONTEXT_KEY, {
    activeValue,
    onClickTab,
})

const classes = computed(() => [
    'blank tabs',
    `blank tabs--${props.type}`,
    props.fullWidth && 'blank tabs--full',
    props.className,
])
</script>

<template>
    <div :class="classes">
        <slot />
    </div>
</template>
