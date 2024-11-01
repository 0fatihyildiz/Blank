import type { Toggle as ToggleType } from '@blank/types'
import type { PropsWithChildren } from 'react'
import React, { useState } from 'react'

function Toggle({ size = 'medium', disabled, label, labelDirection }: PropsWithChildren<ToggleType.ToggleProps>) {
	const [isActive, setIsActive] = useState(false)

	const handleToggle = () => {
		if (!disabled) {
			setIsActive(!isActive)
		}
	}

	return (
		<div className={`blank__toggle-container ${labelDirection === 'right' ? 'reverse' : ''}`}>
			{label && (
				<span className={`toggle-label ${size} ${disabled ? 'disabled' : ''} `}>
					{label}
				</span>
			)}
			<div
				onClick={!disabled ? handleToggle : undefined}
				aria-checked={isActive}
				aria-disabled={disabled}
				className={`toggle ${size} ${isActive ? 'active' : ''} ${disabled ? 'disabled' : ''} toggle-position`}
			>
				<span className="toggle-circle" />
			</div>
		</div>
	)
}

export default Toggle
