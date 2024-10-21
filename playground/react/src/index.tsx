import { Button, Icon } from '@blank/react'

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
		</div>
	)
}

export default App
