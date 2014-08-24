export default Ember.Component.extend(EmberDC.ControllerMixin, {
	contentObserver: function() {
		//redrawAll
		Ember.Logger.log('vcomponents-tags-piechart contentObserver');
	}.observes('content'),

	/**
	 * @method _createDimensions
	 * Create the defined dimensions from the controller.
	 * @return {void}
	 * @private
	 */
	_createDimensions: function () {
		var content = Ember.get(this, 'content'),
			tags = {},
			tagsArray = Ember.A();

		content.forEach(function (d, k) {
//			d.date = moment(d.created, 'YYYYMMDD').toDate();
			if(typeof d.categories !== 'undefined') {
				var el_tags = d.categories.split(',');
				for(var i = 0; i<el_tags.length; i++) {
					var el_tag = el_tags[i].trim();
					if(typeof tags[el_tag] === 'undefined') {
						tags[el_tag] = 1;
					} else {
						tags[el_tag] += 1;
					}
				}
			}
		});

		for (var key in tags) {
			if (tags.hasOwnProperty(key)) {
				tagsArray.push({"name": key, "count": tags[key]});
			}
		}

		//Ugly... overriding private property
		this._crossfilter = window.crossfilter(tagsArray);
		
		this.set('dimensions.name', this._crossfilter.dimension(function (d) {
			return d.name;
		}));
	},

	/**
	 * @method _createGroups
	 * Create the defined groups from the controller.
	 * @return {void}
	 * @private
	 */
	_createGroups: function () {
		this.set('groups.name_count', this.get('dimensions.name').group().reduceSum(function(d) {return d.count;}));
	}
});