export default Ember.ObjectController.extend({
	//test
	mola: 'controllers/vcalendar/index.js',

	//properties
	numEvents: Ember.computed.alias('events.length'),
	numTodos: Ember.computed.alias('todos.length'),
	numJournals: Ember.computed.alias('journals.length'),
	numEventsJournals: function() {
		return (this.get('events.length') + this.get('journals.length'));
	}.property('events.length','journals.length'),
	eventsJournals: function() {
		return this.get('events').addObjects(this.get('journals'));
	}.property('events','journals'),
//	eventsJournals: Ember.computed.union('events','journals'),
	vcomponents: function() {
		return this.get('events').addObjects(this.get('journals')).addObjects(this.get('todos'));
	}.property('events','journals','todos'),
//	vcomponents: Ember.computed.union('events','todos','journals'),
	vcomponents_array: function() {
		var comps_array = [],
			comps = this.get('vcomponents');
		comps.toArray().forEach(function(comp, index) {
			comps_array.pushObject(comp.toJSON());
		});
		Ember.Logger.log('vcomponents_array', comps_array, comps);
		return comps_array;
	}.property('vcomponents'),
//	vcomponents_arrayObserver: function() {
//		Ember.Logger.log('vcomponents_arrayObserver');
//	}.observes('vcomponents_array'),
//	vcomponentsObserver: function() {
//		Ember.Logger.log('vcomponentsObserver');
//	}.observes('components'),

	calendarName: function() {
		return (this.get('x-wr-calname') || this.get('prodid'));
	}.property('prodid','x-wr-calname'),

	calendarDesc: function() {
		return (this.get('x-wr-caldesc') || 'Without description');
	}.property('x-wr-caldesc'),

	numToConfirm: function() {
//	eventsTentative: function() {
		return this.get('events').filterBy('status','TENTATIVE').get('length');
	}.property('events'),

	//Pseudo-View
	actualView: function() {
		return 'agenda';	//agenda || toConfirm || history || windRose || diary || wizard
	}.property(),
	onAgendaView: Ember.computed.equal('actualView', 'agenda'),
	onToConfirmView: Ember.computed.equal('actualView', 'toConfirm'),
	onHistoryView: Ember.computed.equal('actualView', 'history'),
	onWindRoseView: Ember.computed.equal('actualView', 'windRose'),
	onDiaryView: Ember.computed.equal('actualView', 'diary'),
	onWizardView: Ember.computed.equal('actualView', 'wizard'),
	actions: {
		showAgenda: function() { this.set('actualView', 'agenda'); },
		showToConfirm: function() { this.set('actualView', 'toConfirm'); },
		showHistory: function() { this.set('actualView', 'history'); },
		showWindRose: function() { this.set('actualView', 'windRose'); },
		showDiary: function() { this.set('actualView', 'diary'); },
		showWizard: function() { this.set('actualView', 'wizard'); }
	}
});
