export default Ember.Route.extend({
	model: function(params) {
		Ember.Logger.log('vjournalRoute received: ', params.jid, params);
		return this.get('store').find('vjournal',params.jid);
	}
});
