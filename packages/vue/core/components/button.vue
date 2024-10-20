<script setup lang="ts">
interface Props {
	variant?: 'primary' | 'secondary' | 'tertiary' | 'quaternary' | 'destructive'
	size?: 32 | 40 | 48
	disabled?: boolean
}

withDefaults(defineProps<Props>(), {
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
