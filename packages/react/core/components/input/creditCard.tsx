import type { InputProps } from '@blank/types'
import React, { useState } from 'react'
import Icon from '../../common/icon'
import Base from './base'

interface CreditCardProps extends InputProps {
    className?: string
    value?: string
    onChange?: (value: string) => void
}

const CreditCard: React.FC<CreditCardProps> = (props) => {
    const [cardNumber, setCardNumber] = useState('')
    const [expiryDate, setExpiryDate] = useState('')
    const [cvv, setCvv] = useState('')

    const formatCardNumber = (value: string) => {
        return value.replace(/\D/g, '').replace(/(\d{4})(?=\d)/g, '$1 ')
    }

    const formatExpiryDate = (value: string) => {
        return value
            .replace(/\D/g, '')
            .replace(/^(\d{2})(\d{0,2})$/, '$1/$2')
            .slice(0, 5)
    }

    const formatCVV = (value: string) => {
        return value.replace(/\D/g, '').slice(0, 4)
    }

    return (
        <div className="blank__inputGroup">
            <Base
                {...props}
                placeholder="Card number"
                value={cardNumber}
                onChange={value => setCardNumber(formatCardNumber(value))}
                leadSlot={(
                    <div className="payment-method">
                        <Icon name="payment:visa" size="small" />
                    </div>
                )}
            />

            <Base
                {...props}
                placeholder="MM/YY"
                value={expiryDate}
                onChange={value => setExpiryDate(formatExpiryDate(value))}
            />

            <Base
                {...props}
                placeholder="CVV"
                value={cvv}
                onChange={value => setCvv(formatCVV(value))}
            />
        </div>
    )
}

export default CreditCard
