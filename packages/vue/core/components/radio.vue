<script setup lang="ts">
import type { RadioProps } from '@blank/types'
import { computed, defineProps, inject, onMounted, ref, withDefaults } from 'vue'

const props = withDefaults(defineProps<RadioProps>(), {
    label: '',
    disabled: false,
    size: 'medium',
    direction: 'left',
    // vModel: false,
})

const size = ref(props.size)
const radioGroup = inject('radioGroup') as {
    size: 'small' | 'medium'
}
onMounted(() => {
    if (radioGroup) {
        size.value = radioGroup.size || size.value
    }
})

const classes = computed(() => ({
    [props.size]: true,
    [props.direction]: true,
}))
</script>

<template>
    <div :class="classes" class="blank__radio">
        <input :id="label" name="radio" :class="classes" :disabled="props.disabled" type="radio">
        <label v-show="label" :class="classes" :disabled="props.disabled" :for="label">
            {{ label }}
        </label>
    </div>
</template>
