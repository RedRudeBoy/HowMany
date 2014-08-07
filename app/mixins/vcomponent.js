var attr = DS.attr,
	hasMany = DS.hasMany,
	belongsTo = DS.belongsTo;

/**
 * vComponent can't be used by herself,
 * it's like an abstract class inherited by Event, ToDo & Journal
 */
var vComponent = Em.Mixin.create({
//	vcalendar: belongsTo('vcalendar', { async: true }),
//	vcalendar: belongsTo('parent', {polymorphic: true, inverse: 'children'}),
//	valarm: hasMany('valarm', { async: true }),

	//Descriptive Component Properties
	attach: attr(),
	categories: attr(),
	tags : function(){
		var tags = this.get('categories').split(',');
		var tagArray = new Array();
		for(var i = 0;i<tags.length;i++ ){
			tagArray.push(tags[i].trim())
		}
		Ember.Logger.log(tagArray);
		return tagArray;
	}.property('categories'),
	'class': attr(),
	comment: attr(),
	description: attr(),
	status: attr(),
	summary: attr(),

	//Date and Time Component Properties
	dtstart: attr(),    //'date'

	//Time Zone Component Properties

	//Relationship Component Properties
	attendee: attr(),   //user
	contact: attr(),    //user
	organizer: attr(),  //user
	recurrence_id: attr(),  //'date' Used in conjunction with the "UID" and "SEQUENCE" property to identify a specific instance of a recurring calendar component.
	related_to: attr(),    //uid of another calendar component.
	uid: attr(),
	url: attr(),

	//Recurrence Component Properties
	exdate: attr(),
	exrule: attr(),
	rdate: attr(),
	rrule: attr(),
//	rstatus: attr(),

	//Change Management Component Properties
	created: attr(),    //'date'
//	created: attr('date', {
//	defaultValue: function() { return new Date(); }
//	}),
	dtstamp: attr(),    //'date'
	'last-modified': attr(),
//	last_mod: attr(), //'date'
//	'last-mod': attr(), //'date'
	sequence: attr()    //'number' revision sequence number of the calendar component within a sequence of revisions
});

export default vComponent;
