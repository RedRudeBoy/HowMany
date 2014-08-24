export default Ember.Component.extend(EmberDC.ControllerMixin, {
	/**
	 * @method _createDimensions
	 * Create the defined dimensions from the controller.
	 * @return {void}
	 * @private
	 */
	_createDimensions: function () {
		this.set('dimensions.location', this._crossfilter.dimension(function (d) {
			return d.location;
		}));
	},

	/**
	 * @method _createGroups
	 * Create the defined groups from the controller.
	 * @return {void}
	 * @private
	 */
	_createGroups: function () {
		this.set('groups.location_count', this.get('dimensions.location').group());
	}
});