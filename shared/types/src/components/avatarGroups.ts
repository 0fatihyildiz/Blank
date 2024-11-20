interface AvatarGroupsProps {
    avatars: { src: string, name: string }[]
    maxDisplay: number
    size: 'small' | 'medium' | 'large'
    rounded?: 'rounded' | 'semi-rounded' | 'none'
}
export type { AvatarGroupsProps }
