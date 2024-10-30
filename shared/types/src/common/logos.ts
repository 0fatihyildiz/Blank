import type { CompanyLogos } from '@blank/icons'
import type { Prefix } from '.'

type CompanyLogosIconNames = Prefix<'company', keyof typeof CompanyLogos.icons>

interface LogosProps {
    name: CompanyLogosIconNames
    size?: 'medium' | 'small'
    color?: string
}

export type { LogosProps }
