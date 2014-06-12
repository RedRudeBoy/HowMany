define(["ember"], function(Ember){
	var WizardRoute = Ember.Route.extend({
		model: function(params) {
			return this.store.find('wizardQuestion');
		},
		redirect: function() {
			Ember.Logger.log('WizardRoute redirect to List');
			this.transitionTo('Wizard.Welcome');
		}
	});
	return WizardRoute;
});
/**
 * Ember Router Async Facelift:
 * https://gist.github.com/machty/5723945
 */