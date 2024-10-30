<script setup lang="ts">
import type { ButtonProps } from '@blank/types'
import { computed } from 'vue'
import Icon from '../common/icon.vue'

const props = withDefaults(defineProps<ButtonProps>(), {
	variant: 'primary',
	size: 'medium',
	appearance: 'default',
	disabled: false,
})

const classes = computed(() => {
	return {
		[props.appearance]: true,
		[props.variant]: true,
		[props.size]: true,
	}
})
</script>

<template>
	<button class="blank__button" :class="classes" :disabled="disabled">
		<slot v-if="props.appearance !== 'icon'" />
		<!-- <Icon v-else :name="props.icon" /> -->
	</button>
</template>
