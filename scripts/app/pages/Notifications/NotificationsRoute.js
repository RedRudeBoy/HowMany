define(["ember"], function(Ember){
	var NotificationsRoute = Ember.Route.extend({
		model: function() {
//			Ember.Logger.log('NotificationsRoute recover model:',this.store.find('notification'));
			return this.store.find('Notification');
		}
//		,afterModel: function(model, transition) {
//			Ember.Logger.log('NotificationsRoute afterModel',model);
//		}
//		,setupController: function (controller, model) {
//			Ember.Logger.log('HowManysRoute setupController', controller, model, controller.toString());
//			controller.set('model', model);
//			var tags = Ember.A();
//			var m = Model;
//		}
	});
	return NotificationsRoute;
});