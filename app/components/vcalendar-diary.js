export default Ember.Component.extend({
	classNameBindings: [':row',':diary','show::hidden'],

	actions: {
		twoDaysLess: function() {
			this.set('viewDate', moment(this.get('viewDate')).subtract(2,'day'));
		},
		twoDaysMore: function() {
			this.set('viewDate', moment(this.get('viewDate')).add(2,'day'));
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
	}.property('components','viewDate')
});

