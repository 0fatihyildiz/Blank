<script setup lang="ts">
import { Avatar, AvatarGroup, Badge, BadgeGroup, Button, ButtonGroup, Checkbox, Container, Icon, Input, Radio, RadioGroup, Tabs, TabsContent, TabsList, TabsTrigger, Toggle } from '@blank/vue'
import { ref, watch } from 'vue'

const badges = [{ label: 'test', backgroundColor: 'grey', color: 'white' }, { label: 'test', backgroundColor: 'transparent', color: 'white', icon: 'remix:command-fill' }]
function handleClick() {
	console.log('Badge group clicked!')
}

const selectedRadio = ref<string>('')
watch(selectedRadio, (newValue) => {
	if (newValue) {
		console.log(`Seçilen değer INDEX: ${newValue}`)
	}
})
const check = ref(false)

function useCheck(newValue: boolean) {
	check.value = newValue
}
</script>

<template>
	<Container>
		<RadioGroup v-model="selectedRadio" size="medium" direction="right-group">
			<Radio label="Kerem" />
			<Radio label="Kerem1" />
			<Radio label="Kerem2" />
		</RadioGroup>
		<Button variant="primary">
			Click me
		</Button>

		<Button variant="secondary">
			<Icon name="remix:command-fill" size="medium" />
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
			placeholder="Placeholder"
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
		<Input id="test5" label="Label" appearance="url" placeholder="Placeholder" :lead="{
			name: 'remix:command-fill',
			type: 'icon',
			size: 'small',
		}"
		/>
		<Input id="test5" label="Label" appearance="phone" placeholder="Placeholder" />
		<Input id="test5" label="Label" appearance="currency" placeholder="Placeholder" />
		<Input id="test6" label="Label" appearance="credit-card" placeholder="Placeholder" size="large" />

		<!-- Example 3: Large sized input with placeholder -->
		<Input
			id="test1"
			label="Label"
			helper="Helper text"
			placeholder="Placeholder"
			size="large"
		/>

		<!-- Example 4: Input with error message -->
		<Input
			id="test2"
			label="Label"
			helper="Helper text"
			error="This is an error text"
			placeholder="Placeholder"
			size="large"
		/>

		<!-- Example 5: Disabled input with both lead and tail icons -->
		<Input
			id="test3"
			label="Label"
			helper="Helper text"
			error="This is an error text"
			placeholder="Placeholder"
			size="large"
			:tail="{ name: 'remix:admin-fill', type: 'icon', size: 'small' }"
			:lead="{ name: 'remix:command-fill', type: 'icon', size: 'small' }"
			disabled
		/>

		<div>
			<ButtonGroup size="small">
				<Button> Primary </Button>
				<Button> Quaternary </Button>
			</ButtonGroup>
		</div>

		<div>
			<ButtonGroup>
				<Button> Primary </Button>
				<Button> Quaternary </Button>
			</ButtonGroup>
		</div>

		<div>
			<ButtonGroup size="large">
				<Button> Primary </Button>
				<Button> Primary </Button>
				<Button> Quaternary </Button>
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
		<Checkbox
			size="small"
			direction="left"
			label="Check Me!"
			:checked="check"
			:disabled="false"
			@on-change="useCheck"
		/>
		<Checkbox
			size="medium"
			direction="left"
			label="Check Me!"
			:checked="check"
			:disabled="false"
			@on-change="useCheck"
		/>
		<div>
			<Avatar
				src="https://files.kick.com/images/user/27079011/profile_image/conversion/6e002a5e-8fd1-461c-8c7a-79fe6b71cdff-medium.webp"
				size="medium"
				rounded="rounded"
			/>
			<AvatarGroup :max-display="3">
				<Avatar
					src="https://files.kick.com/images/user/27079011/profile_image/conversion/6e002a5e-8fd1-461c-8c7a-79fe6b71cdff-medium.webp"
					size="medium"
					rounded="rounded"
				/>
				<Avatar
					src="https://files.kick.com/images/user/27079011/profile_image/conversion/6e002a5e-8fd1-461c-8c7a-79fe6b71cdff-medium.webp"
					size="medium"
					rounded="rounded"
				/>
			</AvatarGroup>

			<div :style="{ display: 'flex', flexDirection: 'column', gap: '1rem', gridColumn: '2 / 4' }">
				<Tabs default-value="0" full-width @value-change="v => console.log(v)">
					<TabsList>
						<TabsTrigger value="0">
							Tab 1
						</TabsTrigger>
						<TabsTrigger value="1">
							Tab 2
						</TabsTrigger>
						<TabsTrigger value="2">
							Tab 3
						</TabsTrigger>
					</TabsList>
				</Tabs>

				<Tabs default-value="0">
					<TabsList>
						<TabsTrigger value="0">
							Tab 1
						</TabsTrigger>
						<TabsTrigger value="1">
							Tab 2
						</TabsTrigger>
						<TabsTrigger value="2">
							Tab 3
						</TabsTrigger>
					</TabsList>
				</Tabs>

				<Tabs default-value="0" full-width type="segmented">
					<TabsList>
						<TabsTrigger value="0">
							Tab 1
						</TabsTrigger>
						<TabsTrigger value="1">
							Tab 2
						</TabsTrigger>
						<TabsTrigger value="2">
							Tab 3
						</TabsTrigger>
					</TabsList>
				</Tabs>

				<Tabs default-value="0" type="segmented">
					<TabsList>
						<TabsTrigger value="0">
							Tab 1
						</TabsTrigger>
						<TabsTrigger value="1">
							Tab 2
						</TabsTrigger>
						<TabsTrigger value="2">
							Tab 3
						</TabsTrigger>
					</TabsList>

					<TabsContent value="0">
						Content for Tab 1
					</TabsContent>
					<TabsContent value="1">
						Content for Tab 2
					</TabsContent>
					<TabsContent value="2">
						Content for Tab 3
					</TabsContent>
				</Tabs>
			</div>
		</div>
	</Container>
</template>
