import { Avatar, AvatarGroup, Badge, BadgeGroup, Button, Icon, Tabs, TabsContent, TabsList, TabsTrigger, Toggle } from '@blank/react'

function App() {
	const test = () => {
		console.log('test')
	}
	return (
		<div>
			<Button size="small">
				<Icon name="remix:command-fill" />
				Click me
				<Icon name="remix:arrow-right-line" />
			</Button>

			<Button size="small" variant="secondary">
				<Icon name="remix:command-fill" />
				Click me
				<Icon name="remix:arrow-right-line" />
			</Button>

			<Button size="small" variant="tertiary">
				<Icon name="remix:command-fill" />
				Click me
				<Icon name="remix:arrow-right-line" />
			</Button>

			<Button size="small" variant="quaternary">
				<Icon name="remix:command-fill" />
				Click me
				<Icon name="remix:arrow-right-line" />
			</Button>

			<Button size="small" variant="destructive">
				<Icon name="remix:command-fill" />
				Don't Click me
				<Icon name="remix:arrow-right-line" />
			</Button>
			<div style={{ display: 'flex', flexDirection: 'column' }}>
				<Toggle size="small"></Toggle>
				<Toggle size="medium"></Toggle>
				<Toggle size="small" disabled></Toggle>
				<Toggle size="medium" disabled></Toggle>
				<Toggle label="berke" labelDirection="right" size="small"></Toggle>
				<Toggle label="berke" labelDirection="left" size="medium"></Toggle>
				<Toggle size="medium" label="berke" disabled></Toggle>
			</div>
			<div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
				<Badge onClick={test} variant="primary" size="medium">
					berke
					<Icon name="remix:command-fill" />
				</Badge>
				<Badge onClick={test} variant="primary" size="small">
					<Icon name="remix:command-fill" />
					berke
				</Badge>
			</div>
			<BadgeGroup onClick={test} variant="success">
				<Badge variant="primary" size="medium">
					berke
					<Icon name="remix:command-fill" />
				</Badge>
				<Badge variant="primary" size="small">
					<Icon name="remix:command-fill" />
					berke
				</Badge>
			</BadgeGroup>
			<Avatar src="https://files.kick.com/images/user/27079011/profile_image/conversion/6e002a5e-8fd1-461c-8c7a-79fe6b71cdff-medium.webp" size="medium" rounded="rounded"></Avatar>
			<AvatarGroup>
				<Avatar src="https://files.kick.com/images/user/27079011/profile_image/conversion/6e002a5e-8fd1-461c-8c7a-79fe6b71cdff-medium.webp" size="medium" rounded="rounded"></Avatar>
				<Avatar src="https://files.kick.com/images/user/27079011/profile_image/conversion/6e002a5e-8fd1-461c-8c7a-79fe6b71cdff-medium.webp" size="medium" rounded="rounded"></Avatar>
				<Avatar src="https://files.kick.com/images/user/27079011/profile_image/conversion/6e002a5e-8fd1-461c-8c7a-79fe6b71cdff-medium.webp" size="medium" rounded="rounded"></Avatar>
				<Avatar src="https://files.kick.com/images/user/27079011/profile_image/conversion/6e002a5e-8fd1-461c-8c7a-79fe6b71cdff-medium.webp" size="medium" rounded="rounded"></Avatar>
				<Avatar src="https://files.kick.com/images/user/27079011/profile_image/conversion/6e002a5e-8fd1-461c-8c7a-79fe6b71cdff-medium.webp" size="medium" rounded="rounded"></Avatar>
			</AvatarGroup>
			<div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
				<Tabs
					defaultValue={0}
					onValueChange={v => console.log(v)}
					fullWidth
				>
					<TabsList>
						<TabsTrigger value={0}>Tab 1</TabsTrigger>
						<TabsTrigger value={1}>Tab 2</TabsTrigger>
						<TabsTrigger value={2}>Tab 3</TabsTrigger>
					</TabsList>
				</Tabs>

				<Tabs
					defaultValue={0}
				>
					<TabsList>
						<TabsTrigger value={0}>Tab 1</TabsTrigger>
						<TabsTrigger value={1}>Tab 2</TabsTrigger>
						<TabsTrigger value={2}>Tab 3</TabsTrigger>
					</TabsList>
				</Tabs>

				<Tabs
					defaultValue={0}
					fullWidth
					type="segmented"
				>
					<TabsList>
						<TabsTrigger value={0}>Tab 1</TabsTrigger>
						<TabsTrigger value={1}>Tab 2</TabsTrigger>
						<TabsTrigger value={2}>Tab 3</TabsTrigger>
					</TabsList>
				</Tabs>

				<Tabs
					defaultValue={0}
					type="segmented"
				>
					<TabsList>
						<TabsTrigger value={0}>Tab 1</TabsTrigger>
						<TabsTrigger value={1}>Tab 2</TabsTrigger>
						<TabsTrigger value={2}>Tab 3</TabsTrigger>
					</TabsList>

					<TabsContent value={0}>Content for Tab 1</TabsContent>
					<TabsContent value={1}>Content for Tab 2</TabsContent>
					<TabsContent value={2}>Content for Tab 3</TabsContent>
				</Tabs>
			</div>
		</div>
	)
}

export default App
