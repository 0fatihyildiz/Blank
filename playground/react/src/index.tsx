import { Button, Icon } from '@blank/react'

function App() {
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
		</div>
	)
}

export default App
