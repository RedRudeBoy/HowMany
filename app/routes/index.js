export default Ember.Route.extend({
	model: function() {
		return this.get('store').find('vcalendar');
		//return this.get('store').findAll('vcalendar');
		//return ['red', 'yellow', 'blue'];
		//return this.get('store').find('vcalendar', 1);
		//return this.store.find('vcalendar',1);
	}
});
