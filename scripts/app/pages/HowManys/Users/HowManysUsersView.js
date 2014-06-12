define(["ember","text!./HowManysUsers.hbs"], function(Ember,Template) {
	
	var compiled = Ember.Handlebars.compile(Template);
	Ember.TEMPLATES["HowManysUsers"] = compiled;
	
	var HowManysUsersView = Ember.View.extend({
		name: 'HowManysUsersView',
		templateName: 'HowManysUsers'
//		defaultTemplate: Ember.Handlebars.compile(Template),
//		layoutName: 'HMListTags'
	});
	return HowManysUsersView;
});
