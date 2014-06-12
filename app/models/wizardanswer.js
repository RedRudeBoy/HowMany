var attr = DS.attr,
	hasMany = DS.hasMany,
	belongsTo = DS.belongsTo;

/**
 * WizardAnswer
 * Answers for suggest new ToDo
 */
var WizardAnswer = DS.Model.extend({
    answer: attr(),
    question: belongsTo('WizardQuestion'),
    filterTags: hasMany('Tag'),
    howManys: hasMany('HowMany')
});

WizardAnswer.reopenClass({
    FIXTURES: [
{	id: 1,
	answer: "Gimnas",
	question: 1,
	filterTags: [3],
	howManys: [1]
},
{	id: 2,
	answer: "Aire lliure",
	question: 1,
	filterTags: [3],
	howManys: [1]
},
{	id: 3,
	answer: "A casa",
	question: 1,
	filterTags: [3],
	howManys: [1]
}
]});

export default WizardAnswer;
