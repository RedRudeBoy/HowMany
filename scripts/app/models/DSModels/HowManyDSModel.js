define(["DS"], function(DS){

var HowMany = DS.Model.extend({
	calendar: DS.belongsTo('Calendar')
  , task: DS.belongsTo('Task')
  , events: DS.hasMany('Event', { async: true })//Why async??
  , contacts: DS.hasMany('Contact', { async: true })
//  , tags: DS.hasMany('Tag', { async: true })	//Why async??
  , tags: DS.hasMany('HowManyTag', { async: true })	//Why async??
  , satisfying: DS.attr('number',1)				//In task.notes json encoded??
  , wall: DS.hasMany('Message', { async: true })//In task.notes json encoded??
  , image: DS.belongsTo('File', { async: true })				//thumbnailLink selfLink alternateLink or embedLink
//  , importance: function() {
//		return (this.get('context').get('satisfying') == 1);
//	}.property('context.satisfying')
//  , lastDone: function() {
//		return (this.get('context').get('satisfying') == 1);
//	}.property('context.satisfying')
//	, totalTagsImportance: function() {
//		var tags = this.get('tags');
//        var sum = tags.reduce(function(prevVal, item) {
//            // prevVal is NaN for the first iteration
//            return (prevVal || 0) + item.get('importance');
//        });
//        // if there are no numbers, sum is undefined
//        return (sum || 0);
//	}.property('tags.@each.importance')
});

HowMany.FIXTURES =
[{
	id: 1,
	calendar: 'redrudeboy@gmail.com',
	task: 'MTExOTg4Mjc5MzczNDczMzMxMzg6MjA4ODg0NzcxOjE2NjkxNjUwODA',
	events: [
		'_8d9lcgrfdpr6asjk60oj6c9gcks34phk6gs32cpp6ph62e35c4s3ec9k6oo3aob3c4p0',
		'_8d9lcgrfdpr6asjk60rmacpl6sp3aphm6cr38c316kojaopjcdi3ap9jcpj62c1jckqg'
	],
	contacts: [
		'userfixture1@gmail.com',
		'userfixture2@gmail.com'
	],
	tags: [2,3],
	satisfying: 1,
	wall: [1,2]
//	image: "1Rzrs-eSKtbptjHctqbRt7UPzkRL0WlxHsC-A3i8vHyM"
}];

	return HowMany;
});
