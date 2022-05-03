import React from 'react'

export const Button = ({ className, bgColor, pX, label, onClick }) => {
	return (
		<button className={className} onClick={onClick}>
			{label}
		</button>
	)
}
