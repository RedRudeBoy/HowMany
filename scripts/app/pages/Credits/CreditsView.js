define(["ember","text!./Credits.hbs"], function(Ember,Template) {
	var CreditsView = Ember.View.extend({
//		templateName: 'HMCredits',
		defaultTemplate: Ember.Handlebars.compile(Template)
	});
	return CreditsView;
});