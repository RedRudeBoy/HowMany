define(["ember"], function(Ember){
	var ConfigurationRoute = Ember.Route.extend({
		model: function() {
			Ember.Logger.log('ConfigurationRoute recover model:',this.store.find('userConfiguration'));
			return this.store.find('userConfiguration',1);
		},
		afterModel: function(model, transition) {
			Ember.Logger.log('ConfigurationRoute afterModel',model);
		}
//		,setupController: function (controller, model) {
//			Ember.Logger.log('HowManysRoute setupController', controller, model, controller.toString());
//			controller.set('model', model);
//			var tags = Ember.A();
//			var m = Model;
//		}
	});
	return ConfigurationRoute;
});
/**
 * Ember Router Async Facelift:
 * https://gist.github.com/machty/5723945
 */