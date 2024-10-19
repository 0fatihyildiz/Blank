<script setup lang="ts">
interface Props {
	variant?: 'primary' | 'secondary' | 'tertiary' | 'quaternary' | 'destructive'
	size?: 32 | 40 | 48
	disabled?: boolean
}

defineProps<Props>()
</script>

<template>
	<button class="blank__button primary">
		<slot />
	</button>
</template>
