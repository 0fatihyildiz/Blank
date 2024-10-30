interface ButtonProps {
    variant?: 'primary' | 'secondary' | 'tertiary' | 'quaternary' | 'destructive'
    size?: 'small' | 'medium' | 'large'
    appearance?: 'default' | 'text' | 'icon'
    disabled?: boolean
    icon?: string
}

export type { ButtonProps }
