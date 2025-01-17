/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import styled from '@emotion/styled';

import base from './base';

// maybe deal with proptypes later on

// must check base's acceptable props to see if need shorthands here
const StyledBase = styled(base('div'))``
const StyledLayout = ({ as = 'div', what, className, position, pos, zIndex, z, width, w, minWidth, minw, maxWidth, maxw, height, h, minHeight, minh, maxHeight, maxh, borderRadius, bRadius, children, ...props }) => {

	return (
		<StyledBase as={as} what={what} className={className} position={position || pos} zIndex={zIndex || z} width={width || w} height={height || h} minWidth={minWidth || minw} minHeight={minHeight || minh} maxWidth={maxWidth || maxw} maxHeight={maxHeight || maxh} borderRadius={bRadius || borderRadius} {...props}>
			{children}
		</StyledBase>
	)
}

const Box = ({ as, className, display, children, ...props }) => {
	const styles = css`
		display: ${display};
	`;

	return (
		<StyledLayout as={as} className={className} css={styles} {...props}>{children}</StyledLayout>
	);
}

const Flex = ({ as, className, display = 'flex', direction, align, justify, wrap, gap = '8px', rowGap, columnGap, colGap, children, ...props }) => {
	var thealign = align;
	var thejustify = justify;
	switch (thealign) {
		case 'start': thealign = 'flex-start'; break;
		case 'end': thealign = 'flex-end'; break;
		default: thealign = thealign; break;
	}
	switch (thejustify) {
		case 'start': thejustify = 'flex-start'; break;
		case 'end': thejustify = 'flex-end'; break;
		default: thejustify = thealign; break;
	}

	const styles = css`
		display: ${display}; flex-direction: ${direction}; align-items: ${thealign}; justify-content:${thejustify}; flex-wrap: ${wrap}; gap: ${gap}; row-gap: ${rowGap}; column-grap: ${colGap || columnGap};
	`;

	return (
		<StyledLayout as={as} className={className} css={styles} {...props}>
			{children}
		</StyledLayout>
	)
}

const Grid = ({ as, className, display, rows, columns, flow, align, justify, gap, rowGap, colGap, children, ...props }) => {
	// in grid, align- & justify-items don't have the word 'flex-*'
	// no align- & justify-content

	const styles = css`
		display: ${display || 'grid'}; grid-template-rows: repeat(${rows || 3}, 1fr); grid-template-columns: repeat(${columns || 3}, 1fr); grid-auto-flow: ${flow}; align-items: ${align}; justify-items: ${justify}; gap: ${gap}; row-gap: ${rowGap}; column-grap: ${colGap};
	`;

	return (
		<StyledLayout as={as} className={className} css={styles} {...props}>
			{children}
		</StyledLayout>
	)
}

export {
	StyledLayout,
	Box,
	Flex,
	Grid,
}