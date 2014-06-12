define(["ember","./WizardView","text!./WizardWelcome.hbs"], function(Ember,WizardView,Template) {
	var compiled = Ember.Handlebars.compile(Template);
	Ember.TEMPLATES["WizardWelcome"] = compiled;
	
	var WizardWelcomeView = WizardView.extend({
		templateName: 'WizardWelcome',
//		defaultTemplate: Ember.Handlebars.compile(Template),
		didInsertElement: function() {
			Ember.Logger.log('inserted WizardWelcome!',this,this.$());
			this.updateStep(1);
			Ember.debug('finish WizardWelcome');
		}
	});
	return WizardWelcomeView;
});
