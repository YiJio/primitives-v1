import React, { Children, isValidElement, cloneElement, useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

import { Icon } from '../typography';

import './primitives.css';

import { HiChevronUp, HiChevronDown } from 'react-icons/hi2';

const DropdownMenuDivider = (props) => {
	return (
		<hr className='dropdown-menu__divider' />
	)
}

const DropdownMenuItem = (props) => {
	// from parent
	const { setClicked } = props;
	// from outside
	const { label, icon, command, onClick, children } = props;

	const handleClick = () => {
		onClick();
		setClicked(false);
	}

	return (
		<div className='dropdown-menu__item' onClick={handleClick}>
			{icon && <Icon className='dropdown-menu__item-icon' icon={icon} size='16px' />}
			<div className='dropdown-menu__item-label'>{children ? children : label}</div>
			{command && <div className='dropdown-menu__item-command'>{command}</div>}
		</div>
	)
}

const DropdownMenuGroup = (props) => {
	// from parent
	const { setClicked } = props;
	// from outside
	const { name, children } = props;

	const childrenArray = Children.toArray(children);

	const groupChildren = Children.map(childrenArray, (child, index) => {
		if (isValidElement(child)) { return cloneElement(child, { setClicked }); }
		else { return null; }
	});

	return (
		<div className='dropdown-menu__group'>
			<div className='dropdown-menu__group-name'>{name}</div>
			{groupChildren}
		</div>
	)
}

const DropdownMenuList = (props) => {
	// from parent
	const { placement, triggerRef, listRef, setClicked } = props;
	// from outside
	const { children } = props;
	const [points, setPoints] = useState({});

	const childrenArray = Children.toArray(children);

	useEffect(() => {
		const triggerNode = triggerRef.current;
		const listNode = listRef.current;
		const calculatePoints = () => {
			if (triggerNode && listNode) {
				// update points
				const triggerRect = triggerNode.getBoundingClientRect();
				const listRect = listNode.getBoundingClientRect();
				let tempPoints = { top: triggerRect.top + triggerRect.height };
				if (placement === 'start') { tempPoints.left = triggerRect.left; }
				else { tempPoints.left = triggerRect.right - listRect.width; }
				setPoints(tempPoints);
			}
		}
		const handleClickOutside = (e) => {
			if (triggerNode && listNode) {
				if (!triggerRef.current.contains(e.target) && !listRef.current.contains(e.target)) {
					// if not clicking inside menu or trigger, set false
					setClicked(false);
				}
			}
		}
		calculatePoints();
		window.addEventListener('resize', calculatePoints);
		window.addEventListener('mousedown', handleClickOutside);
		return () => {
			window.removeEventListener('resize', calculatePoints);
			window.removeEventListener('mousedown', handleClickOutside);
		};
	}, [triggerRef, listRef]);

	const listChildren = Children.map(childrenArray, (child, index) => {
		if (isValidElement(child)) { return cloneElement(child, { setClicked }); }
		else { return null; }
	});

	return (
		<div className='dropdown-menu__portal' style={{ top: points.top, left: points.left }}>
			<div ref={listRef} className='dropdown-menu__list'>{listChildren}</div>
		</div>
	)
}

const DropdownMenuTrigger = (props) => {
	// from parent
	const { triggerRef, isClicked, setClicked, hasChevron } = props;
	// from outside
	const { label, icon, children } = props;

	return (
		<div ref={triggerRef} className={'dropdown-menu__trigger' + (isClicked ? ' active' : '')} onClick={(e) => setClicked(!isClicked)}>
			{icon && <Icon className='dropdown-menu__trigger-icon' icon={icon} size='16px' />}
			<div className='dropdown-menu__trigger-label'>{children ? children : label}</div>
			{hasChevron && <>
				{isClicked ? <Icon className='dropdown-menu__trigger-chevron' icon={<HiChevronUp />} size='16px' /> : <Icon className='dropdown-menu__trigger-chevron' icon={<HiChevronDown />} size='16px' />}
			</>}
		</div>
	)
}

const DropdownMenu = (props) => {
	const { placement = 'end', hasChevron = true, children } = props;
	const [isClicked, setClicked] = useState(false);
	const triggerRef = useRef(null);
	const listRef = useRef(null);
	const portalId = document.getElementById('portal-root');

	const childrenCount = Children.count(children);
	if (childrenCount > 2) { throw new Error(`DropdownMenu can only have two child components: DropdownMenuTrigger and DropdownMenuList.`); }
	const childrenArray = Children.toArray(children);
	let type1Count = 0; // cannot be more than 1!
	let type2Count = 0; // cannot be more than 1!

	const dropdownChildren = Children.map(childrenArray, (child, index) => {
		if (isValidElement(child)) {
			if (child.type.name === 'DropdownMenuTrigger') {
				type1Count++;
				if (type1Count > 1) { throw new Error(`DropdownMenu can only have one DropdownMenuTrigger.`); }
				return cloneElement(child, { triggerRef, isClicked, setClicked, hasChevron });
			} else if (child.type.name === 'DropdownMenuList') {
				type2Count++;
				if (type2Count > 1) { throw new Error(`DropdownMenu can only have one DropdownMenuList.`); }
				return isClicked && portalId ? (
					createPortal(cloneElement(child, { placement, triggerRef, listRef, setClicked }), portalId)) : null;
			}
		} else {
			throw new Error(`DropdownMenu only accepts DropdownMenuTrigger and or DropdownMenuList as children.`);
		}
	});

	return (
		<div className='dropdown-menu'>{dropdownChildren}</div>
	)
}

export {
	DropdownMenu,
	DropdownMenuTrigger,
	DropdownMenuList,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuDivider,
}