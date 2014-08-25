export default Ember.Route.extend({
	model: function(params) {
		return this.get('store').find('vcalendar'); //, { isNew: false}
		/*
		var self = this;
		return this.get('store').findAll('vcalendar').then(function(calendars) {
			var promises = []; //var promises = Ember.A();
			calendars.forEach(function(calendar){
				promises.push(self.get('store').find('vevent', { parent_vcalendar: calendar }).then(function(vevents) {calendar.updateHasMany('vevents',vevents);Ember.Logger.log(vevents);return vevents;}));
//				promises.push(self.get('store').find('vevent', { parent_vcalendar: calendar }));
				promises.push(self.get('store').find('vtodo', { parent_vcalendar: calendar }));
				promises.push(self.get('store').find('vjournal', { parent_vcalendar: calendar }));
//				promises.push(calendars.get('vevents'));
//				promises.push(calendars.get('vtodos'));
//				promises.push(calendars.get('vjournals'));
			}, self);
			return Ember.RSVP.Promise.all(promises).then(function(resolvedPromises){
				calendars.forEach(function(calendar){
					var el = calendar.get('vevents').get('length');
					var tl = calendar.get('vtodos').get('length');
					var jl = calendar.get('vjournals').get('length');
					Ember.Logger.log('length',el,tl,jl);
				}, self);
				return calendars;
			});
		});
		*/
//		return this.get('store').findAll('vcalendar').then(function(calendars) {
//			calendars.forEach(function(calendar) {
//				calendar.get('vevents'); //.then(function(vevents) {debugger;});
//				calendar.get('vtodos'); //.then(function(vtodos) {debugger;});
//				calendar.get('vjournals'); //.then(function(vjournals) {debugger;});
//			}, this);
//			return calendars;
//		});
//		return this.get('store').filter('vcalendar', function(calendar) {
//			return !(calendar.get('isDirty'));
//		});
	},
	setupController: function(controller, model) {
		controller.set('model', model);
/*
		var self = this;
		model.forEach(function(calendar){
			var el = calendar.get('vevents').get('length');
			var tl = calendar.get('vtodos').get('length');
			var jl = calendar.get('vjournals').get('length');
			Ember.Logger.log('length',el,tl,jl);
		}, self);

		/**
		 * @ToDo: All this is only because ember data doesnt hydrate automatically.
		 * Add filterby calendar id
		 */

//		controller.set('events', this.store.filter('vevent', function(vevent) {
//			Ember.Logger.log(vevent.get('vcalendar.id'),model.get('id'),(vevent.get('vcalendar.id') == model.get('id')));
//			return (vevent.get('vcalendar.id') == model.get('id'));
//			return true;
//		}));
//		controller.set('tags', this.store.find('tag'));
		controller.set('events', this.store.find('vevent'));
		controller.set('todos', this.store.find('vtodo'));
		controller.set('journals', this.store.find('vjournal'));
	}
});
