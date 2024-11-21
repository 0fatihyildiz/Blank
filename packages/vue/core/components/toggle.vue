<script setup lang="ts">
import type { ToggleProps } from '@blank/types'
import { defineEmits, defineProps, ref, watch, withDefaults } from 'vue'

const props = withDefaults(defineProps<Omit<Omit<ToggleProps, 'onChange'>, 'checked'>>(), {
    size: 'medium',
    label: '',
    labelDirection: 'left',
    disabled: false,
})

const model = defineModel({
    default: false,
    type: Boolean,
})

function handleToggle() {
    if (!props.disabled) {
        model.value = !model.value
    }
}
</script>

<template>
    <div :class="`blank toggle-container ${labelDirection}`">
        <span v-if="label" :class="`toggle-label ${size} ${disabled ? 'disabled' : ''}`">
            {{ label }}
        </span>
        <div
            :aria-checked="model ? 'true' : 'false'"
            :aria-disabled="disabled"
            :class="`toggle ${size} ${model ? 'active' : ''} ${disabled ? 'disabled' : ''} toggle-position`"
            @click="handleToggle"
        >
            <span class="toggle-circle" />
        </div>
    </div>
</template>
