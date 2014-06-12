define(["ember","text!./HowManysWindRose.hbs"], function(Ember,Template) {
	
	var compiled = Ember.Handlebars.compile(Template);
	Ember.TEMPLATES["HowManysWindRose"] = compiled;
	
	var HowManysWindRoseView = Ember.View.extend({
		name: 'HowManysWindRoseView',
		templateName: 'HowManysWindRose'
//		defaultTemplate: Ember.Handlebars.compile(Template)
	});
	return HowManysWindRoseView;
});