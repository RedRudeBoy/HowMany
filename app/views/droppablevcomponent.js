export default Ember.View.extend({
//	dragEnter
//	dragLeave
//	dragStart
	dragOver: function(event) {
		Ember.Logger.log('dragOver');
		return event.preventDefault();
	},
	drop: function(event) {
		var id, vtype;
		vtype = event.dataTransfer.getData('text/vtype');
		if(!Ember.A(["vevent","vtodo","vjournal"]).contains(vtype)) {
			Ember.Logger.log('droppablevcomponent ignores: ',vtype);
			return false;
		}
		id = event.dataTransfer.getData('text/id');
		if(Ember.isEmpty(this.get('day'))) {
			Ember.Logger.log('dropped vcomponent, sending vcomponentRemoveDtStart', vtype, id);
//			this.sendAction('vcomponentRemoveDtStart', id);
			this.get('controller').send('vcomponentRemoveDtStart', vtype, id);
		} else {
			Ember.Logger.log('dropped vcomponent, sending vcomponentSetDtStart', vtype, id, this.get('day').toDate());
//			this.sendAction('vcomponentSetDtStart', id);
			this.get('controller').send('vcomponentSetDtStart', vtype, id, this.get('day').toDate());
		}
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
