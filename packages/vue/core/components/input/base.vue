<script setup lang="ts">
import type { InputProps } from '@blank/types'
import { computed } from 'vue'
import Icon from '../../common/icon.vue'

const props = withDefaults(defineProps<InputProps>(), {
    id: 'input',
    type: 'text',
    size: 'medium',
})

const slots = defineSlots<{
    tail: Record<string, any>
    lead: Record<string, any>
    default?: (_: Record<string, any>) => any
}>()

const tail = computed(() => props.tail || slots.tail)
const lead = computed(() => props.lead || slots.lead)

const model = defineModel<string>()

const classes = computed(() => ({
    disabled: props.disabled,
    error: props.error,
}))
</script>

<template>
    <div class="blank__input" :class="classes">
        <label class="blank__input__label" :for="props.id">
            {{ label }}
        </label>
        <div class="blank__input__base" :class="props.size">
            <div v-if="tail || slots.tail" class="slot tail" :class="tail?.size || 'small'">
                <slot v-if="slots.tail" name="tail" />
                <Icon v-else-if="tail?.name" class="icon" :name="tail.name" :size="tail.size" />
            </div>

            <input
                :id="props.id"
                v-model="model"
                :aria-describedby="props.error ? 'hint' : undefined"
                :aria-invalid="props.error ? 'true' : undefined"
                :type="props.type"
                :placeholder="props.placeholder"
                :class="{
                    [`tail__${tail?.size || 'small'}`]: tail,
                    [`lead__${lead?.size || 'small'}`]: lead,
                }"
                :disabled="props.disabled"
            >

            <div v-if="lead || slots.lead" class="slot lead" :class="lead?.size || 'small'">
                <slot v-if="slots.lead" name="lead" />
                <Icon v-else-if="lead?.name" class="icon" :name="lead.name" :size="lead.size" />
            </div>
        </div>
    </div>
</template>
