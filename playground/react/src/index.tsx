import { Avatar, AvatarGroup, Button, Icon, Toggle } from '@blank/react'

function App() {
	const avatars = [
		{ name: 'Berke Yılmaz', src: 'https://files.kick.com/images/user/27079011/profile_image/conversion/6e002a5e-8fd1-461c-8c7a-79fe6b71cdff-medium.webp' },
		{ name: 'Gamze Hanım', src: 'https://files.kick.com/images/user/26616760/profile_image/conversion/c5c62ef5-eef7-42b8-a491-d4c8d7a30214-fullsize.webp' },
		{ name: 'Ali Veli', src: 'https://files.kick.com/images/user/1793403/profile_image/conversion/15a48d7b-0b0a-4a7b-86eb-d5596dd6d27b-thumb.webp' },
		{ name: 'Ayşe Fatma', src: 'https://files.kick.com/images/user/7647446/profile_image/conversion/0b68d46c-9043-4b0e-9b3a-e13ec6b6e96b-thumb.webp' },
		{ name: 'Mehmet Can' },
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
			<Avatar src="https://files.kick.com/images/user/27079011/profile_image/conversion/6e002a5e-8fd1-461c-8c7a-79fe6b71cdff-medium.webp" size="medium" rounded="rounded"></Avatar>
			<AvatarGroup avatars={avatars} maxDisplay={8} size="medium" rounded="rounded" />

		</div>
	)
}

export default App
