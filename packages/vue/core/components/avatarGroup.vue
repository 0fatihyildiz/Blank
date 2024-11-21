<script setup lang="ts">
import type { AvatarGroupsProps } from '@blank/types'
import { computed, useSlots } from 'vue'

const props = withDefaults(defineProps<AvatarGroupsProps>(), {
    maxDisplay: 3,
})

const slots = useSlots()

const displayChildren = computed(() => {
    const slotContent = slots.default ? slots.default() : []
    console.log(slotContent)
    return slotContent.slice(0, props.maxDisplay)
})
</script>

<template>
    <div class="blank__avatar-group">
        <div v-for="(children, index) in displayChildren" :key="index">
            <component :is="children" />
        </div>
    </div>
</template>
