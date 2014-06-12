define(["ember","text!./HowManyPlanner.hbs"], function(Ember,Template) {
	var HowManyPlannerView = Ember.View.extend({
//		templateName: 'Planner',
		defaultTemplate: Ember.Handlebars.compile(Template)
	});
	return HowManyPlannerView;
});