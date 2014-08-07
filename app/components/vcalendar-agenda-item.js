export default Ember.Component.extend({
	attributeBindings: ['draggable'],
	draggable: "true",
	dragStart: function(event) {
		Ember.Logger.log('dragStart', event, this.get('vcomponent.constructor.typeKey'), this.get('vcomponent.id'));
		//Only horitzontal: http://stackoverflow.com/questions/8933513/html5-drag-drop-on-x-axis-and-without-fade
		event.dataTransfer.setData('text/vtype', this.get('vcomponent.constructor.typeKey'));
		event.dataTransfer.setData('text/id', this.get('vcomponent.id'));
	},
	/*
	dragOver: function(event) {
		console.log('dragOver');
		//event.preventDefault();
	},
	drop: function(event) {
		console.log('drop');
	}

	actions: {
		eventConfirmed: function(param) {
			this.sendAction('eventConfirmed', this.get('vcomponent'));
		},
		eventCancelled: function(param) {
			this.sendAction('eventCancelled', this.get('vcomponent'));
		}
	}
	*/
});
