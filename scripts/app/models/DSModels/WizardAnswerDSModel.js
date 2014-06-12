define(["DS"], function(DS){

var WizardAnswer = DS.Model.extend({
    answer: DS.attr('string')
  , question: DS.belongsTo('WizardQuestion')
  , filterTags: DS.hasMany('Tag', { async: true })
  , howManys: DS.hasMany('HowMany', { async: true })
});

WizardAnswer.FIXTURES =
[{	id: 1,
	answer: "Gimnas",
	question: 1,
	filterTags: [3],
	howManys: [1]
}
,{	id: 2,
	answer: "Aire lliure",
	question: 1,
	filterTags: [3],
	howManys: [1]
}];

	return WizardAnswer;
});
