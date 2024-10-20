<script setup lang="ts">
import { Button, Container, Icon } from '@blank/vue'
</script>

<template>
	<Container>
		<Button>
			Click me
		</Button>

		<Button variant="secondary">
			<Icon name="RiCommandFill" size="24" />
			Click me
		</Button>

		<Button variant="tertiary">
			Click me
		</Button>

		<Button variant="quaternary">
			Click me
		</Button>

		<Button variant="destructive">
			Click me
		</Button>
	</Container>
</template>
