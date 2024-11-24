import type { InputProps, PaymentIconNames } from '@blank/types'
import React, { useEffect, useRef, useState } from 'react'
import Icon from '../../common/icon'
import Base from './base'

interface PaymentMethod {
    description: string
    prefixes: string[]
    type: 'card' | 'digital_wallet' | 'payment_gateway' | 'cryptocurrency'
}

const CreditCard: React.FC<InputProps> = ({ label, helper, appearance, ...props }) => {
    const [paymentMethods, setPaymentMethods] = useState<Record<string, PaymentMethod>>({})
    const [currentPaymentMethod, setCurrentPaymentMethod] = useState<string>('')
    const [paymentVal, setPaymentVal] = useState({
        cardNumber: '',
        expiryDate: '',
        cvv: '',
    })

    useEffect(() => {
        fetch(
            'https://gist.githubusercontent.com/0fatihyildiz/011cdbdd922b3d9023c764adde6ae345/raw/338df38efe542b458710b185d219325579cc2268/paymentMethods.json',
        )
            .then(res => res.json())
            .then(data => setPaymentMethods(data.paymentMethods))
            .catch(console.error)
    }, [])

    const formatters = {
        cardNumber: (value: string) => {
            const paymentMethodKey
        = Object.keys(paymentMethods).find(key =>
            paymentMethods[key].prefixes.some(prefix => value.startsWith(prefix)),
        ) || ''
            setCurrentPaymentMethod(paymentMethodKey)
            return value.replace(/\D/g, '').replace(/(\d{4})(?=\d)/g, '$1 ')
        },
        expiryDate: (value: string) =>
            value.replace(/\D/g, '').replace(/^(\d{2})(\d{0,2})$/, '$1/$2').slice(0, 5),
        cvv: (value: string) => value.replace(/\D/g, '').slice(0, 4),
    }

    const handleInput = (field: keyof typeof paymentVal, value: string) => {
        setPaymentVal(prev => ({
            ...prev,
            [field]: formatters[field](value),
        }))
    }

    return (
        <div className={`blank inputGroup ${appearance}`}>
            <Base
                {...props}
                className="card-number"
                placeholder="Card number"
                value={paymentVal.cardNumber}
                onChange={val => handleInput('cardNumber', val)}
            >
                <div slot="lead" className="payment-method">
                    <Icon name={`payment:${currentPaymentMethod}` as PaymentIconNames} size="small" />
                </div>
            </Base>

            <Base
                {...props}
                className="card-expiry"
                placeholder="MM/YY"
                value={paymentVal.expiryDate}
                onChange={val => handleInput('expiryDate', val)}
            />

            <Base
                {...props}
                className="card-cvc"
                placeholder="CVV"
                value={paymentVal.cvv}
                onChange={val => handleInput('cvv', val)}
            />
        </div>
    )
}

export default CreditCard
