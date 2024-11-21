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
    <div class="blank__avatar-group">
        <template v-for="(child, index) in displayChildren" :key="index">
            <div>
                <slot :index="index" />
            </div>
        </template>
    </div>
</template>
