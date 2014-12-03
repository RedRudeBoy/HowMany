import Ember from 'ember';

export default Ember.Mixin.create({
	init: function() {
		this._super();
		this.checkAnimSupport();
	},

	//Properties
	isAnimating: function () {
		return false;
	}.property(),
	isAnimatingTo: function() {
		return false;
	}.property(),
	animationString: function() {
		return false;
	}.property(),
	animSupport: function () {
		return false;
	}.property(),
	numPagesAnimating: function() {
		return false;
	}.property(),
	numPagesAnimated: function() {
		return false;
	}.property(),

/*	numPagesAnimatedObserver: function() {
		Ember.Logger.log('numPagesAnimated', this.get('numPagesAnimated'));
	}.observes('numPagesAnimated'),*/

//	animEndEventNames: function() {
//		return {
//			'WebkitAnimation' : 'webkitAnimationEnd',
//			'OAnimation' : 'oAnimationEnd',
//			'msAnimation' : 'MSAnimationEnd',
//			'animation' : 'animationend'
//		};
//	}.property(),
//	animEndEventName: function() {
//		return this.get('animEndEventNames')[ Modernizr.prefixed( 'animation' ) ];
//		return this.get('animEndEventNames')[ this.get('animationString') ];
//	}.property('animEndEventNames','animationString'),
	transEndEventNames: function() {
		return {
			'WebkitAnimation' : 'webkitTransitionEnd',
			'OAnimation' : 'oTransitionEnd',
			'msAnimation' : 'MSTransitionEnd',
			'animation' : 'transitionend'
		};
	}.property(),
	transEndEventName: function() {
//		return this.get('transEndEventNames')[ Modernizr.prefixed( 'animation' ) ];
		return this.get('transEndEventNames')[ this.get('animationString') ];
	}.property('animEndEventNames','animationString'),

	//Init Properties
	checkAnimSupport: function () {
		//Modernizr
//		return Modernizr.cssanimations;
		//https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Using_CSS_animations/Detecting_CSS_animation_support
		var animation = false,
			elm = document.getElementsByTagName("body")[0],
			domPrefixes = 'Webkit Moz O ms Khtml'.split(' ');
		if (elm.style.animationName !== undefined) {
			animation = true;
		}
		if (animation === false) {
			for (var i = 0; i < domPrefixes.length; i++) {
				if (elm.style[domPrefixes[i] + 'AnimationName'] !== undefined) {
					this.set('animationString', domPrefixes[i] + 'Animation');
					animation = true;
					break;
				}
			}
		}
		this.set('animSupport',animation);
	},

	actions: {
		//Triggered from view
		transitionEnd: function(el) {
			if(!this.get('isAnimating')) {
				return false;
			}
			var numPagesAnimated = this.get('numPagesAnimated');
			Ember.Logger.log('anim++',el,numPagesAnimated);
			if(numPagesAnimated === false) {
				this.set('numPagesAnimated', 1);
			} else if( (numPagesAnimated+1) < this.get('numPagesAnimating')) {
//				Ember.Logger.log('numPagesAnimated', this.get('numPagesAnimated'),this.get('numPagesAnimating'),el);
				this.set('numPagesAnimated', (numPagesAnimated+1));
			} else {
//				Ember.Logger.log('final animacio', Ember.$('.pages').length);
				//Reset Values
				var isAnimatingTo = this.get('isAnimatingTo');
				this.set('numPagesAnimated', false);
				this.set('numPagesAnimating', false);
				this.set('isAnimating', false);
				this.set('actualPage', isAnimatingTo);
				this.set('isAnimatingTo', false);
				//Remove animation CSS classes & trigger animationEnded for update visibilty in the view
				this.trigger('animationEnded');
				return this.finalTransitionClasses();
			}
		},
		didInsertElement: function() {
			return this.finalTransitionClasses();
		}
	},


	finalTransitionClasses: function() {
		Ember.$("#page-challenger").attr('class','page col-xs-12');
		Ember.$("#page-charts").attr('class','page col-xs-10');
		Ember.$("#page-modal").attr('class','page col-xs-12');
		var $pager, showFilters = true;
		if(this.get('actualMainPage') === 'all') {
			$pager = Ember.$("#page-todo").attr('class','page col-xs-5').find('.pager');
			$pager.find('.btnToCharts').addClass('hide');

			$pager = Ember.$("#page-events").attr('class','page col-xs-5').find('.pager');
			$pager.find('.btnBiggerToDo').removeClass('hide');
			$pager.find('.btnToChallenger').addClass('hide');
			$pager.find('.btnBiggerFilters').addClass('hide');
			$pager.find('.btnToCharts').addClass('hide');

		} else if(this.get('actualMainPage') === 'todo-filters') {
			$pager = Ember.$("#page-todo").attr('class','page col-xs-10').find('.pager');
			$pager.find('.btnToCharts').addClass('hide');

			Ember.$("#page-events").attr('class','page col-xs-0 hide');
			$pager = Ember.$("#page-filters").attr('class','page col-xs-2').find('.pager');
			$pager.find('.btnSmallerFilters').removeClass('hide');
			$pager.find('.btnToMain').addClass('hide');

		} else if(this.get('actualMainPage') === 'events-filters') {
			Ember.$("#page-todo").attr('class','page col-xs-0 hide');

			$pager = Ember.$("#page-events").attr('class','page col-xs-10').find('.pager');
			$pager.find('.btnBiggerToDo').removeClass('hide');
			$pager.find('.btnToChallenger').removeClass('hide');
			$pager.find('.btnBiggerFilters').addClass('hide');
			$pager.find('.btnToCharts').addClass('hide');

		} else if(this.get('actualMainPage') === 'todo-events') {
			$pager = Ember.$("#page-todo").attr('class','page col-xs-6').find('.pager');
			$pager.find('.btnToCharts').addClass('hide');

			$pager = Ember.$("#page-events").attr('class','page col-xs-6').find('.pager');
			$pager.find('.btnBiggerToDo').removeClass('hide');
			$pager.find('.btnToChallenger').addClass('hide');
			$pager.find('.btnBiggerFilters').removeClass('hide');
			$pager.find('.btnToCharts').removeClass('hide');

			showFilters = false;

		} else if(this.get('actualMainPage') === 'todo') {
			$pager = Ember.$("#page-todo").attr('class','page col-xs-12').find('.pager');
			$pager.find('.btnToCharts').removeClass('hide');

			Ember.$("#page-events").attr('class','page col-xs-0 hide');
			showFilters = false;

		} else if(this.get('actualMainPage') === 'events') {
			Ember.$("#page-todo").attr('class','page col-xs-0 hide');

			$pager = Ember.$("#page-events").attr('class','page col-xs-12').find('.pager');
			$pager.find('.btnBiggerToDo').removeClass('hide');
			$pager.find('.btnToChallenger').removeClass('hide');
			$pager.find('.btnBiggerFilters').removeClass('hide');
			$pager.find('.btnToCharts').removeClass('hide');

			showFilters = false;

		} else {
			throw new Error("ActualMainPage unrecognized: " + this.get('actualMainPage'));
		}

		if(this.get('actualPage') === 'charts') {
			$pager = Ember.$("#page-filters").attr('class','page col-xs-2').find('.pager');
			$pager.find('.btnSmallerFilters').addClass('hide');
			$pager.find('.next').addClass('hide');
			$pager.find('.btnToMain').removeClass('hide');
		} else if(showFilters) {
			$pager = Ember.$("#page-filters").attr('class','page col-xs-2').find('.pager');
			$pager.find('.btnSmallerFilters').removeClass('hide');
			$pager.find('.next').removeClass('hide');
			$pager.find('.btnToMain').addClass('hide');
		} else {
			Ember.$("#page-filters").attr('class','page col-xs-0 hide');
		}
	},

	transitionTo: function(page, subpage) {
		if(!["challenger", "main", "charts", "modal"].contains(page)) {
			throw new Error('transitionTo Invalid page: ' + page);
		}
		if(!this.get('animSupport')) {
			this.set('actualPage', page);
			this.trigger('animationEnded');
			return this.finalTransitionClasses();
		}
		if(this.get('isAnimating')) {
			return false;
		}
		this.set('isAnimating', true);
		this.set('isAnimatingTo', page);
		this.set('numPagesAnimating', (Ember.$(".page:visible").length +1) );
		return this['transitionTo_'+page](subpage);
	},

	transitionTo_challenger: function() {
		Ember.Logger.log('transitionTo_challenger');
		if(this.get('actualPage') !== 'main') {
			throw new Error("Going to challenger but outside main?");
		}

		var $pChallenger = Ember.$("#page-challenger");
		var $pToDo = Ember.$("#page-todo");
		var $pEvents = Ember.$("#page-events");
		var $pFilters = Ember.$("#page-filters");

//		$pChallenger.removeClass('hide');
		$pChallenger.addClass('outside-left').show(function() {
			$pChallenger.addClass("challenger-in-from-main");
			$pToDo.addClass("todo-out-to-challenger");
			$pEvents.addClass("events-out-to-challenger");
			$pFilters.addClass("filters-out-to-challenger");

		}.bind(this));
	},

	transitionTo_main: function (subpage) {
		if(this.get('actualPage') === "main") {
			return this.transitionTo_mainSubpage(subpage);
		}
		Ember.Logger.log('transitionTo_main');
		var $pMain = Ember.$("#page-todo,#page-events,#page-filters");
		var $pToDo = Ember.$("#page-todo");
		var $pEvents = Ember.$("#page-events");
		var $pFilters = Ember.$("#page-filters");
//		var $pChallenger = Ember.$("#page-challenger");
		var $pCharts = Ember.$("#page-charts");
//		var $pModal = Ember.$("#page-modal");

		var numPagesAnimating;
		switch(this.get('actualMainPage')) {
			case 'all':
				numPagesAnimating = 4;
				break;
			case 'todo':
			case 'events':
				numPagesAnimating = 2;
				break;
			default:
				numPagesAnimating = 3;
				break;
		}
		this.set('numPagesAnimating', numPagesAnimating);
		var initMainClass = (this.get('actualPage') === "challenger") ?
			'outside-right' : 'outside-left';
		//Exception for strange filters
		if(this.get('actualPage') === 'charts' && this.get('actualMainPage') === 'todo') {
			initMainClass = 'outside-left-no-filters';
		}

		var num_showed = 0;
		$pMain.addClass(initMainClass).show(function() {
			num_showed++;
			if(num_showed === 3) {
				console.log('show!!');

				$pToDo.addClass("todo-in-from-"+this.get('actualPage'));
				$pEvents.addClass("events-in-from-"+this.get('actualPage'));
				//Exception for strange filters
				if(this.get('actualPage') === 'charts' && ["todo-events", "todo", "events"].contains(this.get('actualMainPage'))) {
					$pFilters.addClass("filters-out-from-charts");
					$pCharts.addClass("charts-out-to-main-no-filter");

				} else {
					Ember.$("#page-"+this.get('actualPage'))
						.addClass(this.get('actualPage')+'-out-to-main');
					$pFilters.addClass("filters-in-from-"+this.get('actualPage'));

				}


			}
		}.bind(this));
	},
	transitionTo_mainSubpage: function (subpage) {
		Ember.Logger.log('transitionTo_mainSubpage');
		if(this.get('actualMainPage') === subpage) {
			return false;
		}
		var $pToDo = Ember.$("#page-todo");
		var $pEvents = Ember.$("#page-events");
		var $pFilters = Ember.$("#page-filters");
		var newMainPage = false, numPagesAnimating = 2;

		Ember.Logger.log(this.get('actualMainPage')+'__'+subpage);
		switch(this.get('actualMainPage')+'__'+subpage) {
			case 'todo__smaller_todo':
				newMainPage = 'todo-filters';
				$pFilters.removeClass('hide').show(function() {
					$pToDo.addClass('smaller');
					$pFilters.addClass('bigger');
				});
			break;

			case 'events__bigger_todo':
				newMainPage = 'todo-events';
				$pToDo.removeClass('hide').show(function() {
					$pEvents.addClass('smaller-6');
					$pToDo.addClass('bigger-6');
				});
			break;
			case 'events__bigger_filters':
				newMainPage = 'events-filters';
				$pFilters.removeClass('hide').show(function() {
					$pEvents.addClass('smaller');
					$pFilters.addClass('bigger');
				});
			break;

			case 'todo-events__bigger_todo':
				newMainPage = 'todo';
				$pToDo.addClass('bigger');
				$pEvents.addClass('smaller');
			break;
			case 'todo-events__smaller_todo':
				newMainPage = 'events';
				$pEvents.addClass('bigger');
				$pToDo.addClass('smaller');
			break;
			case 'todo-events__bigger_filters':
				newMainPage = 'all';
				numPagesAnimating = 3;
				$pFilters.removeClass('hide').show(function() {
					$pEvents.addClass('smaller-5');
					$pToDo.addClass('smaller-5');
					$pFilters.addClass('bigger');
				});
			break;

			case 'todo-filters__smaller_todo':
				newMainPage = 'all';
				$pEvents.removeClass('hide').show(function() {
					$pToDo.addClass('smaller-5');
					$pEvents.addClass('bigger');
				});
			break;
			case 'todo-filters__smaller_filters':
			case 'todo-filters__bigger_todo':
				newMainPage = 'todo';
				$pToDo.addClass('bigger');
				$pFilters.addClass('smaller');
			break;

			case 'events-filters__bigger_todo':
				newMainPage = 'all';
				$pToDo.removeClass('hide').show(function() {
					$pToDo.addClass('bigger');
					$pEvents.addClass('smaller-5');
				});
			break;
			case 'events-filters__smaller_filters':
				newMainPage = 'events';
				$pEvents.addClass('bigger');
				$pFilters.addClass('smaller');
			break;

			case 'all__smaller_todo':
				newMainPage = 'events-filters';
				$pEvents.addClass('bigger-10');
				$pToDo.addClass('smaller');
			break;
			case 'all__bigger_todo':
				newMainPage = 'todo-filters';
				$pToDo.addClass('bigger-10');
				$pEvents.addClass('smaller');
			break;
			case 'all__smaller_filters':
				newMainPage = 'todo-events';
				numPagesAnimating = 3;
				$pToDo.addClass('bigger-6');
				$pEvents.addClass('bigger-6');
				$pFilters.addClass('smaller');
			break;
/*			case 'all__bigger_filters':
				newMainPage = 'events-filters';
				$pEvents.addClass('bigger-6');
				$pToDo.addClass('smaller');
				$pFilters.addClass('smaller');
			break;*/

			default:
				throw new Error("Unknown actualMainPage/subpage: " + this.get('actualMainPage') + "__" + subpage);
		}
		this.set('actualMainPage', newMainPage);
		this.set('numPagesAnimating', numPagesAnimating);
		Ember.Logger.log('actualMainPage: ',newMainPage);
	},

	transitionTo_charts: function () {
		Ember.Logger.log('transitionTo_charts');

//		var $pChallenger = Ember.$("#page-challenger");
		var $pToDo = Ember.$("#page-todo");
		var $pEvents = Ember.$("#page-events");
		var $pFilters = Ember.$("#page-filters");
		var $pCharts = Ember.$("#page-charts");

		if(this.get('actualPage') !== 'main') {
			throw new Error("Going to challenger but outside main?");
		}

		if( $pFilters.is(':visible')) {
			$pCharts.addClass('outside-right');
			$pCharts.show(function() {
				$pToDo.addClass("todo-out-to-charts");
				$pEvents.addClass("events-out-to-charts");
				$pFilters.addClass("filters-move-to-charts");
				$pCharts.addClass("charts-in-from-main");
			}.bind(this));

		} else {
			var num_showed = 0;
			$pCharts.addClass('outside-right-out-filters');
			$pFilters.attr('class','page col-xs-2 outside-right-to-charts');
			$pCharts.add($pFilters).show(function() {
				num_showed++;
				if(num_showed === 2) {
					$pCharts.addClass("charts-in-from-main-no-filters");
					$pFilters.addClass("filters-out-to-charts");
					$pToDo.addClass("todo-out-to-charts");
					$pEvents.addClass("events-out-to-charts");
				}
			}.bind(this));
		}
	}

	/*transitionTo_modal: function () {
		Ember.Logger.log('transitionTo_modal');
	}*/
});
