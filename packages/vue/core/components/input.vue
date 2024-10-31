<script setup lang="ts">
import type { InputProps } from '@blank/types'
import { computed } from 'vue'
import Icon from '../common/icon.vue'

const props = withDefaults(defineProps<InputProps>(), {
	type: 'text',
	size: 'medium',
})

const classes = computed(() => {
	return [
		{ disabled: props.disabled },
		{ error: props.error },
	]
})
</script>

<template>
	<div class="blank__input" :class="classes">
		<div class="blank__input__label">
			{{ label }}
		</div>
		<div class="blank__input__base" :class="size">
			<Icon v-if="tailIcon" class="icon tail" :name="tailIcon" />
			<input :type="type" :placeholder="placeholder" :class="{
					tail: props.tailIcon,
					lead: props.leadIcon,
				}"
				:disabled="disabled"
			>
			<Icon v-if="leadIcon" class="icon lead" :name="leadIcon" />
		</div>
		<div v-if="error" class="blank__input__error-text">
			{{ error }}
		</div>
		<div v-if="helper && !error" class="blank__input__helper">
			{{ helper }}
		</div>
	</div>
</template>
