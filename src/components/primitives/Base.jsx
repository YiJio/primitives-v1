import React from 'react';
import styled from 'styled-components';
import './primitives.css';

const BaseStyle = styled.div`
	position:${(props) => (props.$position && props.$position)}; top:${(props) => (props.$top && props.$top)}; right:${(props) => (props.$right && props.$right)}; bottom:${(props) => (props.$bottom && props.$bottom)}; left:${(props) => (props.$left && props.$left)}; z-index:${(props) => (props.$zIndex && props.$zIndex)};
	
	margin:${(props) => (props.$margin && props.$margin)}; margin-top:${(props) => (props.$marginTop && props.$marginTop)}; margin-right:${(props) => (props.$marginRight && props.$marginRight)}; margin-bottom:${(props) => (props.$marginBottom && props.$marginBottom)}; margin-left:${(props) => (props.$marginLeft && props.$marginLeft)};
	
	padding:${(props) => (props.$padding && props.$padding)}; padding-top:${(props) => (props.$paddingTop && props.$paddingTop)}; padding-right:${(props) => (props.$paddingRight && props.$paddingRight)}; padding-bottom:${(props) => (props.$paddingBottom && props.$paddingBottom)}; padding-left:${(props) => (props.$paddingLeft && props.$paddingLeft)};
	
	width:${(props) => (props.$width && props.$width)}; height:${(props) => (props.$height && props.$height)}; min-width:${(props) => (props.$minWidth && props.$minWidth)}; min-height:${(props) => (props.$minHeight && props.$minHeight)}; max-width:${(props) => (props.$maxWidth && props.$maxWidth)}; max-height:${(props) => (props.$maxHeight && props.$maxHeight)};
	
	display:${(props) => (props.$display && props.$display)}; visibility:${(props) => (props.$visibility && props.$visibility)}; opacity:${(props) => (props.$opacity && props.$opacity)};
	
	box-shadow:${(props) => (props.$boxShadow && props.$boxShadow)}; background:${(props) => (props.$background && props.$background)}; background-color:${(props) => (props.$bgColor && props.$bgColor)};
	
	border:${(props) => (props.$border && props.$border)}; border-style:${(props) => (props.$borderStyle && props.$borderStyle)}; border-width:${(props) => (props.$borderWidth && props.$borderWidth)}; border-color:${(props) => (props.$borderColor && props.$borderColor)};
	
	border-top:${(props) => (props.$borderTop && props.$borderTop)}; border-top-style:${(props) => (props.$borderTopStyle && props.$borderTopStyle)}; border-top-width:${(props) => (props.$borderTopWidth && props.$borderTopWidth)}; border-top-color:${(props) => (props.$borderTopColor && props.$borderTopColor)};

	border-right:${(props) => (props.$borderRight && props.$borderRight)}; border-right-style:${(props) => (props.$borderRightStyle && props.$borderRightStyle)}; border-right-width:${(props) => (props.$borderRightWidth && props.$borderRightWidth)}; border-right-color:${(props) => (props.$borderRightColor && props.$borderRightColor)};

	border-bottom:${(props) => (props.$borderBottom && props.$borderBottom)}; border-bottom-style:${(props) => (props.$borderBottomStyle && props.$borderBottomStyle)}; border-bottom-width:${(props) => (props.$borderBottomWidth && props.$borderBottomWidth)}; border-bottom-color:${(props) => (props.$borderBottomColor && props.$borderBottomColor)};

	border-left:${(props) => (props.$borderLeft && props.$borderLeft)}; border-left-style:${(props) => (props.$borderLeftStyle && props.$borderLeftStyle)}; border-left-width:${(props) => (props.$borderLeftWidth && props.$borderLeftWidth)}; border-left-color:${(props) => (props.$borderLeftColor && props.$borderLeftColor)};

	border-radius:${(props) => (props.$borderRadius && props.$borderRadius)}; border-top-left-radius:${(props) => props.$borderTopLeftRadius}; border-top-right-radius:${(props) => props.$borderTopRightRadius}; border-bottom-left-radius:${(props) => props.$borderBottomLeftRadius}; border-bottom-right-radius:${(props) => props.$borderBottomRightRadius};
	
	color:${(props) => (props.$color && props.$color)} !important; font:${(props) => (props.$font && props.$font)}; font-family:${(props) => (props.$fontFamily ? props.$fontFamily : 'sans-serif')}; font-size:${(props) => (props.$fontSize ? props.$fontSize : 'inherit')}; font-weight:${(props) => (props.$fontWeight && props.$fontWeight)}; font-style:${(props) => (props.$fontStyle && props.$fontStyle)}; text-align:${(props) => (props.$textAlign ? props.$textAlign : 'left')}; line-height:${(props) => (props.$lineHeight ? props.$lineHeight : 'inherit')};

	flex-direction:${(props) => (props.$flexDirection ? props.$flexDirection : 'row')}; align-items:${(props) => (props.$alignItems ? props.$alignItems : 'flex-start')}; justify-content:${(props) => (props.$justifyContent ? props.$justifyContent : 'flex-start')}; flex-grow:${(props) => (props.$flexGrow && props.$flexGrow)}; flex-shrink:${(props) => (props.$flexShrink && props.$flexShrink)}; flex-wrap:${(props) => (props.$flexWrap && props.$flexWrap)}; gap:${(props) => (props.$gap && props.$gap)};

	overflow:${(props) => (props.$overflow && props.$overflow)}; cursor:${(props) => (props.$cursor && props.$cursor)} !important; pointer-events:${(props) => (props.$pointerEvents && props.$pointerEvents)}; transition:${(props) => (props.$transition && props.$transition)};

	&.text, &.text > * {
		display:${(props) => (props.$display && props.$display)}; color:${(props) => (props.$color ? props.$color : 'inherit')} !important; font:${(props) => (props.$font && props.$font)}; font-family:${(props) => (props.$fontFamily ? props.$fontFamily : 'sans-serif')}; font-size:${(props) => (props.$fontSize ? props.$fontSize : 'inherit')}; font-weight:${(props) => (props.$fontWeight && props.$fontWeight)}; font-style:${(props) => (props.$fontStyle && props.$fontStyle)}; font-variant:${(props) => (props.$fontVariant && props.$fontVariant)}; font-kerning:${(props) => (props.$fontKerning && props.$fontKerning)}; letter-spacing:${(props) => (props.$letterSpacing && props.$letterSpacing)}; word-spacing:${(props) => (props.$wordSpacing && props.$wordSpacing)}; text-decoration:${(props) => (props.$textDecoration && props.$textDecoration)}; text-transform:${(props) => (props.$textTransform && props.$textTransform)}; text-shadow:${(props) => (props.$textShadow && props.$textShadow)}; text-indent:${(props) => (props.$textIndent && props.$textIndent)}; text-align:${(props) => (props.$textAlign && props.$textAlign)};
	}
`;

const Base = (props) => {
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
		bRadius, borderRadius, btrRadius, borderTopRightRadius, btlRadius, borderTopLeftRadius, bbrRadius, borderBottomRightRadius, bblRadius, borderBottomLeftRadius, btRadius, borderTopRadius, brRadius, borderRightRadius, bbRadius, borderBottomRadius, blRadius, borderLeftRadius,
		grayscale, brightness, contrast, hueRotate,
		// text props
		color, font, fontFamily, fontSize, fontWeight, fontStyle, fontVariant, fontKerning, letterSpacing, wordSpacing, textDecoration, textTransform, textShadow, textIndent, textAlign, lineHeight,
		// flex props
		flexDirection, alignItems, justifyContent, gap, rowGap, columnGap, flexGrow, flexShrink, flexWrap,
		// other props
		overflow, cursor, pointerEvents, transition,
		// pseudo props
		_hover, _selected,
		className, type, as = 'div', ref, href, link, url, onClick, children
	} = props;

	var themy =  my || marginY;
	var themx =  mx || marginX;
	var thepy =  py || paddingY;
	var thepx =  px || paddingX;
	var thebtrad = btRadius || borderTopRadius;
	var thebrrad = brRadius || borderRightRadius;
	var thebbrad = bbRadius || borderBottomRadius;
	var theblrad = blRadius || borderLeftRadius;
	var thehref = link || url || href;
	var thecursor = cursor;
	thecursor = thehref && 'pointer';

	return (
		<BaseStyle
			as={as}
			href={thehref}
			ref={ref}
			className={type || className}
			onClick={onClick}
			// position styles
			$position={pos || position} $top={top} $right={right} $bottom={bottom} $left={left} $zIndex={z || zIndex}
			// margin styles
			$margin={m || margin} $marginTop={(mt || marginTop) || themy} $marginRight={(mr || marginRight) || themx} $marginBottom={(mb || marginBottom) || themy} $marginLeft={(ml || marginLeft) || themx}
			// padding styles
			$padding={p || padding} $paddingTop={(pt || paddingTop) || thepy} $paddingRight={(pr || paddingRight) || thepx} $paddingBottom={(pb || paddingBottom) || thepy} $paddingLeft={(pl || paddingLeft) || thepx}
			// size styles
			$width={w || width} $height={h || height} $minWidth={minw || minWidth} $minHeight={minh || minHeight} $maxWidth={maxw || maxWidth} $maxHeight={maxh || maxHeight}
			// display styles
			$display={display} $visibility={visibility} $opacity={opacity}
			// background styles
			$boxShadow={boxShadow} $background={bg || background} $bgColor={bgColor}
			// border styles
			$border={b || border} $borderWidth={bWidth || borderWidth} $borderStyle={bStyle || borderStyle} $borderColor={bColor || borderColor}
			// border top styles
			$borderTop={bt || borderTop} $borderTopWidth={btWidth || borderTopWidth} $borderTopStyle={btStyle || borderTopStyle} $borderTopColor={btColor || borderTopColor}
			// border right styles
			$borderRight={br || borderRight} $borderRightWidth={brWidth || borderRightWidth} $borderRightStyle={brStyle || borderRightStyle} $borderRightColor={brColor || borderRightColor}
			// border bottom styles
			$borderBottom={bb || borderBottom} $borderBottomWidth={bbWidth || borderBottomWidth} $borderBottomStyle={bbStyle || borderBottomStyle} $borderBottomColor={bbColor || borderBottomColor}
			// border left styles
			$borderLeft={bl || borderLeft} $borderLeftWidth={blWidth || borderLeftWidth} $borderLeftStyle={blStyle || borderLeftStyle} $borderLeftColor={blColor || borderLeftColor}
			// border radius styles
			$borderRadius={bRadius || borderRadius} $borderTopLeftRadius={(btlRadius || borderTopLeftRadius) || (thebtrad || theblrad)} $borderTopRightRadius={(btrRadius || borderTopRightRadius) || (thebtrad || thebrrad)} $borderBottomLeftRadius={(bblRadius || borderBottomLeftRadius) || (thebbrad || theblrad)} $borderBottomRightRadius={(bbrRadius || borderBottomRightRadius) || (thebbrad || thebrrad)}
			// filter styles
			$grayscale={grayscale} $brightness={brightness} $contrast={contrast} $hueRotate={hueRotate}
			// text styles
			$color={color} $font={font} $fontFamily={fontFamily} $fontSize={fontSize} $fontWeight={fontWeight} $fontStyle={fontStyle} fontVariant={fontVariant} fontKerning={fontKerning} $letterSpacing={letterSpacing} $wordSpacing={wordSpacing} $textDecoration={textDecoration} $textTransform={textTransform} $textShadow={textShadow} $textIndent={textIndent} $textAlign={textAlign} $lineHeight={lineHeight}
			// flex styles
			$flexDirection={flexDirection} $alignItems={alignItems} $justifyContent={justifyContent} $gap={gap} $rowGap={rowGap} $columnGap={columnGap} $flexGrow={flexGrow} $flexShrink={flexShrink} $flexWrap={flexWrap}
			// other styles
			$overflow={overflow} $cursor={thecursor} $pointerEvents={pointerEvents} $transition={transition}
		>
			{children}
		</BaseStyle>
	)
}

export default Base;