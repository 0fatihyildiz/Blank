<script setup lang="ts">
import type { InputProps } from '@blank/types'
import { ref } from 'vue'
import Base from './base.vue'

interface Currency {
    [key: string]: {
        symbol: string
        name: string
        symbol_native: string
        decimal_digits: number
        rounding: number
        code: string
        name_plural: string
    }
}

const props = defineProps<InputProps>()

const currency = ref<Currency>()
const selectedCurrency = ref<string>('USD')

// special thanks to the @ksafranski of the JSON file
fetch('https://gist.githubusercontent.com/ksafranski/2973986/raw/5fda5e87189b066e11c1bf80bbfbecb556cf2cc1/Common-Currency.json')
    .then(response => response.json())
    .then((data) => {
        currency.value = data
    })
    .catch((error) => {
        console.error('Error:', error)
    })
</script>

<template>
    <Base v-bind="props" :lead="{ size: 'medium' }">
        <template #tail>
            <span>{{ currency?.[selectedCurrency].symbol }}</span>
        </template>
        <template #lead>
            <select v-model="selectedCurrency">
                <option v-for="c in currency" :key="c.code" :value="c.code">
                    {{ c.code }}
                </option>
            </select>
        </template>
    </Base>
</template>
