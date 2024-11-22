import type { InputProps } from '@blank/types'
import { useMemo } from 'react'
import { Icon } from '../../common'

interface BaseInputProps extends InputProps {
    value?: string
    onChange?: (value: string) => void
    className?: string
    children?: React.ReactNode
    tailSlot?: React.ReactNode
    leadSlot?: React.ReactNode
}

export function BaseInput({
    id = 'input',
    type = 'text',
    size = 'medium',
    disabled,
    error,
    label,
    placeholder,
    tail,
    lead,
    value,
    onChange,
    tailSlot,
    leadSlot,
    className,
    children,
}: BaseInputProps) {
    const classes = useMemo(() => ({
        disabled,
        error,
    }), [disabled, error]) as { [key: string]: boolean | undefined }

    const tailContent = useMemo(() => tail || tailSlot, [tail, tailSlot])
    const leadContent = useMemo(() => lead || leadSlot, [lead, leadSlot])

    return (
        <div className={`blank input ${Object.keys(classes).filter(k => classes[k]).join(' ')} ${className || ''}`.trim()}>
            <label className="blank input__label" htmlFor={id}>
                {label}
            </label>
            <div className={`blank input__base ${size}`}>
                {(tailContent) && (
                    <div className={`slot tail ${tail?.size || 'small'}`}>
                        {tailSlot || (tail?.name && <Icon name={tail.name} size={tail.size} />)}
                    </div>
                )}

                <input
                    id={id}
                    value={value}
                    onChange={e => onChange?.(e.target.value)}
                    aria-describedby={error ? 'hint' : undefined}
                    aria-invalid={error ? 'true' : undefined}
                    type={type}
                    placeholder={placeholder}
                    className={`
                        ${tail ? `tail__${tail?.size || 'small'}` : ''}
                        ${lead ? `lead__${lead?.size || 'small'}` : ''}
                    `.trim()}
                    disabled={disabled}
                />

                {(leadContent) && (
                    <div className={`slot lead ${lead?.size || 'small'}`}>
                        {leadSlot || (lead?.name && <Icon name={lead.name} size={lead.size} />)}
                    </div>
                )}
            </div>
            {children}
        </div>
    )
}

export default BaseInput
