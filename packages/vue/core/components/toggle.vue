<script setup lang="ts">
import type { ToggleProps } from '@blank/types'
import { defineEmits, defineProps, ref, watch, withDefaults } from 'vue'

const props = withDefaults(defineProps<ToggleProps>(), {
    size: 'medium',
    label: '',
    labelDirection: 'left',
    disabled: false,
    checked: false,
    onChange: undefined,
})
const emit = defineEmits<{
    (e: 'onChange', value: boolean): void
}>()
const isActive = ref(!!props.checked)
watch(() => props.checked, (newVal) => {
    isActive.value = !!newVal
})
function handleToggle() {
    if (!props.disabled) {
        const newState = !isActive.value
        isActive.value = newState
        emit('onChange', newState)
    }
}
</script>

<template>
    <div :class="`blank__toggle-container ${labelDirection}`">
        <span v-if="label" :class="`toggle-label ${size} ${disabled ? 'disabled' : ''}`">
            {{ label }}
        </span>
        <div
            :aria-checked="isActive ? 'true' : 'false'"
            :aria-disabled="disabled"
            :class="`toggle ${size} ${isActive ? 'active' : ''} ${disabled ? 'disabled' : ''} toggle-position`"
            @click="handleToggle"
        >
            <span class="toggle-circle" />
        </div>
    </div>
</template>
