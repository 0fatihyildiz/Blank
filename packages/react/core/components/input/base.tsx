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
    ...props
}: BaseInputProps) {
    const classes = useMemo(() => ({
        disabled,
        error,
    }), [disabled, error]) as {
        [key: string]: boolean | undefined
    }

    const tailContent = useMemo(() => props.tail || props.tailSlot, [props.tail, props.tailSlot])
    const leadContent = useMemo(() => props.lead || props.leadSlot, [props.lead, props.leadSlot])

    return (
        <div className={`blank input ${Object.keys(classes).filter(k => classes[k]).join(' ')}${props.className || ''}`.trim()}>
            <label className="blank input__label" htmlFor={id}>
                {props.label}
            </label>
            <div className={`blank input__base ${size}`}>
                {(tailContent) && (
                    <div className={`slot tail ${props.tail?.size || 'small'}`}>
                        {props.tailSlot || (props.tail?.name && <Icon name={props.tail.name} size={props.tail.size} />)}
                    </div>
                )}

                <input
                    id={id}
                    value={props.value}
                    onChange={e => props.onChange?.(e.target.value)}
                    aria-describedby={error ? 'hint' : undefined}
                    aria-invalid={error ? 'true' : undefined}
                    type={type}
                    placeholder={props.placeholder}
                    className={`${props.tail ? `tail__${props.tail?.size || 'small'}` : ''} ${props.lead ? `lead__${props.lead?.size || 'small'}` : ''}`.trim()}
                    disabled={disabled}
                />

                {(leadContent) && (
                    <div className={`slot lead ${props.lead?.size || 'small'}`}>
                        {props.leadSlot || (props.lead?.name && <Icon name={props.lead.name} size={props.lead.size} />)}
                    </div>
                )}
            </div>
            {props.children}
        </div>
    )
}

export default BaseInput
