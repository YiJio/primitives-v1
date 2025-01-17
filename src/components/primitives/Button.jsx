/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useState } from 'react';
import { jsx, css } from '@emotion/react';

import { Utils } from '../../utils/Utils';

import './primitives.css';

const IconButton = (props) => {
	const { label, type = 'action', hasLabel = true, icon, iconOn, iconOff, size = 'M', isDisabled = false, onClick } = props;
	const { bgColor, textColor } = props;

	const [isOn, setOn] = useState(false);

	const styles = css`
		color:${textColor}; background:${bgColor};
	`;

	const onButtonClick = () => {
		if(type === 'action') {
			onClick && onClick();
		} else if(type === 'toggle') {
			setOn(!isOn);
			onClick && onClick();
		}
	}

	return (
		<button className={`icon-button ${type} size-${size.toLowerCase()}`} disabled={isDisabled}onClick={onButtonClick} css={styles}>
			{type === 'action' ? <div className='icon-button__icon'>
				{icon}
			</div> : <div className='icon-button__icon'>
				{isOn ? iconOn : iconOff}
			</div>}
			{hasLabel && label}
		</button>
	)
}

const FAB = (props) => {
	const { label } = props;
}

const Button = (props) => {
	const { label, leftIcon, rightIcon, variant = 'solid', size = 'M', isDisabled = false, colorScheme = 'gray', onClick, children } = props;
	const { width, w, bgColor, round = 'none', textColor } = props;

	const styles = css`
		width:${width || w}; border-radius:${round === 'none' ? '0px' : round === 'full' ? '9999px' : round};

		&.solid, &.solid:hover:disabled { color:${textColor ? textColor : bgColor ? Utils.setBWTextColor(bgColor) : `var(--color-${colorScheme}-contrast)`}; background:${bgColor ? bgColor : `var(--color-${colorScheme}-5)`}; }
		&.solid:hover { background:${bgColor ? Utils.setLuminance(bgColor, 10, true) : `var(--color-${colorScheme}-6)`}; }

		&.outline, &.outline:hover:disabled { color:${textColor ? textColor : bgColor ? Utils.addColor(bgColor, 1, '#000000', 0.3, true) : `var(--color-${colorScheme}-7)`}; background:transparent; border-color:${bgColor ? Utils.setAlpha(bgColor, 0.5, true) : `var(--color-${colorScheme}-2)`}; }
		&.outline:hover, &.ghost:hover { background:${bgColor ? Utils.setAlpha(bgColor, 0.25, true) : `var(--color-${colorScheme}-0)`}; }

		&.ghost, &.ghost:hover:disabled { color:${textColor ? textColor : bgColor ? Utils.addColor(bgColor, 1, '#000000', 0.2, true) : `var(--color-${colorScheme}-7)`}; background:transparent; }

		&.soft, &.soft:hover:disabled, &.elevated, &.elevated:hover:disabled { color:${textColor ? textColor : bgColor ? Utils.addColor(bgColor, 1, '#000000', 0.2, true) : `var(--color-${colorScheme}-7)`}; background:${bgColor ? Utils.setAlpha(bgColor, 0.25, true) : `var(--color-${colorScheme}-0)`}; }
		&.soft:hover, &.elevated:hover { background:${bgColor ? Utils.setAlpha(bgColor, 0.5, true) : `var(--color-${colorScheme}-1)`}; }

		&.elevated { box-shadow:var(--color-shadow-small); }
	`;

	return (
		<button className={`button ${variant} size-${size.toLowerCase()}`} css={styles} disabled={isDisabled} onClick={onClick}>
			{leftIcon && <div className='button__icon'>{leftIcon}</div>}
			{children ? children : label}
			{rightIcon && <div className='button__icon'>{rightIcon}</div>}
		</button>
	)
}

export {
	Button,
	IconButton
};