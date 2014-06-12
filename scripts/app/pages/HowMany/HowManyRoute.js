define(["ember"], function(Ember){
	var HowManyRoute = Ember.Route.extend({
		model: function(params) {
//			Ember.Logger.log('HowManyRoute recover model:',this.store.find('howMany',params.id));
			return this.store.find('howMany',params.id);
		},
		afterModel: function(model, transition) {
			Ember.Logger.log('afterModel',model);
		}
//		,setupController: function (controller, model) {
//			Ember.Logger.log('HowManyRoute setupController', controller, model, controller.toString());
//			controller.set('model', model);
//		}
	});
	return HowManyRoute;
});
/**
 * Ember Router Async Facelift:
 * https://gist.github.com/machty/5723945
 */