/* global ICAL */

//import vCalendarUtils from "appkit/mixins/vcalendarutils";
//export default Ember.Controller.extend(vCalendarUtils, {

export default Ember.Controller.extend({
	init: function() {
		if (!window.File || !window.FileReader || !window.FileList || !window.Blob) {
			Ember.Logger.warn('The File APIs are not fully supported in this browser.');
		}
	},
//	actions: {
//		parseNewCalendar: function(text) {
//			Ember.run.next(this, this._parseNewCalendar, text);
//			Ember.run.once(this, this._parseNewCalendar, text);
//			this._parseNewCalendar(text);
//		},
//		saveCalendar: function(vcalendar) {
//			return this.emberData2iCal(vcalendar);
//		}
//	},
//	_parseNewCalendar: function(text) {
//		return this.iCal2EmberDataSync(text);
//	}
});
