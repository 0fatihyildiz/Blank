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
