import type { BadgeGroupProps } from '@blank/types'
import { Icon } from '@iconify/react'

function BadgeGroup({ variant, badges, onClick }: BadgeGroupProps) {
    return (
        <div onClick={onClick} className={`blank badge-group ${variant || ''} ${onClick ? 'clickable' : ''}`}>
            {badges.map((badge, index) => (
                <div
                    key={index}
                    className="blank badge small"
                    style={{
                        backgroundColor: badge.backgroundColor || 'transparent',
                        color: badge.color || '#000',
                    }}
                >
                    {badge.label}
                    {badge.icon && (
                        <Icon icon={badge.icon} />

                    )}
                </div>
            ))}
        </div>
    )
}

export default BadgeGroup
