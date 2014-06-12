define(["ember","text!./Report.hbs"], function(Ember,Template) {
	var ReportView = Ember.View.extend({
//		templateName: 'Report',
		defaultTemplate: Ember.Handlebars.compile(Template)
	});
	return ReportView;
});