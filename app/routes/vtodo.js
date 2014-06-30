export default Ember.Route.extend({
	model: function(params) {
		Ember.Logger.log('vtodoRoute received: ', params.tid, params);
		return this.get('store').find('vtodo',params.tid);
	}
});
//{"vcalendar":{"records":{"froip":{"id":"froip","prodid":"-//RedRudeBoy//HowMany//EN","version":"2.0","x-wr-calname":"test1","x-wr-caldesc":null,"x-wr-timezone":null}}},"vtodo":{"records":{"fnnv0":{"id":"fnnv0","percent_complete":null,"summary":"TODO1","valarm":[],"vcalendar":"froip"}}}}
