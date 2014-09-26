/* global moment */
/* global RRule */

export default Ember.Component.extend({
	classNameBindings: [':row',':agenda','show::hidden'],

	actions: {
		oneWeekLess: function() {
			var oneWeekLess = moment(this.get('viewDate')).weekday(-7); //Shadow Clone
			this.set('viewDate', oneWeekLess);
		},
		oneWeekMore: function() {
			var oneWeekMore = moment(this.get('viewDate')).weekday(+7); //Shadow Clone
			this.set('viewDate', oneWeekMore);
		},
		oneMonthLess: function() {
			var month = moment(this.get('viewDate')).month(); //Shadow Clone
			var oneMonthLess = moment(this.get('viewDate')).month(month-1);
			this.set('viewDate', oneMonthLess);
		},
		oneMonthMore: function() {
			var month = moment(this.get('viewDate')).month(); //Shadow Clone
			var oneMonthMore = moment(this.get('viewDate')).month(month+1);
			this.set('viewDate', oneMonthMore);
		},
		oneYearLess: function() {
			var year = moment(this.get('viewDate')).year(); //Shadow Clone
			var oneYearLess = moment(this.get('viewDate')).year(year-1);
			this.set('viewDate', oneYearLess);
		},
		oneYearMore: function() {
			var year = moment(this.get('viewDate')).year(); //Shadow Clone
			var oneYearMore = moment(this.get('viewDate')).year(year+1);
			this.set('viewDate', oneYearMore);
		},
		vcomponentSetDtStart: function(vtype, id, day) {
			Ember.Logger.log('received vcomponentSetDtStart by vcalendar-agenda!', vtype, id, day);
			var store = this.get('store'),
				vcomp = store.find(vtype, id);
			vcomp.then(
				function(vcomp_store) {
					var type = vcomp_store.get('constructor.typeKey');
					//If is an event, just set dtstart
					if(type == 'vevent') {
						vcomp_store.set('dtstart', day);
						if(!Ember.isNone(vcomp.get('dtend')) && moment(vcomp.get('dtend')).isBefore(moment(vcomp.get('dtstart')))) {
//							var duration = (vcomp.has('duration')) ? moment(vcomp.get('duration')) : moment.duration(1,'hours'); //Hardcoding
							var duration = (Ember.isNone(vcomp.get('duration'))) ? moment(vcomp.get('duration')) : moment.duration(1,'hours'); //Hardcoding
							var dtend = moment(vcomp.get('dtstart')).add(duration).toDate();
							vcomp_store.set('dtend', dtend);
						}
						vcomp_store.save();
//						store.push(vtype, vcomp_store); //store.update(vtype, vcomp_store);
//						vcomp_store.store.reloadRecord(vcomp_store).then(function() {},function() {});

					//Create new event related
					} else if (type == 'vtodo') {
						var duration = (Ember.isNone(vcomp.get('duration'))) ? moment(vcomp.get('duration')) : moment.duration(1,'hours'); //Hardcoding
						var dtend = moment(vcomp.get('dtstart')).add(duration).toDate();
						var new_event = this.get('store').createRecord('vevent');
						new_event
							//Relations
							.set('parent_vcalendar', vcomp_store.get('parent_vcalendar'))
							.set('related_to',vcomp_store.get('id'))
							//DateTime Properties
							.set('dtstart', day).set('dtend', dtend).set('duration',duration)
							//Descriptive & More Properties
							.set('categories',vcomp_store.get('categories'))
							.set('class',vcomp_store.get('class'))
							.set('comment',vcomp_store.get('comment'))
							.set('description',vcomp_store.get('description'))
							.set('status',vcomp_store.get('status'))
							.set('summary',vcomp_store.get('summary'))
							.set('attendee',vcomp_store.get('attendee'))
							.set('contact',vcomp_store.get('contact'))
							.set('organizer',vcomp_store.get('organizer'))
							.set('attendee',vcomp_store.get('attendee'))
							.set('recurrence_id',vcomp_store.get('recurrence_id'))
							.set('url',vcomp_store.get('url'))
							.set('attendee',vcomp_store.get('attendee'))
							.set('color',vcomp_store.get('color'))
							.set('image',vcomp_store.get('image'))
							.set('geo',vcomp_store.get('geo'))
							.set('location',vcomp_store.get('location'))
							.set('image',vcomp_store.get('image'))
							.set('priority',vcomp_store.get('priority'))
							.set('resources',vcomp_store.get('resources'))
							;
						new_event.save();
//						this.get('store').push('vevent', new_event);

					//Not accepted
					} else if (type == 'vjournal') {
						Ember.Logger.warn('Ilegal use of vjournal', vcomp_store);
					} else {
						Ember.Logger.warn('Unkown type '+type, vcomp_store);
					}
				}.bind(this),
				function(reason) {
					Ember.Logger.error('vcomponent not founded: ', reason);
					return false;
				}.bind(this)
			);
		},
		vcomponentRemoveDtStart: function(vtype, id) {
			Ember.Logger.log('received vcomponentRemoveDtStart by vcalendar-agenda!', vtype, id);
			var store = this.get('store'),
				vcomp = store.find(vtype, id);
			vcomp.then(
				function(vcomp_store) {
					Ember.Logger.log('vcalendar-agenda success vcomponentRemoveDtStart');
					vcomp_store.set('dtstart', null);
					vcomp_store.set('dtend', null);
					vcomp_store.save();
					store.push(vtype, vcomp_store); //store.update(vtype, vcomp_store);
				}.bind(this),
				function(reason) {
					Ember.Logger.error('vcomponent not founded: ', reason);
					return false;
				}.bind(this)
			);
		}
	},

	//All over this property
	viewDate: function() {
		return moment();
	}.property(),
/*	viewDateObserver: function() {
		Ember.Logger.log('viewDate changed!');
	}.observes('viewDate'),*/


	//Events & To Do's (No Journals)
	components: function() {
		var rtn = [];
		rtn.addObjects(this.get('vevents'));
		rtn.addObjects(this.get('vtodos'));
//		rtn.addObjects(this.get('vjournals'));
		return rtn;
//		return this.get('vevents').addObjects(this.get('vtodos')); //.addObjects(this.get('vjournals'))
//		return (this.get('vevents').concat(this.get('vjournals')).concat(this.get('vtodos')));
	}.property('vevents','vtodos'), //,'vjournals'
	//All components with start date
	componentsValidDtStart: function() {
		var rtn = [];
		this.get('components').forEach(function(comp) {
			if(!Ember.isNone(comp.get('dtstart')) && moment(comp.get('dtstart')).isValid()) {
				rtn.push(comp);
			}
		}, rtn);
		return rtn;
	}.property('components'),
	//All components without start date
	componentsWithoutDtStart: function() {
		var rtn = [];
		this.get('components').forEach(function(comp) {
			if(Ember.isNone(comp.get('dtstart')) || !moment(comp.get('dtstart')).isValid()) {
				rtn.push(comp);
			}
		}, rtn);
		return rtn;
	}.property('components'),


	//Toolbar
	viewYear: function() {
		return moment(this.get('viewDate')).format('YYYY'); //Shadow Clone
	}.property('viewDate'),
	viewMonthOneLess: function() {
		return moment(this.get('viewDate')).month(moment(this.get('viewDate')).month()-1).format('MMMM'); //Shadow Clone
	}.property('viewDate'),
	viewMonth: function() {
		return moment(this.get('viewDate')).format('MMMM'); //Shadow Clone
	}.property('viewDate'),
	viewMonthOneMore: function() {
		return moment(this.get('viewDate')).month(moment(this.get('viewDate')).month()+1).format('MMMM'); //Shadow Clone
	}.property('viewDate'),
	viewWeekOneLess: function() {
		return moment(this.get('viewDate')).week(moment(this.get('viewDate')).week()-1).format('W'); //Shadow Clone
	}.property('viewDate'),
	viewWeek: function() {
		return moment(this.get('viewDate')).format('W'); //Shadow Clone
	}.property('viewDate'),
	viewWeekOneMore: function() {
		return moment(this.get('viewDate')).week(moment(this.get('viewDate')).week()+1).format('W'); //Shadow Clone
	}.property('viewDate'),

	//Days of the week
	firstDayWeek: function() {
		return moment(this.get('viewDate')).weekday(0); //Shadow Clone
	}.property('viewDate'),
	firstDayWeekName: function() {
		return moment(this.get('firstDayWeek')).format("dddd D, MMMM YYYY"); //Shadow Clone
	}.property('firstDayWeek'),
	firstDayWeekEvents: function() {
		var rtn = [];
		this.get('componentsValidDtStart').forEach(function(comp) {
			/*
			if(this[0].sameDay(comp.get('dtstart'),this[0].get('firstDayWeek'))) {
				this[1].push(comp);
			}
			//Check recurrence
			if(this[0].checkRecurr('day', this[0].get('firstDayWeek'), comp.get('rdate'), comp.get('rrule'), comp.get('exdate'), comp.get('exrule'))) {
				this[1].push(comp);
			}
			*/
			if(comp.isSame('day', this[0].get('firstDayWeek').toDate())) {
				this[1].push(comp);
			}
		}, [this, rtn]);
		this.sortByDtStart(rtn);
		return rtn;
	}.property('firstDayWeek','componentsValidDtStart'),
	
	secondDayWeek: function() {
		return moment(this.get('viewDate')).weekday(1); //Shadow Clone
	}.property('viewDate'),
	secondDayWeekName: function() {
		return moment(this.get('secondDayWeek')).format("dddd D, MMMM YYYY"); //Shadow Clone
	}.property('secondDayWeek'),
	secondDayWeekEvents: function() {
		var rtn = [];
		this.get('componentsValidDtStart').forEach(function(comp) {
			/*
			if(this[0].sameDay(comp.get('dtstart'),this[0].get('secondDayWeek'))) {
				this[1].push(comp);
			}
			//Check recurrence
			if(this[0].checkRecurr('day', this[0].get('secondDayWeek'), comp.get('rdate'), comp.get('rrule'), comp.get('exdate'), comp.get('exrule'))) {
				this[1].push(comp);
			}
			*/
			if(comp.isSame('day', this[0].get('secondDayWeek').toDate())) {
				this[1].push(comp);
			}
		}, [this, rtn]);
		this.sortByDtStart(rtn);
		return rtn;
	}.property('secondDayWeek','componentsValidDtStart'),
	
	thirdDayWeek: function() {
		return moment(this.get('viewDate')).weekday(2); //Shadow Clone
	}.property('viewDate'),
	thirdDayWeekName: function() {
		return moment(this.get('thirdDayWeek')).format("dddd D, MMMM YYYY"); //Shadow Clone
	}.property('thirdDayWeek'),
	thirdDayWeekEvents: function() {
		var rtn = [];
		this.get('componentsValidDtStart').forEach(function(comp) {
			/*
			if(this[0].sameDay(comp.get('dtstart'),this[0].get('thirdDayWeek'))) {
				this[1].push(comp);
			}
			//Check recurrence
			if(this[0].checkRecurr('day', this[0].get('thirdDayWeek'), comp.get('rdate'), comp.get('rrule'), comp.get('exdate'), comp.get('exrule'))) {
				this[1].push(comp);
			}
			*/
			if(comp.isSame('day', this[0].get('thirdDayWeek').toDate())) {
				this[1].push(comp);
			}
		}, [this, rtn]);
		this.sortByDtStart(rtn);
		return rtn;
	}.property('thirdDayWeek','componentsValidDtStart'),

	fourthDayWeek: function() {
		return moment(this.get('viewDate')).weekday(3); //Shadow Clone
	}.property('viewDate'),
	fourthDayWeekName: function() {
		return moment(this.get('fourthDayWeek')).format("dddd D, MMMM YYYY"); //Shadow Clone
	}.property('fourthDayWeek'),
	fourthDayWeekEvents: function() {
		var rtn = [];
		this.get('componentsValidDtStart').forEach(function(comp) {
			/*
			if(this[0].sameDay(comp.get('dtstart'),this[0].get('fourthDayWeek'))) {
				this[1].push(comp);
			}
			//Check recurrence
			if(this[0].checkRecurr('day', this[0].get('fourthDayWeek'), comp.get('rdate'), comp.get('rrule'), comp.get('exdate'), comp.get('exrule'))) {
				this[1].push(comp);
			}
			*/
			if(comp.isSame('day', this[0].get('fourthDayWeek').toDate())) {
				this[1].push(comp);
			}
		}, [this, rtn]);
		this.sortByDtStart(rtn);
		return rtn;
	}.property('fourthDayWeek','componentsValidDtStart'),

	fifthDayWeek: function() {
		return moment(this.get('viewDate')).weekday(4); //Shadow Clone
	}.property('viewDate'),
	fifthDayWeekName: function() {
		return moment(this.get('fifthDayWeek')).format("dddd D, MMMM YYYY"); //Shadow Clone
	}.property('fifthDayWeek'),
	fifthDayWeekEvents: function() {
		var rtn = [];
		this.get('componentsValidDtStart').forEach(function(comp) {
			/*
			if(this[0].sameDay(comp.get('dtstart'),this[0].get('fifthDayWeek'))) {
				this[1].push(comp);
			}
			//Check recurrence
			if(this[0].checkRecurr('day', this[0].get('fifthDayWeek'), comp.get('rdate'), comp.get('rrule'), comp.get('exdate'), comp.get('exrule'))) {
				this[1].push(comp);
			}
			*/
			if(comp.isSame('day', this[0].get('fifthDayWeek').toDate())) {
				this[1].push(comp);
			}
		}, [this, rtn]);
		this.sortByDtStart(rtn);
		return rtn;
	}.property('fifthDayWeek','componentsValidDtStart'),

	sixthDayWeek: function() {
		return moment(this.get('viewDate')).weekday(5); //Shadow Clone
	}.property('viewDate'),
	sixthDayWeekName: function() {
		return moment(this.get('sixthDayWeek')).format("dddd D, MMMM YYYY"); //Shadow Clone
	}.property('sixthDayWeek'),
	sixthDayWeekEvents: function() {
		var rtn = [];
		this.get('componentsValidDtStart').forEach(function(comp) {
			/*
			if(this[0].sameDay(comp.get('dtstart'),this[0].get('sixthDayWeek'))) {
				this[1].push(comp);
			}
			//Check recurrence
			if(this[0].checkRecurr('day', this[0].get('sixthDayWeek'), comp.get('rdate'), comp.get('rrule'), comp.get('exdate'), comp.get('exrule'))) {
				this[1].push(comp);
			}
			*/
			if(comp.isSame('day', this[0].get('sixthDayWeek').toDate())) {
				this[1].push(comp);
			}
		}, [this, rtn]);
		this.sortByDtStart(rtn);
		return rtn;
	}.property('sixthDayWeek','componentsValidDtStart'),

	seventhDayWeek: function() {
		return moment(this.get('viewDate')).weekday(6); //Shadow Clone
	}.property('viewDate'),
	seventhDayWeekName: function() {
		return moment(this.get('seventhDayWeek')).format("dddd D, MMMM YYYY"); //Shadow Clone
	}.property('seventhDayWeek'),
	seventhDayWeekEvents: function() {
		var rtn = [];
		this.get('componentsValidDtStart').forEach(function(comp) {
			/*
			if(this[0].sameDay(comp.get('dtstart'),this[0].get('seventhDayWeek'))) {
				this[1].push(comp);
			}
			//Check recurrence
			if(this[0].checkRecurr('day', this[0].get('seventhDayWeek'), comp.get('rdate'), comp.get('rrule'), comp.get('exdate'), comp.get('exrule'))) {
				this[1].push(comp);
			}
			*/
			if(comp.isSame('day', this[0].get('seventhDayWeek').toDate())) {
				this[1].push(comp);
			}
		}, [this, rtn]);
		this.sortByDtStart(rtn);
		return rtn;
	}.property('seventhDayWeek','componentsValidDtStart'),

	//Utils (duplicated in vcalendar-diary, move to model?)
	sortByDtStart: function(components) {
		return components.sort(function(comp_a,comp_b) {
			if(moment(comp_a.get('dtstart')).isBefore(moment(comp_b.get('dtstart'))))
				return 1;
			return -1;
		});
	}
});