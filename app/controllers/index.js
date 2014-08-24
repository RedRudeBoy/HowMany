import vCalendarUtils from "appkit/mixins/vcalendarutils";

export default Ember.ArrayController.extend(vCalendarUtils, {

	savedCalendars: function() {
		return this.get('model').filterBy('isNew',false);
	}.property('model'),
//	hasCalendars: Ember.computed.notEmpty('this'),
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
			/**
			 * @ToDO: OUCH! confirm is SOOO UGLY!
			 */
//			if (window.confirm("Are you sure you want to delete this calendar?")) {
				//Remove all childrens
				vcalendar.eachRelationship(function(name, meta){
					if (meta.kind === "hasMany") {
						var childrens = vcalendar.get(name);
						childrens.forEach(function(children) {
//							children.deleteRecord();
//							children.save();
							children.destroyRecord();
						});
					}
				});
//				vcalendar.deleteRecord();
//				vcalendar.save().then(function() {Ember.Logger.log('Calendar removed!');});
				vcalendar.destroyRecord();
//			}
			return false;
		},
		goToCalendar: function(param) {
			Ember.Logger.log(this,' goToCalendar');
		},
		parseNewCalendar: function(text) {
			Ember.Logger.log('controller::index received parseNewCalendar!');
//			Ember.run.next(this, this.iCal2EmberDataSync, text);
//			Ember.run.once(this, this.iCal2EmberDataSync, text);
			this.iCal2EmberDataSync(text);
			return false;
		},
		saveCalendar: function(vcalendar) {
			Ember.Logger.log('controller::index received  saveCalendar!');
//			Ember.run.next(this, this.emberData2iCal, vcalendar);
//			Ember.run.once(this, this.emberData2iCal, vcalendar);
			this.emberData2iCal(vcalendar);
			return false;
		}
	}
});
