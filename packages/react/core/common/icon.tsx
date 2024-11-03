// import * as Icons from '@remixicon/react'

// type IconName = keyof typeof Icons

interface IconProps {
	// name: IconName
	size?: number
	color?: string
}

const Icon: React.FC<IconProps> = ({ size = 24, color = 'currentColor' }) => {
	// const IconComponent = Icons[name]

	// if (!IconComponent) {
	// 	console.warn(`Icon "${name}" not found in Remix Icons.`)
	// 	return null
	// }

	// return <IconComponent size={size} color={color} />
	return null
}

export default Icon
