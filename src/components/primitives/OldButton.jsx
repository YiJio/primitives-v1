import React, { useState } from 'react';
import { Utils } from '../../utils/Utils';
import './primitives.css';

const OldButton = ({ label, icon, color = '#DDDDDD', variant = 'solid', borderRadius, width, onClick, children }) => {
	const [isHovering, setHovering] = useState(false);

	const buttonStyles = [{
		variant: 'solid',
		width: width && width,
		color: (color ? Utils.setBWTextColor(color) : 'inherit'),
		background: isHovering
				? Utils.setLuminance(color, 10)
				: color,
		borderRadius: (borderRadius && borderRadius),
	}, {
		variant: 'outline',
		width: width && width,
		color: Utils.addColor(color, 1, '#000000', 0.2),
		border: ('1px solid ' + Utils.setAlpha(color, 0.5)),
		background:isHovering
				? Utils.setAlpha(color, 0.25)
				: 'transparent',
		borderRadius: (borderRadius && borderRadius),
	}, {
		variant: 'ghost',
		width: width && width,
		color: Utils.addColor(color, 1, '#000000', 0.2),
		background: isHovering
				? Utils.setAlpha(color, 0.25)
				: 'transparent',
		borderRadius: (borderRadius && borderRadius),
	}, {
		variant: 'soft',
		width: width && width,
		color: Utils.addColor(color, 1, '#000000', 0.2),
		background: isHovering
				? Utils.setAlpha(color, 0.5)
				: Utils.setAlpha(color, 0.25),
		borderRadius: (borderRadius && borderRadius),
	}];

	return (
		<button
			onMouseLeave={() => setHovering(false)}
			onMouseEnter={() => setHovering(true)}
			onClick={onClick}
			style={buttonStyles[buttonStyles.findIndex(v => v.variant == variant)]}
		>
			{icon && <span className='icon'>{icon}</span>}
			<span>{children ? children : label}</span>
		</button>
	)
}

export default OldButton;