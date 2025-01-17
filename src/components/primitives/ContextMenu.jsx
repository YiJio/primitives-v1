import React, { Children, isValidElement, cloneElement } from 'react';
import { createPortal } from 'react-dom';

import useContextMenu from '../../hooks/useContextMenu';

import './primitives.css';

// probably need to expand portal into accepting ContextList and other stuff
const ContextMenuList = (props) => {
	// from parent
	const { points } = props;
	// from outside
	const { children } = props;

	return (
		<div className='context-menu__portal' style={{ top: points.y, left: points.x }}>
			<div className='context-menu__content'>{children}</div>
		</div>
	)
}

const ContextMenuTrigger = (props) => {
	// from parent
	const { clickType, setClicked, setPoints } = props;
	// from outside
	const { children } = props;

	const onTrigger = (e) => {
		e.preventDefault();
		console.log(e);
		setClicked(true);
		setPoints({
			x: e.pageX,
			y: e.pageY,
		})
	}

	const triggerProps = clickType === 'right'
		? { onContextMenu: onTrigger }
		: clickType === 'left'
			? { onClick: onTrigger }
			: { onAuxClick: onTrigger }

	return (
		<div className='context-menu__trigger' {...triggerProps}>{children}</div>
	)
}

const ContextMenu = (props) => {
	const { clickType = 'right', children } = props;
	const { clicked, setClicked, points, setPoints } = useContextMenu();
	const portalId = document.getElementById('portal-root');

	const childrenCount = Children.count(children);
	if (childrenCount > 2) {
		throw new Error(`ContextMenu can only have two child components: ContextMenuTrigger and ContextMenuList.`);
	}
	const childrenArray = Children.toArray(children);
	let type1Count = 0; // cannot be more than 1!
	let type2Count = 0; // cannot be more than 1!

	const contextChildren = Children.map(childrenArray, (child, index) => {
		if (isValidElement(child)) {
			if (child.type.name === 'ContextMenuTrigger') {
				type1Count++;
				if (type1Count > 1) {
					throw new Error(`ContextMenu can only have one ContextMenuTrigger.`);
				}
				return cloneElement(child, { clickType, setClicked, setPoints });
			} else if (child.type.name === 'ContextMenuList') {
				type2Count++;
				if (type2Count > 1) {
					throw new Error(`ContextMenu can only have one ContextMenuList.`);
				}
				return clicked && portalId ? (
					createPortal(cloneElement(child, { points }), portalId)) : null;
			}
		} else {
			throw new Error(`ContextMenu only accepts ContextMenuTrigger and or ContextMenuList as children.`);
		}
	});

	return (
		<div className='context-menu'>{contextChildren}</div>
	)
}

export {
	ContextMenu,
	ContextMenuTrigger,
	ContextMenuList,
}