<script setup lang="ts">
import { Button, Container, Icon } from '@blank/vue'
</script>

<template>
	<Container>
		<Button size="small">
			<Icon name="RiCommandFill" size="20" />
			Click me
			<Icon name="RiArrowRightLine" size="20" />
		</Button>

		<Button variant="secondary">
			<Icon name="RiCommandFill" size="20" />
			Click me
			<Icon name="RiArrowRightLine" size="20" />
		</Button>

		<Button variant="tertiary">
			<Icon name="RiCommandFill" size="20" />
			Click me
			<Icon name="RiArrowRightLine" size="20" />
		</Button>

		<Button variant="quaternary">
			<Icon name="RiCommandFill" size="20" />
			Click me
			<Icon name="RiArrowRightLine" size="20" />
		</Button>

		<Button variant="destructive">
			<Icon name="RiCommandFill" size="20" />
			Don't Click me
			<Icon name="RiArrowRightLine" size="20" />
		</Button>
	</Container>
</template>
