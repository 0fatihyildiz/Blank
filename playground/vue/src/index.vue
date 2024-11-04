<script setup lang="ts">
import { Button, ButtonGroup, Container, Icon, Radio, RadioGroup, Toggle } from '@blank/vue'
import { ref, watch } from 'vue'

const selectedRadio = ref<string>('')
watch(selectedRadio, (newValue) => {
	if (newValue) {
		console.log(`Seçilen değer INDEX: ${newValue}`)
	}
})
</script>

<template>
	<Container>
		<RadioGroup v-model="selectedRadio" size="medium" direction="right-group">
			<Radio label="Kerem" />
			<Radio label="Kerem1" />
			<Radio label="Kerem2" />
		</RadioGroup>
		<Button variant="primary">
			Click me
		</Button>

		<Button variant="secondary">
			<Icon name="cryptocurrency:braintrust" size="20" />
			Click me
		</Button>

		<Button variant="tertiary">
			Click me
		</Button>

		<Button variant="quaternary">
			Click me
		</Button>

		<Logos name="company:figma" size="small" />
		<div>
			<ButtonGroup size="small">
				<Button> Primary </Button>
				<Button> Quaternary </Button>
			</ButtonGroup>
		</div>
		<div>
			<ButtonGroup>
				<Button> Primary </Button>
				<Button> Quaternary </Button>
			</ButtonGroup>
		</div>
		<div>
			<ButtonGroup size="large">
				<Button> Primary </Button>
				<Button> Primary </Button>
				<Button> Quaternary </Button>
			</ButtonGroup>
		</div>
		<div :style="{ display: 'flex', flexDirection: 'column' }">
			<Toggle size="small" />
			<Toggle size="medium" />
			<Toggle size="small" disabled />
			<Toggle size="medium" disabled />

			<Toggle label="berke" label-direction="left" size="small" />
			<Toggle label="berke" label-direction="right" size="medium" />
			<Toggle label="berke" size="medium" disabled />
		</div>
	</Container>
</template>
