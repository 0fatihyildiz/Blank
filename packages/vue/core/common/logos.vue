<script setup lang="ts">
import type { LogosProps } from '@blank/types'
import { CompanyLogos } from '@blank/icons'
import { computed, defineComponent } from 'vue'

const props = withDefaults(defineProps<LogosProps>(), {
	size: 'medium',
	color: 'currentColor',
})

const Icons: Record<string, Record<string, any>> = {
	company: CompanyLogos,
}

const [prefix, iconName] = props.name.split(':') as [keyof typeof Icons, string]

const iconData = computed(() => Icons[prefix]?.icons[iconName])

const IconNotFound = defineComponent({
	setup() {
		console.log(Icons[prefix])
		console.error(`Logo ${props.name} not found`)
	},
	template: '<!-- Logo not found -->',
})
</script>

<template>
	<svg
		v-if="iconData"
		class="blank__logos"
		:class="`blank__logos__${props.size}`"
		:height="props.size"
		:width="props.size"
		viewBox="0 0 111 48"
		xmlns="http://www.w3.org/2000/svg"
		v-html="iconData.body"
	/>
	<IconNotFound v-else />
</template>
