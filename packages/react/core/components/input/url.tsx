import type { InputProps } from '@blank/types'

import React from 'react'
import Base from './base'

interface UrlProps extends InputProps {
    value: string
    className?: string
    onChange: (value: string) => void
}

const Url: React.FC<UrlProps> = (props) => {
    return (
        <Base
            {...props}
            tail={{ size: 'medium' }}
            tailSlot={(
                <div className="url-slot">
                    https://
                </div>
            )}
        />
    )
}

export default Url
