define(["ember","text!./HowManysBigIconsItem.hbs"], function(Ember,Template) {
//	var compiled = Ember.Handlebars.compile(Template);
//	Ember.TEMPLATES["HowManysBigIconsItem"] = compiled;
	
	var HowManysBigIconsItemView = Ember.View.extend({
//	var HowManysBigIconsItemView = Ember.ContainerView.extend({
//		name: 'HowManysBigIconsItemView',
//		templateName: 'HowManysBigIconsItem',
//		layoutName: 'HMListTags'
//		defaultTemplate: Ember.Handlebars.compile(Template)
//		defaultClass: 'spanItemView'
		offset: function() {
			if(this.get('contentIndex') == 0) {
				var numBrothers = this.get('content').get('parent').get('children').get('length');
				if(numBrothers > 4)			return false;
				else if(numBrothers > 2)	return 'offset2';
				else						return 'offset1';
			}
			return false;
		}.property('contentIndex')
	});
	return HowManysBigIconsItemView;
});
//		//		tagParentSpanVar: function(params) {
//			Ember.Logger.log(this.get('model'));
////			if(value.childrens.length < 2) {
////				return 'span6';
////			} else {
////				return 'span12';
////			}
//debugger;
//			return this.get('model').childrens.length;
//		}.property('model.@each.childrens')
