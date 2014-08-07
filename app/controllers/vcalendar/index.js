export default Ember.ObjectController.extend({
	//test
	mola: 'controllers/vcalendar/index.js',
	allTodos: function() {
		return this.get('vtodos');
	}.property('vtodos'),

	//properties
	numEvents: Ember.computed.alias('vevents.length'),
	numTodos: Ember.computed.alias('vtodos.length'),
	numJournals: Ember.computed.alias('vjournals.length'),
	numEventsJournals: function() {
		return (this.get('vevents.length') + this.get('vjournals.length'));
	}.property('vevents.length','vjournals.length'),
	eventsJournals: function() {
		return this.get('vevents').addObjects(this.get('vjournals'));
		//return Ember.A();
		//return (this.get('vevents').concat(this.get('vjournals')));
	}.property('vevents','vjournals'),

	calendarName: function() {
		return (this.get('x-wr-calname') || this.get('prodid'));
	}.property('prodid','x-wr-calname'),

	calendarDesc: function() {
		return (this.get('x-wr-caldesc') || 'Without description');
	}.property('x-wr-caldesc'),

	//Pseudo-View
	actualView: function() {
		return 'agenda';	//agenda || toConfirm || history || windRose || wizard
	}.property(),
	onAgendaView: Ember.computed.equal('actualView', 'agenda'),
	onToConfirmView: Ember.computed.equal('actualView', 'toConfirm'),
	onHistoryView: Ember.computed.equal('actualView', 'history'),
	onWindRoseView: Ember.computed.equal('actualView', 'windRose'),
	onWizardView: Ember.computed.equal('actualView', 'wizard'),
	actions: {
		showAgenda: function() { this.set('actualView', 'agenda'); },
		showToConfirm: function() { this.set('actualView', 'toConfirm'); },
		showHistory: function() { this.set('actualView', 'history'); },
		showWindRose: function() { this.set('actualView', 'windRose'); },
		showWizard: function() { this.set('actualView', 'wizard'); }
	}
});
