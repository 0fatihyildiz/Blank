<script setup lang="ts">
import { Button, ButtonGroup, Container, Icon } from '@blank/vue'
</script>

<template>
	<Container>
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
		<Logos name="company:zoom" size="medium" />
		<Logos name="company:airtable" size="medium" />
		<Logos name="company:amazon" size="medium" />

		<Input label="Label" helper="Helper text" placeholder="placeholder" tail-icon="remix:command-fill" lead-icon="remix:command-fill" />
		<Input label="Label" helper="Helper text" placeholder="placeholder" size="large" />
		<Input label="Label" helper="Helper text" error="This is a error text" placeholder="placeholder" size="large" />
		<Input label="Label" helper="Helper text" error="This is a error text" placeholder="placeholder" size="large" tail-icon="remix:command-fill" lead-icon="remix:command-fill" disabled />
		<div>
			<ButtonGroup size="small">
				<Button>
					Primary
				</Button>
				<Button>
					Quaternary
				</Button>
			</ButtonGroup>
		</div>
		<div>
			<ButtonGroup>
				<Button>
					Primary
				</Button>
				<Button>
					Quaternary
				</Button>
			</ButtonGroup>
		</div>
		<div>
			<ButtonGroup size="large">
				<Button>
					Primary
				</Button>
				<Button>
					Primary
				</Button>
				<Button>
					Quaternary
				</Button>
			</ButtonGroup>
		</div>
	</Container>
</template>
