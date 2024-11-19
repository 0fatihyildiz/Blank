import type { AvatarGroupsProps, AvatarProps } from '@blank/types'
import type { PropsWithChildren } from 'react'
import Avatar from './avatar'

function AvatarGroup({ avatars, maxDisplay = 3, size = 'medium', rounded }: PropsWithChildren<AvatarGroupsProps>) {
    const displayAvatars = avatars.slice(0, maxDisplay)
    const remainingCount = avatars.length - maxDisplay

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
            {remainingCount > 0 && (
                <span className={`avatar-group__extra avatar--${size}`}>
                    +
                    {remainingCount}
                </span>
            )}
        </div>
    )
}

export default AvatarGroup
