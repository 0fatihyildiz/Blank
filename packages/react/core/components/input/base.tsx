import type { InputProps } from '@blank/types'
// Base.tsx
import React, { useMemo } from 'react'
import Icon from '../../common/icon'

interface BaseProps extends InputProps {
    className?: string
    tailSlot?: React.ReactNode
    leadSlot?: React.ReactNode
    value: string
    onChange?: (value: string) => void
}

const Base: React.FC<BaseProps> = ({
    id = 'input',
    type = 'text',
    size = 'medium',
    label,
    disabled,
    error,
    placeholder,
    tail,
    lead,
    tailSlot,
    leadSlot,
    value,
    onChange,
}) => {
    const classes = useMemo(() => ({
        disabled,
        error,
    }), [disabled, error])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value)
    }

    return (
        <div className={`blank input ${Object.entries(classes)
            .filter(([_, value]) => value)
            .map(([key]) => key)
            .join(' ')}`}
        >
            <label className="blank input__label" htmlFor={id}>
                {label}
            </label>
            <div className={`blank input__base ${size}`}>
                {(tail || tailSlot) && (
                    <div className={`slot tail ${tail?.size || 'small'}`}>
                        {tailSlot || (tail?.name && <Icon name={tail.name} size={tail.size} />)}
                    </div>
                )}

                <input
                    id={id}
                    value={value}
                    onChange={handleChange}
                    aria-describedby={error ? 'hint' : undefined}
                    aria-invalid={error ? true : undefined}
                    type={type}
                    placeholder={placeholder}
                    className={`
            ${tail ? `tail__${tail?.size || 'small'}` : ''}
            ${lead ? `lead__${lead?.size || 'small'}` : ''}`.trim()}
                    disabled={disabled}
                />

                {(lead || leadSlot) && (
                    <div className={`slot lead ${lead?.size || 'small'}`}>
                        {leadSlot || (lead?.name && <Icon name={lead.name} size={lead.size} />)}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Base
