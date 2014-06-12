define(["ember","text!./HowManysToolbar.hbs"], function(Ember,Template) {
	
	var compiled = Ember.Handlebars.compile(Template);
	Ember.TEMPLATES["HowManysToolbar"] = compiled;
	
	var HowManysToolbarView = Ember.View.extend({
//		name: 'HowManysToolbarView',
		templateName: 'HowManysToolbar'
//		layoutName: 'HMListTags'
//		defaultTemplate: Ember.Handlebars.compile(Template)
	});
	return HowManysToolbarView;
});
