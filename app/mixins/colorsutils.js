import Ember from 'ember';

export default Ember.Mixin.create({
	//http://stackoverflow.com/questions/5560248/programmatically-lighten-or-darken-a-hex-color-or-rgb-and-blend-colors
	shadeColorHex: function(color, percent) {
		var num = parseInt(color.slice(1),16), amt = Math.round(2.55 * percent), R = (num >> 16) + amt, G = (num >> 8 & 0x00FF) + amt, B = (num & 0x0000FF) + amt;
		return "#" + (0x1000000 + (R<255?R<1?0:R:255)*0x10000 + (G<255?G<1?0:G:255)*0x100 + (B<255?B<1?0:B:255)).toString(16).slice(1);
	},
	hexToRgb: function(color_hex) {
		var rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(color_hex);
		var r = parseInt(rgb[1], 16),
			g = parseInt(rgb[2], 16),
			b = parseInt(rgb[3], 16);
		return [r,g,b];
	},
	defaultCalendarColor: '#fd9f1b'
});
