define(["DS"], function(DS){

var UserConfiguration = DS.Model.extend({
	language: DS.attr('string'),
	location: DS.attr('string'),
	theme: DS.attr('string')
});


UserConfiguration.FIXTURES = [{	id: 1,
	language: 'en',
	location: 'Europe/Madrid',
	theme: 'Basic'
}];

	return UserConfiguration;
});
