/**
 * Routing for 404 page, actually is unused because is not working
 * 
 * Documentation:
 *	https://gist.github.com/machty/5723945
 * Other solutions:
 *	http://stackoverflow.com/questions/14548594/how-to-handle-no-route-matched-in-ember-js-and-show-404-page
 */
define(["ember"], function(Ember) {
	var FailureView = Ember.View.extend({
//		templateName: 'HMCredits',
		defaultTemplate: Ember.Handlebars.compile('<h1>Fail!</h1>')
	});
	return FailureView;
});