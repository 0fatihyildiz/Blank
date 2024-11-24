import type { InputProps } from '@blank/types'
import React from 'react'

import Base from './base'
import CreditCard from './creditCard'
import Currency from './currency'
import Phone from './phone'
import Url from './url'

type AppearanceType = 'default' | 'phone' | 'currency' | 'crypto' | 'url' | 'credit-card'

interface InputComponentProps extends InputProps {
    appearance?: AppearanceType
    children?: React.ReactNode
    value?: string
    onChange?: (value: string) => void
    className?: string
    tailSlot?: React.ReactNode
    leadSlot?: React.ReactNode
}

const appearanceMap = {
    'default': Base,
    'phone': Phone,
    'currency': Currency,
    'crypto': undefined,
    'url': Url,
    'credit-card': CreditCard,
} as const

const Input: React.FC<InputComponentProps> = ({
    appearance = 'default',
    children,

    ...inputProps
}) => {
    const Component = appearanceMap[appearance] || Base

    if (!Component) {
        return <Base {...inputProps} value={inputProps.value || ''} className={appearance} />
    }

    return (
        <Component {...inputProps} value={inputProps.value || ''} appearance={appearance} onChange={inputProps.onChange || (() => {})} />
    )
}

export default Input
