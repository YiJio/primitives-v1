/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useState } from 'react';
import { jsx, css } from '@emotion/react';

import './primitives.css';

const Badge = (props) => {
	const { variant = 'dot', size = 'S', value = 1, icon, hasBorder, colorScheme = 'red', onClick } = props;
	const { bgColor, textColor } = props;

	const theSize = parseInt(size) ? 'S' : size;
	const theValue = value <= 99 ? value < 0 ? 0 : value : '99+';

	const styles = css`
		margin:${hasBorder && '1px'}; background:${bgColor ? bgColor : `var(--color-${colorScheme}-5)`}; color:${textColor ? textColor : `var(--color-${colorScheme}-contrast)`}; outline-color:${hasBorder && `var(--color-white-a100)`};
		&.action:hover { background:var(--color-${colorScheme}-6); }
	`;

	return (
		<div className={`badge ${variant} size-${theSize.toLowerCase()}`} css={styles} onClick={onClick}>
			{variant === 'number' && theValue}
			{variant === 'action' && icon}
		</div>
	)
}

export default Badge;