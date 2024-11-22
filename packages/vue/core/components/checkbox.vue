<script setup lang="ts">
import type { CheckboxProps } from '@blank/types'
import { ref, watch } from 'vue'

const props = withDefaults(defineProps<CheckboxProps>(), {
    size: 'medium',
    direction: 'left',
    label: '',
    checked: false,
    disabled: false,
})

const internalChecked = ref(props.checked)

watch(() => props.checked, (newChecked) => {
    internalChecked.value = newChecked
})

function handleClick() {
    if (props.disabled)
        return

    internalChecked.value = !internalChecked.value

    if (props.onChange) {
        props.onChange(internalChecked.value)
    }
}
</script>

<template>
    <div
        class="blank checkbox"
        :class="[props.size, props.direction, { disabled: props.disabled }] "
        tabindex="0"
        role="checkbox"
        :aria-checked="internalChecked"
        :aria-disabled="props.disabled"
        @click="handleClick"
    >
        <input
            v-model="internalChecked"
            type="checkbox"
            class="blank checkbox__input"
            :class="props.size"
            :aria-label="props.label"
            :disabled="props.disabled"
        >
        <span
            class="blank checkbox__label"
            :class="[props.size, { disabled: props.disabled }] "
        >
            {{ props.label }}
        </span>
    </div>
</template>
