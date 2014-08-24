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
//		App.Router.router.transitionTo('vcalendar', this.get('vcalendar'));
	},
	/**
	 * @ToDo: Only works the first time, seems unhydrated.
	 */
	countHigh: Ember.computed.alias('vcalendar.vevents.length'),
//	countHigh: function() {
//		return this.get('vcalendar').get('vevents').length;
//	}.property('vcalendar.vevents.length'),
	countNormal: Ember.computed.alias('vcalendar.vtodos.length'),
	countLow: Ember.computed.alias('vcalendar.vjournals.length'),

	calendarName: function() {
		return (this.get('vcalendar.x-wr-calname') || this.get('vcalendar.prodid'));
	}.property('vcalendar.prodid','vcalendar.x-wr-calname'),

	calendarDesc: function() {
		return (this.get('vcalendar.x-wr-caldesc') || 'Without description');
	}.property('vcalendar.x-wr-caldesc')
});
