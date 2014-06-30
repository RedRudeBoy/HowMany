//Ember.Validations.Mixin,
//tmp_cal.reopen({
//	validations: {
//		'x-wr-calname': { presence: true }
//	}
//});
export default Ember.ObjectController.extend({
	mola: 'vcalendars/new',

//	init: function() {
//		this.set('tmp_cal', this.get('store').createRecord('vcalendar'));
//	},

	tmp_cal: function() {
		this.set('tmp_cal', this.get('store').createRecord('vcalendar'));
	}.property(),

	actions: {
		submit: function() {
			var controller = this;
			this.get('tmp_cal').save().then(function (vcalendar) {
				controller.set('tmp_cal', controller.get('store').createRecord('vcalendar'));
				controller.transitionToRoute('index');
			});
		}
	}
});
