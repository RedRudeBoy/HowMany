define(["ember","text!./HowManysList.hbs"], function(Ember,Template) {
	var HowManysListView = Ember.View.extend({
//		templateName: 'HowManysListView'
		defaultTemplate: Ember.Handlebars.compile(Template)
	});
	return HowManysListView;
});

//App.HMListRoute = Ember.Route.extend({
//	activate: function() {
//		App.log('HMListRoute activate');
//	}
//});
