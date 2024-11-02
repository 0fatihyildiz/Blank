import type { ButtonProps } from '@blank/types'
import type { PropsWithChildren } from 'react'

function Button({ variant = 'primary', size = 'medium', disabled, children }: PropsWithChildren<ButtonProps>) {
    return (
        <button className={`blank__button ${variant} ${size} ${disabled ? 'disabled' : ''}`} disabled={disabled}>
            {children}
        </button>
    )
}

export default Button
