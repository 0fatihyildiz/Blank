import type { Remix, Social, Status } from '@blank/icons'
import type { Prefix } from '.'

type RemixIconNames = Prefix<'remix', keyof typeof Remix.icons>
type StatusIconNames = Prefix<'status', keyof typeof Status.icons>
type SocialIconNames = Prefix<'social', keyof typeof Social.icons>

interface IconProps {
    name: RemixIconNames | StatusIconNames | SocialIconNames
    size?: string
    color?: string
}

export type { IconProps }
