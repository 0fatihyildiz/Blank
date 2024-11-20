import type { AvatarGroupsProps } from '@blank/types'
import type { PropsWithChildren } from 'react'
import Avatar from './avatar'

function AvatarGroup({ avatars, maxDisplay = 3, size = 'medium', rounded }: PropsWithChildren<AvatarGroupsProps>) {
    const displayAvatars = avatars.slice(0, maxDisplay)

    return (
        <div className="blank__avatar-group ">
            {displayAvatars.map((avatar, index) => (
                <Avatar
                    key={index}
                    src={avatar.src}
                    name={avatar.name}
                    size={size}
                    rounded={rounded}
                />
            ))}
        </div>
    )
}

export default AvatarGroup
