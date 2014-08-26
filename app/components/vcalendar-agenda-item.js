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
		Ember.Logger.log('dragOver');
		//event.preventDefault();
	},
	drop: function(event) {
		Ember.Logger.log('drop');
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
	click: function() {
		if(['vevent','vtodo'].contains(this.get('vcomponent.constructor.typeKey'))) {
//			Ember.Logger.log('Going to '+this.get('vcomponent.constructor.typeKey')+' #'+this.get('vcomponent').get('id'));
			App.Router.router.transitionTo(this.get('vcomponent.constructor.typeKey'), this.get('vcomponent').get('id'));

		} else if(['vjournal'].contains(this.get('vcomponent.constructor.typeKey'))) {
			Ember.Logger.warn('@ToDo: transitionTo diary');
		} else {
			Ember.Logger.error('vcomponent with unknown type',this.get('vcomponent.constructor.typeKey'),this.get('vcomponent.constructor'));
		}
	}
});
