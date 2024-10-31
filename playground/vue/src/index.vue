<script setup lang="ts">
import { Button, ButtonGroup, Container, Icon, Logos } from '@blank/vue'
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
