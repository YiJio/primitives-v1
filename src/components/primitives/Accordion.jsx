import React, { Children, isValidElement, cloneElement, useRef, useState, useEffect } from 'react';

import useAccordion from '../../hooks/useAccordion';

import { Icon } from '../typography';

import './primitives.css';

import { HiChevronUp, HiChevronDown } from 'react-icons/hi2';

const AccordionContent = (props) => {
	// from parent
	const { isActive } = props;
	// from outside
	const { children } = props;

	const [height, setHeight] = useState(0);
	const theRef = useRef(null);

	useEffect(() => {
		setHeight(theRef.current.scrollHeight);
	}, [])

	return (
		<div ref={theRef} className='accordion__content' style={{ height: isActive ? height : '0' }}>
			<div className='accordion__content-details'>{children}</div>
		</div>
	)
}

const AccordionHeader = (props) => {
	// from parent
	const { isActive, hasChevron, hasNumber, number, onToggle } = props;
	// from outside
	const { title, icon, children } = props;
	return (
		<div className={'accordion__header' + (isActive ? ' active' : '')} onClick={onToggle}>
			{hasNumber && <div className='accordion__header-number'>{number}</div>}
			{icon && <div className='accordion__header-icon'>{icon}</div>}
			<div className='accordion__header-title'>{children ? children : title}</div>
			{hasChevron && <div className='accordion__header-chevron'>{isActive ? <Icon icon={<HiChevronUp/>} size='16px' /> : <Icon icon={<HiChevronDown/>} size='16px' />}</div>}
		</div>
	)
}

const AccordionItem = (props) => {
	// from parent
	const { isActive, hasChevron, hasNumber, number, onToggle } = props;
	// from outside
	const { children } = props;

	const childrenCount = Children.count(children);
	if (childrenCount > 2) { throw new Error(`AccordionItem can only have two child components: AccordionHeader and AccordionContent.`); }
	const childrenArray = Children.toArray(children);
	let type1Count = 0; // cannot be more than 1!
	let type2Count = 0; // cannot be more than 1!

	const itemChildren = Children.map(childrenArray, (child, index) => {
		if (isValidElement(child)) {
			if (child.type.name === 'AccordionHeader') {
				type1Count++;
				if (type1Count > 1) { throw new Error(`AccordionItem can only have one AccordionHeader.`); }
				return cloneElement(child, { isActive, hasChevron, hasNumber, number, onToggle, });
			} else if (child.type.name === 'AccordionContent') {
				type2Count++;
				if (type2Count > 1) { throw new Error(`AccordionItem can only have one AccordionContent.`); }
				return cloneElement(child, { isActive });
			}
		} else {
			throw new Error(`AccordionItem only accepts AccordionHeader and or AccordionContent as children.`);
		}
	})

	return (
		<div className='accordion__item'>{itemChildren}</div>
	)
}

const Accordion = (props) => {
	const { allowMultiple = false, allowToggle = true, hasChevron = true, hasNumber = false, children } = props;
	const { activeItems, toggleItem } = useAccordion({ allowMultiple, allowToggle });

	const childrenArray = Children.toArray(children);

	const accordionChildren = Children.map(childrenArray, (child, index) => {
		if (isValidElement(child) && child.type.name === 'AccordionItem') {
			return cloneElement(child, {
				isActive: activeItems.includes(child.key),
				hasChevron,
				hasNumber,
				number: index + 1,
				onToggle: () => toggleItem(child.key),
			});
		} else {
			throw new Error(`Accordion only accepts AccordionItem as children.`);
		}
	})

	return (
		<div className='accordion'>{accordionChildren}</div>
	)
}

export {
	Accordion,
	AccordionItem,
	AccordionHeader,
	AccordionContent,
}