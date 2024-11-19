<script setup lang="ts">
import { Avatar, AvatarGroup, Button, ButtonGroup, Container, Icon, Toggle } from '@blank/vue'

const avatars = [
	{ name: 'Berke Yılmaz', src: 'https://files.kick.com/images/user/27079011/profile_image/conversion/6e002a5e-8fd1-461c-8c7a-79fe6b71cdff-medium.webp' },
	{ name: 'Gamze Hanım', src: 'https://files.kick.com/images/user/26616760/profile_image/conversion/c5c62ef5-eef7-42b8-a491-d4c8d7a30214-fullsize.webp' },
	{ name: 'Ali Veli', src: 'https://files.kick.com/images/user/1793403/profile_image/conversion/15a48d7b-0b0a-4a7b-86eb-d5596dd6d27b-thumb.webp' },
	{ name: 'Ayşe Fatma', src: 'https://files.kick.com/images/user/7647446/profile_image/conversion/0b68d46c-9043-4b0e-9b3a-e13ec6b6e96b-thumb.webp' },
	{ name: 'Mehmet Can' },
]
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

		<div>
			<Avatar
				src="https://files.kick.com/images/user/27079011/profile_image/conversion/6e002a5e-8fd1-461c-8c7a-79fe6b71cdff-medium.webp"
				size="medium"
				rounded="rounded"
			/>
			<AvatarGroup
				:avatars="avatars"
				:max-display="2"
				size="medium"
				rounded="rounded"
			/>
		</div>
	</Container>
</template>
