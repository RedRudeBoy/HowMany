define(["ember"], function(Ember) {
	
	var HowManyEditSatisfactionView = Ember.View.extend({
		tagName: "input",
		type: "radio",
//		attributeBindings: ["name","type","value","checked"],
		attributeBindings: ["name","type","value","checked:checked"],
		click: function() {
			this.set("selection", this.$().val());
		},
		checked: function() {
			return this.get("value") == this.get("selection");
		}.property(),
//		didInsertElement: function() {
//			var selfView = this;
//			this.$().find('.HowManyEditTag').each(function(key, el) {
//				selfView.tagsBinder(el);
//			});
//		}
	});
	return HowManyEditSatisfactionView;
});