/** @jsxRuntime classic */
/** @jsx jsx */
import React, { Children, cloneElement, useState } from 'react';
import { Link } from 'react-router-dom';
import { jsx, css } from '@emotion/react';

import './primitives.css';

const BreadcrumbItem = (props) => {
	const { isLast, withLink } = props;
	const { label, link, title, children } = props;
	// no <Link> because may be an external link?

	return (
		<>
			{link && withLink ? <Link to={link} title={link && (title && title)} className='breadcrumb__item'>
				{children ? children : label}
			</Link> : <div className='breadcrumb__item'>
				{children ? children : label}
			</div>}
		</>
	)
}

const Breadcrumb = (props) => {
	const { display, gap = '8px', separator, withLink = true, children } = props;

	const styles = css`
		display:${display}; gap:${gap};
	`;

	const childrenCount = Children.count(children);
	const childrenArray = Children.toArray(children);

	return (
		<div className='breadcrumb' css={styles}>
			{Children.map(childrenArray, (child, index) => {
				const isLast = index === childrenArray.length - 1;
				if (!isLast && !child.props.link && withLink) {
					throw new Error(`BreadcrumbItem child no. ${index + 1} should be passed a 'link' prop. If you don't want to use links, please set the prop withLink to false.`);
				}
				return (
					<>
						{/*child.props.link ? (
							<Link to={child.props.link} title={child.props.title && child.props.title}>{cloneElement(child, { isLast })}</Link>
						) : (
							<>{cloneElement(child, { isLast })}</>
						)*/}
						{cloneElement(child, { isLast, withLink })}
						{!isLast && <div className='breadcrumb__separator'>{separator ? separator : '/'}</div>}
					</>
				)
			})}
		</div>
	)
}

export {
	Breadcrumb,
	BreadcrumbItem,
}