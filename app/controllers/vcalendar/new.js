export default Ember.ObjectController.extend({
	mola: 'vcalendar/new',

	tmp_model_type: 'vtodo',

	tmp_component: function() {
		Ember.Logger.log('tmp_component is model type: ',this.get('tmp_model_type'));
		return this.get('store').createRecord(this.get('tmp_model_type')).set('parent_vcalendar', this.get('model')); //.set('vcalendar', this.get('model'))
	}.property('tmp_model_type'),

	actions: {
		tmpComponentAsEvent: function() {
			Ember.Logger.log('as event');
			this.set('tmp_model_type','vevent');
		},
		tmpComponentAsToDo: function() {
			Ember.Logger.log('as todo');
			this.set('tmp_model_type','vtodo');
		}
//		asJournal: function() {
//			this.set('tmp_model_type','vjournal');
//		},
	}
});
