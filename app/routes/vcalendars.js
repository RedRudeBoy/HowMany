export default Ember.Route.extend({
	model: function() {
		return this.get('store').find('vcalendar');
		//return this.modelFor('index');
		//return this.get('store').findAll('vcalendar');
		//return ['red', 'yellow', 'blue'];
	},
	setupController: function(controller, model) {
		controller.set('model', model);
		controller.set('tags', this.store.find('tag'));
	},
	renderTemplate: function() {
		this.render('vcalendars');
	}
});
