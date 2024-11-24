import type { InputProps } from '@blank/types'
import React, { useEffect, useMemo, useState } from 'react'
import Base from './base'

interface CurrencyVal {
    [key: string]: {
        symbol: string
        name: string
        symbol_native: string
        decimal_digits: number
        rounding: number
        code: string
        name_plural: string
    }
}

interface CurrencyProps extends InputProps {
    className?: string
    value: string
    onChange: (value: string) => void
}

const Currency: React.FC<CurrencyProps> = (props) => {
    const [currency, setCurrency] = useState<CurrencyVal | null>(null)
    const [selectedCurrency, setSelectedCurrency] = useState('USD')

    useEffect(() => {
        fetch('https://gist.githubusercontent.com/ksafranski/2973986/raw/5fda5e87189b066e11c1bf80bbfbecb556cf2cc1/Common-Currency.json')
            .then(response => response.json())
            .then((data) => {
                setCurrency(data)
            })
            .catch((error) => {
                console.error('Error:', error)
            })
    }, [])

    const handleValueChange = (value: string) => {
        const number = Number.parseFloat(value)
        if (Number.isNaN(number)) {
            props.onChange('')
        }
        else {
            const decimalDigits = currency?.[selectedCurrency]?.decimal_digits ?? 0
            props.onChange(number.toFixed(decimalDigits))
        }
    }

    const computedValue = useMemo(() => {
        const number = Number.parseFloat(props.value)
        if (Number.isNaN(number))
            return ''
        const decimalDigits = currency?.[selectedCurrency]?.decimal_digits ?? 0
        return number.toFixed(decimalDigits)
    }, [props.value, selectedCurrency, currency])

    return (
        <Base
            {...props}
            value={computedValue}
            onChange={val => handleValueChange(val)}
            lead={{ size: 'medium' }}
            tailSlot={
                <span>{currency?.[selectedCurrency]?.symbol}</span>
            }
            leadSlot={(
                <select
                    value={selectedCurrency}
                    onChange={e => setSelectedCurrency(e.target.value)}
                >
                    {currency && Object.values(currency).map(c => (
                        <option key={c.code} value={c.code}>
                            {c.code}
                        </option>
                    ))}
                </select>
            )}
        />
    )
}

export default Currency
