import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import './primitives.css';

const BoxStyle = styled.div`
	position:${(props) => (props.$position && props.$position)}; top:${(props) => (props.$top && props.$top)}; right:${(props) => (props.$right && props.$right)}; bottom:${(props) => (props.$bottom && props.$bottom)}; left:${(props) => (props.$left && props.$left)}; z-index:${(props) => (props.$zIndex && props.$zIndex)};
	
	margin:${(props) => (props.$margin && props.$margin)}; margin-top:${(props) => (props.$marginTop && props.$marginTop)}; margin-right:${(props) => (props.$marginRight && props.$marginRight)}; margin-bottom:${(props) => (props.$marginBottom && props.$marginBottom)}; margin-left:${(props) => (props.$marginLeft && props.$marginLeft)};
	
	padding:${(props) => (props.$padding ? props.$padding : '20px')}; padding-top:${(props) => (props.$paddingTop && props.$paddingTop)}; padding-right:${(props) => (props.$paddingRight && props.$paddingRight)}; padding-bottom:${(props) => (props.$paddingBottom && props.$paddingBottom)}; padding-left:${(props) => (props.$paddingLeft && props.$paddingLeft)};
	
	width:${(props) => (props.$width && props.$width)}; height:${(props) => (props.$height && props.$height)}; min-width:${(props) => (props.$minWidth && props.$minWidth)}; min-height:${(props) => (props.$minHeight && props.$minHeight)}; max-width:${(props) => (props.$maxWidth && props.$maxWidth)}; max-height:${(props) => (props.$maxHeight && props.$maxHeight)};
	
	display:${(props) => (props.$display && props.$display)}; visibility:${(props) => (props.$visibility && props.$visibility)}; opacity:${(props) => (props.$opacity && props.$opacity)};
	
	box-shadow:${(props) => (props.$boxShadow && props.$boxShadow)}; background:${(props) => (props.$background && props.$background)}; background-color:${(props) => (props.$bgColor && props.$bgColor)};
	
	border:${(props) => (props.$border && props.$border)}; border-style:${(props) => (props.$borderStyle && props.$borderStyle)}; border-width:${(props) => (props.$borderWidth && props.$borderWidth)}; border-color:${(props) => (props.$borderColor && props.$borderColor)};
	
	border-top:${(props) => (props.$borderTop && props.$borderTop)}; border-top-style:${(props) => (props.$borderTopStyle && props.$borderTopStyle)}; border-top-width:${(props) => (props.$borderTopWidth && props.$borderTopWidth)}; border-top-color:${(props) => (props.$borderTopColor && props.$borderTopColor)};

	border-right:${(props) => (props.$borderRight && props.$borderRight)}; border-right-style:${(props) => (props.$borderRightStyle && props.$borderRightStyle)}; border-right-width:${(props) => (props.$borderRightWidth && props.$borderRightWidth)}; border-right-color:${(props) => (props.$borderRightColor && props.$borderRightColor)};

	border-bottom:${(props) => (props.$borderBottom && props.$borderBottom)}; border-bottom-style:${(props) => (props.$borderBottomStyle && props.$borderBottomStyle)}; border-bottom-width:${(props) => (props.$borderBottomWidth && props.$borderBottomWidth)}; border-bottom-color:${(props) => (props.$borderBottomColor && props.$borderBottomColor)};

	border-left:${(props) => (props.$borderLeft && props.$borderLeft)}; border-left-style:${(props) => (props.$borderLeftStyle && props.$borderLeftStyle)}; border-left-width:${(props) => (props.$borderLeftWidth && props.$borderLeftWidth)}; border-left-color:${(props) => (props.$borderLeftColor && props.$borderLeftColor)};

	border-radius:${(props) => (props.$borderRadius && props.$borderRadius)};
	
	color:${(props) => (props.$color && props.$color)}; font:${(props) => (props.$font && props.$font)}; font-family:${(props) => (props.$fontFamily ? props.$fontFamily : 'sans-serif')}; font-size:${(props) => (props.$fontSize ? props.$fontSize : '16px')}; font-weight:${(props) => (props.$fontWeight && props.$fontWeight)}; font-style:${(props) => (props.$fontStyle && props.$fontStyle)}; text-align:${(props) => (props.$textAlign ? props.$textAlign : 'left')}; line-height:${(props) => (props.$lineHeight ? props.$lineHeight : '1.5')};

	&.flex {
		display:flex; flex-direction: ${(props) => (props.$flexDirection ? props.$flexDirection : 'row')}; align-items: ${(props) => (props.$alignItems ? props.$alignItems : 'flex-start')}; justify-content: ${(props) => (props.$justifyContent ? props.$justifyContent : 'flex-start')}; flex-grow: ${(props) => (props.$flexGrow && props.$flexGrow)}; flex-shrink: ${(props) => (props.$flexShrink && props.$flexShrink)}; flex-wrap: ${(props) => (props.$flexWrap && props.$flexWrap)}; gap: ${(props) => (props.$gap ? props.$gap : '10px')};
	}

	&.text, &.text > * {
		display:${(props) => (props.$display && props.$display)}; color:${(props) => (props.$color ? props.$color : 'inherit')}; font:${(props) => (props.$font && props.$font)}; font-family:${(props) => (props.$fontFamily ? props.$fontFamily : 'sans-serif')}; font-size:${(props) => (props.$fontSize ? props.$fontSize : 'inherit')}; font-weight:${(props) => (props.$fontWeight && props.$fontWeight)};  font-style:${(props) => (props.$fontStyle && props.$fontStyle)}; font-variant:${(props) => (props.$fontVariant && props.$fontVariant)}; font-kerning:${(props) => (props.$fontKerning && props.$fontKerning)}; letter-spacing:${(props) => (props.$letterSpacing && props.$letterSpacing)}; word-spacing:${(props) => (props.$wordSpacing && props.$wordSpacing)}; text-decoration:${(props) => (props.$textDecoration && props.$textDecoration)}; text-transform:${(props) => (props.$textTransform && props.$textTransform)}; text-shadow:${(props) => (props.$textShadow && props.$textShadow)}; text-indent:${(props) => (props.$textIndent && props.$textIndent)}; text-align:${(props) => (props.$textAlign && props.$textAlign)};

	}
`;

const Box = (props) => {
	const {
		pos, position, top, right, bottom, left, z, zIndex,
		m, margin, mt, marginTop, mr, marginRight, mb, marginBottom, ml, marginLeft, mx, marginX, my, marginY,
		p, padding, pt, paddingTop, pr, paddingRight, pb, paddingBottom, pl, paddingLeft, px, paddingX, py, paddingY,
		w, width, h, height, minw, minWidth, minh, minHeight, maxw, maxWidth, maxh, maxHeight,
		display, visibility, opacity,
		boxShadow, bg, background, bgColor,
		b, border, bWidth, borderWidth, bStyle, borderStyle, bColor, borderColor,
		bt, borderTop, btWidth, borderTopWidth, btStyle, borderTopStyle, btColor, borderTopColor,
		br, borderRight, brWidth, borderRightWidth, brStyle, borderRightStyle, brColor, borderRightColor,
		bb, bbWidth, borderBottom, borderBottomWidth, bbStyle, borderBottomStyle, bbColor, borderBottomColor,
		bl, borderLeft, blWidth, borderLeftWidth, blStyle, borderLeftStyle, blColor, borderLeftColor,
		bRadius, borderRadius,
		// text props
		color, font, fontFamily, fontSize, fontWeight, fontStyle, fontVariant, fontKerning, letterSpacing, wordSpacing, textDecoration, textTransform, textShadow, textIndent, textAlign, lineHeight,
		// flex props
		flexDirection, alignItems, justifyContent, gap, rowGap, columnGap, flexGrow, flexShrink, flexWrap,
		type, as = 'div', children
	} = props;

	var thepos = pos || position;
	var thez = z || zIndex;
	var them = m || margin;
	var themt = (mt || marginTop) || (my || marginY);
	var themr = (mr || marginRight) || (mx || marginX);
	var themb = (mb || marginBottom) || (my || marginY);
	var theml = (ml || marginLeft) || (mx || marginX);
	var thep = p || padding;
	var thept = (pt || paddingTop) || (py || paddingY);
	var thepr = (pr || paddingRight) || (px || paddingX);
	var thepb = (pb || paddingBottom) || (py || paddingY);
	var thepl = (pl || paddingLeft) || (px || paddingX);
	var thew = w || width;
	var theh = h || height;
	var theminw = minw || minWidth;
	var theminh = minh || minHeight;
	var themaxw = maxw || maxWidth;
	var themaxh = maxh || maxHeight;
	var thebg = bg || background;
	var theb = b || border;
	var thebw = bWidth || borderWidth;
	var thebs = bStyle || borderStyle;
	var thebc = bColor || borderColor;
	var thebt = bt || borderTop;
	var thebtw = btWidth || borderTopWidth;
	var thebts = btStyle || borderTopStyle;
	var thebtc = btColor || borderTopColor;
	var thebr = br || borderRight;
	var thebrw = brWidth || borderRightWidth;
	var thebrs = brStyle || borderRightStyle;
	var thebrc = brColor || borderRightColor;
	var thebb = bb || borderBottom;
	var thebbw = bbWidth || borderBottomWidth;
	var thebbs = bbStyle || borderBottomStyle;
	var thebbc = bbColor || borderBottomColor;
	var thebl = bl || borderLeft;
	var theblw = blWidth || borderLeftWidth;
	var thebls = blStyle || borderLeftStyle;
	var theblc = blColor || borderLeftColor;
	var thebrad = bRadius || borderRadius;

	return (
		<BoxStyle as={as}
			className={'box ' + type && type}
			$position={thepos} $top={top} $right={right} $bottom={bottom} $left={left} $zIndex={thez}

			$margin={them} $marginTop={themt} $marginRight={themr} $marginBottom={themb} $marginLeft={theml}

			$padding={thep} $paddingTop={thept} $paddingRight={thepr} $paddingBottom={thepb} $paddingLeft={thepl}

			$width={thew} $height={theh} $minWidth={theminw} $minHeight={theminh} $maxWidth={themaxw} $maxHeight={themaxh}
			
			$display={display} $visibility={visibility} $opacity={opacity}

			$boxShadow={boxShadow} $background={thebg} $bgColor={bgColor}

			$border={theb} $borderWidth={thebw} $borderStyle={thebs} $borderColor={thebc}

			$borderTop={thebt} $borderTopWidth={thebtw} $borderTopStyle={thebts} $borderTopColor={thebtc}

			$borderRight={thebr} $borderRightWidth={thebrw} $borderRightStyle={thebrs} $borderRightColor={thebrc}

			$borderBottom={thebb} $borderBottomWidth={thebbw} $borderBottomStyle={thebbs} $borderBottomColor={thebbc}

			$borderLeft={thebl} $borderLeftWidth={theblw} $borderLeftStyle={thebls} $borderLeftColor={theblc}

			$borderRadius={thebrad}

			// text styles
			$color={color} $font={font} $fontFamily={fontFamily} $fontSize={fontSize} $fontWeight={fontWeight} $fontStyle={fontStyle} fontVariant={fontVariant} fontKerning={fontKerning} $letterSpacing={letterSpacing} $wordSpacing={wordSpacing} $textDecoration={textDecoration} $textTransform={textTransform} $textShadow={textShadow} $textIndent={textIndent} $textAlign={textAlign} $lineHeight={lineHeight}

			// flex styles
			$flexDirection={flexDirection} $alignItems={alignItems} $justifyContent={justifyContent} $gap={gap} $rowGap={rowGap} $columnGap={columnGap} $flexGrow={flexGrow} $flexShrink={flexShrink} $flexWrap={flexWrap}
		>
			{children}
		</BoxStyle>
	)
}

const Flex = (props) => {
	// box props
	// direction, align, justify, gap, rowGap, colummGap, grow, shrink, wrap
	const padding = props.padding ? props.padding : '0';

	return (
		<Box type='flex' padding={padding} flexDirection={props.direction} alignItems={props.align} justifyContent={props.justify} flexGrow={props.grow} flexShrink={props.shrink} flexWrap={props.wrap} {...props} />
	)
}

const Text = (props) => {
	// box props
	// display, color, font, family, fontFamily, size, fontSize, weight, fontWeight, style, fontStyle, variant, fontVariant, kerning, fontKerning, tracking, letterSpacing, spacing, wordSpacing, decoration, textDecoration, casing, textTransform, shadow, textShadow, indent, textIndent, align, textAlign, leading, lineSpacing, lineHeight
	const as = props.as ? props.as : 'p';
	const padding = (props.p || props.padding) || '0';
	const family = props.family || props.fontFamily;
	const size = props.size || props.fontSize;
	const weight = props.weight || props.fontWeight;
	const style = props.style || props.fontStyle;
	const variant = props.variant || props.fontVariant;
	const kerning = props.kerning || props.fontKerning;
	const tracking = props.tracking || props.letterSpacing;
	const spacing = props.spacing || props.wordSpacing;
	const decoration = props.decoration || props.textDecoration;
	const casing = props.casing || props.textTransform;
	const shadow = props.shadow || props.textShadow;
	const indent = props.indent || props.textIndent;
	const align = props.align || props.textAlign;
	const leading = (props.leading || props.lineSpacing) || props.lineHeight;

	return (
		<Box type='text' as={as} padding={padding} fontFamily={family} fontSize={size} fontWeight={weight} fontStyle={style} fontVariant={variant} fontKerning={kerning} letterSpacing={tracking} wordSpacing={spacing} textDecoration={decoration} textTransform={casing} textShadow={shadow} textIndent={indent} textAlign={align} lineHeight={leading} {...props} />
	)
}

export {
	Box,
	Flex,
	Text
};