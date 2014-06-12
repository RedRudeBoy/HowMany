/* global ICAL */
export default Ember.Controller.extend({
    init: function() {
        if (!window.File || !window.FileReader || !window.FileList || !window.Blob) {
            Ember.Logger.warn('The File APIs are not fully supported in this browser.');
        }
    },
    actions: {
        parseNewCalendar: function(text) {
            Ember.run.next(this, this._parseNewCalendar, text);
            //Ember.run.once(this, this._parseNewCalendar, text);
            //this._parseNewCalendar(text);
        }
    },
    _parseNewCalendar: function(text) {
        var jcalData = ICAL.parse(text);
//      var comp = new ICAL.Component(jCalData[1]);
        if(jcalData[0] === "icalendar") {
            jcalData.splice(0,1);
            jcalData.forEach(function(jcal, index) {
                if(jcal[0] === "vcalendar") {
                    var vcal = this.store.createRecord('vcalendar'),
                        properties = jcal[1],
                        components = jcal[2],
                        vcomponents = {"vevent": [],"vtodo": [],"vjournal": [],"valarm": []};

                    this._setDefinedProperties(vcal, properties);

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

                                    //c_alarms.push(valarm);
                                    //valarm.save();
                                    //vcomponent.save();
                                    //vcomponent.get('valarm').pushObject(valarm).save();

                                } else {
                                    Ember.Logger.warn('Error parsing calendar: Unknown component ', c_c_name, c_c_value, c_c_type);
                                }

                            }, this);

                            vcomponents[c_name].push(vcomponent);
                            
                            vcomponent.save();
                            c_alarms.forEach(function(child) {
                                child.save();
                                vcomponent.get('valarm').then(function(rtn) {
                                    rtn.pushObject(child);
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
                    */
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
            }, this);
        }
    },
    //Set all components in the model
    _setDefinedProperties: function(model, jcomponents) {
        var properties_defined = this._getDefinedProperties(model);

        jcomponents.forEach(function(jcomponent) {
            var name = jcomponent[0],
                type = jcomponent[2],
                value = jcomponent[3];

            //Check if key exists
            if(!properties_defined.contains(name)) {
                Ember.Logger.warn('Error parsing jcomponent: Unknown property ', name, type, value);
                return;
            }
            //Transform types
            if(type === "date-time") value = new Date(value);
            //else if(type === "duration") value = new Date(value);

            //Set value
            //Ember.Logger.log('name: ',name,'Value: ', value);
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