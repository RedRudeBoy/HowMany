define(["ember","text!./HowManysHistory.hbs"], function(Ember,Template) {
	
	var compiled = Ember.Handlebars.compile(Template);
	Ember.TEMPLATES["HowManysHistory"] = compiled;
	
	var HowManysHistoryView = Ember.View.extend({
		name: 'HowManysHistoryView',
		templateName: 'HowManysHistory'
//		defaultTemplate: Ember.Handlebars.compile(Template)
	});
	return HowManysHistoryView;
});