import type { ButtonProps } from '@blank/types'
import type { PropsWithChildren } from 'react'
import clsx from 'clsx'
import React, { useEffect, useState } from 'react'
import { useButtonGroup } from './buttonGroup'

const Button: React.FC<PropsWithChildren<ButtonProps>> = ({
    variant = 'primary',
    size = 'medium',
    appearance = 'default',
    disabled = false,
    children,
}) => {
    const buttonGroup = useButtonGroup()

    const [buttonVariant, setButtonVariant] = useState(variant)
    const [buttonSize, setButtonSize] = useState(size)
    const [buttonAppearance, setButtonAppearance] = useState(appearance)

    useEffect(() => {
        if (buttonGroup) {
            setButtonSize(buttonGroup.size || size)
            setButtonVariant('secondary')
            setButtonAppearance('default')
        }
    }, [buttonGroup, size])

    const classes = clsx(
        'blank button',
        buttonAppearance,
        buttonVariant,
        buttonSize,
        {
            clickable: !disabled,
        },
    )

    return (
        <button
            className={classes}
            disabled={disabled}
            role="button"
            aria-disabled={disabled}
            aria-label="Button"
        >
            {children}
        </button>
    )
}

export default Button
