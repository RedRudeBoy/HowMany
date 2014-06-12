define(["ember"], function(Ember){
	var HowManysListRoute = Ember.Route.extend({
		model: function(params) {
//			debugger;
//			Ember.Logger.log('Recover model:',this.modelFor('HowManys'));
//			return this.modelFor('HowManys');
			return this.store.find('HowMany');
//			return this.store.find('Tag',24); //Routing params & querys
		}
//		, afterModel: function(model, transition) {
//			Ember.Logger.log('afterModel',model);
//		}
//		, activate: function() {
//			Ember.Logger.log('HowManysListRoute activate');
//		}
//		, setupController: function (controller, model) {
//			Ember.Logger.log('HowManysListRoute setupController');
//		}
	});
	return HowManysListRoute;
});