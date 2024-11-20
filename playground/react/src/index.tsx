import { Avatar, AvatarGroup, Badge, BadgeGroup, Button, Icon, Tabs, TabsContent, TabsList, TabsTrigger, Toggle } from '@blank/react'

function App() {
	const badges = [{ label: 'test', backgroundColor: 'grey', color: 'white' }, { label: 'test', backgroundColor: 'transparent', color: 'white', icon: 'remix:command-fill' }]

	const avatars = [
		{ name: 'Berke Yılmaz', src: 'https://files.kick.com/images/user/27079011/profile_image/conversion/6e002a5e-8fd1-461c-8c7a-79fe6b71cdff-medium.webp' },
		{ name: 'Gamze Hanım', src: 'https://files.kick.com/images/user/26616760/profile_image/conversion/c5c62ef5-eef7-42b8-a491-d4c8d7a30214-fullsize.webp' },
		{ name: 'Ali Veli', src: 'https://files.kick.com/images/user/1793403/profile_image/conversion/15a48d7b-0b0a-4a7b-86eb-d5596dd6d27b-thumb.webp' },
		{ name: 'Ayşe Fatma', src: 'https://files.kick.com/images/user/7647446/profile_image/conversion/0b68d46c-9043-4b0e-9b3a-e13ec6b6e96b-thumb.webp' },
		{ name: 'Mehmet Can', src: '' },
	]
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
				<Badge variant="primary" size="medium">
					berke
					<Icon name="remix:command-fill" />
				</Badge>
				<Badge variant="primary" size="small">
					<Icon name="remix:command-fill" />
					berke
				</Badge>
			</div>
			<BadgeGroup variant="info" badges={badges}>
			</BadgeGroup>
			<Avatar src="https://files.kick.com/images/user/27079011/profile_image/conversion/6e002a5e-8fd1-461c-8c7a-79fe6b71cdff-medium.webp" size="medium" rounded="rounded"></Avatar>
			<AvatarGroup avatars={avatars} maxDisplay={8} size="medium" rounded="rounded" />
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
