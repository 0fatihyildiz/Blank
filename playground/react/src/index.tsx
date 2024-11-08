import { Badge, BadgeGroup, Button, Icon, Toggle } from '@blank/react'

function App() {
	const badges = [{ label: 'test', backgroundColor: 'grey', color: 'white' }, { label: 'test', backgroundColor: 'transparent', color: 'white', icon: 'remix:command-fill' }]
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
		</div>
	)
}

export default App
