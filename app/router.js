var Router = Ember.Router.extend(); // ensure we don't share routes between all Router instances
/* Original
Router.map(function() {
	this.route('component-test');
	this.route('helper-test');
//	this.resource('posts', function() {
//		this.route('new');
//	});
});
*/

Router.map(function() {
	/*
	this.resource('Wizard', function () {
		this.route('Welcome');
		this.route('BasicInfo');
		this.route('Body');
		this.route('Mind');
		this.route('Work');
		this.route('Vice');
		this.route('Finish');
	});
	*/
	this.route('configuration');
	this.route('credits');
//	this.route('Notifications');
//	this.route('Report');
//	this.route('Login');

	this.resource('vcalendars', { path: '/calendars' }, function() {
		//index
		this.route('new'); //New calendar
		this.resource('vcalendar', { path: '/:id' }, function() {
			//index
			this.route('edit');
			this.route('new'); //New vcomponent

			this.resource('vevent', { path: '/event/:eid' }, function() {
				//index
				this.route('edit');
				this.route('done');
			});
			this.resource('vtodo', { path: '/todo/:tid' }, function() {
				//index
				this.route('edit');
			});
			this.resource('vjournal', { path: '/journal/:jid' }, function() {
				//index
				this.route('edit');
			});
		});
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
