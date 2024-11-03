<script setup lang="ts">
import { Button, ButtonGroup, Container, Icon, Input } from '@blank/vue'
</script>

<template>
	<Container>
		<Button variant="primary">
			Click me
		</Button>

		<Button variant="secondary">
			<Icon name="remix:command-fill" size="20" />
			Click me
		</Button>

		<Button variant="tertiary">
			Click me
		</Button>

		<Button variant="quaternary">
			Click me
		</Button>

		<Input label="Label" helper="Helper text" placeholder="placeholder" tail="logo:google" lead="remix:command-fill">
			<template #tail>
				<Icon name="payment:paypal" size="20" />
			</template>
		</Input>

		<Input label="Label" helper="Helper text" placeholder="placeholder" size="large" />

		<Input label="Label" helper="Helper text" error="This is a error text" placeholder="placeholder" size="large" />

		<Input label="Label" helper="Helper text" error="This is a error text" placeholder="placeholder" size="large" tail="remix:admin-fill" lead="remix:command-fill" disabled />

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
