<script setup lang="ts">
import type { InputProps } from '@blank/types'
import { computed, ref } from 'vue'
import Base from './base.vue'

interface PhoneCode {
    name: string
    dial_code: string
    code: string
}

const props = defineProps<InputProps>()

const phoneCodes = ref<PhoneCode[]>([])
const selectedPhoneCode = ref<string>('+1')

// special thanks to the @anubhavshrimal of the JSON file
fetch('https://gist.githubusercontent.com/anubhavshrimal/75f6183458db8c453306f93521e93d37/raw/f77e7598a8503f1f70528ae1cbf9f66755698a16/CountryCodes.json')
    .then(response => response.json())
    .then((data) => {
        phoneCodes.value = data
    })
    .catch((error) => {
        console.error('Error:', error)
    })

const model = defineModel({
    default: {
        value: '',
        code: '+1',
    },
})

const value = computed({
    get: () => model.value.value,
    set: (value: string) => {
        model.value = {
            value,
            code: selectedPhoneCode.value,
        }
    },
})
</script>

<template>
    <Base v-bind="props" v-model="value" :tail="{ size: 'medium' }">
        <template #tail>
            <select v-model="selectedPhoneCode" class="phone-slot">
                <option v-for="phoneCode in phoneCodes" :key="phoneCode.code" :value="phoneCode.dial_code">
                    {{ phoneCode.code }} ({{ phoneCode.dial_code }})
                </option>
            </select>
        </template>
    </Base>
</template>
