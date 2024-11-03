<script setup lang="ts">
import { Button, Container, Icon, Logos, Toggle } from '@blank/vue'
</script>

<template>
	<Container>
		<Button variant="primary">
			<Icon name="remix:command-fill" size="20" />
			Click me
			<Icon name="remix:arrow-right-line" size="20" />
		</Button>

		<Button variant="secondary">
			<Icon name="remix:command-fill" size="20" />
			Click me
			<Icon name="remix:arrow-right-line" size="20" />
		</Button>

		<Button variant="tertiary">
			<Icon name="remix:command-fill" size="20" />
			Click me
			<Icon name="remix:arrow-right-line" size="20" />
		</Button>

		<Button variant="quaternary">
			<Icon name="remix:command-fill" size="20" />
			Click me
			<Icon name="remix:arrow-right-line" size="20" />
		</Button>
		<Button variant="destructive">
			<Icon name="RiCommandFill" size="20" />
			Don't Click me
			<Icon name="RiArrowRightLine" size="20" />
		</Button>

		<div :style="{ display: 'flex', flexDirection: 'column' }">
			<Toggle size="small" />
			<Toggle size="medium" />
			<Toggle size="small" disabled />
			<Toggle size="medium" disabled />

			<Toggle label="berke" label-direction="left" size="small" />
			<Toggle label="berke" label-direction="right" size="medium" />
			<Toggle label="berke" size="medium" disabled />
		</div>
		<Logos name="company:figma" size="small" />
	</Container>
</template>
