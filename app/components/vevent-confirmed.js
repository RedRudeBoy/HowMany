export default Ember.Component.extend({
//	dragEnter
//	dragLeave
//	dragStart
	dragOver: function(event) {
		Ember.Logger.log('vevent-confirmed dragOver');
		return event.preventDefault();
	},
	drop: function(event) {
		var id, vtype;
		Ember.Logger.log('vevent-confirmed drop');
		vtype = event.dataTransfer.getData('text/vtype');
		if(vtype !== 'vevent') {
			Ember.Logger.log('vevent-confirmed ignored: ',vtype);
			return false;
		}
		id = event.dataTransfer.getData('text/id');
		Ember.Logger.log('vevent-confirmed send eventStatusConfirmed '+id);
		this.sendAction('eventStatusConfirmed', id);
	}
	/*
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
