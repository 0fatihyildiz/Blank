<script lang="ts" setup>
import { CompanyLogos } from '@blank/icons'

defineProps<{
	name: string
	size?: number
}>()

const shapeIcons = JSON.parse(JSON.stringify(CompanyLogos))
</script>

<template>
	<svg :width="size" :height="size" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" v-html="shapeIcons[name]" />
</template>
