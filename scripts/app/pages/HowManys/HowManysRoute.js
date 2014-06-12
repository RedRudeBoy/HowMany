/*,"models/Tags"     ,Model */
define(["ember"], function(Ember){
	var HowManysRoute = Ember.Route.extend({
//		model: function(params) {
//			Ember.Logger.log('HowManysRoute recover model:',this.store.find('HowMany'));
//			return this.store.find('HowMany');
//		},
		actions: {
			createHowMany: function() {
				Ember.debug('Start create New HowMany');
				debugger;
			}
		}
//		,setupController: function (controller, model) {
//			Ember.Logger.log('HowManysRoute setupController', controller, model, controller.toString());
//			controller.set('model', model);
//			var tags = Ember.A();
//			var m = Model;
//		}
//		,redirect: function() {
//			Ember.Logger.log('HowManysRoute redirect to List');
//			this.transitionTo('HowManys.List');
//		}
	});
	return HowManysRoute;
});
/**
 * Ember Router Async Facelift:
 * https://gist.github.com/machty/5723945
 */