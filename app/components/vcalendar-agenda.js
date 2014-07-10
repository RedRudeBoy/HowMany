/* global moment */

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
		}
	},

	//All over this property
	viewDate: function() {
		return moment();
	}.property(),
	viewDateObserver: function() {
		Ember.Logger.log('viewDate changed!');
	}.observes('viewDate'),

	//All components
	components: function() {
		return this.get('vevents').addObjects(this.get('vjournals')).addObjects(this.get('vtodos'));
//		return (this.get('vevents').concat(this.get('vjournals')).concat(this.get('vtodos')));
	}.property('vevents','vjournals','vtodos'),
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

	//Helpers
	sameDay:function(d1,d2) {
		return (moment(d1).format('DD MM YYYY') === moment(d2).format('DD MM YYYY')); //Shadow Clone
	},

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
			if(this[0].sameDay(comp.get('dtstart'),this[0].get('firstDayWeek'))) {
				this[1].push(comp);
			}
		}, [this, rtn]);
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
			if(this[0].sameDay(comp.get('dtstart'),this[0].get('secondDayWeek'))) {
				this[1].push(comp);
			}
		}, [this, rtn]);
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
			if(this[0].sameDay(comp.get('dtstart'),this[0].get('thirdDayWeek'))) {
				this[1].push(comp);
			}
		}, [this, rtn]);
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
			if(this[0].sameDay(comp.get('dtstart'),this[0].get('fourthDayWeek'))) {
				this[1].push(comp);
			}
		}, [this, rtn]);
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
			if(this[0].sameDay(comp.get('dtstart'),this[0].get('fifthDayWeek'))) {
				this[1].push(comp);
			}
		}, [this, rtn]);
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
			if(this[0].sameDay(comp.get('dtstart'),this[0].get('sixthDayWeek'))) {
				this[1].push(comp);
			}
		}, [this, rtn]);
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
			if(this[0].sameDay(comp.get('dtstart'),this[0].get('seventhDayWeek'))) {
				this[1].push(comp);
			}
		}, [this, rtn]);
		return rtn;
	}.property('seventhDayWeek','componentsValidDtStart'),

});