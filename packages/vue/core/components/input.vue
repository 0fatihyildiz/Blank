<script setup lang="ts">
import type { InputProps } from '@blank/types'
import { computed } from 'vue'
import Icon from '../common/icon.vue'

const props = withDefaults(defineProps<InputProps>(), {
    type: 'text',
    size: 'medium',
})

const slots = defineSlots<
    {
        tail: Record<string, any>
        lead: Record<string, any>
    } & {
        default?: (_: Record<string, any>) => any
    }
>()

const classes = computed(() => {
    return [
        { disabled: props.disabled },
        { error: props.error },
    ]
})
</script>

<template>
    <div class="blank__input" :class="classes">
        <div class="blank__input__label">
            {{ label }}
        </div>
        <div class="blank__input__base" :class="size">
            <div v-if="tail || slots.tail" class="slot tail">
                <slot v-if="slots.tail" name="tail" />
                <Icon v-else-if="tail" class="icon" :name="tail" />
            </div>

            <input :type="type" :placeholder="placeholder" :class="{
                tail: props.tail,
                lead: props.lead,
            }" :disabled="disabled"
            >

            <div v-if="lead || slots.lead" class="slot lead">
                <slot v-if="slots.lead" name="lead" />
                <Icon v-else-if="lead" class="icon" :name="lead" />
            </div>
        </div>
        <div v-if="error" class="blank__input__error-text">
            {{ error }}
        </div>
        <div v-if="helper && !error" class="blank__input__helper">
            {{ helper }}
        </div>
    </div>
</template>
