define(["DS"], function(DS){

var WizardQuestion = DS.Model.extend({
    question: DS.attr('string')
  , answers: DS.hasMany('WizardAnswer',{ async: true })
});

WizardQuestion.FIXTURES =
[{	id: 1,
	question: "Com t'agrada practicar esport?",
	answers: [1,2,3]
}];

	return WizardQuestion;
});
