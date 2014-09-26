//import colorbrewer from 'vendor/out-of-bower/d3-dc-edc/colorbrewer';

export default Ember.ObjectController.extend({
	mola: 'fone',

	actions: {
		submit: function() {
			var controller = this;
			this.get('model').save().then(function (vcalendar) {
				controller.transitionToRoute('index');
			});
		},
		change_color: function(color) {
			this.get('model').set('color', color);
			return false;
		}
	},

	palettecolors: function() {
		return colorbrewer['Set1']['9'];
	}.property()
});
