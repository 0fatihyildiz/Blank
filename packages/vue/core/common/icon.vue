<script setup lang="ts">
import * as Icons from '@remixicon/vue'
import { defineComponent } from 'vue'

interface IconProps {
	name: keyof typeof Icons
	size?: string
	color?: string
}

const props = defineProps<IconProps>()

const IconNotFound = defineComponent({
	setup() {
		console.error(`Icon ${props.name} not found`)
	},
	template: '',
})
</script>

<template>
	<component :is="Icons[name]" v-if="Icons[name]" :size="size" :color="color" />
	<IconNotFound v-else />
</template>
