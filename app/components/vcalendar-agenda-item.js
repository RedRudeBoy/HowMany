import Ember from 'ember';
import ColorsUtils from 'how-many/mixins/colorsutils';

export default Ember.Component.extend( ColorsUtils, {
	attributeBindings: ['draggable'],
	draggable: "true",
	dragStart: function(event) {
		Ember.Logger.log('dragStart', event, this.get('vcomponent.constructor.typeKey'), this.get('vcomponent.id'));
		//Only horitzontal: http://stackoverflow.com/questions/8933513/html5-drag-drop-on-x-axis-and-without-fade
		event.dataTransfer.setData('text/vtype', this.get('vcomponent.constructor.typeKey'));
		event.dataTransfer.setData('text/id', this.get('vcomponent.id'));
	},
	/*
	dragOver: function(event) {
		Ember.Logger.log('dragOver');
		//event.preventDefault();
	},
	drop: function(event) {
		Ember.Logger.log('drop');
	}

	actions: {
		eventConfirmed: function(param) {
			this.sendAction('eventConfirmed', this.get('vcomponent'));
		},
		eventCancelled: function(param) {
			this.sendAction('eventCancelled', this.get('vcomponent'));
		}
	}
	*/
	click: function() {
		if(['vevent','vtodo'].contains(this.get('vcomponent.constructor.typeKey'))) {
//			Ember.Logger.log('Going to '+this.get('vcomponent.constructor.typeKey')+' #'+this.get('vcomponent').get('id'));
			App.Router.router.transitionTo(this.get('vcomponent.constructor.typeKey'), this.get('vcomponent').get('id'));

		} else if(['vjournal'].contains(this.get('vcomponent.constructor.typeKey'))) {
			Ember.Logger.warn('@ToDo: transitionTo diary');
		} else {
			Ember.Logger.error('vcomponent with unknown type',this.get('vcomponent.constructor.typeKey'),this.get('vcomponent.constructor'));
		}
	},

	small: function() {
		return false;
	}.property(),
	lastDoneStr: function() {
		return 'never';
	}.property(),
	typeKey: function() {
		return this.get('vcomponent.constructor.typeKey');
	}.property('vcomponent'),

	/*
	 * Styles
	 */
	color: function() {
		var calendar = this.get('vcomponent').get('parent_vcalendar');
		var color = Ember.isNone(calendar.get('color')) ? this.defaultCalendarColor : calendar.get('color');
		return color;
	}.property('vcomponent'),
	color_ribbon: function() {
		return 'background-color: '+this.get('color')+';border-bottom: 3px solid '+this.shadeColorHex(this.get('color'),-30)+';';
	}.property('color'),
	color_extended: function() {
		var rgb = this.hexToRgb(this.shadeColorHex(this.get('color'),-5));
		return 'background-color: rgba('+rgb[0]+','+rgb[1]+','+rgb[2]+',.8);';
	}.property('color'),
	background_image: function() {
		if(this.get('small')) {
			return '';
		}
		return 'background-image: url(./img/uploads/Gimnas.png)';
	}.property('color','small')
});
