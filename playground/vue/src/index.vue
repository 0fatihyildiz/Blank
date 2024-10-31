<script setup lang="ts">
import { Button, Container, Icon, Input, Logos } from '@blank/vue'
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

		<Logos name="company:figma" size="small" />
		<Logos name="company:zoom" size="medium" />
		<Logos name="company:airtable" size="medium" />
		<Logos name="company:amazon" size="medium" />

		<Input label="Label" helper="Helper text" placeholder="placeholder" tail-icon="remix:command-fill" lead-icon="remix:command-fill" />
		<Input label="Label" helper="Helper text" placeholder="placeholder" size="large" />
		<Input label="Label" helper="Helper text" error="This is a error text" placeholder="placeholder" size="large" />
		<Input label="Label" helper="Helper text" error="This is a error text" placeholder="placeholder" size="large" tail-icon="remix:command-fill" lead-icon="remix:command-fill" disabled />
	</Container>
</template>
