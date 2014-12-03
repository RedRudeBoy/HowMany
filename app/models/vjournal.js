import DS from 'ember-data';
import vComponent from 'how-many/models/vcomponent';
//import vComponent from 'appkit/mixins/vcomponent';

var attr = DS.attr,
	hasMany = DS.hasMany,
	belongsTo = DS.belongsTo;

/**
 * vJournal
 * @see: http://www.kanzaki.com/docs/ical/vjournal.html
 */
var vJournal = vComponent.extend({
//var vJournal = DS.Model.extend(vComponent, {
	parent_vcalendar: belongsTo('vcalendar', { inverse: 'vjournals', async: true }) //polymorphic: true, async: true
});


export default vJournal;
