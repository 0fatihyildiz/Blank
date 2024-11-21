import type { ButtonGroupProps } from '@blank/types'
import type { PropsWithChildren } from 'react'
import React, { createContext, useContext } from 'react'

const ButtonGroupContext = createContext<{ size: 'small' | 'medium' | 'large' }>({ size: 'medium' })

const ButtonGroup: React.FC<PropsWithChildren<ButtonGroupProps>> = ({ size = 'medium', children }) => {
    return (
        <ButtonGroupContext.Provider value={{ size }}>
            <div className="blank button-group">
                {children}
            </div>
        </ButtonGroupContext.Provider>
    )
}

export function useButtonGroup() {
    return useContext(ButtonGroupContext)
}

export default ButtonGroup
