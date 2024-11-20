import React from 'react'

interface ContainerProps {
    children: React.ReactNode
}

const Container: React.FC<ContainerProps> = ({ children }) => {
    return <div className="blank__container">{children}</div>
}

export default Container
