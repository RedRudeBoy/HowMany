//Ember.Validations.Mixin,
//tmp_cal.reopen({
//	validations: {
//		'x-wr-calname': { presence: true }
//	}
//});
export default Ember.ObjectController.extend({
	mola: 'vcalendar/new',

	isEvent: Ember.computed.equal('tmp_model_type','vevent'),
	isTodo: Ember.computed.equal('tmp_model_type','vtodo'),
	isJournal: Ember.computed.equal('tmp_model_type','vjournal'),

	tmp_model_type: 'vtodo',

	tmp_component: function() {
		Ember.Logger.log('tmp_component is model type: ',this.get('tmp_model_type'));
		return this.get('store').createRecord(this.get('tmp_model_type'));
	}.property('tmp_model_type'),

	actions: {
		asEvent: function() {
			this.set('tmp_model_type','vevent');
		},
		asTodo: function() {
			this.set('tmp_model_type','vtodo');
		},
		asJournal: function() {
			this.set('tmp_model_type','vjournal');
		},
		submit: function() {
			var controller = this,
				vcalendar = controller.get('model');

			if(controller.get('tmp_model_type') == 'vcomponent') {
				Ember.Logger.error('You must define a type');
				return false;
			}
			/*
			//Async
			controller.get('tmp_component').set('vcalendar', vcalendar).save().then(function (tmp_component) {
				vcalendar.get(controller.get('tmp_model_type')).then(function(vcomps) {
					vcomps.pushObject(tmp_component);
					vcalendar.save().then(function(vcalendar) {
						controller.transitionToRoute('vcalendar', vcalendar);
					});
				});
			});
			*/
			//Sync
			var tmp_comp = controller.get('tmp_component');
			tmp_comp.set('vcalendar', vcalendar).set('status','TENTATIVE').save();
			var onSuccess = function(vcalendar) {
				controller.transitionToRoute('vcalendar', vcalendar);
			};
			var onFail = function(vcalendar) {
				console.error('ERROR');
				debugger;
			};
			vcalendar.get(controller.get('tmp_model_type')).pushObject(tmp_comp).save().then(onSuccess, onFail);
//			this.get('store').commit();
			this.get('store').push(tmp_comp);
		}
	}
});
