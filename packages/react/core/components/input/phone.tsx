import type { InputProps } from '@blank/types'

import React, { useEffect, useState } from 'react'
import Base from './base'

interface PhoneCode {
    name: string
    dial_code: string
    code: string
}

interface PhoneProps extends InputProps {
    className?: string
    value: string
    onChange: (value: string) => void
}

const Phone: React.FC<PhoneProps> = (props) => {
    const [phoneCodes, setPhoneCodes] = useState<PhoneCode[]>([])

    useEffect(() => {
        fetch('https://gist.githubusercontent.com/anubhavshrimal/75f6183458db8c453306f93521e93d37/raw/f77e7598a8503f1f70528ae1cbf9f66755698a16/CountryCodes.json')
            .then(response => response.json())
            .then((data) => {
                setPhoneCodes(data)
            })
            .catch((error) => {
                console.error('Error:', error)
            })
    }, [])

    return (
        <Base
            {...props}
            tail={{ size: 'medium' }}
            tailSlot={(
                <select className="phone-slot">
                    {phoneCodes.map(phoneCode => (
                        <option key={phoneCode.code} value={phoneCode.dial_code}>
                            {phoneCode.code}
                            {' '}
                            (
                            {phoneCode.dial_code}
                            )
                        </option>
                    ))}
                </select>
            )}
        />
    )
}

export default Phone
