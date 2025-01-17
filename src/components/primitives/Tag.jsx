/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useState } from 'react';
import { jsx, css } from '@emotion/react';

import './primitives.css';

/*
	unchangeable unless css file override: font-size, paddings, margins, sizes,
	might need to change :hover and :active states later
 */
const Tag = (props) => {
	const { label, icon, variant = 'soft', size = 'm', allowHover = false, isCode = false, isStatus = false, children } = props;
	const { borderRadius, bRadius, bgColor = 'gray', textColor, fontWeight } = props;

	const styles = css`
		font-family:${isCode ? 'var(--font-code)' : 'var(--font-body)'}; font-weight:${fontWeight}; border-radius:${borderRadius || bRadius};

		&.solid { background:var(--color-${bgColor}-5); color:${textColor ? textColor : `var(--color-${bgColor}-contrast)`}; }
		&.soft { background:var(--color-${bgColor}-0); color:${textColor ? textColor : `var(--color-${bgColor}-7)`}; }
		&.outline { background:transparent; border-color:var(--color-${bgColor}-2); color:${textColor ? textColor : `var(--color-${bgColor}-7)`}; }
		&.soft-outline { border-color:var(--color-${bgColor}-2); background:var(--color-${bgColor}-0); color:${textColor ? textColor : `var(--color-${bgColor}-7)`}; }

		& .tag__circle { background:var(--color-${bgColor}-7); }
	`;

	return (
		<div className={`tag ${variant} size-${size.toLowerCase()}`} css={styles}>
			{isStatus && <span className='tag__circle'></span>}
			{icon && <span className='tag__icon'>{icon}</span>}
			<span className='tag__label'>{children ? children : label}</span>
		</div>
	)
}

export default Tag;