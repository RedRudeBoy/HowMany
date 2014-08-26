export default Ember.Component.extend({
	attributeBindings: ['draggable'],
	draggable: "true",
	dragStart: function(event) {
		Ember.Logger.log('vevent-toconfirm dragStart', event);
		//Only horitzontal: http://stackoverflow.com/questions/8933513/html5-drag-drop-on-x-axis-and-without-fade
		event.dataTransfer.setData('text/vtype','vevent');
		event.dataTransfer.setData('text/id',this.get('vevent.id'));
	},
	/*
	dragOver: function(event) {
		Ember.Logger.log('vevent-toconfirm dragOver');
		//event.preventDefault();
	},
	drop: function(event) {
		Ember.Logger.log('vevent-toconfirm drop');
	}
	
	actions: {
		eventConfirmed: function(param) {
			this.sendAction('eventConfirmed', this.get('vevent'));
		},
		eventCancelled: function(param) {
			this.sendAction('eventCancelled', this.get('vevent'));
		}
	}
	*/
});
