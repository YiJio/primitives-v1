/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useState, useEffect } from 'react';
import { jsx, css } from '@emotion/react';

import { Utils } from '../../utils/Utils';

import { Icon } from '../typography';

import './primitives.css';

import { HiMinus, HiPlus } from 'react-icons/hi2';

const Counter = (props) => {
	const { minValue = 1, maxValue = 100, defaultValue = 1, onChange } = props;
	const { hasStepper = false, stepInterval = 1, colorScheme = 'gray' } = props;
	const { width, stepperColor } = props;
	const [count, setCount] = useState(defaultValue);

	const onDecrement = () => {
		let current = count - stepInterval;
		if(current < minValue) { current = minValue; }
		setCount(current);
		onChange && onChange(current);
	}

	const onIncrement = () => {
		let current = count + stepInterval;
		if(current > maxValue) { current = maxValue; }
		setCount(current);
		onChange && onChange(current);
	}

	const onChangeCounter = (e) => {
		const current = parseInt(e.target.value);
		setCount(current);
		onChange && onChange(current);
	}

	return (
		<div className='counter'>
			{hasStepper && <button onClick={onDecrement}><HiMinus/></button>}
			<input type='number' min={minValue} max={maxValue} value={count} onChange={onChangeCounter} />
			{hasStepper && <button onClick={onIncrement}><HiPlus/></button>}
		</div>
	)
}

export default Counter;