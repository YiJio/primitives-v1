/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useState } from 'react';
import { jsx, css } from '@emotion/react';

import { Utils } from '../../utils/Utils';

import { Icon } from '../typography';

import './primitives.css';

// define styles that cannot be changed
// any other styles like box shadow or anything needs to be set in CSS file
// will not accept any other props
// allow user to set their own font color, not limited by colors in theme
const Alert = ({ title, description, icon, variant = 'solid', colorScheme = 'green', bgColor, iconColor = 'inherit', iconSize = '24px', textColor, fontSize = '14px', children }) => {
	const styles = css`
		color:${textColor ? textColor : bgColor ? Utils.setBWTextColor(bgColor) : `var(--color-text)`}; font-size:${fontSize};

		&.solid, &.left-accent::before { background:${bgColor ? bgColor : `var(--color-${colorScheme}-5)`}; }

		&.soft, &.left-accent { background:${bgColor ? Utils.setAlpha(bgColor, 0.25, true) : `var(--color-${colorScheme}-0)`}; }

		&.outline { background:transparent; border:1px solid ${bgColor ? Utils.setAlpha(bgColor, 0.5, true) : `var(--color-${colorScheme}-2)`}; }

		&.left-accent { position:relative; }
		&.left-accent::before { position:absolute; content:''; top:0; left:0; width:4px; height:100%; }
	`;

	return (
		<div className={'alert ' + variant} css={styles}>
			{icon && <Icon className='alert__icon' icon={icon} color={iconColor} size={iconSize} />}
			{title && <span className='alert__title'>{title}</span>}
			{children ? <span className='alert__description'>{children}</span> : <span className='alert__description'>{description}</span>}
		</div>
	)
}

export default Alert;