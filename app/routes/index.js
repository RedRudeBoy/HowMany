export default Ember.Route.extend({
	model: function(params) {
		return this.get('store').find('vcalendar'); //, { isNew: false}
	},
	setupController: function(controller, model) {
		controller.set('model', model);

		/**
		 * @ToDo: All this is only because ember data doesnt hydrate automatically.
		 * Add filterby calendar id
		 */

//		controller.set('events', this.store.filter('vevent', function(vevent) {
//			Ember.Logger.log(vevent.get('vcalendar.id'),model.get('id'),(vevent.get('vcalendar.id') == model.get('id')));
//			return (vevent.get('vcalendar.id') == model.get('id'));
//			return true;
//		}));
//		controller.set('tags', this.store.find('tag'));
		controller.set('events', this.store.find('vevent'));
		controller.set('todos', this.store.find('vtodo'));
		controller.set('journals', this.store.find('vjournal'));
	}
});
