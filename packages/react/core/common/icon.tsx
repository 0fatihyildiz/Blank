import type { IconProps } from '@blank/types'
import { Cryptocurrency, Logos, Payment, Remix } from '@blank/icons'
import { addCollection, Icon as IconComponent } from '@iconify/react'

const Icon: React.FC<IconProps> = ({ name, ...props }) => {
    addCollection(Cryptocurrency)
    addCollection(Logos)
    addCollection(Payment)
    addCollection(Remix)

    return <IconComponent {...props} icon={name} />
}

export default Icon
