define(["DS",'moment','momentlangs'], function(DS){

var Message = DS.Model.extend({
    contact: DS.belongsTo('Contact')
  , created: DS.attr('date')
  , msg: DS.attr('string')
  , dateFromNow: function() {
		return moment(this.get('created')).fromNow();
	}.property('created')
});

Message.FIXTURES =
[
{	id: 1,
	contact: 'userfixture1@gmail.com',
	created: '2013-09-13T21:55:56.131Z',
	msg: 'Hello World!'
}
,{	id: 2,
	contact: 'userfixture2@gmail.com',
	created: '2013-09-13T21:55:56.131Z',
	msg: '(Just silence... NO answer)'
}
];

return Message;

});
/*
<dl><!--class="dl-horizontal"-->
	<dt>Lenin: (a second ago)</dt>
	<dd>Booones bona gent!</dd>
	<dd>Com us aniria quedar avui per fer un Game Of Thrones?</dd>
	<dt>Dídac:</dt>
	<dd>A quina hora vols quedar?</dd>
	<dd>Saps que començarem tard...</dd>
	<dt>Dan:</dt>
	<dd>Sí</dd>
	<dt>Laia:</dt>
	<dd>Per mi sí</dd>
	<dt>Dídac:</dt>
	<dd>Quedem un altre dia amb més temps</dd>
	<dt>Lenin:</dt>
	<dd>Demà podré quedar a la mateixa hora que avui...</dd>
</dl>
*/