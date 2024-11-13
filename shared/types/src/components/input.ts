import type { IconProps } from '@/common'

interface TailOrLeadProps {
    name?: IconProps['name']
    type?: 'text' | 'icon'
    size?: 'small' | 'medium'
}

interface InputProps {
    id: string
    type?: 'text' | 'password' | 'email'
    size?: 'medium' | 'large'
    appearance?: 'default' | 'phone' | 'currency' | 'crypto' | 'url' | 'credit-card'
    label?: string
    placeholder?: string
    helper?: string
    disabled?: boolean
    error?: string
    lead?: TailOrLeadProps
    tail?: TailOrLeadProps
}

export type { InputProps, TailOrLeadProps }
