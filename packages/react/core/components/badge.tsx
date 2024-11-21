import type { BadgeProps } from '@blank/types'
import type { PropsWithChildren } from 'react'

function Badge({ size, variant, children, onClick }: PropsWithChildren<BadgeProps>) {
    return (
        <div
            onClick={onClick}
            className={`blank__badge ${variant} ${size} ${onClick !== undefined ? 'clickable' : ''}`}
            role={onClick ? 'button' : undefined}
            aria-label={onClick ? 'Click to perform action' : undefined}
            tabIndex={onClick ? 0 : undefined}
            aria-disabled={!onClick}
        >
            {children}
        </div>
    )
}

export default Badge
