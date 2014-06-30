import vToDo from "appkit/models/vtodo";

var attr = DS.attr,
	hasMany = DS.hasMany,
	belongsTo = DS.belongsTo;

/**
 * WizardTodo
 * Like vToDo but saved with fixtures
 */
var WizardTodo = vToDo.extend({});

WizardTodo.reopenClass({
	FIXTURES: [
{	id: 1,
	question: "Com t'agrada practicar esport?",
	answers: [1,2,3]
}
]});

export default WizardTodo;
