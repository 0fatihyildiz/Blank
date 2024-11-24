import type { AvatarProps } from '@blank/types'
import type { PropsWithChildren } from 'react'

function Avatar({ size = 'medium', name, src, rounded = 'none' }: PropsWithChildren<AvatarProps>) {
    const initials = name
        ? name
            .split(' ')
            .map(word => word.charAt(0).toUpperCase())
            .join('')
            .slice(0, 2)
        : ''

    return (
        <div className={`blank avatar ${size} ${rounded}`} role="img" aria-label={name ? `${name}'s avatar` : 'User avatar'}>
            {src
                ? (
                        <img src={src} alt={name ? `${name}'s avatar` : 'User avatar'} className="src" />
                    )
                : initials
                    ? (
                            <span>{initials}</span>
                        )
                    : (
                            <img src="" alt="default avatar" className="src" />
                        )}
        </div>
    )
}

export default Avatar
