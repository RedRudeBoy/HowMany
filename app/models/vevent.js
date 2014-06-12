import vComponentTime from "appkit/models/vcomponenttime";

var attr = DS.attr,
	hasMany = DS.hasMany,
	belongsTo = DS.belongsTo;

/**
 * vEvent
 * @see: http://www.kanzaki.com/docs/ical/vevent.html
 */
var vEvent = vComponentTime.extend({
    dtend: attr(),  //'date'  Required Once
    transp: attr()  //'opaque' or 'transparent', indicate if event consume time on a calendar.
});

export default vEvent;