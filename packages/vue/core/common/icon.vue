<script setup lang="ts">
import * as Icons from '@remixicon/vue'

interface IconProps {
	name: keyof typeof Icons
	size?: string
	color?: string
}

defineProps<IconProps>()
</script>

<template>
	<component :is="Icons[name]" :size="size" :color="color" />
</template>
