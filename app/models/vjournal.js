//import vComponent from "appkit/models/vcomponent";
import vComponent from "appkit/mixins/vcomponent";

var attr = DS.attr,
	hasMany = DS.hasMany,
	belongsTo = DS.belongsTo;

/**
 * vJournal
 * @see: http://www.kanzaki.com/docs/ical/vjournal.html
 */
//var vJournal = vComponent.extend({});
var vJournal = DS.Model.extend(vComponent, {
	parent_vcalendar: belongsTo('vcalendar', { inverse: 'vjournals' }) //polymorphic: true, async: true
});


export default vJournal;
