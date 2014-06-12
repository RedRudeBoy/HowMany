define(["DS"], function(DS){

var HowManyTag = DS.Model.extend({
	howmany: DS.belongsTo('HowMany')
  , tag: DS.belongsTo('Tag')	//Why async??
  , importance: DS.attr('number',10)
});

HowManyTag.FIXTURES =
[{
	id: 1,
	howmany: 1,
	tag: 3,
	importance: 30
},
{
	id: 2,
	howmany: 1,
	tag: 2,
	importance: 30
},
{
	id: 3,
	howmany: 1,
	tag: 4,
	importance: 30
}];

	return HowManyTag;
});
