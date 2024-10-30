import type { Remix, Stars, Status } from '@blank/icons'
import type { Prefix } from '.'

type RemixIconNames = Prefix<'remix', keyof typeof Remix.icons>
type StarsIconNames = Prefix<'stars', keyof typeof Stars.icons>
type StatusIconNames = Prefix<'status', keyof typeof Status.icons>

interface IconProps {
    name: RemixIconNames | StarsIconNames | StatusIconNames
    size?: string
    color?: string
}

export type { IconProps }
