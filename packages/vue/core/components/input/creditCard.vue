<script setup lang="ts">
import type { InputProps } from '@blank/types'
import { ref } from 'vue'
import Icon from '../../common/icon.vue'
import Base from './base.vue'

interface PaymentMethod {
    description: string
    prefixes: string[]
    type: 'card' | 'digital_wallet' | 'payment_gateway' | 'cryptocurrency'
}

const { label, helper, appearance, ...props } = defineProps<InputProps>()
const paymentMethods = ref<{ [key: string]: PaymentMethod }>({})

const cardNumber = ref('')
const expiryDate = ref('')
const cvv = ref('')

fetch('https://gist.githubusercontent.com/0fatihyildiz/011cdbdd922b3d9023c764adde6ae345/raw/338df38efe542b458710b185d219325579cc2268/paymentMethods.json')
    .then(response => response.json())
    .then((data: { paymentMethods: { [key: string]: PaymentMethod } }) => {
        paymentMethods.value = data.paymentMethods
    })
    .catch(error => console.error('Failed to fetch payment methods:', error))

function formatCardNumber(value: string) {
    return value.replace(/\D/g, '').replace(/(\d{4})(?=\d)/g, '$1 ')
}

function formatExpiryDate(value: string) {
    return value
        .replace(/\D/g, '')
        .replace(/^(\d{2})(\d{0,2})$/, '$1/$2')
        .slice(0, 5)
}

function formatCVV(value: string) {
    return value.replace(/\D/g, '').slice(0, 4)
}

function onCardNumberInput(val: string) {
    console.log(val)
    cardNumber.value = formatCardNumber(val)
}

function onExpiryDateInput(val: string) {
    expiryDate.value = formatExpiryDate(val)
}

function onCVVInput(val: string) {
    cvv.value = formatCVV(val)
}
</script>

<template>
    <div class="blank inputGroup">
        <!-- Card Number Input -->
        <Base
            v-bind="props" class="card-number" placeholder="Card number"
            :model-value="cardNumber"
            @update:model-value="onCardNumberInput"
        >
            <template #lead>
                <div class="payment-method">
                    <Icon name="payment:visa" size="small" />
                </div>
            </template>
        </Base>

        <!-- Expiry Date Input -->
        <Base
            v-bind="props" class="card-expiry" placeholder="MM/YY"
            :model-value="expiryDate"
            @update:model-value="onExpiryDateInput"
        />

        <!-- CVV Input -->
        <Base
            v-bind="props" class="card-cvc" placeholder="CVV"
            :model-value="cvv"
            @update:model-value="onCVVInput"
        />
    </div>
</template>
