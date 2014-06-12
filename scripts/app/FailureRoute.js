/**
 * Routing for 404 page, actually is unused because is not working
 * 
 * Documentation:
 *	https://gist.github.com/machty/5723945
 * Other solutions:
 *	http://stackoverflow.com/questions/14548594/how-to-handle-no-route-matched-in-ember-js-and-show-404-page
 */
define(["ember"], function(Ember){
	var FailureRoute = Ember.Route.extend({
//		actions: {
//			error: function(reason, transition) {
//				Ember.Logger.error('FailureRoute error received:',reason,transition);
////				this.controllerFor('banner').displayError(reason);
//			}
//		}
	});
	return FailureRoute;
});