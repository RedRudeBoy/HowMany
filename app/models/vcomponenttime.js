import vComponent from "appkit/models/vcomponent";

var attr = DS.attr,
	hasMany = DS.hasMany,
	belongsTo = DS.belongsTo;

/**
 * vComponentTime can't be used by herself,
 * it's like an abstract class inherited by Event, ToDo
 */

var vComponentTime = vComponent.extend({
    //Descriptive Component Properties
    geo: attr(),
    location: attr(),
    priority: attr(),
    resources: attr(),  //Defines the equipment or resources anticipated for an activity
    //Date and Time Component Properties
    duration: attr(),   //'duration': http://www.kanzaki.com/docs/ical/duration-t.html
    
    valarm: hasMany('valarm', { async: true }) //
});

export default vComponentTime;