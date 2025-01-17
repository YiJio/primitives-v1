export const docData = [
	{
		name: 'alert',
		propsMain: [
			//variant = 'soft', margin, padding, width, height, borderRadius, boxShadow, bgColor = '#DDDDDD', iconColor, iconSize = '24px', color, fontSize = '14px',
			{ name: 'title', description: ['The title of the alert.'], type: 'string', default: '', anyCodes: '', anyValues: ['Any text'] },
			{ name: 'description', description: ['The description/text in the alert.'], note: ['This is the same as wrapping the description with <Alert> tags.'], type: 'string', default: '', anyCodes: '', anyValues: ['Any text'] },
			{ name: 'icon', description: ['The icon that shows on the left of the alert.'], type: 'element', default: '', anyCodes: '', anyValues: ['Any icon element'] },
			{ name: 'variant', description: ['The variation style of the alert.'], type: 'string', default: 'soft', anyCodes: 'solid, outline, soft, left-accent', anyValues: [''] },
		], propsStyles: [
			{ name: 'm, margin', description: ['The margin of the alert.'], type: 'string', default: '5px 0', anyCodes: '', anyValues: ['Any value'] },
			{ name: 'p, padding', description: ['The padding of the alert.'], type: 'string', default: '10px 15px', anyCodes: '', anyValues: ['Any value'] },
			{ name: 'w, width', description: ['The width of the alert.'], type: 'string', default: '100%', anyCodes: '', anyValues: ['Any value'] },
			{ name: 'h, height', description: ['The height of the alert.'], type: 'string', default: '', anyCodes: '', anyValues: ['Any value'] },
			{ name: 'bRadius, borderRadius', description: ['The border radius of the alert.'], type: 'string', default: '0px', anyCodes: '', anyValues: ['Any value'] },
			{ name: 'boxShadow', description: ['The box shadow of the alert.'], type: 'string', default: '', anyCodes: '', anyValues: ['Any value'] },
			{ name: 'bgColor', description: ['The background color of the alert.'], type: 'string', default: '#DDDDDD', anyCodes: '', anyValues: ['Any color code/name', '*If RGB/A and HSL, needs to be separated by commas'] },
			{ name: 'iconColor', description: ['The color of the icon in the alert.'], type: 'string', default: 'inherit', anyCodes: '', anyValues: ['Any color code/name (no strict formatting)'] },
			{ name: 'iconSize', description: ['The size of the icon in the alert.'], type: 'string', default: '24px', anyCodes: '', anyValues: ['Any value'] },
			{ name: 'color', description: ['The color of the text in the alert.'], type: 'string', default: 'inherit', anyCodes: '', anyValues: ['Any color code/name (no strict formatting)'] },
			{ name: 'fontSize', description: ['The size of the font in the alert.'], type: 'string', default: '14px', anyCodes: '', anyValues: ['Any value'] },
		]
	}, {
		name: 'avatar',
		propsMain: [
			{ name: 'name', description: ['The name of the user.'], type: 'string', default: '', anyCodes: '', anyValues: ['Any text'] },
			{ name: 'imgSrc', description: ['The image source of the user avatar.'], type: 'string', default: '', anyCodes: '', anyValues: ['Any link source'] },
			{ name: 'url', description: ['The URL to the user profile page.'], note: ['You can leave this blank. If filled, an onClick function will use react-router-dom to link it to the URL you specified.'], type: 'string', default: '', anyCodes: '', anyValues: ['Any link source', '[Format] /must-have-root-path/path?/path?/current-path'] },
			{ name: 'variant', description: ['The variation style of the avatar.'], type: 'string', default: 'circle', anyCodes: 'square, round, circle', anyValues: [''] },
		], propsStyles: [
			{ name: 'size', description: ['The size of the avatar.'], type: 'string', default: '40px', anyCodes: '', anyValues: ['Any value'] },
			{ name: 'bColor, borderColor', description: ['The border color of the avatar.'], note: ['This can overwrite the border color if used in a group.'], type: 'string', default: '', anyCodes: '', anyValues: ['Any color code (no strict formatting)'] },
			{ name: 'bWidth, borderWidth', description: ['The border width of the avatar.'], type: 'string', default: '0px', anyCodes: '', anyValues: ['Any value'] },
			{ name: 'bgColor', description: ['The background color of the avatar.'], note: ['This can overwrite the background color if used in a group.'], type: 'string', default: '#DDDDDD', anyCodes: '', anyValues: ['Any color code (no strict formatting)'] },
		]
	}, {
		name: 'avatar-group',
		propsMain: [
			{ name: 'variant', description: ['The variation style of the avatars in the group.'], type: 'string', default: 'circle', anyCodes: 'square, round, circle', anyValues: [''] },
			{ name: 'gap', description: ['The gap between each of the avatars in the group.'], type: 'string', default: '10px', anyCodes: '', anyValues: ['Any value'] },
			{ name: 'maxUsers', description: ['The maximum number of avatars to display in the group.'], type: 'number', default: '', anyCodes: '', anyValues: ['Any number'] },
			{ name: 'isFirstOnTop', description: ['Makes the first avatar display as the topmost element.'], note: ['This is usually used with a negative gap.'], type: 'boolean', default: 'false', anyCodes: 'true, false', anyValues: [''] },
		], propsStyles: [
			{ name: 'size', description: ['The size of the avatars in the group.'], note: ['This CANNOT be overwritten by child Avatar components.'], type: 'string', default: '40px', anyCodes: '', anyValues: ['Any value'] },
			{ name: 'bColor, borderColor', description: ['The border color of the avatars in the group.'], note: ['This can be overwritten by child Avatar components.'], type: 'string', default: '#DDDDDD', anyCodes: '', anyValues: ['Any color code/name', '*If RGB/A and HSL, needs to be separated by commas'] },
			{ name: 'bWidth, borderWidth', description: ['The border width of the avatars in the group.'], note: ['This CANNOT be overwritten by child Avatar components.'], type: 'string', default: '0px', anyCodes: '', anyValues: ['Any value'] },
		]
	}, {
		name: 'badge',
		propsMain: [
			{ name: 'label', description: ['The text label that is inside the badge.'], note: ['This is the same as wrapping the label with <Badge> tags.'], type: 'string', default: '', anyCodes: '', anyValues: ['Any text'] },
			{ name: 'variant', description: ['The variation style of the badge.'], type: 'string', default: 'soft', anyCodes: 'solid, outline, soft, soft-border', anyValues: [''] },
			{ name: 'allowHover', description: ['Sets a hovering effect on the badge.'], type: 'boolean', default: 'false', anyCodes: 'true, false', anyValues: [''] },
		], propsStyles: [
			{ name: 'm, margin', description: ['The margin of the badge.'], type: 'string', default: '5px 0', anyCodes: '', anyValues: ['Any value'] },
			{ name: 'p, padding', description: ['The padding of the badge.'], type: 'string', default: '2px 5px', anyCodes: '', anyValues: ['Any value'] },
			{ name: 'bRadius, borderRadius', description: ['The border radius of the badge.'], type: 'string', default: '2px', anyCodes: '', anyValues: ['Any value'] },
			{ name: 'bgColor', description: ['The background color of the badge.'], type: 'string', default: '#DDDDDD', anyCodes: '', anyValues: ['Any color code/name', '*If RGB/A and HSL, needs to be separated by commas'] },
			{ name: 'color', description: ['The text color of the badge.'], note: ['Depending on the variant, the default text color can be "inherit" or a darker color of the `bgColor`.'], type: 'string', default: '', anyCodes: '', anyValues: ['Any color code/name (no strict formatting)'] },
			{ name: 'fontSize', description: ['The font size of the label.'], type: 'string', default: '14px', anyCodes: '', anyValues: ['Any value'] },
			{ name: 'fontWeight', description: ['The font weight of the label.'], type: 'string', default: '400', anyCodes: '', anyValues: ['Any value'] },
		]
	}, {
		name: 'box',
		propsMain: [
			{ name: 'as', description: ['This changes the component to another tag.'], note: ['This is mostly used on the Text component.'], type: 'string', default: 'div', anyCodes: 'h1, h2, h3, h4, h5, h6, p, button, div, span, ...', anyValues: [''] },
		]
	}, {
		name: 'breadcrumb',
		propsMain: [
			{ name: 'separator', description: ['The separator element to separate the crumbs.'], type: 'element', default: '/', anyCodes: '', anyValues: ['Any string, number, element'] },
		]
	}, {
		name: 'breadcrumb-item',
		propsMain: [
			{ name: 'label', description: ['The element label that is inside the crumb.'], note: ['This is the same as wrapping the label with <BreadcrumbItem> tags.'], type: 'element', default: '', anyCodes: '', anyValues: ['Any string, number, element'] },
			{ name: 'link', description: ['The link to the previous page.'], type: 'string', default: '', anyCodes: '', anyValues: ['Any text (URL)'] },
			{ name: 'title', description: ['The title of the crumb when hovered.'], type: 'string', default: '', anyCodes: '', anyValues: ['Any text'] }
		]
	}, {
		name: 'button',
		propsMain: [
			{ name: 'label', description: ['The text label that is inside the button.'], note: ['This is the same as wrapping the label with <Button> tags.'], type: 'string', default: '', anyCodes: '', anyValues: ['Any text'] },
			{ name: 'leftIcon', description: ['The icon element that will show on the left of the label.'], type: 'element', default: '', anyCodes: '', anyValues: ['Any icon element'] },
			{ name: 'rightIcon', description: ['The icon element that will show on the right of the label.'], type: 'element', default: '', anyCodes: '', anyValues: ['Any icon element'] },
			{ name: 'variant', description: ['The variation style of the button.'], type: 'string', default: 'solid', anyCodes: 'solid, outline, ghost, soft', anyValues: [''] },
			{ name: 'isDisabled', description: ['Sets the button to a disabled state.'], type: 'boolean', default: 'false', anyCodes: 'true, false', anyValues: [''] },
			{ name: 'onClick', description: ['Pass in an action or event that happens when the button is clicked.'], type: 'action', default: '', anyCodes: '', anyValues: [''] },
		], propsStyles: [
			{ name: 'margin', description: ['The margin of the button.'], type: 'string', default: '0', anyCodes: '', anyValues: ['Any value'] },
			{ name: 'padding', description: ['The padding of the button.'], type: 'string', default: '5px', anyCodes: '', anyValues: ['Any value'] },
			{ name: 'width', description: ['The width of the button.'], type: 'string', default: 'auto', anyCodes: '', anyValues: ['Any value'] },
			{ name: 'borderRadius', description: ['The border radius of the button.'], type: 'string', default: '0px', anyCodes: '', anyValues: ['Any value'] },
			{ name: 'bgColor', description: ['The background color of the button.'], type: 'string', default: '#DDDDDD', anyCodes: '', anyValues: ['Any color code/name', '*If RGB/A and HSL, needs to be separated by commas'] },
			{ name: 'iconColor', description: ['The icon color if there is an icon.'], note: ['Depending on the variant, the default text color can be "inherit" or a darker color of the `bgColor`.'], type: 'string', default: '', anyCodes: '', anyValues: ['Any color code/name (no strict formatting)'] },
			{ name: 'color', description: ['The text color of the button.'], note: ['Depending on the variant, the default text color can be "inherit" or a darker color of the `bgColor`.'], type: 'string', default: '', anyCodes: '', anyValues: ['Any color code/name (no strict formatting)'] },
			{ name: 'fontSize', description: ['The font size of the button.'], type: 'string', default: '14px', anyCodes: '', anyValues: ['Any value (preferably <= 16px)'] },
		]
	}, {
		name: 'tooltip',
		propsMain: [
			{ name: 'label', description: ['The label that triggers the tooltip.'], note: ['This is the same as wrapping the label with <Tooltip> tags.'], type: 'element', default: '', anyCodes: '', anyValues: ['Any string, number, element'] },
			{ name: 'text', description: ['The text that appears on the tooltip.'], type: 'string', default: '', anyCodes: '', anyValues: ['Any text'] },
			{ name: 'placement', description: ['Defines where the tooltip is placed.'], note: ['There is no auto feature.'], type: 'string', default: 'top', anyCodes: 'top, top-start, top-end, right, right-start, right-end, bottom, bottom-start, bottom-end, left, left-start, left-end', anyValues: [''] },
			{ name: 'isHelp', description: ['Shows a dotted line underneath the label and the help cursor to better let users know there is information.'], type: 'boolean', default: 'false', anyCodes: 'true, false', anyValues: [''] },
			{ name: 'hasArrow', description: ['Shows the arrow of the tooltip.'], type: 'boolean', default: 'true', anyCodes: 'true, false', anyValues: [''] },
		], propsStyles: [
			{ name: 'width', description: ['The width of the tooltip.'], type: 'string', default: '130px', anyCodes: '', anyValues: ['Any value'] },
			{ name: 'borderRadius', description: ['The border radius of the tooltip.'], type: 'string', default: '2px', anyCodes: '', anyValues: ['Any value'] },
			{ name: 'bgColor', description: ['The background color of the tooltip.'], note: ['There is no text color. The background color you put will determine if the text should be black or white.'], type: 'string', default: 'rgba(0,0,0,0.9)', anyCodes: '', anyValues: ['Any color code/name', '*If RGB/A and HSL, needs to be separated by commas'] },
			{ name: 'textAlign', description: ['The alignment of text inside the tooltip.'], type: 'string', default: 'left', anyCodes: 'left, center, right, justify', anyValues: [''] },
		]
	}
];