//Ember.Validations.Mixin,
//tmp_cal.reopen({
//	validations: {
//		'x-wr-calname': { presence: true }
//	}
//});
export default Ember.Component.extend({
	mola: 'components/vcalendar-edit',

	model_type: function() {
		return this.get('model').constructor.typeKey;
	}.property('model'),

	/**
	 * @ToDo: Dirty events are showed event unsaved, this solution is not working
	activate: function() { //Hook called when entering the route
		Ember.Logger.log('vcalencar-edit:activate');
	},
	deactivate: function() { //Hook for perform any teardown if needed
		Ember.Logger.log('vcalencar-edit:deactivate',this.get('model.isDirty'),this.get('model.isNew'));
		if(this.get('model.isNew')) {
			this.get('model').destroyRecord();
		}
	},
	 */
	willTransition: function (transition) {
		var model = this.get('model');

		if (model && model.get('isDirty')) {
			/**
			 * @ToDo: Translation & Confirm is ugly...
			 */
			if (confirm("You have unsaved changes. Click OK to stay on the current page. Click cancel to discard these changes and move to the requested page.")) {
				//Stay on same page and continue editing
				transition.abort();
			} else {
				//Rollback modifications
				model.rollback();
				// Bubble the `willTransition` event so that parent routes can decide whether or not to abort.
				return true;
			}
		} else {
			// Bubble the `willTransition` event so that parent routes can decide whether or not to abort.
			return true;
		}
	},

	//Pseudo-View for tabs
	actualTabView: function() {
		return 'HowManyEditBasic';	//HowManyEditBasic || HowManyEditTags || HowManyEditMore || HowManyEditPeriodicity
	}.property(),
	onEditTabBasic: Ember.computed.equal('actualTabView', 'HowManyEditBasic'),
	onEditTabTags: Ember.computed.equal('actualTabView', 'HowManyEditTags'),
	onEditTabMore: Ember.computed.equal('actualTabView', 'HowManyEditMore'),
	onEditTabPeriodicity: Ember.computed.equal('actualTabView', 'HowManyEditPeriodicity'),


	isEvent: Ember.computed.equal('model_type','vevent'),
	isTodo: Ember.computed.equal('model_type','vtodo'),
//	isJournal: Ember.computed.equal('model_type','vjournal'),



	classOptions: function() {
		return Ember.A([{ id: "PUBLIC", name: "Public"},{id: "PRIVATE", name: "Private"},{id:"CONFIDENTIAL", name: "Confidential"}]);
//		return Ember.A(["Public","Private","Confidential"]);
	}.property(),
	classSelected: function() {
		return this.get('classOptions')[1];
	}.property(),

	//Priority
	isVeryEasy: Ember.computed.gte('model.satisfying', 5),
	isEasy: Ember.computed.equal('model.satisfying', 4),
	isMedium: Ember.computed.equal('model.satisfying', 3),
	isDifficult: Ember.computed.equal('model.satisfying', 2),
	isVeryDifficult: Ember.computed.equal('model.satisfying', 1),

	actions: {

		sendTmpComponentAsEvent: function() {
			this.sendAction('tmpComponentAsEvent', this);
		},
		sendTmpComponentAsToDo: function() {
			this.sendAction('tmpComponentAsToDo', this);
		},
//		sendTmpComponentAsJournal: function() {
//			this.sendAction('tmpComponentAsJournal', this);
//		},

		showEditBasic: function() { this.set('actualTabView', 'HowManyEditBasic'); },
		showEditTags: function() { this.set('actualTabView', 'HowManyEditTags'); },
		showEditMore: function() { this.set('actualTabView', 'HowManyEditMore'); },
		showEditPeriodicity: function() { this.set('actualTabView', 'HowManyEditPeriodicity'); },

		setVeryEasy: function() {
			this.get('model').set('satisfying', 5);
		},
		setEasy: function() {
			this.get('model').set('satisfying', 4);
		},
		setMedium: function() {
			this.get('model').set('satisfying', 3);
		},
		setDifficult: function() {
			this.get('model').set('satisfying', 2);
		},
		setVeryDifficult: function() {
			this.get('model').set('satisfying', 1);
		},

		//Actions
		submit: function() {
			var self = this,
				vcalendar = self.get('model').get('parent_vcalendar');

			if(Ember.isEmpty(vcalendar)) {
				Ember.Logger.error('component without parent calendar', self.get('model').toJSON(), self.get('model'));
				return false;
			}
			if(! (['vevent','vtodo'].contains(self.get('model_type')))) { //vjournal is created in the diary
				Ember.Logger.error('You must define a valid type', self.get('model').toJSON());
				return false;
			}

			/*
			//Async
			self.get('model').set('vcalendar', vcalendar).save().then(function (model) {
				vcalendar.get(self.get('model_type')).then(function(vcomps) {
					vcomps.pushObject(model);
					vcalendar.save().then(function(vcalendar) {
//						self.transitionToRoute('vcalendar', vcalendar);
						App.Router.router.transitionTo('vcalendar', vcalendar);
					});
				});
			});
			*/
			//Sync
			var tmp_comp = self.get('model'),
				now = new Date(),
				sequence = (isNaN(parseInt(tmp_comp.get('sequence'),10))) ? 1 : tmp_comp.get('sequence')+1;
			tmp_comp
				.set('status','TENTATIVE')
				.set('created', now).set('last-modified', now).set('sequence', tmp_comp.get('sequence')+1)
				.save();
			var onSuccess = function(vcalendar) {
				Ember.Logger.log('onSuccess: ',vcalendar.get(self.get('model_type')+'s'));
//				self.transitionToRoute('vcalendar', vcalendar);
				App.Router.router.transitionTo('vcalendar', vcalendar);
			};
			var onFail = function(vcalendar) {
				console.error('ERROR');
				debugger;
			};
//			vcalendar.push(self.get('model_type'),tmp_comp).save().then(onSuccess, onFail);
			//¿push or add?
			Ember.Logger.log('Previous: ',vcalendar.get(self.get('model_type')+'s'));
//			vcalendar.get(self.get('model_type')).pushObject(tmp_comp).save().then(onSuccess, onFail); //Not in a controller
			vcalendar.get(self.get('model_type')+'s').addObject(tmp_comp).save().then(onSuccess, onFail);
			debugger;
			this.get('store').push(tmp_comp);
			this.get('store').push(vcalendar);
		},

		cancel: function() {
			if(this.get('model.isNew')) {
				this.get('model').destroyRecord();
			} else {
				this.get('model').rollback();
			}
			Ember.Logger.log('Cancel done');
//			this.transitionToRoute('vcalendar', this.get('model').get('parent_vcalendar')); //Not in a controller
			App.Router.router.transitionTo('vcalendar', this.get('model').get('parent_vcalendar'));
		},

		remove: function() {
//			if(this.get('model.isNew')) {
				this.get('model').destroyRecord();
//			}
			Ember.Logger.log('Remove done');
//			this.transitionToRoute('vcalendar', this.get('model').get('parent_vcalendar')); //Not in a controller
			App.Router.router.transitionTo('vcalendar', this.get('model').get('parent_vcalendar'));
		}
	}
});
