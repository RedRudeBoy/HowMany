/* global moment */
/* global RRule */

var attr = DS.attr,
	hasMany = DS.hasMany,
	belongsTo = DS.belongsTo;

/**
 * vComponent can't be used by herself,
 * it's like an abstract class inherited by Event, ToDo & Journal
 */
var vComponent = Em.Mixin.create({
//	vcalendar: belongsTo('vcalendar', { async: true }),
//	vcalendar: belongsTo('parent', {polymorphic: true, inverse: 'children'}),
//	valarm: hasMany('valarm', { async: true }),

	//Descriptive Component Properties
	attach: attr(),
	categories: attr(),
	tags : function(){
		if(!this.has('categories')) return [];
		var tags = this.get('categories').split(',');
		var tagArray = [];
		for(var i = 0;i<tags.length;i++ ){
			tagArray.push(tags[i].trim());
		}
		Ember.Logger.log(tagArray);
		return tagArray;
	}.property('categories'),
	'class': attr(), //"PUBLIC" / "PRIVATE" / "CONFIDENTIAL"
	comment: attr(),
	description: attr(),
	status: attr(),
	summary: attr(),

	//Date and Time Component Properties
	dtstart: attr(),    //'date'

	//Time Zone Component Properties

	//Relationship Component Properties
	attendee: attr(),   //user
	contact: attr(),    //user
	organizer: attr(),  //user
	recurrence_id: attr(),  //'date' Used in conjunction with the "UID" and "SEQUENCE" property to identify a specific instance of a recurring calendar component.
	related_to: attr(),    //uid of another calendar component.
	uid: attr(),
	url: attr(),

	//Recurrence Component Properties
	rdate: attr(),
	rrule: attr(),
//	rstatus: attr(),
	exdate: attr(), //exception date
	exrule: attr(), //exception rule

	//Change Management Component Properties
	created: attr(),    //'date'
//	created: attr('date', {
//	defaultValue: function() { return new Date(); }
//	}),
	dtstamp: attr(),    //'date'
	'last-modified': attr(),
//	last_mod: attr(), //'date'
//	'last-mod': attr(), //'date'
	sequence: attr(),    //'number' revision sequence number of the calendar component within a sequence of revisions

	//New Properties for iCalendar draft
	//https://tools.ietf.org/html/draft-daboo-icalendar-extensions-09
	'color': attr('string'), //Can be defined in all vcomponents
	'image': attr('string'),

	//Helper functions
	/**
	 * Check if dtstart or recurrence are between the date
	 * unit: time granularity -> year, month, week, day, hour, minute and second -> By default: day
	 * date: Date to check
	 */
	isSame: function(unit, date) {
		//Check unit & date params
		unit = unit || 'day';
		if(!['year','month','week','day','hour','minute','second'].contains(unit)) {
			throw new Error('Unvalid unit '+unit);
		}
		if(date && !moment(date).isValid()) {
			throw new Error('Unvalid date '+date);
		}
		date = moment(date) || moment();
		date.startOf(unit); //Round unit of time

		//Check dtstart
//		if(this.has('dtstart')) {
		if(!Ember.isNone(this.get('dtstart'))) {
			if(! moment(this.get('dtstart')).isValid()) {
				Ember.Logger.warn('Vcomponent '+this.get('id')+' has invalid dtstart', this.get('dtstart'));
			} else if(date.isSame(this.get('dtstart'), unit)) {
				return true;
			}
		}
		//If no dates or rules are given, return false
		if(Ember.isNone(this.get('rdate')) && Ember.isNone(this.get('rrule')) && Ember.isNone(this.get('exdate')) && Ember.isNone(this.get('exrule'))) {
			return false;
		}

		//Helpers of helper functions xD
		var checkDate = function(d_param) {
			if(moment(d_param).isValid()) {
				if(moment(d_param).startOf(unit).isSame(date)) {
					return true;
				}
			} else {
				Ember.Logger.warn('Invalid d_param', d_param);
			}
			return false;
		};
		var checkRule = function(param) {
			var rrule = RRule.fromString(param);
			var rrule_dates = rrule.between( moment(date).subtract(1,unit).toDate(), moment(date).add(1,unit).toDate() ); //if inclusive, add true as a third param
			if(rrule_dates.some(function(val,key) {
				if(moment(val).startOf(unit).isSame(date)) {
					return true;
				}
			}, this)) {
				return true;
			}
			return false;
		};
		var param_walk = function(param, fn) {
			if(Ember.isArray(param)) {
				if(param.some(function(val,key) {
					if(fn(val)) {
						return true;
					}
				}, this)) {
					return true;
				}
			} else if(fn(param)) {
				return true;
			}
			return false;
		};

		//Check if is an exception
		if(!Ember.isNone(this.get('exrule'))) { //this.has('exrule')
			if(param_walk(this.get('exrule'),checkRule)) {
				return false;
			}
		}
		if(!Ember.isNone(this.get('exdate'))) {
			if(param_walk(this.get('exdate'),checkDate)) {
				return false;
			}
		}
		//Check if is a recurrence
		if(!Ember.isNone(this.get('rrule'))) {
			if(param_walk(this.get('rrule'),checkRule)) {
				return true;
			}
		}
		if(!Ember.isNone(this.get('rdate'))) {
			if(param_walk(this.get('rdate'),checkDate)) {
				return true;
			}
		}
		return false;
	}

//	sameDay:function(d1,d2) {
//		return moment(d1).isSame(d2, 'day');
////		return (moment(d1).format('DD MM YYYY') === moment(d2).format('DD MM YYYY')); //Shadow Clone
//	},
//
//	/**
//	 * unit: time granularity -> year, month, week, day, hour, minute and second -> By default: day
//	 * date: Date to check -> 
//	 * rdate: Recurrence Dates -> string or array
//	 * rrule: Recurrence Rule -> string or array
//	 * exdate: Exception Dates -> string or array
//	 * exrule: Exception Rules -> string or array
//	 */
//	checkRecurr: function(unit, date, rdate, rrule, exdate, exrule) {
//		//Check unit & date params
//		unit = unit || 'day';
//		if(!['year','month','week','day','hour','minute','second'].contains(unit)) {
//			throw new Error('Unvalid unit '+unit);
//		}
//		if(date && !moment(date).isValid()) {
//			throw new Error('Unvalid date '+date);
//		}
//		date = moment(date) || moment();
//		date.startOf(unit); //Round unit of time
//
//		//If no dates or rules are given, return false
//		if(Ember.isNone(rdate) && Ember.isNone(rrule) && Ember.isNone(exdate) && Ember.isNone(exrule)) {
//			return false;
//		}
//
//		//Util functions
//		var checkDate = function(d_param) {
//			if(moment(d_param).isValid()) {
//				if(moment(d_param).startOf(unit).isSame(date)) {
//					return true;
//				}
//			} else {
//				Ember.Logger.warn('Invalid d_param', d_param);
//			}
//			return false;
//		};
//		var checkRule = function(param) {
//			var rrule = RRule.fromString(param);
//			var rrule_dates = rrule.between( moment(date).subtract(1,unit).toDate(), moment(date).add(1,unit).toDate() ); //if inclusive, add true as a third param
//			if(rrule_dates.some(function(val,key) {
//				if(moment(val).startOf(unit).isSame(date)) {
//					return true;
//				}
//			}, this)) {
//				return true;
//			}
//			return false;
//		};
//		var param_walk = function(param, fn) {
//			if(Ember.isArray(param)) {
//				if(param.some(function(val,key) {
//					if(fn(val)) {
//						return true;
//					}
//				}, this)) {
//					return true;
//				}
//			} else if(fn(param)) {
//				return true;
//			}
//			return false;
//		};
//
//		//Check if is an exception
//		if(!Ember.isNone(exrule)) {
//			if(param_walk(exrule,checkRule)) {
//				return false;
//			}
//		}
//		if(!Ember.isNone(exdate)) {
//			if(param_walk(exdate,checkDate)) {
//				return false;
//			}
//		}
//		//Check if is a recurrence
//		if(!Ember.isNone(rrule)) {
//			if(param_walk(rrule,checkRule)) {
//				return true;
//			}
//		}
//		if(!Ember.isNone(rdate)) {
//			if(param_walk(rdate,checkDate)) {
//				return true;
//			}
//		}
//		return false;
//	}
});

export default vComponent;
