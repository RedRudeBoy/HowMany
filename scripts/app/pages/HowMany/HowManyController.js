define(["ember"], function(Ember){
	var HowManyController = Ember.ObjectController.extend({
		actions: {
			imgChange: function(e) {
				alert('HowManyController imgChange alert: '+e);
			}
		}
//		sortProperties: ['name', 'artist'],
//		sortAscending: true // false for descending

//		childrenLength: function() {
//			return this.get('childrens').length;
//		}.property('childrens')
//		childrenLength: 5
	});
	return HowManyController;
});