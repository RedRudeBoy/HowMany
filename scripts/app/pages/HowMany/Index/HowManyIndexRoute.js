define(["ember"], function(Ember){
	var HowManyIndexRoute = Ember.Route.extend({
		model: function() {
//			Ember.Logger.log('HowManyIndexRoute model:',this.modelFor('HowMany'));
//			Ember.Logger.log('HowManyIndexRoute recover model:',this.store.find('howMany',1));
			return this.modelFor('HowMany');
		}
		,actions: {
			sendmessage: function() {
				Ember.Logger.log('HowManyIndexRoute sendmessage!', arguments);
//				this.currentModel.toJSON();
			},
			createHowMany: function() {
				Ember.debug('Start create New HowMany');
				debugger;
//				// Get the todo title set by the "New Todo" text field
////				var title = this.get('newTitle');
////				if (!title.trim()) {
////					return;
////				}
//				var fixture = {
////					id: 1,
//					calendar: 'redrudeboy@gmail.com',
//					task: 'MTExOTg4Mjc5MzczNDczMzMxMzg6MjA4ODg0NzcxOjE2NjkxNjUwODA',
//					events: [
//						'_8d9lcgrfdpr6asjk60oj6c9gcks34phk6gs32cpp6ph62e35c4s3ec9k6oo3aob3c4p0',
//						'_8d9lcgrfdpr6asjk60rmacpl6sp3aphm6cr38c316kojaopjcdi3ap9jcpj62c1jckqg'
//					],
//					contacts: [
//						'userfixture1@gmail.com',
//						'userfixture2@gmail.com'
//					],
//					tags: [2,3],
//					satisfying: 1,
//					wall: [1,2],
//				//	image: '1Rzrs-eSKtbptjHctqbRt7UPzkRL0WlxHsC-A3i8vHyM'
//				};
//				
//				// Create the new Todo model
////				var howMany = this.store.createRecord('howMany', fixture);
////				Ember.debug('Created New HowMany');
//				
//				this.store.push('howMany', fixture);
//				Ember.debug('Pushed New HowMany');
//
//				// Clear the "New Todo" text field
////				this.set('newTitle', '');
//
//				// Save the new model
//				howMany.save();
//				Ember.debug('Saved New HowMany');
			}
//			veryEasy: function() {
//				this.get('context').set('satisfying',1);
//			}
		}
//		afterModel: function(model, transition) {
//			Ember.Logger.log('afterModel',model);
//		},
//		activate: function() {
//			Ember.Logger.log('HowManysBigIconsRoute activate');
//		},
//		setupController: function (controller, model) {
//			Ember.Logger.log('HowManysBigIconsRoute setupController', controller, model);
//			Ember.Logger.log('HowManysBigIconsRoute setupController', controller.toString());
//			controller.set('model', model);
//		}
	});
	return HowManyIndexRoute;
});