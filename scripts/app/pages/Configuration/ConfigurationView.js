define(["ember","text!./Configuration.hbs"], function(Ember,Template) {
	var compiled = Ember.Handlebars.compile(Template);
	Ember.TEMPLATES["Configuration"] = compiled;
	
	var ConfigurationView = Ember.View.extend({
		templateName: 'Configuration',
//		defaultTemplate: Ember.Handlebars.compile(Template)
	});
	return ConfigurationView;
});