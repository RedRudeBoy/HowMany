define(["ember"], function(Ember) {
	
	var HowManyEditTagView = Ember.View.extend({
		tagName: "div",
		classNames: ['span','HowManyEditTag'],
		_isEditing: false,
		parentOffset: function() {
			return this.$().offset();
		}.property(),
		maxImportance: function() {
			var sum = 0,
				tags = this.get('context').get('howmany').get('tags'),
				_id = this.get('context').get('id'),
				_this = this;
			tags.forEach(function(item, index) {
				if(item.get('id') !== _id) {
					sum += item.get('importance');
				}
			}, _this);
			return sum;
		}.property('context.howmany.tags.@each.importance'),
		mouseMove: function(e) {
			if(this._isEditing) {
				var parentOffset = this.$().offset();
//				var parentOffset = this.get('parentOffset');
				var center = { x: parentOffset.left + 110, y: parentOffset.top + 140 }; //Width / 2
//				var touch = { x: e.originalEvent.layerX, y: e.originalEvent.layerY }; //Not working
				var mouse = { x: e.clientX, y: e.clientY };
				var d = { x: (mouse.x - center.x), y: (mouse.y - center.y) };
				var dr = Math.round(Math.sqrt( d.x * d.x + d.y * d.y ));
				
//				var totalImportance = this.get('context').get('howmany').get('totalTagsImportance');
//				var max = 100 - totalImportance + dr;
				var min = 20; //?
				var max = 100 - this.get('maxImportance');
//				var prevDr = dr;
				if(dr > max) dr = max;
				if(dr < min) dr = min;
//				Ember.Logger.log('mouseMove dr prev max min',dr,prevDr,max,min);
				
				this.get('context').set('importance',dr);
//				e.target.setAttribute("r", dr);
			}
		},
		mouseLeave: function(e) {
//			Ember.Logger.log('mouseLeave',e,this._isEditing);
			this._isEditing = false;
		},
		mouseUp: function(e) {
//			Ember.Logger.log('mouseUp',e,this._isEditing);
			this._isEditing = false;
		},
		mouseDown: function(e) {
//			Ember.Logger.log('mouseDown',e,this._isEditing);
			this._isEditing = true;
		},
/**
 * @ToDo: Resize with gestures:
 * 
 * https://github.com/danniehansen/Touch-box
 */
//		touchStart: function(e) {
//			Ember.Logger.log('touchStart',e,this._isEditing);
//		},
//		touchMove: function(e) {
//			Ember.Logger.log('touchMove',e,this._isEditing);
//		},
//		touchEnd: function(e) {
//			Ember.Logger.log('touchEnd',e,this._isEditing);
//		},
//		touchCancel: function(e) {
//			Ember.Logger.log('touchCancel',e,this._isEditing);
//		},
//		mouseEnter: function(e) {
//			Ember.Logger.log('mouseEnter',e,this._isEditing);
//		},
	});
	return HowManyEditTagView;
});