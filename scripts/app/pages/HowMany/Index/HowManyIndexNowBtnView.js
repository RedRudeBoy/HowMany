define(["ember","jquery"], function(Ember,$) {
	var HowManyIndexNowBtnView = Ember.View.extend({
		click: function() {
			$('#HowManyIndexDateTime,#HowManyIndexDateTimeLegend').toggle();
			$("#"+this.elementId).children('.btn').toggleClass('active');
		}
	});
	return HowManyIndexNowBtnView;
});
