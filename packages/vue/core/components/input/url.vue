<script setup lang="ts">
import type { InputProps } from '@blank/types'
import Base from './base.vue'

const props = defineProps<InputProps>()
</script>

<template>
    <Base v-bind="props" :tail="{ size: 'medium' }">
        <template #tail>
            <div class="url-slot">
                https://
            </div>
        </template>
    </Base>
</template>
