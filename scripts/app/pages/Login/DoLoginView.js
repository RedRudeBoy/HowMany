define([
//	"App",
	"ember",
	"jquery"
], function(Ember, $) {
	var DoLoginView = Ember.View.extend({
	//	click: handleAuthClick
		click: function() {
			console.log('click');
	//		App.gapi.authorize(false);
		},
		didInsertElement: function() {
			Ember.run.scheduleOnce('afterRender', this, 'viewRendered');
		},
		viewRendered: function() {
			$('#tuEstahBien').tooltip({'html': true,'title':'<img src="http://stream1.gifsoup.com/view1/4802687/chiquillo-tu-estah-bien-o.gif" />'});
			$('#esBuenaPaTi').tooltip({'html': true,'title':'<img src="http://stream1.gifsoup.com/view2/4802699/es-buena-pa-ti-pa-tu-cuerpo-pa-t%C3%B3h-o.gif" />'});
		}
	});
	return DoLoginView;
});