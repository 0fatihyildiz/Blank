import type { AvatarGroupsProps } from '@blank/types'
import type { PropsWithChildren } from 'react'
import React from 'react'

function AvatarGroup({ maxDisplay, children }: PropsWithChildren<AvatarGroupsProps>) {
    const childrenArray = React.Children.toArray(children)
    const displayedAvatars = childrenArray.slice(0, maxDisplay)

    return (
        <div className="blank__avatar-group" role="list" aria-label="Avatar group">
            {displayedAvatars.map((child, index) => (
                <div key={index} role="listitem">
                    {child}
                </div>
            ))}
        </div>
    )
}

export default AvatarGroup
