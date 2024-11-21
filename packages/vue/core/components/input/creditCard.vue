<script setup lang="ts">
import type { InputProps, PaymentIconNames } from '@blank/types'
import { computed, ref } from 'vue'
import Icon from '../../common/icon.vue'
import Base from './base.vue'

interface PaymentMethod {
    description: string
    prefixes: string[]
    type: 'card' | 'digital_wallet' | 'payment_gateway' | 'cryptocurrency'
}

const { label, helper, appearance, ...props } = defineProps<InputProps>()

const paymentMethods = ref<Record<string, PaymentMethod>>({})
const currentPaymentMethod = ref<string>('')

fetch('https://gist.githubusercontent.com/0fatihyildiz/011cdbdd922b3d9023c764adde6ae345/raw/338df38efe542b458710b185d219325579cc2268/paymentMethods.json')
    .then(res => res.json())
    .then(data => (paymentMethods.value = data.paymentMethods))
    .catch(console.error)

const formatters = {
    cardNumber: (value: string) => {
        currentPaymentMethod.value = Object.keys(paymentMethods.value).find(key =>
            paymentMethods.value[key].prefixes.some(prefix => value.startsWith(prefix)),
        ) || ''
        return value.replace(/\D/g, '').replace(/(\d{4})(?=\d)/g, '$1 ')
    },
    expiryDate: (value: string) => value.replace(/\D/g, '').replace(/^(\d{2})(\d{0,2})$/, '$1/$2').slice(0, 5),
    cvv: (value: string) => value.replace(/\D/g, '').slice(0, 4),
}

const paymentVal = ref({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
})

const model = defineModel()

function handleInput(field: keyof typeof paymentVal.value, value: string) {
    paymentVal.value[field] = formatters[field](value)
    model.value = { ...paymentVal.value }
}

const cardNumber = computed({
    get: () => paymentVal.value.cardNumber,
    set: (value: string) => {
        paymentVal.value.cardNumber = formatters.cardNumber(value)
    },
})

const expiryDate = computed({
    get: () => paymentVal.value.expiryDate,
    set: (value: string) => {
        paymentVal.value.expiryDate = formatters.expiryDate(value)
    },
})

const cvv = computed({
    get: () => paymentVal.value.cvv,
    set: (value: string) => {
        paymentVal.value.cvv = formatters.cvv(value)
    },
})
</script>

<template>
    <div class="blank inputGroup">
        <Base
            v-bind="props"
            class="card-number"
            placeholder="Card number"
            :model-value="cardNumber"
            @update:model-value="val => handleInput('cardNumber', val)"
        >
            <template #lead>
                <div class="payment-method">
                    <Icon :name="`payment:${currentPaymentMethod}` as PaymentIconNames" size="small" />
                </div>
            </template>
        </Base>

        <Base
            v-bind="props"
            class="card-expiry"
            placeholder="MM/YY"
            :model-value="expiryDate"
            @update:model-value="val => handleInput('expiryDate', val)"
        />

        <Base
            v-bind="props"
            class="card-cvc"
            placeholder="CVV"
            :model-value="cvv"
            @update:model-value="val => handleInput('cvv', val)"
        />
    </div>
</template>
