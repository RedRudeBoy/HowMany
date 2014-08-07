/* global ICAL */

import vCalendarUtils from "appkit/mixins/vcalendarutils";

export default Ember.Controller.extend(vCalendarUtils, {
	init: function() {
		if (!window.File || !window.FileReader || !window.FileList || !window.Blob) {
			Ember.Logger.warn('The File APIs are not fully supported in this browser.');
		}
	},
//	actions: {
//		parseNewCalendar: function(text) {
//			Ember.run.next(this, this._parseNewCalendar, text);
//			Ember.run.once(this, this._parseNewCalendar, text);
//			this._parseNewCalendar(text);
//		},
//		saveCalendar: function(vcalendar) {
//			return this.emberData2iCal(vcalendar);
//		}
//	},
	_parseNewCalendar: function(text) {
		return this.iCal2EmberDataSync(text);
	},
	_parseNewCalendarOld: function(text) {
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
									Ember.Logger.log('vcal gettings: ',c_name, ' for: ', vcomponent);
									vcal.get(c_name+'s').then(function(vcomps) {
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
							vcal.get("vevents").then(function(vevents) { Ember.Logger.log('Num events: ',vevents.get('length')); });
							vcal.get("vtodos").then(function(vtodos) { Ember.Logger.log('Num vtodos: ',vtodos.get('length')); });
							vcal.get("vjournals").then(function(vjournals) { Ember.Logger.log('Num vjournals: ',vjournals.get('length')); });
						});
					});

				}
/*
					components.forEach(function(comp) {
						var c_name = comp[0],
							c_properties = comp[1],
							c_components = comp[2],
							c_alarms = Em.A();

						if(c_name === "vevent" || c_name === "vtodo" || c_name === "vjournal") {
							var vcomponent = this.store.createRecord(c_name);
							this._setDefinedProperties(vcomponent, c_properties);

							c_components.forEach(function(c_comp) {
								var c_c_name = c_comp[0],
									c_c_type = c_comp[2],
									c_c_value = c_comp[3];

								if(c_c_name === "valarm") {
									var valarm = this.store.createRecord("valarm");
									this._setDefinedProperties(valarm, c_c_type);

									c_alarms.push(valarm);
									Ember.Logger.log('hola1');
									//valarm.save();
									//vcomponent.save();
									//vcomponent.get('valarm').pushObject(valarm).save();

								} else {
									Ember.Logger.warn('Error parsing calendar: Unknown component ', c_c_name, c_c_value, c_c_type);
								}

							}, this);

							vcomponents[c_name].push(vcomponent);

							vcomponent.save();
							c_alarms.forEach(function(c_alarm) {
								Ember.Logger.log('hola2');
								Ember.Logger.log(c_alarm);

								c_alarm.save().then(function() {
									Ember.Logger.log('hola3');
									vcomponent.get('valarm').then(function(rtn) {
										Ember.Logger.log('hola4');
										rtn.pushObject(c_alarm);
									});
								});
								//vcomponent.get('valarm').pushObject(child).save();
							}, this);

						} else if(c_name === "vtimezone") {
							Ember.Logger.log('Ignored component vtimezone: ', c_name, c_properties, c_components);
						} else {
							Ember.Logger.warn('Error parsing calendar: Unknown component ', c_name, c_properties, c_components);
						}
					}, this);

					/*
					vcomponents.forEach(function(comps, name) {
						comps.forEach(function(comp) {
							vcal.get(name).pushObject(comp);
						}, this);
					}, this);
					vcal.set('event', vcomponents['vevent']).set('todo', vcomponents['vtodo']).set('journal', vcomponents['vjournal']);
					*
					vcal.save();
					vcomponents['vevent'].forEach(function(comp) {
						//comp.save();
						//if is async
						vcal.get('vevent').then(function(rtn) {
							rtn.pushObject(comp);
						});
						//vcal.get('vevent').pushObject(comp).save();
					}, this);
					vcomponents['vtodo'].forEach(function(comp) {
						//comp.save();
						//if is async
						vcal.get('vtodo').then(function(rtn) {
							rtn.pushObject(comp);
						});
						//vcal.get('vtodo').pushObject(comp).save();
					}, this);
					vcomponents['vjournal'].forEach(function(comp) {
						//comp.save();
						//if is async
						vcal.get('vjournal').then(function(rtn) {
							rtn.pushObject(comp);
						});
						//vcal.get('vjournal').pushObject(comp).save();
					}, this);
					vcal.save().then(function(cal) {
						Ember.Logger.log('saved!');
					});
				}
				*/
			}, self);
		}
	},
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
	}
});

/*
var mozilla_ical = require('ical.js-one.com');
//var mozilla_ical = require('../../ical.js/build/ical.js');
var jCalData = mozilla_ical.parse(ical_file_small);
var comp = new ICAL.Component(jCalData[1]);
//console.log(comp.getAllSubcomponents());
console.log(comp.jCal);
console.log(comp.getAllSubcomponents("vtodo"));
*/
