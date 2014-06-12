define([
	"ember",
	"text!./Login.hbs"
//	"css!./Login"
], function(Ember, Template) {
	var LoginView = Ember.View.extend({
		defaultTemplate: Ember.Handlebars.compile(Template)
	});
	return LoginView;
});

//App.LoginRoute = Ember.Route.extend({
//	setupController: function(controller, model) {
//		console.log('setupController LoginRoute');
////		console.log(controller);
////		console.log(model);
//	}
//});
//App.LoginController = Ember.ObjectController.extend({
//	soundVolume: 1
//});