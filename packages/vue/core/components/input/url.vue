<script setup lang="ts">
import type { InputProps } from '@blank/types'
import { computed } from 'vue'
import Base from './base.vue'

const props = defineProps<InputProps>()

const model = defineModel({
    default: {
        value: '',
        protocol: 'https',
    },
})

const protocols = ['http://', 'https://']
const selectedProtocol = computed(() => protocols.includes(model.value.protocol) ? model.value.protocol : protocols[1])

function toggleProtocol() {
    const index = protocols.indexOf(selectedProtocol.value)
    model.value.protocol = protocols[(index + 1) % protocols.length]
}

const value = computed({
    get: () => model.value.value,
    set: (value: string) => {
        model.value = {
            value,
            protocol: selectedProtocol.value,
        }

        console.log('%cpackages/vue/core/components/input/url.vue:31 model.value', 'color: #007acc;', model.value)
    },
})
</script>

<template>
    <Base v-bind="props" v-model="value" :tail="{ size: 'medium' }">
        <template #tail>
            <div class="url-slot" @click="toggleProtocol">
                {{ selectedProtocol }}
            </div>
        </template>
    </Base>
</template>
