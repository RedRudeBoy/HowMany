define(["ember"], function(Ember){
	var HowManysBigIconsItemController = Ember.ObjectController.extend({
//		bigParent: function() {
//			var numChildrens = this.get('model').get('children').get('length');
//			numChildrens = parseInt(numChildrens,10);
//			if(numChildrens > 2) {
//				return true;
//			}return false;
//		}.property('model.children.length'),
		smallParent: function() {
			var numChildrens = this.get('model').get('children').get('length');
			numChildrens = parseInt(numChildrens,10);
			if(numChildrens > 0 && numChildrens <= 2) {
				return true;
			}
			return false;
		}.property('model.children.length'),
//		}.property()
//		actions: {
//			imgChange: function(e) {
//				alert(e);
//			}
//		}
//		sortProperties: ['name', 'artist'],
//		sortAscending: true // false for descending
//		childrenLength: 88,
//		childrenLength: function() {
//			return this.get('childrens').length;
//		}.property('childrens')
//		childrenLength: 5
	});
	return HowManysBigIconsItemController;
});