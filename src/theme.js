const black = '#222222'
const blue = '#00C0F2'
const red = '#FF5C5C'
const yellow = '#F8BF95'

const colors = {
	white: {
		a5: '#ffffff0d',
		a10: '#ffffff1a',
		a15: '#ffffff26',
		a20: '#ffffff33',
		a25: '#ffffff40',
		a30: '#ffffff4d',
		a35: '#ffffff59',
		a40: '#ffffff66',
		a45: '#ffffff73',
		a50: '#ffffff80',
		a55: '#ffffff8c',
		a60: '#ffffff99',
		a65: '#ffffffa6',
		a70: '#ffffffb3',
		a75: '#ffffffbf',
		a80: '#ffffffcc',
		a85: '#ffffffd9',
		a90: '#ffffffe6',
		a95: '#fffffff2',
		a100: '#ffffff',
	},
	gray: {
		0: '#eeeeee',
		1: '#d5d5d5',
		2: '#bcbcbc',
		3: '#a4a4a4',
		4: '#8d8d8d',
		5: '#767676',
		6: '#606060',
		7: '#4b4b4b',
		8: '#373737',
		9: '#242424',
		10: '#111111',
	},
}

/*colors.textColor = '#000000'*/

// good with 5's and 0's
/*const space = [0, 5, 10, 15, 20, 25, 30, 35, 40] */
// standardization
const space = [0, 2, 4, 8, 12, 16, 20, 24, 32, 36, 40, 44, 48, 52, 56, 60, 64, 72, 80, 96]

const fontSizes = [10, 11, 12, 13, 14, 16, 18, 20, 24, 32, 36, 48]

const fontWeights = {
	thin: 100,
  extralight: 200,
  light: 300,
  regular: 400,
	medium: 500,
	semibold: 600,
  bold: 700,
	extrabold: 800,
  black: 900,
}

const fontStack = 'Inter, -apple-system, BlinkMacSystemFont, sans-serif'
const fontFamilies = {
  body: fontStack,
  heading: fontStack,
}

const radii = {

}

const zIndices = {

}

export default {
  colors,
  space,
  fontSizes,
  fontWeights,
  fontFamilies,
}