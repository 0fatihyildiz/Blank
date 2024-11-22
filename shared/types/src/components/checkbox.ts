interface CheckboxProps {
    size?: 'small' | 'medium'
    direction?: 'left' | 'right'
    label?: string
    checked?: boolean
    onChange?: (checked: boolean) => void
    disabled?: boolean
}
export type { CheckboxProps }
