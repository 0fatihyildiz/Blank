import * as Icons from '@remixicon/react'

type IconName = keyof typeof Icons

interface IconProps {
	name: IconName
	size?: number
	color?: string
}

const Icon: React.FC<IconProps> = ({ name, size = 24, color = 'black' }) => {
	const IconComponent = Icons[name]

	if (!IconComponent) {
		console.warn(`Icon "${name}" not found in Remix Icons.`)
		return null
	}

	return <IconComponent size={size} color={color} />
}

export default Icon
