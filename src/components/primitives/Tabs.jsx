/** @jsxRuntime classic */
/** @jsx jsx */
import React, { Children, isValidElement, cloneElement, useRef, useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { jsx, css } from '@emotion/react';

import { Icon } from '../typography';
import Badge from './Badge';

import './primitives.css';

const TabContent = (props) => {
	// from parent
	const { isActive } = props;
	// from outside
	const { children } = props;

	return (
		<>
			{isActive && <div className={`tabs__tab-content`}>{children}</div>}
		</>
	)
}

const TabContents = (props) => {
	// from parent
	const { activeTab } = props;
	// from outside
	const { children } = props;

	const childrenArray = Children.toArray(children);

	const contentChildren = Children.map(childrenArray, (child, index) => {
		if (isValidElement(child) && child.type.name === 'TabContent') {
			return cloneElement(child, { isActive: activeTab === index });
		} else {
			throw new Error(`TabContents only accepts TabContent as children.`);
		}
	})

	return (
		<div className='tabs__tab-contents'>{contentChildren}</div>
	)
}

const Tab = (props) => {
	// from parent
	const { variant, withLink, index, isActive, onClick } = props;
	// from outside
	const { icon, label, link, hasBadge, children } = props;

	const location = useLocation();
	const navigate = useNavigate();

	const handleTabClick = () => {
		onClick();
		if (link) {
			if (index !== 0 && withLink) {
				navigate(`${location.pathname}/${link}`);
			} else if (index === 0 && withLink) {
				navigate(`${location.pathname}`);
			}
		}
	}

	return (
		<div className={`tabs__tab ${isActive ? 'active' : ''}`} onClick={handleTabClick}>
			{icon && <Icon className='tabs__tab-icon' icon={icon} size='16px' />}
			<div className='tabs__tab-label'>
				{children ? children : label}
			</div>
			{hasBadge && <div className='tabs__tab-badge'><Badge size={variant === 'text' ? 'M' : 'S'}/></div>}
		</div>
	)
}

const TabIndicator = (props) => {
	// from parent
	const { activeTab, tabsRef, colorScheme } = props;
	// from outside
	const { height = '2px', bgColor } = props;

	const [styles, setStyles] = useState({});

	useEffect(() => {
		const parentNode = tabsRef.current;
		if (parentNode) {
			const list = parentNode.querySelector(`.tabs__tab-list`);
			const tab = list.querySelector(`.active`);
			const listPosition = list.getBoundingClientRect().left;
			const tabPosition = tab.getBoundingClientRect().left;
			const position = tabPosition - listPosition;
			setStyles({
				width: tab.getBoundingClientRect().width,
				background: bgColor ? bgColor : `var(--color-${colorScheme}-5)`,
				transform: `translateX(${position}px)`
			})
		}
	}, [tabsRef, activeTab])

	return (
		<div className='tabs__slider' style={{ height: height }}>
			<div className='tabs__slider-indicator' css={styles}></div>
		</div>
	)
}

const TabList = (props) => {
	// from parent
	const { activeTab, setActiveTab, withLink, variant, colorScheme } = props;
	// from outside
	const { children } = props;

	const styles = css`
		&.boxed .tabs__tab { padding:8px 16px; }
		&.boxed .tabs__tab.active { background:var(--color-${colorScheme}-1); color:var(--color-${colorScheme}-7); }

		&.pill .tabs__tab { padding:4px 12px; border-radius:15px; }
		&.pill .tabs__tab.active { background:var(--color-${colorScheme}-1); color:var(--color-${colorScheme}-7); }

		&.text { gap:40px; }
		&.text .tabs__tab { padding:0; font-size:24px; font-weight:bold; color:${colorScheme === 'gray' ? `var(--color-gray-3)` : `var(--color-${colorScheme}-2)`}; }
		&.text .tabs__tab.active { color:${colorScheme === 'gray' ? `var(--color-black-a100)` : `var(--color-${colorScheme}-7)`}; }

		&.enclosed { position:relative; }
		&.enclosed:before { position:absolute; content:''; width:100%; height:1px; bottom:0; border-bottom:1px solid var(--color-gray-1); }
		&.enclosed .tabs__tab { padding:6px 16px; }
		&.enclosed .tabs__tab.active { border-top-left-radius:4px; border-top-right-radius:4px; border:1px solid var(--color-gray-1); border-bottom-color:var(--color-white-a100); color:${colorScheme === 'gray' ? `var(--color-black-a100)` : `var(--color-${colorScheme}-7)`}; z-index:1; }

		&.border-bottom .tabs__tab { position:relative; padding:8px 16px; }
		&.border-bottom .tabs__tab::after { content:''; position:absolute; bottom:0; left:50%; width:0; height:2px; background:${colorScheme === 'gray' ? `var(--color-gray-1)` : `var(--color-${colorScheme}-1)`}; transition:all ease-in-out 0.2s; }
		&.border-bottom .tabs__tab.active::after { background:${colorScheme === 'gray' ? `var(--color-gray-2)` : `var(--color-${colorScheme}-2)`}; }
		&.border-bottom .tabs__tab:hover::after, &.border-bottom .tabs__tab.active::after { width:100%; left:0; }

		&.wrapped { padding:4px; border-radius:4px; background:var(--color-${colorScheme}-0); }
		&.wrapped .tabs__tab { padding:6px 20px; background:transparent; color:var(--color-gray-5); font-size:14px; }
		&.wrapped .tabs__tab.active { border-radius:4px; background:var(--color-white-a100); color:var(--color-black-a100); box-shadow:var(--color-shadow-small); }
	`;

	const childrenArray = Children.toArray(children);

	const tabChildren = Children.map(childrenArray, (child, index) => {
		if (isValidElement(child) && child.type.name === 'Tab') {
			return cloneElement(child, { variant, withLink, index, isActive: activeTab === index, onClick: () => setActiveTab(index) });
		} else {
			throw new Error(`TabList only accepts Tab as children.`);
		}
	})

	return (
		<div className={`tabs__tab-list ${variant ? variant : ''}`} css={styles}>{tabChildren}</div>
	)
}

const Tabs = (props) => {
	const { defaultTab = 0, withLink, variant = 'boxed', colorScheme = 'gray', children } = props;
	const [activeTab, setActiveTab] = useState(defaultTab);
	const tabsRef = useRef(null);

	const childrenCount = Children.count(children);
	if (childrenCount > 3) { throw new Error(`Tabs can only have three child components: TabList, TabContents, and TabIndicator.`); }
	const childrenArray = Children.toArray(children);
	let type1Count = 0; // cannot be more than 1!
	let type2Count = 0; // cannot be more than 1!
	let type3Count = 0; // cannot be more than 1!

	const tabsChildren = Children.map(childrenArray, (child, index) => {
		if (isValidElement(child)) {
			if (child.type.name === 'TabList') {
				type1Count++;
				if (type1Count > 1) { throw new Error(`Tabs can only have one TabList.`); }
				return cloneElement(child, { activeTab, setActiveTab, withLink, variant, colorScheme });
			} else if (child.type.name === 'TabContents') {
				type2Count++;
				if (type2Count > 1) { throw new Error(`Tabs can only have one TabContents.`); }
				return cloneElement(child, { activeTab });
			} else if (child.type.name === 'TabIndicator') {
				type3Count++;
				if (type3Count > 1) { throw new Error(`Tabs can only have one TabIndicator.`); }
				return cloneElement(child, { activeTab, tabsRef, colorScheme });
			}
		} else {
			throw new Error(`Tabs only accepts TabList, TabContents, and TabIndicator as children.`);
		}
	})

	return (
		<div ref={tabsRef} className='tabs'>{tabsChildren}</div>
	)
}

export {
	Tabs,
	TabIndicator,
	TabList,
	Tab,
	TabContents,
	TabContent
}