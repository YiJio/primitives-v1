/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useState, useEffect } from 'react';
import { jsx, css } from '@emotion/react';

import { Utils } from '../../utils/Utils';

import { Icon } from '../typography';

import './primitives.css';

import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';

const Slider = (props) => {
	const { minValue = 1, maxValue = 100, defaultValue = 1, onChange } = props;
	const { hasStepper = false, stepInterval = 1, colorScheme = 'gray' } = props;
	const { width, trackColor, progressColor, stepperColor } = props;
	const [progress, setProgress] = useState(defaultValue);

	const onDecrement = () => {
		let current = progress - stepInterval;
		if(current < minValue) { current = minValue; }
		setProgress(current);
		onChange && onChange(current);
	}

	const onIncrement = () => {
		let current = progress + stepInterval;
		if(current > maxValue) { current = maxValue; }
		setProgress(current);
		onChange && onChange(current);
	}

	const onChangeSlider = (e) => {
		const current = parseInt(e.target.value);
		setProgress(current);
		onChange && onChange(current);
	}

	return (
		<div className='slider'>
			{hasStepper && <button onClick={onDecrement}><RiArrowLeftSLine/></button>}
			<input type='range' min={minValue} max={maxValue} value={progress} onChange={onChangeSlider} />
			{hasStepper && <button onClick={onIncrement}><RiArrowRightSLine/></button>}
		</div>
	)
}

export default Slider;