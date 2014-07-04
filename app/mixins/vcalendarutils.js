/* global ICAL */
/**
 * Mixing for import/export vcalendar files:
 *	iCal2EmberDataSync, import iCal file using ICAL library with a sync models (like LocalStorage Adapter)
 *	iCal2EmberDataAsync, @ToDo: Not finished, problems with promises, maybe something like this can help:
var promises = Ember.A();
basket.get('fruits').forEach(function(item){
	promises.push(item.save());
});
Ember.RSVP.Promise.all(promises).then(function(resolvedPromises){
	alert('All saved!');
});
 *	emberData2iCal, export iCal file using ...
 */
export default Em.Mixin.create({
	//Import
	iCal2EmberDataSync: function(text) {
		var self = this;
		var jcalData = ICAL.parse(text);
//		var comp = new ICAL.Component(jCalData[1]);
		if(jcalData[0] === "icalendar") {
			jcalData.splice(0,1);
			jcalData.forEach(function(jcal, index) {
				if(jcal[0] === "vcalendar") {
					var vcal = self.store.createRecord('vcalendar'),
						properties = jcal[1],
						components = jcal[2];
//						vcomponents = {"vevent": [],"vtodo": [],"vjournal": [],"valarm": []};

					self._setDefinedProperties(vcal, properties);

					components.forEach(function(comp) {
						var c_name = comp[0],
							c_properties = comp[1],
							c_components = comp[2];
//							c_alarms = Em.A();

						if(c_name === "vevent" || c_name === "vtodo" || c_name === "vjournal") {

							var vcomponent = self.store.createRecord(c_name);
							vcomponent.set('vcalendar', vcal);
							self._setDefinedProperties(vcomponent, c_properties);


							/* Right now, let's ignore alarms...
							c_components.forEach(function(c_comp) {
								var c_c_name = c_comp[0],
									c_c_type = c_comp[1],
									c_c_value = c_comp[2];

								if(c_c_name === "valarm") {
									if(Ember.isNone(c_c_type)) {
										Ember.Logger.log('While parsing valarm found undefined props ', c_name, c_c_name, c_c_type, c_c_value);
										return;
									}
									var valarm = self.store.createRecord("valarm");
									self._setDefinedProperties(valarm, c_c_type);
//									valarm.set('vcomponenttime', vcomponent);
//									Ember.Logger.log('vcomponent', c_name , vcomponent, 'valarm', valarm);

									valarm.save();
									vcomponent.get('valarm').pushObject(valarm);

								} else {
									Ember.Logger.warn('Error parsing calendar: Unknown component ', c_c_name, c_c_value, c_c_type);
								}

							}, self);
							*/

							vcomponent.save();
							vcal.get(c_name).pushObject(vcomponent);
//							Ember.Logger.log('vcomponent saved!');

						} else if(c_name === "vtimezone") {
							Ember.Logger.log('Ignored component vtimezone: ', c_name, c_properties, c_components);
						} else {
							Ember.Logger.warn('Error parsing calendar: Unknown component ', c_name, c_properties, c_components);
						}
					}, self);

					vcal.save();
					Ember.Logger.log('Calendar finished!','Num events: ',vcal.get('vevent.length'),'Num vtodos: ',vcal.get('vtodo.length'),'Num vjournals: ',vcal.get('vjournal.length'));
					self.get('store').push('vcalendar',vcal);
				}
			}, self);
		}
	},
/*
	iCal2EmberDataAsync: function(text) {
		var self = this;
		var jcalData = ICAL.parse(text);
//		var comp = new ICAL.Component(jCalData[1]);
		if(jcalData[0] === "icalendar") {
			jcalData.splice(0,1);
			jcalData.forEach(function(jcal, index) {
				if(jcal[0] === "vcalendar") {
					var vcal = self.store.createRecord('vcalendar'),
						properties = jcal[1],
						components = jcal[2];
						//vcomponents = {"vevent": [],"vtodo": [],"vjournal": [],"valarm": []};

					self._setDefinedProperties(vcal, properties);

					vcomponents = self._getComponents(vcal, components);

					vcal.pushObjects(vcomponents);


					vcal.save().then(function(vcal) {
						components.forEach(function(comp) {
							var c_name = comp[0],
								c_properties = comp[1],
								c_components = comp[2];
								//c_alarms = Em.A();

							if(c_name === "vevent" || c_name === "vtodo" || c_name === "vjournal") {
								var vcomponent = self.store.createRecord(c_name);
								self._setDefinedProperties(vcomponent, c_properties);
								vcomponent.set('vcalendar', vcal);

								vcomponent.save().then(function(vcomponent) {
									Ember.Logger.log('vcomponent saved!');
*/
									/* Right now, let's ignore alarms...
									c_components.forEach(function(c_comp) {
										var c_c_name = c_comp[0],
											c_c_type = c_comp[1],
											c_c_value = c_comp[2];

										if(c_c_name === "valarm") {
											if(Ember.isNone(c_c_type)) {
												Ember.Logger.log('While parsing valarm found undefined props ', c_name, c_c_name, c_c_type, c_c_value);
												return;
											}
											var valarm = self.store.createRecord("valarm");
											self._setDefinedProperties(valarm, c_c_type);
											Ember.Logger.log('vcomponent', c_name , vcomponent);
											Ember.Logger.log('valarm', valarm);
											//valarm.set('vcomponenttime', vcomponent);
											valarm.save().then(function(valarm) {
												Ember.Logger.log('valarm saved!');
												vcomponent.get('valarm').then(function(valarms) {
													Ember.Logger.log('valarms',valarms);
													valarms.pushObject(valarm);
													//valarms.pushObject(valarm).save();
												});
											});

										} else {
											Ember.Logger.warn('Error parsing calendar: Unknown component ', c_c_name, c_c_value, c_c_type);
										}

									}, self);
									*/
/*
									Ember.Logger.log('vcal gettings: ',c_name, ' for: ', vcomponent);
									vcal.get(c_name).then(function(vcomps) {
										Ember.Logger.log('for now be have ', vcomps.length, vcomps);
										vcomps.pushObject(vcomponent);
										Ember.Logger.log('and now be have ', vcomps.length, vcomps);
										vcal.save();
									});
								});

							} else if(c_name === "vtimezone") {
								Ember.Logger.log('Ignored component vtimezone: ', c_name, c_properties, c_components);
							} else {
								Ember.Logger.warn('Error parsing calendar: Unknown component ', c_name, c_properties, c_components);
							}
						}, self);
						vcal.save().then(function(vcal) {
							Ember.Logger.log('Calendar finished!');
							vcal.get("vevent").then(function(vevents) { Ember.Logger.log('Num events: ',vevents.get('length')); });
							vcal.get("vtodo").then(function(vtodos) { Ember.Logger.log('Num vtodos: ',vtodos.get('length')); });
							vcal.get("vjournal").then(function(vjournals) { Ember.Logger.log('Num vjournals: ',vjournals.get('length')); });
						});
					});

				}
	},
*/
	//Set all components in the model
	_setDefinedProperties: function(model, jcomponents) {
		var properties_defined = this._getDefinedProperties(model);

		jcomponents.forEach(function(jcomponent) {
			var name = jcomponent[0],
				type = jcomponent[2],
				value = jcomponent[3];

			//Check if key exists & is defined
			if(!properties_defined.contains(name)) {
				Ember.Logger.warn('Error parsing jcomponent: Unknown property ', name, type, value);
				return;
			} else if(Ember.isNone(value)) {
				Ember.Logger.log('While parsing component found undefined property  ', name, type, value);
				return;
			}

			//Transform types
			if(type === "date-time") value = new Date(value);
			//else if(type === "duration") value = new Date(value);
			//else if(Ember.typeOf(value) !== 'string')  value = new String(value);

			//Set value
			Ember.Logger.log('name: ',name,'Value: ', value);
			model.set(name,value);
		}, this);
	},
	//Return all defined vars in the model
	_getDefinedProperties: function(model) {
		var rtn = Ember.A();
		model.eachAttribute(function(name, meta) {
			this.push(name);
		}, rtn);
		return rtn;
	},

	//Export
	emberData2iCal: function(vcalendar) {
		var self = this,
			iCal = new ICAL.Component(['vcalendar', [], []]),
			iCalStr = '',	//updated at the end
			//For download
			icalMimeType = 'text/calendar',
			iCalFileName = 'HowManyCalendar.ics';

		//Sync
		vcalendar.eachAttribute(function(name, meta) {
			if(!Ember.isNone(vcalendar.get(name))) {
				Ember.Logger.log('vcalendar eachAttribute ', name, vcalendar.get(name));
				iCal.updatePropertyWithValue(name, vcalendar.get(name));
			}
		}, self);
		/**
		 * @ToDo: Bug... sometimes vcomponents seems unhydrated
		 */
		vcalendar.eachRelationship(function(name, meta) {
			var vcomponents = vcalendar.get(name);
			Ember.Logger.log('vcalendar eachRelatedType ', name, vcalendar.get(name), vcomponents.length);
			vcomponents.forEach(function(vcomponent) {
				Ember.Logger.log('vcalendar vcomponents ', name, vcalendar.get(name), vcomponent);
				var iCalComponent = new ICAL.Component(name);
				vcomponent.eachAttribute(function(name, meta) {
					if(!Ember.isNone(vcomponent.get(name))) {
						Ember.Logger.log('vcomponent eachAttribute ', name, vcomponent.get(name));
						iCalComponent.updatePropertyWithValue(name, vcomponent.get(name));
					}
				}, self);
				//Only vAlarm
//				vcomponent.eachRelationship(function(name, meta) {
//					valarms = vcalendar.get(name);
					valarms = vcalendar.get('valarm');
					valarms.forEach(function(valarm) {
						var iCalAlarm = new ICAL.Component('valarm');
						valarm.eachAttribute(function(name, meta) {
							if(!Ember.isNone(valarm.get(name))) {
								Ember.Logger.log('valarm eachAttribute ', name, valarm.get(name));
								iCalAlarm.updatePropertyWithValue(name, valarm.get(name));
							}
						}, self);
						iCalComponent.addSubcomponent(iCalAlarm);
					}, self);
//				}, self);

				iCal.addSubcomponent(iCalComponent);
			}, self);
		}, self);

		iCalStr = iCal.toString();

		//download
		if (navigator.msSaveBlob) { // IE10
			var iCalBlob = new Blob([iCalStr], {type : icalMimeType});
			return navigator.msSaveBlob(iCalBlob, iCalFileName);
		}
		var a = document.createElement("a");
		document.body.appendChild(a);
		if ('download' in a) { //html5 A[download] FF and Chrome
			a.href = "data:" + icalMimeType + "," + encodeURIComponent(iCalStr);
			a.setAttribute("download", iCalFileName);
			//Ember.run.next(this, this._parseNewCalendar, text);
			setTimeout(function() {
				a.click();
				document.body.removeChild(a);
			}, 66);
			return true;
		} else {
			document.body.removeChild(a);
			Ember.Logger.error('Error downloading the calendar, feature not supported by your browser');
		}
	}
});
