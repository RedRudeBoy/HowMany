/**
 * calDav Adapter?

//http rest
var ApplicationAdapter = DS.RESTAdapter.extend({
	namespace: 'api'
});
Ember.Inflector.inflector.irregular('howmany', 'howmanys');
Ember.Inflector.inflector.uncountable('howmany');
export default ApplicationAdapter;

//Fixture
export default DS.FixtureAdapter.extend();

App.store.adapter.on('QUOTA_EXCEEDED_ERR', function(records){
	Ember.Logger.error('LocalStorage QUOTA_EXCEEDED_ERR',records);
});
 */
//
//LocalStorage
export default DS.LSAdapter.extend({
	namespace: 'how_many'
});
