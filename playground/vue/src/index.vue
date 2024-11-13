<script setup lang="ts">
import { Button, ButtonGroup, Container, Icon, Input, Toggle } from '@blank/vue'
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

		<!-- Example 1: Using lead icon and slot for tail with button -->
		<Input
			id="test"
			label="Label"
			helper="Helper text"
			placeholder="placeholder"
			size="medium"
			:tail="{ size: 'medium' }"
			:lead="{ name: 'remix:command-fill', type: 'icon', size: 'small' }"
		>
			<template #tail>
				<Button size="small">
					Primary
				</Button>
			</template>
		</Input>

		<!-- Example 2: Different appearances for input -->
		<Input id="test5" label="Label" appearance="url" :lead="{
			name: 'remix:command-fill',
			type: 'icon',
			size: 'small',
		}" />
		<Input id="test5" label="Label" appearance="phone" />
		<Input id="test5" label="Label" appearance="currency" />

		<!-- Example 3: Large sized input with placeholder -->
		<Input
			id="test1"
			label="Label"
			helper="Helper text"
			placeholder="placeholder"
			size="large"
		/>

		<!-- Example 4: Input with error message -->
		<Input
			id="test2"
			label="Label"
			helper="Helper text"
			error="This is an error text"
			placeholder="placeholder"
			size="large"
		/>

		<!-- Example 5: Disabled input with both lead and tail icons -->
		<Input
			id="test3"
			label="Label"
			helper="Helper text"
			error="This is an error text"
			placeholder="placeholder"
			size="large"
			:tail="{ name: 'remix:admin-fill', type: 'icon', size: 'small' }"
			:lead="{ name: 'remix:command-fill', type: 'icon', size: 'small' }"
			disabled
		/>

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
	</Container>
</template>
