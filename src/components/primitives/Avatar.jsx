/** @jsxRuntime classic */
/** @jsx jsx */
import React, { Children, cloneElement, useState } from 'react';
import { jsx, css } from '@emotion/react';

import { Utils } from '../../utils/Utils';

import Badge from './Badge';

import './primitives.css';


const AvatarBadge = (props) => {
	const { placement = 'top', size, ...restProps } = props;
	let theSize = size ? size.toLowerCase() : 'l';
	theSize = theSize === 's' || theSize === 'm' ? 'l' : theSize;

	const styles = css`
		top:${placement === 'top' && '2px'}; bottom:${placement === 'bottom' && '2px'}; right:2px;
	`;

	return (
		<div className='avatar-badge' css={styles}>
			<Badge size={theSize} {...restProps}/>
		</div>
	)
}

const Avatar = (props) => {
	const { fromParty = false } = props;
	const { name, imgSrc, round = 'full', size = 'L', bgColor = '#eee', bColor = '#eee', bWidth = '0', textColor, children } = props;

	const theSize = parseInt(size) ? 'L' : size;
	const fallback = name.split(' ');
	let letters = '';
	for (var i = 0; i < fallback.length; i++) {
		if (i > 2) { break; }
		letters += fallback[i].charAt(0).toUpperCase();
	}

	const styles = css`
		color:${textColor ? textColor : Utils.setBWTextColor(bgColor)}; background:${bgColor} !important; border-color:${bColor} !important; border-width:${bWidth}; border-radius:${round === 'none' ? '0px' : round === 'full' ? '9999px' : round};
	`;

	return (
		<>
			{children && !fromParty ? <div className='avatar-wrapper'>
				<div className={`avatar size-${theSize.toLowerCase()}`} css={styles}>
					{imgSrc && imgSrc !== '' ? <img src={imgSrc} /> : letters}
				</div>
				{children}
			</div> : <div className={`avatar size-${theSize.toLowerCase()}`} css={styles}>
				{imgSrc && imgSrc !== '' ? <img src={imgSrc} /> : letters}
			</div>}
		</>
	)
}

const AvatarGroup = (props) => {
	const { round = 'full', size = 'L', gap = '10px', bColor = '#eee', bWidth = '0', maxUsers = 2, isFirstOnTop = false, children } = props;

	const theSize = parseInt(size) ? 'L' : size;

	const styles = css`
			& span.z { margin-left:${gap}; }
			& .avatar { background:${bColor}; border-color:${bColor}; border-width:${bWidth}; border-radius:${round === 'none' ? '0px' : round === 'full' ? '9999px' : round}; }
			`;

	const childrenCount = Children.count(children);
	const childrenArray = Children.toArray(children);

	return (
		<div className='avatar-group' css={styles}>
			{Children.map(childrenArray, (child, index) => (
				<>
					{index < maxUsers
						? isFirstOnTop
							? <span className='z' style={{ zIndex: (maxUsers - index) }}>{cloneElement(child, { size: theSize })}</span>
							: <span className='z'>{cloneElement(child, { size: theSize })}</span>
						: ''
					}
				</>
			))}
			{maxUsers !== childrenCount && <span className='z'>
				<div className={`avatar avatar-group__plus size-${theSize.toLowerCase()}`}>
					+{childrenCount - maxUsers}
				</div>
			</span>}
		</div>
	)
}

const AvatarParty = (props) => {
	const { round = 'full', size = 'L', bgColor = '#eee', bColor = '#eee', bWidth = '0', children } = props;

	const theSize = parseInt(size) ? 'L' : size;

	const styles = css`
		background:${bgColor}; border-color:${bColor}; border-width:${bWidth}; border-radius:${round === 'none' ? '0px' : round === 'full' ? '9999px' : round};
	`

	const childrenCount = Children.count(children);
	const childrenArray = Children.toArray(children);
	const maxUsers = childrenCount < 4 ? childrenCount : 4;
	const userClass = `u${maxUsers}`;

	return (
		<div className={`avatar-party ${userClass} size-${theSize.toLowerCase()}`} css={styles}>
			{Children.map(childrenArray, (child, index) => {
				return (
					<>
						{index < maxUsers && <>
							{cloneElement(child, { round: 'none', fromParty: true })}
						</>}
					</>
				)
			})}
		</div>
	)
}

export {
	Avatar,
	AvatarBadge,
	AvatarGroup,
	AvatarParty
}