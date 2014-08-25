export default Ember.ObjectController.extend({
	mola: 'vcalendar/new',

	tmp_model_type: function() {
		return 'vtodo';
	}.property(),
	tmp_model_typeObserver: function() {
		this.resetModel(); //Attention! This removes all inserted data!
	}.observes('tmp_model_type'),

	tmp_component: function() {
		Ember.Logger.log('tmp_component is model type: ',this.get('tmp_model_type'));
		return this.get('store').createRecord(this.get('tmp_model_type')).set('parent_vcalendar', this.get('model')); //.set('vcalendar', this.get('model'))
	}.property(),

	resetModel: function() {
		var old_tmp_component = this.get('tmp_component').toJSON();
		delete old_tmp_component['parent_vcalendar'];
		var tmp_component = this.get('store').createRecord(this.get('tmp_model_type'), old_tmp_component);
		tmp_component.set('parent_vcalendar', this.get('model'));
		this.set('tmp_component', tmp_component);
		return tmp_component;
	},

	actions: {
		tmpComponentAsEvent: function() {
			this.set('tmp_model_type','vevent');
		},
		tmpComponentAsToDo: function() {
			this.set('tmp_model_type','vtodo');
		}
//		asJournal: function() {
//			this.set('tmp_model_type','vjournal');
//		},
	}
});
