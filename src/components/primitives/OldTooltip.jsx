import React, { useState, useEffect, useRef } from 'react';
import { Utils } from '../../utils/Utils';
import './primitives.css';

const Tooltip = ({ label, text, placement = 'top', isHelp = false, hasArrow = true, width = '130px', borderRadius = '2px', bgColor, textAlign = 'left', children }) => {
	const [isHovering, setHovering] = useState(false);
	const [isLoading, setLoading] = useState(true);
	const [arrowStyles, setArrowStyles] = useState({});
	const [contentStyles, setContentStyles] = useState({});
	const childRef = useRef(null);

	var placements = [];
	if (placement.indexOf('-')) { placements = placement.split('-'); }
	else { placements[0] = placement; }
	const theColor = bgColor ? bgColor : 'rgba(0,0,0,0.9)';

	const tooltipStyles = {
		borderBottom: (isHelp && '1px dotted #000'),
		cursor: (isHelp && 'help'),
	};
	const textStyles = {
		width: width,
		background: theColor,
		color: Utils.setBWTextColor(theColor),
		borderRadius: (borderRadius && borderRadius),
		textAlign: textAlign,
	}

	useEffect(() => {
		setLoading(true);
		const el = childRef.current;
		// anything in useEffect should be a useState variable
		var tempArrowStyles = {};
		var tempContentStyles = {};
		switch (placements[0]) {
			case 'top':
				tempArrowStyles = { bottom: el.scrollHeight + 'px', borderTopColor: theColor };
				tempContentStyles.bottom = (el.scrollHeight + 10) + 'px';
				if (placements[1] === 'start') { tempContentStyles.left = '0'; }
				else if (placements[1] === 'end') { tempContentStyles.right = '0'; }
				break;
			case 'right':
				tempArrowStyles = { left: el.scrollWidth + 'px', borderRightColor: theColor };
				tempContentStyles.left = (el.scrollWidth + 10) + 'px';
				if (placements[1] === 'start') { tempContentStyles.alignItems = 'flex-start'; }
				else if (placements[1] === 'end') { tempContentStyles.alignItems = 'flex-end'; }
				break;
			case 'bottom':
				tempArrowStyles = { top: el.scrollHeight + 'px', borderBottomColor: theColor };
				tempContentStyles.top = (el.scrollHeight + 10) + 'px';
				if (placements[1] === 'start') { tempContentStyles.left = '0'; }
				else if (placements[1] === 'end') { tempContentStyles.right = '0'; }
				break;
			case 'left':
				tempArrowStyles = { right: el.scrollWidth + 'px', borderLeftColor: theColor };
				tempContentStyles.right = (el.scrollWidth + 10) + 'px';
				if (placements[1] === 'start') { tempContentStyles.alignItems = 'flex-start'; }
				else if (placements[1] === 'end') { tempContentStyles.alignItems = 'flex-end'; }
				break;
		}
		setArrowStyles(tempArrowStyles);
		setContentStyles(tempContentStyles);
		setLoading(false);
	}, []);

	return (
		<div className='tooltip'
			onMouseLeave={() => setHovering(false)}
			onMouseEnter={() => setHovering(true)}
			style={tooltipStyles}
		>
			<span className='label' ref={childRef}>{children ? children : label}</span>
			{!isLoading && <>
				{hasArrow && <span className='arrow' style={arrowStyles}></span>}
				<span className={'content ' + placements[0]} style={contentStyles}>
					<span className='text' style={textStyles}>{text}</span>
				</span>
			</>}
		</div>
	)
}

export default Tooltip;