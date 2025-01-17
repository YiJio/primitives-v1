/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useState } from 'react';
import { jsx, css } from '@emotion/react';
import { StyledLayout } from '../layout/Layout';

const Typography = ({ as = 'p', className, color, family, size, weight, style, variant, kerning, tracking, spacing, decoration, casing, shadow, leading, children, ...props }) => {
	// shared props
	// basically this is to make a quick text element, but can still be styled through css or not used entirely, up to user
	const styles = css`
		color: ${color || 'inherit'};
		font-family: ${family || 'sans-serif'}; font-size: ${size}; font-weight: ${weight}; font-style: ${style}; font-variant: ${variant}; font-kerning: ${kerning};
		letter-spacing: ${tracking}; word-spacing: ${spacing};
		text-decoration: ${decoration}; text-transform: ${casing}; text-shadow: ${shadow};
		line-height: ${leading};
	`;

	return (
		<StyledLayout as={as} className={className} css={styles} {...props}>
			{children}
		</StyledLayout>
	)
}

const TextBlock = ({ as, className, indent, align, ...props }) => {
	const styles = css`
		display: block;
		text-indent: ${indent}; text-align: ${align};
	`;

	return (
		<Typography as={as} className={className} css={styles} {...props} />
	);
}

const TextInline = ({ as, className, ...props }) => {
	const styles = css`
		display: inline-block;
	`;

	return (
		<Typography as={as} className={className} css={styles} {...props} />
	);
}

const Blockquote = ({ as, className, bWidth, bStyle, bColor, ...props }) => {
	const styles = css`
		display: block;
		border: ${bWidth} ${bStyle} ${bColor};
	`;

	return (
		<Typography as={'blockquote'} className={className} css={styles} {...props}	/>
	)
}

const Code = ({ className, label, bgColor = 'gray', children, ...props }) => {
	const styles = css`
		display:inline-block; padding:2px 4px; border-radius:2px; border:1px solid var(--color-${bgColor}-1); background:var(--color-${bgColor}-0); color:var(--color-${bgColor}-7); font-family:'Sometype Mono', monospace;
	`;

	return (
		<Typography as='code' className={className} css={styles} {...props}>
			{children ? children : label}
		</Typography>
	)
}

const Kbd = ({ className, p, bWidth, bStyle, bColor, bgColor, shadowColor, ...props }) => {
	// needs to check for css variables for colors (do later, needs to check, box shadows should be calculated directly instead of passing it into)
	const styles = css`
		display: inline-block;
		padding: ${p || '2px 5px'};
		border: ${bWidth || '1px'} ${bStyle || 'solid'} ${bColor || 'black'};
		background: ${bgColor || 'gray'};
		box-shadow: ${shadowColor || 'inset 0 -0.05em #BBB,0 0 0 0.05em #CCC,0 0.08em 0.17em #AAA'};
	`;

	return (
		<Typography as={'span'} className={className} css={styles} {...props}	/>
	)
}

// not a button, but used in a button or anywhere else
const Icon = ({ className, icon, size = '20px', color = 'inherit', children, ...props }) => {
	const styles = css`
		display: inline-flex; align-items:center; justify-content:center; font-size:${size}; color:${color};
	`;

	return (
		<Typography as={'span'} className={className} css={styles} {...props}>
			{children ? children : icon}
		</Typography>
	)
}

export {
	Typography,
	TextBlock,
	TextInline,
	Blockquote,
	Code,
	Kbd,
	Icon,
}