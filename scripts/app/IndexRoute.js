define(["ember"/*,'Gapi/GapiLogin'*/], function(Ember,GapiLogin){

var IndexRoute = Ember.Route.extend({
	redirect: function() {
//		//Login here?
//		Ember.Logger.log('IndexRoute redirect, authorized?');
//		GapiLogin.auth(true, function(authResult) {
//			Ember.Logger.log('IndexRoute authResult:');
//			Ember.Logger.log(authResult);
//			if (authResult && !authResult.error) {
//				Ember.Logger.log('OK!');
//				this.transitionTo('HowManys.default');
//			} else {
				Ember.Logger.log('KO!');
				this.transitionTo('Login');
//			}
//		});
		
		//Login in HowManys.default
//		this.transitionTo('HowManys.default');
		
//		if(!Ember.isNone(App.gapi) && !Ember.isNone(App.gapi.isAuthorized) && App.gapi.isAuthorized) {
//			App.log(App.gapi.isAuthorized);
//			this.transitionTo('HowManys.default');
//		} else {
//			App.log('goTo login');
//			this.transitionTo('Login');
//		}
//		Ember.Logger.log('require Login');
		
//		define('actualRouting',this);
//		require(['actualRouting',"pages/Login/LoginView"], function(actRouting,Login){
//			Ember.Logger.log('required Login OK! going to it!');
//			actRouting.transitionTo('Login');
//		});
//		Ember.Logger.log('mec?');
	}
//	https://groups.google.com/forum/#!msg/requirejs/QWkw1GGQMl8/odZk79qE6-IJ
//	init: function() {this._super();},			//called when objects are instantiated
//	activate: function() {},				//This hook is executed when the router enters the route for the first time. It is not executed when the model for the route changes.
//	setupController: function(controller, model) {},
//	afterModel: function(posts, transition) {},
//	beforeModel: function(transition) {},
//	renderTemplate: function(controller, model) {},		//By default, it renders the route's template, configured with the controller for the route.
//	deactivate: function() {},
});

	return IndexRoute;
});