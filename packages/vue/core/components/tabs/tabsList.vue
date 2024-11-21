<script setup lang="ts">
import type { TabsListProps } from '@blank/types'
import { defineProps } from 'vue'

const props = defineProps<TabsListProps>()
</script>

<template>
    <div class="blank tabs-list" :class="[props.className]" role="tablist">
        <slot />
    </div>
</template>
