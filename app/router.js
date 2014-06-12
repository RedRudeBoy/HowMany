var Router = Ember.Router.extend(); // ensure we don't share routes between all Router instances
/* Original
Router.map(function() {
  this.route('component-test');
  this.route('helper-test');
  // this.resource('posts', function() {
  //   this.route('new');
  // });
});
*/
	//	With extra params
Router.map(function() {
    this.resource('Wizard', function () {
		this.route('Welcome');
		this.route('BasicInfo');
		this.route('Body');
		this.route('Mind');
		this.route('Work');
		this.route('Vice');
		this.route('Finish');
	});
	this.route('Notifications');
	this.route('Configuration');
	this.route('Credits');
//    this.route('Report');
//    this.route('Login');

    this.resource('calendars', function() {
        this.resource('calendar', { path: '/:id' });
    });
/*
	this.resource('howmanys', function() {
										//HowManysIndex
		this.route('list');				//HowManysList - HMList
//		this.route('ListFiltred', { path: '/f/:f' });	//HowManysList - HMList
		this.route('bigicons');			//HowManysBigIcons - HMListTagsBigIcons
		this.route('windrose');			//HowManysWindRose
		this.route('users');
		this.route('history');

	});

	//@ToDo:Routing with id & extra params
	this.route('HowManyNew', { path: '/HowMany/new' });	//new HMCRUD - HowManyNew
	this.resource('HowMany', { path: '/HowMany/:id' }, function() {
//	this.resource('HowMany', function() {
														//HowManyIndex - HMView
//		this.route('new');
//		this.route('new', { path: "/HowMany/new" });
		this.route('edit');								//HowManyEdit - HMCRUD
//		this.route('edit', { queryParams: ['id']});		//HowManyEdit - HMCRUD
//		this.route('edit', { path: "edit/:id" });		//HowManyEdit - HMCRUD
		this.route('done');								//HowManyDone - HMDone
		this.route('planner');
		this.route('planning');
	});
*/
});
/*
Router.map(function() {
	this.resource('HMListTags', function() {
		this.route('default', { path: '/' });
		this.route('bigIcons');
		this.route('windRose');
		this.route('users');
		this.route('history');
	});
	this.route('HMList');
	this.route('HMView');
	this.route('HMCRUD');
	this.route('HMDone');
	this.route('Login');
	this.route('Planner');
	this.route('Notifications');
	this.route('Report');
	this.route('Wizard');
	this.route('Configuration');
	this.route('Credits');
});
*/
export default Router;
