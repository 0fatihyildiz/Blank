<script setup lang="ts">
import { Button, ButtonGroup, Container, Icon, Tabs, TabsContent, TabsList, TabsTrigger, Toggle } from '@blank/vue'
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
	</Container>
</template>
