export default Ember.Route.extend({
	model: function() {
		return false;
		//return {};
		//return this.get('store').createRecord('vcalendar');
		//return this.get('store').find('vcalendar');
		//return this.modelFor('index');
		//return this.get('store').findAll('vcalendar');
		//return ['red', 'yellow', 'blue'];
	},
	/*
	renderTemplate: function() {
		//var controller = this.controllerFor('calendar');
		this.render('calendar'); //{controller: controller}
	}*/
});
