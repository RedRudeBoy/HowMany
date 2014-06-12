define(["ember"], function(Ember){
	var ApplicationController = Ember.ObjectController.extend({
		currentPathDidChange: function() {
			Ember.Logger.log('path changed: '+this.get('currentPath'));
//			var required = 'pages/'+this.get('currentPath')+'/'+this.get('currentPath')+'View';
//	"pages/HMLogin/HMLoginView",
//	"pages/HMLogin/HMDoLoginView"
//			Ember.Logger.log('path changed & required: '+required);
//			require([required,'App'], function(view, App) {
//				Ember.Logger.log('callback require');
//				Ember.Logger.log(App);
//				Ember.Logger.log(view);
//				App['HMLoginView'] = view;
//			});
//			Ember.Logger.log('path loaded');
		}.observes('currentPath')
	});

	return ApplicationController;
});
//http://localhost/HowManyRequireJS/#/HMLogin
//http://localhost/HowManyRequireJS/#/HMListTags/bigIcons