import type { IconProps } from '@/common'

interface InputProps {
    type: 'text' | 'password' | 'email'
    size?: 'medium' | 'large'
    appearance?: 'default' | 'phone' | 'currency' | 'crypto' | 'url' | 'credit-card'
    label?: string
    placeholder?: string
    helper?: string
    disabled?: boolean
    error?: string
    leadIcon?: IconProps['name']
    tailIcon?: IconProps['name']
}

export type { InputProps }
