import DS from 'ember-data';
import vComponentTime from 'how-many/models/vcomponenttime';
//import vComponentTime from 'appkit/mixins/vcomponenttime';

var attr = DS.attr,
	hasMany = DS.hasMany,
	belongsTo = DS.belongsTo;

/**
 * vEvent
 * @see: http://www.kanzaki.com/docs/ical/vevent.html
 */
var vEvent = vComponentTime.extend({
//var vEvent = DS.Model.extend(vComponentTime, {
	parent_vcalendar: belongsTo('vcalendar', { inverse: 'vevents', async: true }), //polymorphic: true, async: true

	dtend: attr(),  //'date'  Required Once
	transp: attr()  //'opaque' or 'transparent', indicate if event consume time on a calendar.
});

export default vEvent;
