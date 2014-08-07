export default Ember.Route.extend({
	model: function(params) {
		return this.get('store').find('vcalendar'); //, { isNew: false}
//		return this.get('store').findAll('vcalendar').then(function(calendars) {
//			calendars.forEach(function(calendar) {
//				calendar.get('vevents'); //.then(function(vevents) {debugger;});
//				calendar.get('vtodos'); //.then(function(vtodos) {debugger;});
//				calendar.get('vjournals'); //.then(function(vjournals) {debugger;});
//			}, this);
//			return calendars;
//		});
//		return this.get('store').filter('vcalendar', function(calendar) {
//			return !(calendar.get('isDirty'));
//		});
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
