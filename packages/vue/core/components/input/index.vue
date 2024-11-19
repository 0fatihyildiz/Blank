<script setup lang="ts">
import type { InputProps } from '@blank/types'
import { useSlots } from 'vue'

import base from './base.vue'
import creditCard from './creditCard.vue'
import currency from './currency.vue'
import phone from './phone.vue'
import url from './url.vue'

const { appearance = 'default', ...inputProps } = defineProps<InputProps>()

const appearanceMap = {
    'default': base,
    'phone': phone,
    'currency': currency,
    'crypto': undefined,
    'url': url,
    'credit-card': creditCard,
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
