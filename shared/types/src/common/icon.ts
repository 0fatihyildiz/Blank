import type { Cryptocurrency, Logos, Payment, Remix } from '@blank/icons'
import type { Prefix } from '.'

type CryptocurrencyName = keyof typeof Cryptocurrency['icons']
type LogosName = keyof typeof Logos['icons']
type PaymentNames = keyof typeof Payment['icons']
type RemixNames = keyof typeof Remix['icons']

type RemixIconNames = Prefix<'remix', RemixNames>
type LogosIconNames = Prefix<'logo', LogosName>
type CryptocurrencyIconNames = Prefix<'cryptocurrency', CryptocurrencyName>
type PaymentIconNames = Prefix<'payment', PaymentNames>

interface IconProps {
    size?: 'small' | 'medium' | 'large'
    color?: string
    name: RemixIconNames | LogosIconNames | CryptocurrencyIconNames | PaymentIconNames
    inherit?: boolean
}

export type { IconProps }
