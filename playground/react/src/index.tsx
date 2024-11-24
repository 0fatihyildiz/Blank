import {
	Avatar,
	AvatarGroup,
	Badge,
	BadgeGroup,
	Button,
	ButtonGroup,
	Container,
	Icon,
	Input,
	// Radio,
	// RadioGroup,
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
	Toggle,
} from '@blank/react'

const IndexPage: React.FC = () => {
	const badges = [
		{ label: 'test', backgroundColor: 'grey', color: 'white' },
		{ label: 'test', backgroundColor: 'transparent', color: 'white', icon: 'remix:command-fill' },
	]

	const handleClick = () => {
		console.log('Badge group clicked!')
	}

	return (
		<Container>
			{/* <RadioGroup value={selectedRadio} onChange={setSelectedRadio} size="medium" direction="right-group">
				<Radio label="Kerem" />
				<Radio label="Kerem1" />
				<Radio label="Kerem2" />
			</RadioGroup> */}

			<Button variant="primary">Click me</Button>

			<Button variant="secondary">
				<Icon name="remix:command-fill" size="medium" />
				Click me
			</Button>

			<Button variant="tertiary">Click me</Button>

			<Button variant="quaternary">Click me</Button>

			<Input
				id="test"
				label="Label"
				helper="Helper text"
				placeholder="Placeholder"
				size="medium"
				tail={{ size: 'medium' }}
				tailSlot={<Button size="small">Click</Button>}
				lead={{ name: 'remix:command-fill', type: 'icon', size: 'small' }}
			/>

			<Input
				id="test5"
				label="Label"
				appearance="url"
				placeholder="Placeholder"
				lead={{
					name: 'remix:command-fill',
					type: 'icon',
					size: 'small',
				}}
			/>
			<Input id="test5" label="Label" appearance="phone" placeholder="Placeholder" />
			<Input id="test5" label="Label" appearance="currency" placeholder="Placeholder" />
			<Input id="test6" label="Label" appearance="credit-card" placeholder="Placeholder" size="large" />

			<Input
				id="test1"
				label="Label"
				helper="Helper text"
				placeholder="Placeholder"
				size="large"
			/>

			<Input
				id="test2"
				label="Label"
				helper="Helper text"
				error="This is an error text"
				placeholder="Placeholder"
				size="large"
			/>

			<Input
				id="test3"
				label="Label"
				helper="Helper text"
				error="This is an error text"
				placeholder="Placeholder"
				size="large"
				tail={{ name: 'remix:admin-fill', type: 'icon', size: 'small' }}
				lead={{ name: 'remix:command-fill', type: 'icon', size: 'small' }}
				disabled
			/>

			<div>
				<ButtonGroup size="small">
					<Button>Primary</Button>
					<Button>Quaternary</Button>
				</ButtonGroup>
			</div>

			<div>
				<ButtonGroup>
					<Button>Primary</Button>
					<Button>Quaternary</Button>
				</ButtonGroup>
			</div>

			<div>
				<ButtonGroup size="large">
					<Button>Primary</Button>
					<Button>Primary</Button>
					<Button>Quaternary</Button>
				</ButtonGroup>
			</div>

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
				<Toggle size="small" />
				<Toggle size="medium" />
				<Toggle size="small" disabled />
				<Toggle size="medium" disabled />

				<Toggle label="berke" labelDirection="left" size="small" />
				<Toggle label="berke" labelDirection="right" size="medium" />
				<Toggle label="berke" size="medium" disabled />
			</div>

			<Badge variant="default" onClick={handleClick}>
				test
			</Badge>
			<BadgeGroup variant="primary" badges={badges} onClick={handleClick} />

			<div>
				<Avatar
					src="https://files.kick.com/images/user/27079011/profile_image/conversion/6e002a5e-8fd1-461c-8c7a-79fe6b71cdff-medium.webp"
					size="medium"
					rounded="rounded"
				/>
				<AvatarGroup maxDisplay={3}>
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

				<div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', gridColumn: '2 / 4' }}>
					<Tabs defaultValue="0" fullWidth onValueChange={v => console.log(v)}>
						<TabsList>
							<TabsTrigger value="0">Tab 1</TabsTrigger>
							<TabsTrigger value="1">Tab 2</TabsTrigger>
							<TabsTrigger value="2">Tab 3</TabsTrigger>
						</TabsList>
					</Tabs>

					<Tabs defaultValue="0">
						<TabsList>
							<TabsTrigger value="0">Tab 1</TabsTrigger>
							<TabsTrigger value="1">Tab 2</TabsTrigger>
							<TabsTrigger value="2">Tab 3</TabsTrigger>
						</TabsList>
					</Tabs>

					<Tabs defaultValue="0" fullWidth type="segmented">
						<TabsList>
							<TabsTrigger value="0">Tab 1</TabsTrigger>
							<TabsTrigger value="1">Tab 2</TabsTrigger>
							<TabsTrigger value="2">Tab 3</TabsTrigger>
						</TabsList>
					</Tabs>

					<Tabs defaultValue="0" type="segmented">
						<TabsList>
							<TabsTrigger value="0">Tab 1</TabsTrigger>
							<TabsTrigger value="1">Tab 2</TabsTrigger>
							<TabsTrigger value="2">Tab 3</TabsTrigger>
						</TabsList>

						<TabsContent value="0">Content for Tab 1</TabsContent>
						<TabsContent value="1">Content for Tab 2</TabsContent>
						<TabsContent value="2">Content for Tab 3</TabsContent>
					</Tabs>
				</div>
			</div>
		</Container>
	)
}

export default IndexPage
