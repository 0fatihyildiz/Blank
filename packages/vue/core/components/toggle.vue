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
    <div :class="`blank__toggle-container ${props.labelDirection}`">
        <span v-if="props.label" :class="`toggle-label ${props.size} ${props.disabled ? 'disabled' : ''}`">
            {{ props.label }}
        </span>
        <div
            role="switch"
            :aria-checked="model ? 'true' : 'false'"
            :aria-disabled="props.disabled ? 'true' : 'false'"
            :aria-labelledby="props.label ? 'toggle-label' : ''"
            :class="`toggle ${props.size} ${model ? 'active' : ''} ${props.disabled ? 'disabled' : ''} toggle-position`"
            tabindex="0"
            @click="handleToggle"
            @keydown="e => e.key === ' ' || e.key === 'Enter' ? handleToggle() : null"
        >
            <span class="toggle-circle" />
        </div>
    </div>
</template>
