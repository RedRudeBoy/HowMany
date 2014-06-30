var attr = DS.attr,
	hasMany = DS.hasMany,
	belongsTo = DS.belongsTo;

/**
 * vAlarm
 * @see: http://www.kanzaki.com/docs/ical/valarm.html
 */
var vAlarm = DS.Model.extend({
//	vcomponenttime: belongsTo('vcomponenttime', { async: true, polymorphic: true }),

	action: attr(),     //Required Once: action to be invoked when an alarm is triggered, for example: "audio" / "display" / "email" / "procedure"...
	trigger: attr(),    //Required Once: this property defines when the alarm will trigger.
	repeat: attr(),     //'number' Optional Once: number of time the alarm should be repeated.
	duration: attr()    //Optional Once: 'duration' as a format type: http://www.kanzaki.com/docs/ical/duration-t.html
});

export default vAlarm;
