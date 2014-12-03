import Ember from 'ember';
import TransitionsMixin from 'how-many/mixins/transitions';

export default Ember.ArrayController.extend(Ember.Evented, TransitionsMixin, {
	init: function() {
		this._super();
		if(this.get('actualPage') === false) {
			this.set('actualPage','main');
		}
		if(this.get('actualMainPage') === false) {
			this.set('actualMainPage','all');
		}
	},

	/*
	 * Properties
	 */
	//challenger || main || charts || modal
	actualPage: function () {
		return false;
	}.property(),
	//all || todo-filters || events-filters || todo-events || todo || events
	actualMainPage: function() {
		return false;
	}.property(),

	actions: {
		//actualPage
		linkToChallenger: function() {
			return this.transitionTo('challenger');
		},
		linkToMain: function() {
			return this.transitionTo('main');
		},
		linkToCharts: function() {
			return this.transitionTo('charts');
		},
		//actualMainPage
		linkToSmallerToDo: function() {
			return this.transitionTo('main','smaller_todo');
		},
		linkToBiggerToDo: function() {
			return this.transitionTo('main','bigger_todo');
		},
		linkToSmallerFilters: function() {
			return this.transitionTo('main','smaller_filters');
		},
		linkToBiggerFilters: function() {
			return this.transitionTo('main','bigger_filters');
//		},
		//@ToDo
//		linkToModal: function() {
//			return this.transitionTo('main','bigger_filters');
		}
	}
});
