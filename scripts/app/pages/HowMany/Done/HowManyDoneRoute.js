define(["ember"], function(Ember){
	var HowManyDoneRoute = Ember.Route.extend({
		model: function(params) {
			/**
			 * @ToDo:
			 *	Routing with extra params
			 */
			Ember.Logger.log('Recover model:',this.modelFor('HowMany'));
			return this.modelFor('HowMany');
//			Ember.Logger.log('HowManyRoute recover model:',params.id,this.store.find('howMany',params.id));
//			return this.store.find('HowMany',params.id); //Routing params & querys
		}
//		,actions: {
//			imgChange: function() {
//				Ember.Logger.log('Change the image of the user');
////				this.currentModel.toJSON();
//			},
//			veryEasy: function() {
//				this.get('context').set('satisfying',1);
//			},
//			/** CRUD ACTIONS **/
//			rollbackModel: function () { //Cancel
//				var model = this.get('model');
//				model.rollback();
//				Ember.Logger.log('Cancel done');
//			},
//			deleteModel: function() {
//				if (confirm("Are you sure you want to delete this HowMany? Click OK to continue.")) {
//					var self = this;
//					var model = self.get('model');
//
//					//deletes record from store
//					model.deleteRecord();
//
//					//persist change 
//					model.save().then(
//							function() {
//								//delete succesful, go back to overview
//								self.transitionToRoute('howmanys.list');
//							},
//							function(error) {
//								//Not succsefull, rollback the delete action
//								model.rollback();
//								Ember.Logger.error('An error occured - Please try again',error);
////								alert("An error occured - Please try again");
//							}
//					);
//				}
//			},
//			saveModel: function() {
//				var self = this;
//				var model = self.get('model');
////				var model = this.modelFor('HowMany');
//
//				model.save().then(
//						function() {
//							//Succesful save, thus transition to edit route
//							self.transitionToRoute('howmany.index', model);
//						},
//						function(error) {
//							if (error.status == 422) {
//								//422: validation error
//								//Put json responsetext into validationErrors obj
////								self.set('validationErrors', jQuery.parseJSON(error.responseText));
//								Ember.Logger.error("Validation error occured - " + error.responseText);
//							} else {
//								Ember.Logger.error("Validation error occured - " + error.responseText);
//								alert("An error occured - REST API not available - Please try again");
//							}
//						}
//				);
//			}
//		},
//		willTransition: function (transition) {
//			var model = this.get('currentModel');
//
//			if (model && model.get('isDirty')) {
//				if (confirm("You have unsaved changes. Click OK to stay on the current page. Click cancel to discard these changes and move to the requested page.")) {
//				  //Stay on same page and continue editing
//				  transition.abort();
//				} else {
//				  //Rollback modifications
//				  model.rollback();
//				  // Bubble the `willTransition` event so that parent routes can decide whether or not to abort.
//				  return true;
//				}
//			} else {
//				// Bubble the `willTransition` event so that parent routes can decide whether or not to abort.
//				return true;
//			}
//		},
//		afterModel: function(model, transition) {
//			Ember.Logger.log('afterModel',model);
//		},
//		activate: function() {
//			Ember.Logger.log('HowManysBigIconsRoute activate');
//		},
//		setupController: function (controller, model) {
//			Ember.Logger.log(arguments);
//			Ember.Logger.log('HowManysBigIconsRoute setupController', controller, model);
//			Ember.Logger.log('HowManysBigIconsRoute setupController', controller.toString());
//			controller.set('model', model);
//		}
	});
	return HowManyDoneRoute;
});