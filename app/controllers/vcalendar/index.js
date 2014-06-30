export default Ember.ObjectController.extend({
	//test
	mola: 'controllers/vcalendar/index.js',
	allTodos: function() {
		return this.get('vtodo');
	}.property('vtodo'),

	//properties
	numEvents: Ember.computed.alias('vevent.length'),
	numTodos: Ember.computed.alias('vtodo.length'),
	numJournals: Ember.computed.alias('vjournal.length'),
	numEventsJournals: function() {
		return (this.get('vevent.length') + this.get('vjournal.length'));
	}.property('vevent.length','vjournal.length'),
	eventsJournals: function() {
		return this.get('vevent').addObjects(this.get('vjournal'));
		//return Ember.A();
		//return (this.get('vevent').concat(this.get('vjournal')));
	}.property('vevent','vjournal'),

	calendarName: function() {
		return (this.get('x-wr-calname') || this.get('prodid'));
	}.property('prodid','x-wr-calname'),

	calendarDesc: function() {
		return (this.get('x-wr-caldesc') || 'Without description');
	}.property('x-wr-caldesc'),

	//Pseudo-View
	actualView: function() {
		return 'agenda';	//agenda || toConfirm || history || windRose
	}.property(),
	onAgendaView: Ember.computed.equal('actualView', 'agenda'),
	onToConfirmView: Ember.computed.equal('actualView', 'toConfirm'),
	onHistoryView: Ember.computed.equal('actualView', 'history'),
	onWindRoseView: Ember.computed.equal('actualView', 'windRose'),
	actions: {
		showAgenda: function() { this.set('actualView', 'agenda'); },
		showToConfirm: function() { this.set('actualView', 'toConfirm'); },
		showHistory: function() { this.set('actualView', 'history'); },
		showWindRose: function() { this.set('actualView', 'windRose'); }
	}
});
