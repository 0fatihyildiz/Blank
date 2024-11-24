import type { BadgeGroupProps } from '@blank/types'
import type { PropsWithChildren } from 'react'
import React from 'react'

function BadgeGroup({ variant, onClick, children }: PropsWithChildren<BadgeGroupProps>) {
    return (
        <div
            onClick={onClick}
            className={`blank badge-group ${variant || ''} ${onClick !== undefined ? 'clickable' : ''}`}
            role={onClick ? 'group' : undefined}
            aria-label="Badge group"
        >
            {React.Children.map(children, (child, index) => (
                <div key={index} role="button" aria-disabled={onClick ? undefined : true}>
                    {child}
                </div>
            ))}
        </div>
    )
}

export default BadgeGroup
