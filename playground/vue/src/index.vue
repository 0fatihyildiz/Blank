<script setup lang="ts">
import { Badge, BadgeGroup, Button, ButtonGroup, Container, Icon, Toggle } from '@blank/vue'

const badges = [{ label: 'test', backgroundColor: 'grey', color: 'white' }, { label: 'test', backgroundColor: 'transparent', color: 'white', icon: 'remix:command-fill' }]
function handleClick() {
	console.log('Badge group clicked!')
}
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
		<div :style="{ display: 'flex', flexDirection: 'column' }">
			<Toggle size="small" />
			<Toggle size="medium" />
			<Toggle size="small" disabled />
			<Toggle size="medium" disabled />

			<Toggle label="berke" label-direction="left" size="small" />
			<Toggle label="berke" label-direction="right" size="medium" />
			<Toggle label="berke" size="medium" disabled />
		</div>
		<Badge variant="default" @click="handleClick">
			test
		</Badge>
		<BadgeGroup variant="primary" :badges="badges" @click="handleClick" />
	</Container>
</template>
