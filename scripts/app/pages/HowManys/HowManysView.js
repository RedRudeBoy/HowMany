define(["ember","text!./HowManys.hbs","css!./HowManys"], function(Ember,Template) {
	
	var compiled = Ember.Handlebars.compile(Template);
	Ember.TEMPLATES["HowManys"] = compiled;
	
	var HowManysView = Ember.View.extend({
		name: 'HowManysView',
		templateName: 'HowManys'
//		defaultTemplate: compiled
	});
	return HowManysView;
});