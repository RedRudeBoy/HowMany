define(["ember"], function(Ember){
	var NavbarRoute = Ember.Route.extend({
//		model: function(params) {
//			Ember.Logger.log('NavbarRoute recover model:',this.store.find('Notification'));
//			return this.store.find('Notification');
//		},
//		afterModel: function(model, transition) {
//			Ember.Logger.log('afterModel',model);
//		},
		setupController: function (controller, model) {
//			Ember.Logger.log('NavbarRoute setupController', controller, model, controller.toString());
			controller.set('notifications', this.store.find('Notification'));
		}
	});
	return NavbarRoute;
});
/**
 * Ember Router Async Facelift:
 * https://gist.github.com/machty/5723945
 */