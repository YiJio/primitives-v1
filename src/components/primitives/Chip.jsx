/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useState, useEffect } from 'react';
import { jsx, css } from '@emotion/react';

import { Utils } from '../../utils/Utils';

import { Icon } from '../typography';

import './primitives.css';

import { HiPlus, HiCheck } from 'react-icons/hi2';

const ChoiceChip = (props) => {
	const { name, label, icon, variant = 'solid', size = 'M', isDisabled = false, defaultChecked = false, colorScheme = 'gray', onClick } = props;
	const { width, w, bgColor, borderRadius, bRadius, textColor } = props;

	const [isChoiceOn, setChoiceOn] = useState(false);

	const styles = css`
		&.checked { background:gray; }
	`;

	const onChoiceClick = () => {
		setChoiceOn(!isChoiceOn);
		onClick && onClick();
	}

	useEffect(() => {
		setChoiceOn(defaultChecked);
	}, [defaultChecked])

	return (
		<button className={`chip ${variant} size-${size.toLowerCase()} ${isChoiceOn ? 'checked' : ''}`} css={styles} disabled={isDisabled} onClick={onChoiceClick}>
			{icon && <span className='chip__icon'>{icon}</span>}
			<span className='chip__label'>{label}</span>
		</button>
	)
}

const FilterChip = (props) => {
	const { name, label, variant = 'solid', size = 'M', hasAdd = false, isDisabled = false, defaultChecked = false, colorScheme = 'gray', onClick } = props;
	const { width, w, bgColor, borderRadius, bRadius, textColor } = props;

	const [isFilterOn, setFilterOn] = useState(defaultChecked);
	console.log('def', defaultChecked, 'fil', isFilterOn);

	const styles = css`
		&.checked { background:gray; }
	`;

	const onFilterClick = () => {
		setFilterOn(!isFilterOn);
		onClick && onClick();
	}

	useEffect(() => {
		setFilterOn(defaultChecked);
	}, [defaultChecked])
	

	return (
		<button className={`chip ${variant} size-${size.toLowerCase()} ${isFilterOn ? 'checked' : ''}`} css={styles} disabled={isDisabled} onClick={onFilterClick}>
			{hasAdd && !isFilterOn && <span className='chip__icon'><HiPlus /></span>}
			{isFilterOn && <span className='chip__icon'><HiCheck /></span>}
			<span className='chip__label'>{label}</span>
		</button>
	)
}

const ActionChip = (props) => {
	const { name, label, image, icon, variant = 'solid', size = 'M', isDisabled = false, colorScheme = 'gray', onClick } = props;
	const { width, w, bgColor, round = 'none', textColor } = props;

	const styles = css`
	`;

	return (
		<button className={`chip ${variant} size-${size.toLowerCase()}`} css={styles} disabled={isDisabled} onClick={onClick}>
			{image && <img className='chip__image' src={image} />}
			{icon && <span className='chip__icon'>{icon}</span>}
			<span className='chip__label'>{label}</span>
		</button>
	)
}

const Chip = (props) => {
	const { type, ...restProps } = props;

	return (
		<>
			{type === 'action' && <ActionChip {...restProps}/>}
			{type === 'filter' && <FilterChip {...restProps}/>}
			{type === 'choice' && <ChoiceChip {...restProps}/>}
		</>
	)
}

export default Chip;