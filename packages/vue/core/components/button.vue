<script setup lang="ts">
import type { Button } from '@blank/types'

withDefaults(defineProps<Button.ButtonProps>(), {
	variant: 'primary',
	size: 40,
	disabled: false,
})
</script>

<template>
	<button class="blank__button" :class="[variant]">
		<slot />
	</button>
</template>
