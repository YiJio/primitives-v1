/** @jsxRuntime classic */
/** @jsx jsx */
import React, { Children, isValidElement, cloneElement, useState, useEffect } from 'react';
import { jsx, css } from '@emotion/react';

import './primitives.css';

import { HiMinus, HiCheck, HiXMark } from 'react-icons/hi2';

const Radio = (props) => {
	// values
	const { name, label, value, checked, onChange } = props;
	// settings
	const { round = 'full', size = '20px', gap = '8px', isDisabled, colorScheme = 'green' } = props;
	// styles
	const { width, iconSize = '16px ' } = props;

	const styles = css`
		padding-left:${parseInt(size) + parseInt(gap)}px; width:${width}; user-select:none; cursor:pointer; line-height:${size};

		&[disabled] { cursor:not-allowed; }
	`;

	const checkStyles = css`
		display:flex; align-items:center; justify-content:center; background:var(--color-gray-0); border-radius:${round === 'none' ? '0px' : round === 'full' ? '9999px' : round};

		& svg { stroke-width:2px; font-size:${iconSize}; }

		input ~ & svg { display:none; }
		input:hover ~ & { background:var(--color-${colorScheme}-1); }
		input:hover:disabled ~ &, input:checked:disabled ~ & { background:var(--color-gray-0); cursor:not-allowed; }
		input:disabled ~ & svg, input:checked:disabled ~ & svg { opacity:0.5; }
		input:checked ~ & { background:var(--color-${colorScheme}-2); }
		input:checked ~ & svg { display:flex; color:var(--color-${colorScheme}-contrast); }

	`;

	return (
		<label className='check' css={styles} disabled={isDisabled}>
			<input type='radio' name={name} value={value} checked={checked} onChange={onChange} disabled={isDisabled} />
			{label}
			<span className={`radio`} css={checkStyles}></span>
		</label>
	)
}

export {
	Radio,
};