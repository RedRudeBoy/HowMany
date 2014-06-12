define(["ember","text!./Navbar.hbs","css!./Navbar"], function(Ember,Template) {
	
	var compiled = Ember.Handlebars.compile(Template);
	Ember.TEMPLATES["Navbar"] = compiled;
	
	var NavbarView = Ember.View.extend({
//		name: 'HMNavbarView',
		templateName: 'Navbar'
//		defaultTemplate: Ember.Handlebars.compile(Template)
	});
	return NavbarView;
});