//import vComponentTime from "appkit/models/vcomponenttime";
import vComponentTime from "appkit/mixins/vcomponenttime";

var attr = DS.attr,
	hasMany = DS.hasMany,
	belongsTo = DS.belongsTo;

/**
 * vToDo
 * @see: http://www.kanzaki.com/docs/ical/vtodo.html
 */

//var vToDo = vComponentTime.extend({
var vToDo = DS.Model.extend(vComponentTime, {
	parent_vcalendar: belongsTo('vcalendar', { inverse: 'vtodos' }), //polymorphic: true, async: true

	percent_complete: attr('number'), //Optional Once: Positive integer between zero and one hundred. "0" indicates the to-do has not yet been started. A value of "100" indicates that the to-do has been completed.
	completed: attr(), //'date'  Optional Once: Date and time that a to-do was actually completed.
	due: attr() //'date'  Optional Once: Date and time that a to-do is expected to be completed.
});

export default vToDo;
