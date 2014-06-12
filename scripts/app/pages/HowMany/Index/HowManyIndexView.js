define(["ember","text!./HowManyIndex.hbs"], function(Ember,Template) {
	
var HowManyIndex = Ember.View.extend({
//	templateName: 'HowManyIndex'
	defaultTemplate: Ember.Handlebars.compile(Template)
});
	
	return HowManyIndex;
});