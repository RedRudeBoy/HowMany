export default Ember.Route.extend({
	model: function(params) {
//		Ember.Logger.log('CalendarRoute received: ', params.id);
		return this.get('store').find('vcalendar',params.id);
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
		controller.set('tags', this.store.find('tag'));
		controller.set('events', this.store.find('vevent'));
		controller.set('todos', this.store.find('vtodo'));
		controller.set('journals', this.store.find('vjournal'));
	}
});
