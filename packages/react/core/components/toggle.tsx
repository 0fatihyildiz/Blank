import type { Toggle as ToggleType } from '@blank/types'
import type { PropsWithChildren } from 'react'
import React, { useEffect, useState } from 'react'

function Toggle({
	size = 'medium',
	checked,
	onChange,
	label,
	labelDirection,
	disabled = false,
}: PropsWithChildren<ToggleType.ToggleProps> & { onChange?: (newValue: boolean) => void }) {
	const [isActive, setIsActive] = useState<boolean>(!!checked)

	useEffect(() => {
		setIsActive(!!checked)
	}, [checked])

	const handleToggle = () => {
		if (!disabled) {
			const newState = !isActive
			setIsActive(newState)
			if (onChange) {
				onChange(newState)
			}
		}
	}

	return (
		<div className={`blank__toggle-container ${labelDirection}`}>
			{label && (
				<span className={`toggle-label ${size} ${disabled ? 'disabled' : ''}`}>
					{label}
				</span>
			)}
			<div
				onClick={!disabled ? handleToggle : undefined}
				aria-checked={isActive ? 'true' : 'false'}
				aria-disabled={disabled}
				className={`toggle ${size} ${isActive ? 'active' : ''} ${disabled ? 'disabled' : ''} toggle-position`}
			>
				<span className="toggle-circle" />
			</div>
		</div>
	)
}

export default Toggle
