define(["ember"], function(Ember){
	var HowManyPlanningRoute = Ember.Route.extend({
		model: function() {
//			Ember.Logger.log('HowManyPlanningRoute recover model:',this.store.find('tag'));
			return this.store.find('howMany');
//			return this.store.find('calendar');
		}
//		,setupController: function (controller, model) {
//			Ember.Logger.log('HowManysRoute setupController', controller, model, controller.toString());
//			controller.set('model', model);
//			var tags = Ember.A();
//			var m = Model;
//		}
	});
	return HowManyPlanningRoute;
});
/**
 * Ember Router Async Facelift:
 * https://gist.github.com/machty/5723945
 */