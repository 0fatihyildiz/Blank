interface BadgeProps {
    size?: 'small' | 'medium'
    variant?: 'default' | 'neutral' | 'destructive' | 'warning' | 'success' | 'primary' | 'white'
    onClick?: () => void
}

export type { BadgeProps }
