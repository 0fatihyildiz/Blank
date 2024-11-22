import type { CheckboxProps } from '@blank/types'
import React from 'react'

const Checkbox: React.FC<CheckboxProps> = ({
    size = 'medium',
    direction,
    label,
    checked,
    onChange,
    disabled = false,
}) => {
    const handleClick = () => {
        if (disabled)
            return
        if (onChange) {
            onChange(!checked)
        }
    }

    return (
        <div
            className={`blank checkbox ${size} ${direction} ${disabled ? 'disabled' : ''}`}
            onClick={handleClick}
            tabIndex={disabled ? -1 : 0}
            role="checkbox"
            aria-checked={checked}
            aria-disabled={disabled}
        >
            <input
                type="checkbox"
                className={`blank checkbox__input ${size}`}
                checked={checked}
                onChange={e => e.stopPropagation()}
                aria-label={label}
                disabled={disabled}
            />
            <span className={`blank checkbox__label ${size} ${disabled ? 'disabled' : ''}`}>
                {label}
            </span>
        </div>
    )
}

export default Checkbox
