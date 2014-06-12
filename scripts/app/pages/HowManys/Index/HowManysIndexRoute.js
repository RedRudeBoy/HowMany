define(["ember"], function(Ember){
	var HowManysIndexRoute = Ember.Route.extend({
		redirect: function() {
			Ember.Logger.log('HowManysIndexRoute redirect to List');
			this.transitionTo('HowManys.List');
		}
	});
	return HowManysIndexRoute;
});