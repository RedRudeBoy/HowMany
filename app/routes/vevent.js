export default Ember.Route.extend({
	model: function(params) {
		Ember.Logger.log('veventRoute received: ', params.eid, params);
		return this.get('store').find('vevent',params.eid);
	}
});
