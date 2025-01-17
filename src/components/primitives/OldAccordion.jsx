import React, { Children, cloneElement, useRef, useState, useEffect } from 'react';

import './primitives.css';

import { HiChevronDown } from 'react-icons/hi2';

const AccordionItem = ({
	// from parent
	index, activeItems, handleActiveItem, hasChevron, hasNumber,
	// from outside
	title, icon, content, children,
}) => {
	const [height, setHeight] = useState(0);
	const theRef = useRef(null);

	useEffect(() => {
		setHeight(theRef.current.scrollHeight);
	}, [])

	const handleOpen = () => {
		handleActiveItem(index);
	}

	return (
		<div className='accordion-item'>
			<div className={'accordion-header' + (activeItems[index] ? ' active' : '') } onClick={handleOpen}>
				{hasNumber && <div className='accordion-number'>{index + 1}</div>}
				{icon && <div className='accordion-icon'>{icon}</div>}
				{title && <div className='accordion-title'>{title}</div>}
				{hasChevron && <div className='accordion-chevron'><HiChevronDown /></div>}
			</div>
			<div ref={theRef} className='accordion-content' style={{ height: (activeItems[index] ? height : '0px') }}>
				<div className='accordion-details'>{children ? children : content}</div>
			</div>
		</div>
	)
}

const Accordion = ({ allowMultiple, allowToggle, hasChevron, hasNumber, children }) => {
	const childrenCount = Children.count(children);
	const childrenArray = Children.toArray(children);
	var empty = Array(childrenCount).fill(false);
	empty[0] = true;
	const [activeItems, setActiveItems] = useState(empty);

	const handleActiveItem = (index) => {
		var tempItems = activeItems;
		var prevState = tempItems[index];
		if (!allowMultiple) { tempItems = Array(childrenCount).fill(false); }
		if (allowToggle) { tempItems[index] = !prevState; }
		else {
			if (prevState) { tempItems[index] = prevState; }
			else { tempItems[index] = !prevState; }
		}
		if (allowMultiple) { setActiveItems((prev) => [...prev, tempItems]); }
		else { setActiveItems(tempItems); }
	}

	const childrenWithProps = Children.map(childrenArray, (child, index) => {
		return cloneElement(child, { index, activeItems, handleActiveItem, hasChevron, hasNumber });
	});

	return (
		<div className='accordion'>
			{childrenWithProps}
		</div>
	)
}

export {
	Accordion,
	AccordionItem,
}