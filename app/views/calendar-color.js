import ColorsUtils from 'appkit/mixins/colorsutils';

export default Ember.View.extend( ColorsUtils, {
	click: function() {
		this.get('controller').send('change_color', this.get('palettecolor'));
	},

	classNameBindings: ['isSelected:selected'],
	attributeBindings: ['style'],
//	isSelected: Ember.computed.equal('calcolor','palettecolor'),
	isSelected: function() {
		return (this.get('calcolor') === this.get('palettecolor'));
	}.property('calcolor','palettecolor'),

	style: function() {
		var rtn = 'width:15px;height:15px;margin-right: 15px;border: 1px solid black;';
		rtn += 'background-color:'+this.get('palettecolor')+';';
		if(this.get('isSelected')) {
			var rgb = this.hexToRgb(this.get('palettecolor'));
			var r = rgb[0],g = rgb[1],b = rgb[2],val = '0px 0px 5px 5px rgba('+r+','+g+','+b+',0.75)';
			rtn += '-webkit-box-shadow: '+val+';';
			rtn += '-moz-box-shadow: '+val+';';
			rtn += 'box-shadow: '+val+';';
		}
		return rtn;
	}.property('palettecolor','isSelected')
});
