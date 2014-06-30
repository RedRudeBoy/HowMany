export default Ember.ArrayController.extend({
//    hasCalendars: Ember.computed.notEmpty('this'),
	savedCalendars: function() {
		return this.get('model').filterBy('isNew',false);
	}.property('model'),
	hasCalendars: function() {
		return this.get('length') > 0;
	}.property('length'),
	showAddNewCalendar: false,
	actions: {
		btnLinkTo: function(param, param2) {
			Ember.Logger.log(this," Passed controller as a param: " + param+ " "+param2);
			this.transitionToRoute(param, param2);
		},
		showNewCalendar: function(param) {
			Ember.Logger.log(this,' addNewCalendar');
			this.toggleProperty('showAddNewCalendar');
		},
		addNewCalendar: function(param) {
			this.transitionToRoute('vcalendars.new');
			/*var controller = this;
			var vcal = this.store.createRecord('vcalendar');
			vcal.save().then(function(vcal){
				controller.get('model').addObject(vcal);
				controller.transitionToRoute('calendar',vcal);
			});*/
		},
		editCalendar: function(param) {
			this.transitionToRoute('vcalendar.edit', param);
		},
		removeCalendar: function(vcalendar) {
			vcalendar.deleteRecord();
			vcalendar.save().then(function() {
				Ember.Logger.log(this,' Calendar removed!');
			});
			return false;
		},
		goToCalendar: function(param) {
			Ember.Logger.log(this,' goToCalendar');
		}
	}
});
