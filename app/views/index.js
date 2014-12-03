import Ember from 'ember';

export default Ember.View.extend({
//	pagesSel: "#page-challenger,#page-todo,#page-events,#page-filters,#page-charts,#page-modal",
	pagesSel: ".page",

	didInsertElement: function() {
		Ember.Logger.log('on',this.get('controller').get('transEndEventName'),this.pagesSel);

		Ember.$(this.pagesSel).on(
			this.get('controller').get('transEndEventName'),
			this.transitionEnd.bind(this)
		);
		this.get('controller').on('animationEnded', this, this.animationEnded);

		this.updateVisibility();
		this.get('controller').send('didInsertElement');
	},
	willClearRender: function() {
		Ember.$(this.pagesSel).off(
			this.get('controller').get('transEndEventName'),
			this.transitionEnd.bind(this)
		);
	},

	transitionEnd: function(ev) {
		ev.preventDefault();
		this.get('controller').send('transitionEnd', ev.target);
	},
	animationEnded: function() {
		Ember.Logger.log('animationEnded');
		this.updateVisibility();
	},
	updateVisibility: function() {
		var hide = '', show = '', main = '#page-todo,#page-events,#page-filters';
		switch(this.get('controller').get('actualPage')) {
			case 'main':
				hide = "#page-challenger,#page-charts,#page-modal";
				show = main;
				break;
			case 'challenger':
				hide = main+",#page-charts,#page-modal";
				show = "#page-challenger";
				break;
			case 'charts':
				hide = "#page-todo,#page-events,#page-challenger,#page-modal";
				show = "#page-filters,#page-charts";
				break;
			case 'modal':
				hide = main+",#page-challenger,#page-filters";
				show = "#page-modal";
				break;
			default:
				throw new Error('Unreconized page '+this.get('controller').get('actualPage'));
		}
		Ember.$(hide).hide();
		Ember.$(show).show();
/*		Ember.$(hide).addClass('hide');
		Ember.$(show).removeClass('hide');*/
		return true;
	}
});

