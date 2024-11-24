import type { IconProps } from '@blank/types'
import { Cryptocurrency, Logos, Payment, Remix } from '@blank/icons'
import { addCollection, Icon } from '@iconify/react'
import { useMemo } from 'react'

addCollection(Cryptocurrency)
addCollection(Logos)
addCollection(Payment)
addCollection(Remix)

const sizes = {
    small: 16,
    medium: 24,
    large: 32,
} as const

export function IconComponent({
    size = 'medium',
    name,
    color,
    inherit,
    ...props
}: IconProps) {
    const defaultInherit = ['cryptocurrency', 'payment']

    const inheritIcon = useMemo(() =>
        defaultInherit.includes(name.split(':')[0]), [name])

    return (
        <Icon
            icon={name}
            color={(inheritIcon || inherit) ? 'transparent' : color}
            width={sizes[size]}
            height={sizes[size]}
            {...props}
        />
    )
}

export default IconComponent
