import { Button, Icon, Toggle } from '@blank/react'

function App() {
	return (
		<div>
			<Button size="small">
				<Icon name="RiCommandFill" size={20} />
				Click me
				<Icon name="RiArrowRightLine" size={20} />
			</Button>

			<Button size="small" variant="secondary">
				<Icon name="RiCommandFill" size={20} />
				Click me
				<Icon name="RiArrowRightLine" size={20} />
			</Button>

			<Button size="small" variant="tertiary">
				<Icon name="RiCommandFill" size={20} />
				Click me
				<Icon name="RiArrowRightLine" size={20} />
			</Button>

			<Button size="small" variant="quaternary">
				<Icon name="RiCommandFill" size={20} />
				Click me
				<Icon name="RiArrowRightLine" size={20} />
			</Button>

			<Button size="small" variant="destructive">
				<Icon name="RiCommandFill" size={20} />
				Don't Click me
				<Icon name="RiArrowRightLine" size={20} />
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

		</div>
	)
}

export default App
