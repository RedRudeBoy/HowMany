define(["ember","text!./HowManyDone.hbs"], function(Ember,Template) {
	var HowManyDoneView = Ember.View.extend({
//		templateName: 'HowManyDoneView',
		defaultTemplate: Ember.Handlebars.compile(Template)
	});
	return HowManyDoneView;
});
//App.HMDoneRoute = Ember.Route.extend({
//	activate: function() {
//		App.log('HMDoneRoute activate');
//	}
//});