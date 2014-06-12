define(["ember"], function(Ember) {
	var LoadingView = Ember.View.extend({
//		templateName: 'HMCredits',
		defaultTemplate: Ember.Handlebars.compile('<h1>Loading...</h1>')
	});
	return LoadingView;
});