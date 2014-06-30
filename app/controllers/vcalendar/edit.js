export default Ember.ObjectController.extend({
	mola: 'fone',

	actions: {
		submit: function() {
			var controller = this;
			this.get('model').save().then(function (vcalendar) {
				controller.transitionToRoute('index');
			});
		}
	}
});
