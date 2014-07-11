//Ember.Validations.Mixin,
//tmp_cal.reopen({
//	validations: {
//		'x-wr-calname': { presence: true }
//	}
//});
export default Ember.ObjectController.extend({
	mola: 'vcalendar/new',

	/**
	 * @ToDo: Dirty events are showed event unsaved, this solution is not working
	 */
	activate: function() { //Hook called when entering the route
		Ember.Logger.log('controller:vcalencar:new:activate');
	},
	deactivate: function() { //Hook for perform any teardown if needed
		Ember.Logger.log('controller:vcalencar:new:deactivate',this.get('tmp_component.isDirty'),his.get('tmp_component.isNew'));
		if(this.get('tmp_component.isNew')) {
			this.get('tmp_component').destroyRecord();
		}
	},

	isEvent: Ember.computed.equal('tmp_model_type','vevent'),
	isTodo: Ember.computed.equal('tmp_model_type','vtodo'),
	isJournal: Ember.computed.equal('tmp_model_type','vjournal'),

	tmp_model_type: 'vtodo',

	tmp_component: function() {
		Ember.Logger.log('tmp_component is model type: ',this.get('tmp_model_type'));
		return this.get('store').createRecord(this.get('tmp_model_type'));
	}.property('tmp_model_type'),

	classOptions: function() {
		return Ember.A([{ id: "PUBLIC", name: "Public"},{id: "PRIVATE", name: "Private"},{id:"CONFIDENTIAL", name: "Confidential"}]);
//		return Ember.A(["Public","Private","Confidential"]);
	}.property(),
	classSelected: function() {
		return this.get('classOptions')[1];
	}.property(),

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
			var tmp_comp = controller.get('tmp_component'),
				now = new Date();
			tmp_comp
				.set('vcalendar', vcalendar).set('status','TENTATIVE')
				.set('created', now).set('last-modified', now).set('sequence', tmp_comp.get('sequence')+1)
				.save();
			var onSuccess = function(vcalendar) {
				controller.transitionToRoute('vcalendar', vcalendar);
			};
			var onFail = function(vcalendar) {
				console.error('ERROR');
				debugger;
			};
			vcalendar.get(controller.get('tmp_model_type')).pushObject(tmp_comp).save().then(onSuccess, onFail);
//			this.get('store').push(tmp_comp);
		}
	}
});
