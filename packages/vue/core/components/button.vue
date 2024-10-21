<script setup lang="ts">
import type { Button } from '@blank/types'

withDefaults(defineProps<Button.ButtonProps>(), {
	variant: 'primary',
	size: 'medium',
	disabled: false,
})
</script>

<template>
	<button class="blank__button" :class="[variant, size]" :disabled="disabled">
		<slot />
	</button>
</template>
