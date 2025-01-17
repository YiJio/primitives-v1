/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useState, useEffect, useRef } from 'react';
import { jsx, css } from '@emotion/react';

import { Utils } from '../../utils/Utils';

import './primitives.css';

const Tooltip = ({ label, text, placement = 'top', isHelp = false, hasArrow = true, width = '130px', borderRadius, bRadius, bgColor, textAlign = 'left', cursor, children }) => {
	const [isHovering, setHovering] = useState(false);
	const [isLoading, setLoading] = useState(true);
	const [arrowStyles, setArrowStyles] = useState({});
	const [contentStyles, setContentStyles] = useState({});
	const childRef = useRef(null);

	let placements = [];
	if (placement.indexOf('-')) { placements = placement.split('-'); }
	else { placements[0] = placement; }
	const theColor = bgColor ? bgColor : 'var(--color-black-a90)';

	const textStyles = css`
		width:${width}; background:${theColor}; color:${Utils.setBWTextColor(theColor)}; border-radius:${borderRadius || bRadius || '2px'}; text-align:${textAlign};
	`;

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
	}, [placement, bgColor]);

	return (
		<div className={'tooltip' + (isHelp ? ' help' : '')}
			onMouseLeave={() => setHovering(false)}
			onMouseEnter={() => setHovering(true)}
		>
			<span className='tooltip-label' ref={childRef} style={{ cursor:cursor }}>{children ? children : label}</span>
			{!isLoading && <>
				{hasArrow && <span className='tooltip-arrow' css={arrowStyles}></span>}
				<span className={'tooltip-content ' + placements[0]} css={contentStyles}>
					<span className='tooltip-text' css={textStyles}>{text}</span>
				</span>
			</>}
		</div>
	)
}

export default Tooltip;