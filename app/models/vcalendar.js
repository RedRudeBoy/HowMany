var attr = DS.attr,
	hasMany = DS.hasMany,
	belongsTo = DS.belongsTo;

/**
 * vCalendar
 * @see: http://www.kanzaki.com/docs/ical/
 */
var vCalendar = DS.Model.extend({
	prodid: attr('string', { defaultValue: '-//RedRudeBoy//HowMany//EN' }), //This property specifies the identifier for the product that created the iCalendar object.
	version: attr('string', { defaultValue: '2.0' }),
//	calscale: attr(), //This property defines the calendar scale used for the calendar information specified in the iCalendar object. The default value is "GREGORIAN".
//	method: attr(),

	vevents: hasMany('vevent', { inverse: 'parent_vcalendar' }), //polymorphic: true, async: true
	vtodos: hasMany('vtodo', { inverse: 'parent_vcalendar' }), //polymorphic: true, async: true
	vjournals: hasMany('vjournal', { inverse: 'parent_vcalendar' }), //polymorphic: true, async: true
	//freebusy & TimeZone

	//Not in the specifications, but very used
	'x-wr-calname': attr('string'),
	'x-wr-caldesc': attr('string'),
	'x-wr-timezone': attr('string'),

	//New Properties for iCalendar draft
	//https://tools.ietf.org/html/draft-daboo-icalendar-extensions-09
	'color': attr('string'), //Can be defined in all vcomponents
	'image': attr('string') //Can be defined in all vcomponents

//	'name': attr('string'), //use x-wr-calname instead
//	'description': attr('string'), //use x-wr-caldesc instead

//	'uid': attr('string'),
//	'last-modified': attr('string'),
//	'url': attr('string'),
//	'categories': attr('string'),
//	'refresh-interval': attr('string'),
//	'source': attr('string')
});

export default vCalendar;
