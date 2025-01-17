/** @jsxRuntime classic */
/** @jsx jsx */
import React, { Children, isValidElement, cloneElement, useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { jsx, css } from '@emotion/react';

import { Icon } from '../typography';

import './primitives.css';

import { HiXMark } from 'react-icons/hi2';

const PopoverContent = (props) => {
	// from parent
	const { placements, triggerRef, contentRef, isOpen, handleClearTimeout, onClose, hasArrow, hasClose } = props;
	// from outside (best to use a default width to replace calculating contectRect.width)
	const { width = '250px', bgColor, borderColor, bColor, borderRadius, bRadius, arrowSize = 10, children } = props;

	const [arrowPoints, setArrowPoints] = useState({});
	const [contentPoints, setContentPoints] = useState({});

	let theWidth = parseInt(width) < 150 ? 150 : parseInt(width);
	let theBgColor = bgColor || 'var(--color-white-a100)'; // should set the semantic name in case for themes
	let theBColor = borderColor || bColor || 'var(--color-gray-1)';
	let arrowSlot = 10; // must be 10 spaces away
	let theArrowSize = arrowSize <= 10 ? arrowSize < 5 ? 5 : arrowSize : 10;
	let arrowOffset = theArrowSize / 2; //

	const handlePlacements = (triggerRect, contentRect) => {
		let arrowStyles = { width: theArrowSize, height: theArrowSize, background: theBgColor, border: `1px solid ${theBColor}` };
		let contentStyles = { width: theWidth, background: theBgColor, border: `1px solid ${theBColor}`, borderRadius: borderRadius || bRadius, opacity: isOpen ? 1 : 0, transitionDuration: '200ms', transitionTimingFunction: 'ease', transitionProperty:['opacity', 'transform'] };
		if (placements[0] === 'top') {
			contentStyles.top = triggerRect.top + window.scrollY - contentRect.height - arrowSlot;
			if (placements[1] === 'start') { contentStyles.left = triggerRect.left; }
			else if (placements[1] === 'end') { contentStyles.left = triggerRect.left + triggerRect.width - theWidth; }
			else { contentStyles.left = triggerRect.left + triggerRect.width / 2 - theWidth / 2; }
			arrowStyles = {
				...arrowStyles,
				top: triggerRect.top + window.scrollY - arrowSlot - arrowOffset,
				left: triggerRect.left + triggerRect.width / 2 - arrowOffset,
				borderTop: 'none', borderLeft: 'none',
			};
		} else if (placements[0] === 'right') {
			contentStyles.left = triggerRect.right + arrowSlot;
			if (placements[1] === 'start') { contentStyles.top = triggerRect.top + window.scrollY; }
			else if (placements[1] === 'end') { contentStyles.top = triggerRect.top + window.scrollY + triggerRect.height - contentRect.height; }
			else { contentStyles.top = triggerRect.top + window.scrollY + triggerRect.height / 2 - contentRect.height / 2; }
			arrowStyles = {
				...arrowStyles,
				top: triggerRect.top + window.scrollY + triggerRect.height / 2 - arrowOffset,
				left: triggerRect.right + arrowOffset,
				borderTop: 'none', borderRight: 'none',
			};
		} else if (placements[0] === 'bottom') {
			contentStyles.top = triggerRect.top + window.scrollY + triggerRect.height + arrowSlot;
			if (placements[1] === 'start') { contentStyles.left = triggerRect.left; }
			else if (placements[1] === 'end') { contentStyles.left = triggerRect.left + triggerRect.width - theWidth; }
			else { contentStyles.left = triggerRect.left + triggerRect.width / 2 - theWidth / 2; }
			arrowStyles = {
				...arrowStyles,
				top: triggerRect.top + window.scrollY + triggerRect.height + arrowOffset,
				left: triggerRect.left + triggerRect.width / 2 - arrowOffset,
				borderBottom: 'none', borderRight: 'none',
			}
		} else if (placements[0] === 'left') {
			contentStyles.left = triggerRect.left - theWidth - arrowSlot;
			if (placements[1] === 'start') { contentStyles.top = triggerRect.top + window.scrollY; }
			else if (placements[1] === 'end') { contentStyles.top = triggerRect.top + window.scrollY + triggerRect.height - contentRect.height; }
			else { contentStyles.top = triggerRect.top + window.scrollY + triggerRect.height / 2 - contentRect.height / 2; }
			arrowStyles = {
				...arrowStyles,
				top: triggerRect.top + window.scrollY + triggerRect.height / 2 - arrowOffset,
				left: triggerRect.left - arrowSlot - arrowOffset,
				borderBottom: 'none', borderLeft: 'none',
			}
		}
		setArrowPoints(arrowStyles);
		setContentPoints(contentStyles);
	}

	useEffect(() => {
		const calculatePoints = () => {
			const triggerNode = triggerRef.current;
			const contentNode = contentRef.current;
			if (triggerNode && contentNode) {
				const triggerRect = triggerNode.getBoundingClientRect();
				const contentRect = contentNode.getBoundingClientRect();
				handlePlacements(triggerRect, contentRect);
			}
		}
		calculatePoints();
		window.addEventListener('resize', calculatePoints);
		window.addEventListener('scroll', calculatePoints);
		return () => {
			window.removeEventListener('resize', calculatePoints);
			window.removeEventListener('scroll', calculatePoints);
		}
	}, [triggerRef, contentRef, width]);

	return (
		<div className='popover-portal'>
			{hasArrow && <div className={'popover-arrow fadeIn'} css={arrowPoints}></div>}
			<div ref={contentRef} className={'popover-content fadeIn'} css={contentPoints} onMouseEnter={handleClearTimeout} onMouseLeave={onClose}>
				{hasClose && <Icon className='popover-close' icon={<HiXMark />} size='16px' onClick={onClose} />}
				{children}
			</div>
		</div>
	)
}

const PopoverTrigger = (props) => {
	// from parent
	const { triggerRef, triggerType, isOpen, onOpen, onClose, handleTimeout } = props;
	// from outside
	const { children } = props;

	const triggerProps = triggerType === 'click'
		? { onClick: () => {
			if(isOpen) { onClose(); }
			else { onOpen(); }
		} }
		: { onMouseEnter: onOpen, onMouseLeave: handleTimeout };

	return (
		<div ref={triggerRef} className='popover-trigger' {...triggerProps}>
			{children}
		</div>
	)
}

const Popover = ({ placement = 'top-start', triggerType = 'click', hasArrow = true, hasClose = true, children }) => {
	const [isOpen, setOpen] = useState(false);
	const [timeOut, setTimeOut] = useState(null);
	const [returnState, setReturnState] = useState(null);
	const triggerRef = useRef();
	const contentRef = useRef();
	const portalId = document.getElementById('portal-root');

	const childrenCount = Children.count(children);
	if (childrenCount > 2) {
		throw new Error(`Popover can only have two child components: PopoverTrigger and PopoverContent.`);
	}
	const childrenArray = Children.toArray(children);
	let type1Count = 0; // cannot be more than 1!
	let type2Count = 0; // cannot be more than 1!

	let placements = [];
	if (placement.indexOf('-')) { placements = placement.split('-'); }
	else { placements[0] = placement; }

	const onOpen = () => {
		if(timeOut !== null && triggerType === 'hover') { handleTimeout(); }
		setOpen(true);
	}

	const onClose = () => {
		if(timeOut !== null && triggerType === 'hover') { handleClearTimeout(timeOut); }
		if(isOpen) { setOpen(false); }
	}

	const handleTimeout = () => {
		const time = setTimeout(() => onClose(), 200);
		setTimeOut(time);
	}

	const handleClearTimeout = () => {
		clearTimeout(timeOut);
	}

	const popoverChildren = Children.map(childrenArray, (child, index) => {
		if (isValidElement(child)) {
			if (child.type.name === 'PopoverTrigger') {
				type1Count++;
				if (type1Count > 1) { throw new Error(`Popover can only have one PopoverTrigger.`); }
				return cloneElement(child, { triggerRef, triggerType, isOpen, onOpen, onClose, handleTimeout });
			} else if (child.type.name === 'PopoverContent') {
				type2Count++;
				if (type2Count > 1) { throw new Error(`Popover can only have one PopoverContent.`); }
				return isOpen && portalId ? (
					createPortal(cloneElement(child, { placements, triggerRef, contentRef, isOpen, handleClearTimeout, onClose, hasArrow, hasClose }), portalId)) : null;
			}
		} else {
			throw new Error(`Popover only accepts PopoverTrigger and or PopoverContent as children.`);
		}
	});

	return (
		<div className='popover'>
			{popoverChildren}
		</div>
	)
}

export {
	Popover,
	PopoverTrigger,
	PopoverContent
};