import type { BadgeProps } from '@blank/types'
import type { PropsWithChildren } from 'react'

function Badge({ size, variant, children, onClick }: PropsWithChildren<BadgeProps>) {
    return (
        <div
            onClick={onClick}
            className={`blank__badge ${variant} ${size} ${onClick ? 'clickable' : ''}`}
        >
            {children}
        </div>
    )
}

export default Badge
