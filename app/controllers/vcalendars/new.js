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
/*
	willTransition: function (transition) {
		//@ToDO: Translation!!
		if(this.get('tmp_cal').get('isDirty') && confirm("You have unsaved changes. Click OK to stay on the current page. Click cancel to discard these changes and move to the requested page.")) {
			//Stay on same page and continue editing
			transition.abort();
		}
		// Rollback modifications
		this.get('tmp_cal').rollback();
		// Bubble the `willTransition` event so that parent routes can decide whether or not to abort.
		return true;
	},
*/
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
