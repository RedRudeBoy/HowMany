export default Ember.ArrayController.extend({
	needs: ['vcalendar/index'],

	hasCalendarSelected: Ember.computed.bool('controllers.vcalendar/index.model'),
	calendarSelectedName: function() {
		return this.get('controllers.vcalendar/index.calendarName');
	}.property('controllers.vcalendar/index.calendarName')
});
