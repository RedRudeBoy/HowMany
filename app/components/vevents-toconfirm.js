export default Ember.Component.extend({
	classNameBindings: [':row',':toConfirm','show::hidden'],

	eventsTentative: function() {
		return this.get('vevents').filterBy('status','TENTATIVE');
	}.property('vevents'),

	actions: {
		eventStatusCancelled: function(id) {
			Ember.Logger.log('received eventStatusCancelled '+id);
			this.setEventStatus(id, 'CANCELLED');
			return false; //Stop event bubbling
		},
		eventStatusConfirmed: function(id) {
			Ember.Logger.log('received eventStatusConfirmed '+id);
			this.setEventStatus(id, 'CONFIRMED');
			return false; //Stop event bubbling
		}
	},
	setEventStatus: function(id, status) {
		var vevent = this.get('vevents').filterBy('id', id);
		if(vevent.length !== 1) {
			Ember.Looger.error('Length is different than one getting the vevent with id '+id);
			return false;
		}
		vevent = vevent[0];
		vevent.set('status',status).save();
		return true;
	}
});