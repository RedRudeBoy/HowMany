export default Ember.Component.extend({
	actions: {
		removeCalendar: function(param) {
			this.sendAction('removeCalendar', this.get('vcalendar'));
		},
		editCalendar: function(param) {
			this.sendAction('editCalendar', this.get('vcalendar'));
		},
		saveCalendar: function(param) {
			this.sendAction('saveCalendar', this.get('vcalendar'));
		}
	},
	click: function() {
		this.sendAction('goTo', 'vcalendar', this.get('vcalendar'));
//		this.send('btnLinkTo', 'hola!');
//		this.transitionTo('howmany', this.get('vcalendar'));
	},
	/**
	 * @ToDo: Only works the first time, seems unhydrated.
	 */
	countHigh: Ember.computed.alias('vcalendar.vevent.length'),
//	countHigh: function() {
//		return this.get('vcalendar').get('vevent').length;
//	}.property('vcalendar.vevent.length'),
	countNormal: Ember.computed.alias('vcalendar.vtodo.length'),
	countLow: Ember.computed.alias('vcalendar.vjournal.length'),

	calendarName: function() {
		return (this.get('vcalendar.x-wr-calname') || this.get('vcalendar.prodid'));
	}.property('vcalendar.prodid','vcalendar.x-wr-calname'),

	calendarDesc: function() {
		return (this.get('vcalendar.x-wr-caldesc') || 'Without description');
	}.property('vcalendar.x-wr-caldesc')
});
