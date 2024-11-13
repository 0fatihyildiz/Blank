<script setup lang="ts">
import type { InputProps } from '@blank/types'
import { useSlots } from 'vue'
import inputBase from './base.vue'
import inputCurrency from './currency.vue'
import inputPhone from './phone.vue'
import inputUrl from './url.vue'

const { appearance, ...inputProps } = withDefaults(defineProps<InputProps>(), {
    appearance: 'default',
})

const appearanceMap = {
    'default': inputBase,
    'phone': inputPhone,
    'currency': inputCurrency,
    'crypto': inputBase,
    'url': inputUrl,
    'credit-card': inputBase,
}

const slots = useSlots()
</script>

<template>
    <component :is="appearanceMap[appearance]" v-bind="inputProps" :class="appearance">
        <template v-for="(_, name) in slots" #[name]="slot">
            <slot :name="name" v-bind="slot" />
        </template>
    </component>
</template>
