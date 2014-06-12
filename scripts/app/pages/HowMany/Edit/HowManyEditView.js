define(["ember","text!./HowManyEdit.hbs","css!./HowManyEdit","libs/fuelux/dist/combobox"/*,"css!libs/fuelux/dist/css/fuelux","css!libs/fuelux/dist/css/fuelux-responsive"*/], function(Ember,Template) {

	var compiled = Ember.Handlebars.compile(Template);
	Ember.TEMPLATES["HowManyEdit"] = compiled;
	
	var HowManyEdit = Ember.View.extend({
		templateName: 'HowManyEdit',
//		defaultTemplate: Ember.Handlebars.compile(Template),
		isVeryEasy: function() {
			return (this.get('context').get('satisfying') == 1);
		}.property('context.satisfying'),
		isEasy: function() {
			return (this.get('context').get('satisfying') == 2);
		}.property('context.satisfying'),
		isMedium: function() {
			return (this.get('context').get('satisfying') == 3);
		}.property('context.satisfying'),
		isDifficult: function() {
			return (this.get('context').get('satisfying') == 4);
		}.property('context.satisfying'),
		isVeryDifficult: function() {
			return (this.get('context').get('satisfying') == 5);
		}.property('context.satisfying'),
//		contactName: function() {
//			return (this.get('context').get('contacts').toString()); //MEC
//		}.property('context.contacts'),
		didInsertElement: function() {
//			Ember.Logger.log('inserted!',this,this.$());
			var selfView = this;
//			debugger;
			this.$().find('.HowManyEditTag').each(function(key, el) {
				Ember.Logger.log(el);
				selfView.tagsBinder(el);
			});
		},
		tagsBinder: function(el) {
			/**
			 * @ToDo: touchmove
			 */
			$(el).bind('mousemove', function (e) {
//				Ember.Logger.log(e);
				var parentOffset = $(el).offset();
				var center = { x: parentOffset.left + 150, y: parentOffset.top + 150 };
//				var touch = { x: e.originalEvent.layerX, y: e.originalEvent.layerY }; //Not working
                var mouse = { x: e.clientX, y: e.clientY };
				var d = { x: (mouse.x - center.x), y: (mouse.y - center.y) };
				var dr = Math.sqrt( d.x * d.x + d.y * d.y );
				if(dr > 100) dr = 100;
				if(dr < 20) dr = 20;
				e.target.setAttribute("r", dr);
//				Ember.Logger.log($(el),parentOffset,center,mouse,d);
				Ember.Logger.log(dr);
			});
		}
	});
	return HowManyEdit;
});

//App.HMCRUDRoute = Ember.Route.extend({
//	activate: function() {
//		App.log('HMViewRoute activate');
//	}
//	init: function() {this._super();},			//called when objects are instantiated
//	activate: function() {},				//This hook is executed when the router enters the route for the first time. It is not executed when the model for the route changes.
//	setupController: function(controller, model) {},
//	afterModel: function(posts, transition) {},
//	beforeModel: function(transition) {},
//	renderTemplate: function(controller, model) {},		//By default, it renders the route's template, configured with the controller for the route.
//	deactivate: function() {},
//});
///*
// * Returns an RGB hexadecimal color given a priority between 0 and 99.
// */
//function getHexadecimalByPriority(priority) {
//	if (priority < 0) priority = 0;
//	if (priority > 99) priority = 99;
//	var R = 255;
//	var G = 255;
//	var B = 255;
//
//	for (var i = 0; i < priority; i++) {
//		//Start White
//		if (i < 10) {
//			R -= 25.5;
//			B -= 25.5;
//		}
//		//Finish 0-255-0 -> Green
//		else if (i < 30) {
//			G -= 5;
//			B += 8.5;
//		//Finish 0-105-255 -> Blue
//		} else if (i < 50) {
//			R += 8.5;
//			B += 5;
//			G -= 8.5;
//		//Finish 255-255-0 -> Yellow
//		} else if (i < 90) {
//			G -= 6;
//		//Finish 240-0-0 -> Orange - Red
//		} else {
//			R -= 24;
//		}
//		//Finish 0-0-0 -> Black
//	}
//	//Eliminate the decimals
//	R = Math.floor(R);
//	G = Math.floor(G);
//	B = Math.floor(B);
//	return "#" + R.toString(16) + G.toString(16) + B.toString(16);
//}
///*
// * Returns an RGB hexadecimal color given a priority between 0 and 99.
// */
//function getHexadecimalByPriority(priority) {
//	if (priority < 0) priority = 0;
//	if (priority > 99) priority = 99;
//	var R = 255;
//	var G = 255;
//	var B = 255;
//
//	for (var i = 0; i <= priority; i++) {
//		//Start White
//		if (i < 10) {
//			R -= 25.5;
//			B -= 25.5;
//		}
//		//Finish 0-255-0 -> Green
//		else if (i < 30) {
//			console.log("<30 G:" + G + " B:" + B);
//			G -= 7.5;
//			B += 12.75;
//		//Finish 0-105-255 -> Blue
//		} else if (i < 50) {
//			console.log("<50 R:" + R + " G:" + G + " B:" + B);
//			R += 12.75;
//			G += 7.5;
//			B -= 12.75;
//		//Finish 255-255-0 -> Yellow
//		} else if (i < 90) {
//			console.log("<90 R:" + R + " G:" + G + " B:" + B);
//			G -= 6;
//		//Finish 240-0-0 -> Orange - Red
//		} else {
//			R -= 24;
//		}
//		//Finish 0-0-0 -> Black
//	}
//	//Eliminate the decimals
//	R = Math.floor(R);
//	G = Math.floor(G);
//	B = Math.floor(B);
//	R = R.toString(16);
//	G = G.toString(16);
//	B = B.toString(16);
//	R = (R.length == 1) ? '0' + R : R;
//	G = (G.length == 1) ? '0' + G : G;
//	B = (B.length == 1) ? '0' + B : B;
//	return "#" + R + G + B;
//}
//
//$('#slider').change(function() {
//	var slider_value = $(this).val();
//	console.log(slider_value);
//	slider_value = getHexadecimalByPriority(slider_value);
//	console.log("Slider Value: " + slider_value);
//	$('#slider').css('backgroundColor', slider_value);
//});
//function HMVcreateHowManyLi(results) {
//	var length = results.rows.length;
//	var html = '<ul data-role="listview" data-inset="true">';
//	for (var i = 0; i < length; i++) {
//		html += '<li><a href="#Home"><img src="' + results.rows.item(i).Photo + '" /><h3>' + results.rows.item(i).Name + '</h3><span class="ui-li-count HowManyRepetitions">' + results.rows.item(i).RepetitionsDone + '</span></a></li>';
//	}
//	html += '<li><a href="#Home"><img src="images/Saturn.gif" /><h3>Lenin</h3><p>You Can Get It If You Really Want!</p><span class="ui-li-count HowManyRepetitions">50</span></a></li>';
//	html += '</ul>';
//	return html;
//}
