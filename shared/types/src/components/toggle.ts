interface ToggleProps {
    size?: 'small' | 'medium'
    disabled?: boolean
    checked?: boolean | number | string | null
    onChange?: (newValue: boolean) => void
    label?: string
    labelDirection?: 'left' | 'right'
}

export type { ToggleProps }
