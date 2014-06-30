export default Ember.Route.extend({
	model: function() {
		Ember.Logger.log('looking for todos');
		return this.get('store').find('vtodo');
		//return this.modelFor('index');
		//return this.get('store').findAll('vcalendar');
		//return ['red', 'yellow', 'blue'];
	}
});
