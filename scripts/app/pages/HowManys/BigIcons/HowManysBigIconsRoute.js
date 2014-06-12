define(["ember"], function(Ember){
	var HowManysBigIconsRoute = Ember.Route.extend({
		model: function() {
//			Ember.Logger.log('Recover model:',this.modelFor('HowManys'));
//			return this.modelFor('HowManys');
			Ember.Logger.log('Recover model:',this.store.find('tag'));
			return this.store.find('tag');
		},
		afterModel: function(model, transition) {
			Ember.Logger.log('afterModel',model);
		},
//		activate: function() {
//			Ember.Logger.log('HowManysBigIconsRoute activate');
//		},
//		setupController: function (controller, model) {
//			Ember.Logger.log('HowManysBigIconsRoute setupController', controller, model);
//			Ember.Logger.log('HowManysBigIconsRoute setupController', controller.toString());
//			controller.set('model', model);
//		}
	});
	return HowManysBigIconsRoute;
});