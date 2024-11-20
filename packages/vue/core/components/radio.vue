<script setup lang="ts">
import type { RadioProps } from '@blank/types'
import { computed, defineProps, inject, ref, withDefaults } from 'vue'

const props = withDefaults(defineProps<RadioProps>(), {
    label: '',
    disabled: false,
    size: 'medium',
    direction: 'left',
})

const radioGroup = inject('radioGroup') as {
    size: 'small' | 'medium'
    modelValue: any
    updateValue: (value: string) => void
}

const size = ref(props.size)
if (radioGroup) {
    size.value = radioGroup.size || size.value
}

function onSelect() {
    if (radioGroup) {
        radioGroup.updateValue(props.label)
    }
}

const classes = computed(() => ({
    [props.size]: true,
    [props.direction]: true,
}))
</script>

<template>
    <div :class="classes" class="blank__radio">
        <input
            :id="props.label"
            name="radio"
            :class="classes"
            :disabled="props.disabled"
            type="radio"
            :value="props.label"
            @change="onSelect"
        >
        <label v-show="props.label" :class="classes" :for="props.label">
            {{ props.label }}
        </label>
    </div>
</template>
