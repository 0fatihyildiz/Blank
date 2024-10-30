import type { CompanyLogos, Crypto, PaymentsMethodsLogos, SocialMedia } from '@blank/icons'
import type { Prefix } from '.'

type CompanyLogosIconNames = Prefix<'company', keyof typeof CompanyLogos.icons>
type CryptoIconNames = Prefix<'crypto', keyof typeof Crypto.icons>
type SocialMediaIconNames = Prefix<'social', keyof typeof SocialMedia.icons>
type PaymentsMethodsLogosIconNames = Prefix<'payments', keyof typeof PaymentsMethodsLogos.icons>

interface LogosProps {
    name: CompanyLogosIconNames | CryptoIconNames | SocialMediaIconNames | PaymentsMethodsLogosIconNames
    size?: string
    color?: string
}

export type { LogosProps }
