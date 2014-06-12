var attr = DS.attr,
	hasMany = DS.hasMany,
	belongsTo = DS.belongsTo;

/**
 * WizardQuestion
 * Questions for suggest new ToDo
 */
var WizardQuestion = DS.Model.extend({
    question: DS.attr('string'),
    answers: DS.hasMany('WizardAnswer') //,{ async: true }
});

WizardQuestion.reopenClass({
    FIXTURES: [
{	id: 1,
	question: "Com t'agrada practicar esport?",
	answers: [1,2,3]
}
]});

export default WizardQuestion;
