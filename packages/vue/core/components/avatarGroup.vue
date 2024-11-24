<script setup lang="ts">
import type { AvatarGroupsProps } from '@blank/types'
import { computed, useSlots } from 'vue'

const props = withDefaults(defineProps<AvatarGroupsProps>(), {
    maxDisplay: 3,
})

const slots = useSlots()

const displayChildren = computed(() => {
    const slotContent = slots.default ? slots.default() : []
    return slotContent.slice(0, props.maxDisplay)
})
</script>

<template>
    <div
        class="blank avatar-group"
        role="group"
        aria-label="Avatar group"
    >
        <div v-for="(children, index) in displayChildren" :key="index">
            <component
                :is="children"
                role="img"
                :aria-label="`Avatar ${index + 1}`"
            />
        </div>
    </div>
</template>
