/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useState } from 'react';
import { jsx, css } from '@emotion/react';
import styled from '@emotion/styled';
import { space, layout, position, top, left, right, bottom, zIndex, borderRadius, border, borderWidth, borderStyle, borderColor, boxShadow, color, fontSize, fontWeight, lineHeight } from 'styled-system';
import shouldForwardProp from '@styled-system/should-forward-prop';

// some props should not be styled as props, but in css file
// only the most basic props, flex not here, typography only in typography
// only use base('as') if letting users change any of these props
export default () => styled('div', { shouldForwardProp })(
	(props => ({
		label: props.what,
	})),
	space,
	layout,
	position, top, left, right, bottom, zIndex,
	borderRadius,
	color,
	fontSize,
	fontWeight,
	lineHeight,
);