/** @jsxRuntime classic */
/** @jsx jsx */
import React, { Children, isValidElement, cloneElement, useState, useEffect } from 'react';
import { jsx, css } from '@emotion/react';

import './primitives.css';

import { HiMinus, HiCheck, HiXMark } from 'react-icons/hi2';

/*const Checkbox = (props) => {
	// values
	const { name, label, value, onChange } = props;
	// settings
	const { variant = 'square', checkType = 'x-mark', size = '20px', gap = '8px', isDisabled, colorScheme = 'green' } = props;
	// styles
	const { checkSize = '16px ' } = props;

	const styles = css`
		padding-left:${parseInt(size) + parseInt(gap)}px; user-select:none; cursor:pointer; line-height:${size};

		&[disabled] { cursor:not-allowed; }
	`;

	const checkStyles = css`
		display:flex; align-items:center; justify-content:center; background:var(--color-gray-0);

		input ~ & svg { display:none; }
		input:hover ~ & { background:var(--color-${colorScheme}-1); }
		input:hover:disabled ~ &, input:checked:disabled ~ & { background:var(--color-gray-0); cursor:not-allowed; }
		input:disabled ~ & svg, input:checked:disabled ~ & svg { opacity:0.5; }
		input:checked ~ & { background:var(--color-${colorScheme}-2); }
		input:checked ~ & svg { display:flex; color:var(--color-${colorScheme}-contrast); }

		& svg { stroke-width:2px; font-size:${checkSize}; }
	`;

	return (
		<>
			<label className='check' css={styles} disabled={isDisabled}>
				<input type='checkbox' name={name} value={value} onChange={onChange} disabled={isDisabled} />
				{label}
				<span className={`checkbox ${variant}`} css={checkStyles}>
					{checkType === 'x-mark' ? <HiXMark /> : <HiCheck />}
				</span>
			</label>
		</>
	)
}*/

const Checkbox = (props) => {
	// values
	const { name, label, value, checked, onChange } = props;
	// settings
	const { round = 'none', checkType = 'check-mark', size = '20px', gap = '8px', isDisabled, isIndeterminate, colorScheme = 'green' } = props;
	// styles
	const { width, checkSize = '16px ' } = props;

	const styles = css`
		padding-left:${parseInt(size) + parseInt(gap)}px; width:${width}; user-select:none; cursor:pointer; line-height:${size};

		&[disabled] { cursor:not-allowed; }
	`;

	const checkStyles = css`
		display:flex; align-items:center; justify-content:center; background:var(--color-gray-0); border-radius:${round === 'none' ? '0px' : round === 'full' ? '9999px' : round};

		& svg { stroke-width:2px; font-size:${checkSize}; }

		input ~ & svg { display:none; }
		input:hover ~ & { background:var(--color-${colorScheme}-1); }
		input:hover:disabled ~ &, input:checked:disabled ~ & { background:var(--color-gray-0); cursor:not-allowed; }
		input:disabled ~ & svg, input:checked:disabled ~ & svg { opacity:0.5; }
		input:checked ~ & { background:var(--color-${colorScheme}-2); }
		input:checked ~ & svg { display:flex; color:var(--color-${colorScheme}-contrast); }

		&.indeterminate { background:var(--color-${colorScheme}-2); color:var(--color-${colorScheme}-contrast); }
		&.indeterminate svg { display:flex; }
	`;

	return (
		<label className='check' css={styles} disabled={isDisabled}>
			<input type='checkbox' name={name} value={value} checked={checked} onChange={onChange} disabled={isDisabled} />
			{label}
			{isIndeterminate ? <span className={`checkbox indeterminate`} css={checkStyles}>
				<HiMinus />
			</span> : <span className={`checkbox`} css={checkStyles}>
				{checkType === 'x-mark' ? <HiXMark /> : <HiCheck />}
			</span>}
		</label>
	)
}

const CheckboxGroup = (props) => {
	const { name, onChange, round = 'none', checkType = 'check-mark', colorScheme = 'green', isIndeterminate, isDisabled, children } = props;
	const { width } = props;

	const [checkedItems, setCheckedItems] = useState([]);
	const [isAllChecked, setAllChecked] = useState(false);
	const [indeterminate, setIndeterminate] = useState(false);

	const childrenCount = Children.count(children);
	const childrenArray = Children.toArray(children);

	const onCheck = (index) => {
		const updateChecks = checkedItems.map((item, i) => {
			if(i === index) { return !item; }
			else { return item; }
		});
		setCheckedItems(updateChecks);
		if (onChange) { onChange(updateChecks); }
	}

	const onCheckAll = () => {
		const prevState = isAllChecked;
		const updateChecks = checkedItems.map((item, i) => {
			return item = !prevState;
		});
		setCheckedItems(updateChecks);
		setAllChecked(!prevState);
		if (onChange) { onChange(updateChecks); }
	}

	useEffect(() => {
		let temp = Array(childrenCount).fill(false);
		setCheckedItems(temp);
	}, [])

	useEffect(() => {
		let hasFalse = 0, hasTrue = 0;
		for(var i = 0; i < checkedItems.length; i++) {
			if(checkedItems[i]) { hasTrue++; }
			else { hasFalse++; }
		}
		if(hasTrue === childrenCount) {
			setIndeterminate(false);
			setAllChecked(true)
		} else if(hasFalse === childrenCount) {
			setIndeterminate(false);
			setAllChecked(false);
		} else {
			setIndeterminate(true);
		}
	}, [checkedItems])

	const checkboxChildren = Children.map(childrenArray, (child, index) => {
		if (isValidElement(child) && child.type.name === 'Checkbox') {
			return cloneElement(child, { index, name, round, checkType, colorScheme, checked: checkedItems[index] || false, onChange: () => onCheck(index), width });
		} else {
			throw new Error(`CheckboxGroup only accepts Checkbox as children.`);
		}
	})

	return (
		<div className='checkbox-group'>
			<Checkbox name={name} label='All' round={round} checkType={checkType} colorScheme={colorScheme} checked={isAllChecked} onChange={onCheckAll} isIndeterminate={indeterminate} isDisabled={isDisabled} />
			<div className='checkbox-group__item'>
				{checkboxChildren}
			</div>
		</div>
	)
}

export {
	Checkbox,
	CheckboxGroup
};