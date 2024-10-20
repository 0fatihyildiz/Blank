<script setup lang="ts">
import { Button, Container, Icon } from '@blank/vue'
</script>

<template>
	<Container>
		<Button>
			<Icon name="RiCommandFill" size="24" />
			Click me
			<Icon name="RiArrowRightLine" size="24" />
		</Button>

		<Button variant="secondary">
			<Icon name="RiCommandFill" size="24" />
			Click me
			<Icon name="RiArrowRightLine" size="24" />
		</Button>

		<Button variant="tertiary">
			<Icon name="RiCommandFill" size="24" />
			Click me
			<Icon name="RiArrowRightLine" size="24" />
		</Button>

		<Button variant="quaternary">
			<Icon name="RiCommandFill" size="24" />
			Click me
			<Icon name="RiArrowRightLine" size="24" />
		</Button>

		<Button variant="destructive">
			<Icon name="RiCommandFill" size="24" />
			Don't Click me
			<Icon name="RiArrowRightLine" size="24" />
		</Button>
	</Container>
</template>
