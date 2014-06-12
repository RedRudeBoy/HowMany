define(["ember","text!./HowManyPlanning.hbs"], function(Ember,Template) {
	var HowManyPlanningView = Ember.View.extend({
//		templateName: 'Planner',
		defaultTemplate: Ember.Handlebars.compile(Template)
	});
	return HowManyPlanningView;
});