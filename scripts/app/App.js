define([
	"AppInit",
	"ember",
	"DS",
	"jquery",
	"bootstrap"
], function(AppInit, Ember,DS,$,b){
//	Ember.FEATURES["query-params"] = true;
	
//	var app_name = config.app_name || "App";
//	root[app_name] = App = Ember.Application.create(App);
	window['App'] = App = Ember.Application.create(AppInit);
//	App.Router.reopen({
//		location: 'history'
//		location: 'query'
//	});
	// We can avoid auto-initialization of the app while we manage our dependencies.
//	App.deferReadiness();
	// Initialize all the classes
//	$.extend(App,AppInit);
//	App.ApplicationAdapter = DS.FixtureAdapter.extend();
	// We're ready to launch the app!
//	App.advanceReadiness();
	return App;
});