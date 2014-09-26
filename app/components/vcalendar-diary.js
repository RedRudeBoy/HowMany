export default Ember.Component.extend({
	classNameBindings: [':row',':diary','show::hidden'],

	actions: {
		twoDaysLess: function() {
			this.set('viewDate', moment(this.get('viewDate')).subtract(2,'day'));
		},
		twoDaysMore: function() {
			this.set('viewDate', moment(this.get('viewDate')).add(2,'day'));
		},
		goToConfirm: function() {
			var components = this.get('toConfirm');
			this.sortByDtStart(components);
			if(components.length > 0) {
				Ember.Logger.log(components);
				Ember.Logger.log('goToConfirm ',moment(components[0]).toDate());
				this.set('viewDate', moment(components[0]));
			} else {
				Ember.Logger.log('goToConfirm without to confirm');
			}
		},
		editFirst: function() {
			Ember.Logger.log('wysiwg 1');
		},
		editSecond: function() {
			Ember.Logger.log('wysiwg 2');
		}
	},

	//All over this property
	viewDate: function() {
		return moment();
	}.property(),
//	viewDateObserver: function() {
//		Ember.Logger.log('viewDate changed!');
//	}.observes('viewDate'),
	viewDateFirstPage: function() {
		return moment(this.get('viewDate')).format("dddd D, MMMM YYYY"); //Shadow Clone
	}.property('viewDate'),
	viewDateSecondPage: function() {
		return moment(this.get('viewDate')).add(1,'day').format("dddd D, MMMM YYYY"); //Shadow Clone
	}.property('viewDate'),

//	componentsTentative: function() {
	toConfirm: function() {
		return this.get('components').filterBy('status','TENTATIVE');
	}.property('components'),
	numToConfirm: function() {
		return this.get('toConfirm').get('length');
	}.property('toConfirm'),

	componentsFirstPage: function() {
		var rtn = [];
		this.get('components').forEach(function(comp) {
			if(comp.isSame('day', moment(this.get('viewDate')).toDate())) {
				rtn.push(comp);
			}
		}, this);
		return rtn;
	}.property('components','viewDate'),
	componentsSecondPage: function() {
		var rtn = [];
		this.get('components').forEach(function(comp) {
			if(comp.isSame('day', moment(this.get('viewDate')).add(1,'day').toDate())) {
				rtn.push(comp);
			}
		}, this);
		return rtn;
	}.property('components','viewDate'),

	//Utils (duplicated in vcalendar-agenda, move to model?)
	sortByDtStart: function(components) {
		return components.sort(function(comp_a,comp_b) {
			if(moment(comp_a.get('dtstart')).isBefore(moment(comp_b.get('dtstart'))))
				return 1;
			return -1;
		});
	}
});

