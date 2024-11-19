import type { ButtonProps } from '@blank/types' // Importing ButtonProps from @blank/types
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
        'blank__button',
        buttonAppearance,
        buttonVariant,
        buttonSize,
    )

    return (
        <button className={classes} disabled={disabled}>
            {children}
        </button>
    )
}

export default Button
