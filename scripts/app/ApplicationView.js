define([
	"ember",
	"text!app/layout.hbs",
//	"text!app/partials/browsehappy.hbs",
//	"text!app/partials/navbar.hbs"
], function(Ember, layout/*, helper1, helper2*/) {
	var ApplicationView = Ember.View.extend({
		defaultTemplate: Ember.Handlebars.compile(layout)
	});
	return ApplicationView;
});