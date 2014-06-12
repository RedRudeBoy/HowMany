define(["ember","text!./HowManysBigIcons.hbs"], function(Ember,Template) {
	
	var compiled = Ember.Handlebars.compile(Template);
	Ember.TEMPLATES["HowManysBigIcons"] = compiled;
	
//	Ember.Handlebars.helper('tagParentSpan', function(value, options) {
////		return 'error';
////		var length = value.childrens.length;
//		// WTF!! why??
//		var length = options.data.keywords.ParentTag.childrens.length;
////		console.log(length);
////		if(length <= 2) {
////			return 'span6';
////		}
//		return 'span12';
//	});
//	Ember.Handlebars.helper('tagChildrenOffset', function(value, options) {
////		options.data.isUnbound = true;
////		console.log('tagChildrenOffset');
////		return 'error';
////		var length = value.length;
//		// WTF!! why??
//		var length = options.data.keywords.ParentTag.childrens.length;
//		// WTF2!! why?
//		var actualTag = options.data.keywords.Tag;
//		var firstTag = options.data.keywords.ParentTag.childrens[0];
//		if(actualTag === firstTag) {
//			if(length === 4) {
//				return 'offset2';
//			} else if(length === 2){
//				return 'offset4';
//			}
//		}
//		return '';
//	});
	
	var HowManysBigIconsView = Ember.View.extend({
//	var HowManysBigIconsView = Ember.CollectionView.extend({
		name: 'HowManysBigIconsView',
//		tagName : 'div',
		templateName: 'HowManysBigIcons',
//		defaultClass: 'row',
//		isSmall: function() {
//			Ember.Logger.log('isSmall?',this.get('context').get('children'),this.get('context').get('children'));
//			debugger;
//			return this.get('context').get('children');
////		}.property('context.children.length'),
//		}.property(),
		didInsertElement: function() {
			Ember.Logger.log('inserted!',this,this.$());
		},
//		layoutName: 'HMListTags'
//		defaultTemplate: Ember.Handlebars.compile(Template)
//		itemViewClass: 'HowManysBigIconsItemView',
//		contentBinding: 'howManysController'
		
	});
	return HowManysBigIconsView;
});
