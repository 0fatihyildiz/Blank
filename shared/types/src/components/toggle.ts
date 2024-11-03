interface ToggleProps {
    size?: 'small' | 'medium'
    checked?: boolean | number | string | null
    onChange?: (newValue: boolean) => void
    label?: string
    labelDirection?: 'left' | 'right'
    disabled?: boolean
}

export type { ToggleProps }
