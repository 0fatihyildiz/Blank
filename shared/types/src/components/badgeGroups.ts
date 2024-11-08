interface BadgeItem {
    icon?: string
    label?: string
    backgroundColor?: string
    color?: string
}

interface BadgeGroupProps {
    variant?: 'default' | 'neutral' | 'destructive' | 'warning' | 'success' | 'primary' | 'white' | 'info'
    badges: BadgeItem[]
    onClick?: () => void
}

export type { BadgeGroupProps, BadgeItem }
