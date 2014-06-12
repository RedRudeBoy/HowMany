/**
 * @ToDo: Swipe to discard
 *	
 *  Ember Native Events:
 * http://emberjs.com/guides/understanding-ember/the-view-layer/
 * 
 *	Specific for ember:
 * http://ember-touch-website.herokuapp.com/
 * https://github.com/emberjs-addons/ember-touch/blob/master/packages/ember-touch/lib/gesture_recognizers/swipe.js
 * https://github.com/emberjs-addons/ember-touch/blob/master/packages/ember-touch/lib/system/gesture.js
 * 
 *  General jQuery Plugin:
 * https://github.com/mattbryson/TouchSwipe-Jquery-Plugin
 */
define(["ember","text!./Notifications.hbs"], function(Ember,Template) {
	var NotificationsView = Ember.View.extend({
//		templateName: 'Notifications',
		defaultTemplate: Ember.Handlebars.compile(Template)
	});
	return NotificationsView;
});