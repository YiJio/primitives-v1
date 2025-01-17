export const Utils = {
	range(start, end) {
		if (start === end) return [start];
		return [start, ...this.range(start + 1, end)];
		// let length = end - start + 1;
		// return Array.from({ length }, (_, idx) => idx + start);
	},
	removeDuplicates(array) {
		return [...new Set(array)];
	},
	normalize(value, min, max) {
		return (value - min) / (max - min);
	},
	sortByProperty(array, property) {
		const types = {
			dateJoined: 'dateJoined',
			dateCreated: 'dateCreated',
			dateUpdated: 'dateUpdated',
			title: 'title',
			name: 'name',
			label: 'label',
			value: 'value',
		}
		const sortProperty = types[property];
		const sorted = array.sort((a, b) => b[sortProperty] - a[sortProperty]);
		return sorted;
	},
	whatColorValueType(string) {
		var type = '';
		if (string.indexOf('#') !== -1) { type = 'hex'; }
		else if (string.indexOf('rgba') !== -1) { type = 'rgba'; }
		else if (string.indexOf('rgb') !== -1) { type = 'rgb'; }
		else if (string.indexOf('hsl') !== -1) { type = 'hsl'; }
		else if (string.indexOf('hsla') !== -1) { type = 'hsla'; }
		else if (string.indexOf('hwb') !== -1) { type = 'hwb'; }
		else if (string.indexOf('lch') !== -1) { type = 'lch'; }
		else if (string.indexOf('oklch') !== -1) { type = 'oklch'; }
		else if (string.indexOf('lab') !== -1) { type = 'lab'; }
		else if (string.indexOf('oklab') !== -1) { type = 'oklab'; }
		else if (string.indexOf('.') !== -1) { type = 'theme'; }
		else { type = 'name'; }
		return type;
	},
	nameToRgb(name) {
		let fakeDiv = document.createElement("div");
		fakeDiv.style.color = name;
		document.body.appendChild(fakeDiv);
		let cs = window.getComputedStyle(fakeDiv),
			pv = cs.getPropertyValue("color");
		document.body.removeChild(fakeDiv);
		return pv;
	},
	hexToRgbObject(hex) {
		if (hex.length === 4) {
			// #000
			hex = '#' + hex.charAt(1) + hex.charAt(1) + hex.charAt(2) + hex.charAt(2) + hex.charAt(3) + hex.charAt(3);
		} else if (hex.length === 5) {
			// #0000 alpha
			hex = '#' + hex.charAt(1) + hex.charAt(1) + hex.charAt(2) + hex.charAt(2) + hex.charAt(3) + hex.charAt(3) + hex.charAt(4) + hex.charAt(4);
		}
		// must be from these letters
		var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
		if (hex.length === 9) {
			result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
		}
		var rgb = { r: 221, g: 221, b: 221, a: 1 };
		rgb.r = parseInt(result[1], 16);
		rgb.g = parseInt(result[2], 16);
		rgb.b = parseInt(result[3], 16);
		if (hex.length === 9) { rgb.a = parseFloat(result[4], 255); }
		return rgb;
	},
	rgbObjectToHslObject(color) {
		// this should always be used when rgb is an object
		var rgb = color;
		// make r, g, and b fractions of 1
		var r = rgb.r / 255,
				g = rgb.g / 255,
				b = rgb.b / 255;
		// find greatest and smallest channel values
		var cmin = Math.min(r, g, b),
				cmax = Math.max(r, g, b),
				delta = cmax - cmin,
				h = 0,
				s = 0,
				l = 0;
		// calculate hue
		if (delta == 0) { h = 0;} // no difference
		else if (cmax == r) { h = ((g - b) / delta) % 6; } // red is max
		else if (cmax == g) { h = (b - r) / delta + 2; } // green is max
		else { h = (r - g) / delta + 4; } // blue is max
		h = Math.round(h * 60);
		// make negative hues positive behind 360°
		if (h < 0) { h += 360; }
		// calculate lightness
		l = (cmax + cmin) / 2;
		// calculate saturation
		s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
		// multiply l and s by 100
		s = +(s * 100).toFixed(1);
		l = +(l * 100).toFixed(1);
		var hsl = { h:h, s:s, l:l };
		return hsl;
	},
	hslObjectToRgbObject(color) {
		// this should always be used when hsl is an object
		var hsl = color;
		hsl.s /= 100;
		hsl.l /= 100;
		const k = n => (n + hsl.h / 30) % 12;
		const a = hsl.s * Math.min(hsl.l, 1 - hsl.l);
		const f = n =>
			hsl.l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
		return {
			r: 255 * f(0),
			g: 255 * f(8),
			b: 255 * f(4)
		};
	},
	toRgbObject(string, hasAlpha) {
		var start = hasAlpha ? 4 : 3;
		// must trim spaces
		string = string.replace(/\s/g, '');
		var colorString = string.substring(start + 1, string.length - 1);
		var colorArray = colorString.split(',');
		var rgb = { r: 0, g: 0, b: 0, a: 1 };
		// check for % values
		rgb.r = colorArray[0].indexOf('%') !== -1 ? Math.round((255 * parseFloat(colorArray[0]) / 100)) : parseInt(colorArray[0]);
		rgb.g = colorArray[1].indexOf('%') !== -1 ? Math.round((255 * parseFloat(colorArray[1]) / 100)) : parseInt(colorArray[1]);
		rgb.b = colorArray[2].indexOf('%') !== -1 ? Math.round((255 * parseFloat(colorArray[2]) / 100)) : parseInt(colorArray[2]);
		if (hasAlpha) {
			if (colorArray[3].indexOf('%') !== -1) { rgb.a = Math.round(parseFloat(colorArray[3])) / 100; }
			else { rgb.a = parseFloat(colorArray[3]); }
		}
		return rgb;
	},
	toHslObject(string) {
		var colorString = string.substring(3 + 1, string.length - 1);
		var colorArray = colorString.split(',');
		var hsl = { h: 0, s: 0, l: 0 };
		hsl.h = parseInt(colorArray[0]);
		// check for no % values
		hsl.s = colorArray[1].indexOf('%') === -1 ? parseFloat(colorArray[1]) * 100 : parseFloat(colorArray[1]);
		hsl.l = colorArray[2].indexOf('%') === -1 ? parseFloat(colorArray[2]) * 100 : parseFloat(colorArray[2]);
		return hsl;
	},
	changeAllToRgbObject(color, alpha) {
		// most functions deal with rgb functions, so change to rgb
		var rgb = {};
		var type = this.whatColorValueType(color);
		if (type === 'hex') { rgb = this.hexToRgbObject(color); }
		else if (type === 'rgb') { rgb = this.toRgbObject(color, false); }
		else if (type === 'rgba') { rgb = this.toRgbObject(color, true); }
		else if (type === 'hsl') {
			// change to hsl object first
			var hsl = this.toHslObject(color);
			rgb = this.hslObjectToRgbObject(hsl);
		} else if (type === 'name') {
			var tempRgb = this.nameToRgb(color);
			rgb = this.toRgbObject(tempRgb, false);
		}
		rgb.a = alpha;
		return rgb;
	},
	setAlpha(color, alpha, toString) {
		// gets called by outer, so must change strings to objects
		var rgb = this.changeAllToRgbObject(color, 1);
		rgb.r = Math.round(rgb.r);
		rgb.g = Math.round(rgb.g);
		rgb.b = Math.round(rgb.b);
		rgb.a = alpha;
		if (toString) {
			var output = 'rgba(';
			output += rgb.r + ',' + rgb.g + ',' + rgb.b + ','
			output += alpha + ')';
			return output;
		}
		return rgb;
	},
	setLuminance(color, lPercent, toString) {
		// gets called by outer, so must change strings to objects
		var rgb = this.changeAllToRgbObject(color, 1);
		var hsl = this.rgbObjectToHslObject(rgb);
		hsl.l -= lPercent;
		if(hsl.l < 1) { hsl.l = 1; }
		if (toString) {
			var output = 'hsl(' + hsl.h + ',' + Math.round(hsl.s) + '%,' + Math.round(hsl.l) + '%)';
			return output;
		}
		return hsl;
	},
	setBWTextColor(color) {
		if (color === 'transparent') { return 'inherit'; }
		// gets called by outer, so must change strings to objects
		var rgb = this.changeAllToRgbObject(color, 1);
		var r = rgb.r * 0.299;
		var g = rgb.r * 0.587;
		var b = rgb.b * 0.114;
		// always returns a string
		if ((r + g + b) > 186) { return '#000000'; }
		return '#FFFFFF';
	},
	addColor(color, colorAlpha, color2, color2Alpha, toString) {
		// gets called by outer, so must change strings to objects
		var base = this.changeAllToRgbObject(color, colorAlpha);
		var add = this.changeAllToRgbObject(color2, color2Alpha);
		var a = 1 - (1 - add.a) * (1 - base.a);
		var r = Math.round((add.r * add.a / a) + (base.r * base.a * (1 - add.a) / a));
		var g = Math.round((add.g * add.a / a) + (base.g * base.a * (1 - add.a) / a));
		var b = Math.round((add.b * add.a / a) + (base.b * base.a * (1 - add.a) / a));
		if (toString) {
			var output = 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
			return output;
		}
		return { r: r, g: g, b: b, a: a }
	},
	multiplyColor(color, colorAlpha, color2, color2Alpha, toString) {
		// gets called by outer, so must change strings to objects
		var base = this.changeAllToRgbObject(color, colorAlpha);
		var add = this.changeAllToRgbObject(color2, color2Alpha);
		var a = 1 - (1 - add.a) * (1 - base.a);
		var r = Math.round((add.r * add.a / a) * (base.r * base.a * (1 - add.a) / a));
		var g = Math.round((add.g * add.a / a) * (base.g * base.a * (1 - add.a) / a));
		var b = Math.round((add.b * add.a / a) * (base.b * base.a * (1 - add.a) / a));
		if (toString) {
			var output = 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
			return output;
		}
		return { r: r, g: g, b: b, a: a }
	},
	isDateToday(date) {
		const todayDate = new Date().setHours(0, 0, 0, 0);
		const theDate = new Date(date).setHours(0, 0, 0, 0);
		return todayDate === theDate;
	},
	isDateWithinDays(date, days) {
		// within [7, 14, 30, etc.] days, not actually counting for same month
		const todayDate = new Date();
		const theDate = new Date(date);
		var theDiff = todayDate.getTime() - theDate.getTime();
		var diff = Math.abs(theDiff / (1000 * 60 * 60 * 24.0));
		return diff <= days;
	},
	isDateInThisMonth(date) {
		const todayDate = new Date();
		const theDate = new Date(date);
		return todayDate.getMonth() === theDate.getMonth();
	},
	isDateInThisYear(date) {
		const todayDate = new Date();
		const theDate = new Date(date);
		return todayDate.getFullYear() === theDate.getFullYear();
	}
}