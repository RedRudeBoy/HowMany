module.exports = function(server) {
    /*
    //Import ical file
    var ical_filepath_big = '/home/www/parsers/iCalParsers/examples/calendarLenin.ics'; //505 components
    var ical_filepath = '/home/www/parsers/iCalParsers/examples/calendarCozy.ics'; //118 components
    var ical_filepath_small = '/home/www/parsers/iCalParsers/examples/redrudeboy@gmail.com.ical/Pla_treball_BarmaPro_frjlmu01foi1f68u91erbevrtg@group.calendar.google.com.ics'; //5 components

    var fs = require('fs');
    var ical_file_big = fs.readFileSync(ical_filepath_big, 'utf8');
    var ical_file_small = fs.readFileSync(ical_filepath_small, 'utf8');
    var ical_file = fs.readFileSync(ical_filepath, 'utf8');
    */

    /* Using cozy-ical
     * npm install cozy-ical
    var cozy_ical = require('cozy-ical');
    var fs = require('fs');
	fs.readFile(ical_filepath, 'utf8', function (err, data) {
		if (err) return console.error(err);
		console.log('Fitxer llegit correctament');
        parser = new cozy_ical.ICalParser();
        parser.parseString(data, function(err, cal) {
            if(err) return console.error(err);
            console.log('Fitxer parsejat correctament!');
            console.log('Name: '+cal.name);
            console.log('PROID: '+cal.fields.PRODID);
        });
	});

    cozy_parser = new cozy_ical.ICalParser();
    cozy_parser.parseFile(ical_filepath, function(err, cal) {
        if(err) {
            return console.error(err);
        }
        console.log('Fitxer parsejat correctament!');
        console.log('Name: '+cal.name);
        console.log('PROID: '+cal.fields.PRODID);
        console.log('Num components: '+cal.subComponents.length);
        if(cal.subComponents.length > 0) {
            //cal.subComponents.forEach(function(el) {
            //    console.log(el.fields.UID);
            //});
            console.log(cal.subComponents[0].fields);
            console.log(cal.subComponents[1].fields);
            console.log(cal.subComponents[2].fields);
            console.log(cal.subComponents[3].fields);
//          {     SUMMARY: 'Dinar Carme Vega',
//                'DTSTART;VALUE=DATE-TIME': '20140528T195600Z',
//                'DTEND;VALUE=DATE-TIME': '20140528T195600Z',
//                LOCATION: '',
//                UID: 't7tnaej75adu0t2lag193tt720@google.com',
//                DTSTART: '20140601T120000Z',
//                DTEND: '20140601T140000Z',
//                DTSTAMP: '20140522T164745Z',
//                CREATED: '20140522T141228Z',
//                DESCRIPTION: '',
//                'LAST-MODIFIED': '20140522T141228Z',
//                SEQUENCE: '0',
//                STATUS: 'CONFIRMED',
//                TRANSP: 'OPAQUE' }
        }
    });
    */
    /*
     * ical2json
    var ical2json = require("ical2json");
    var fs = require('fs');
	fs.readFile(ical_filepath, 'utf8', function (err, data) {
		if (err) return console.error(err);
		console.log('Fitxer llegit correctament');
        var ical2json_output = ical2json.convert(data);
        console.log(ical2json_output['VCALENDAR'][0]);
        console.log(ical2json_output['VCALENDAR'][0]["VEVENT"]);
	});
    */

    /*
    var node_ical = require("ical");
    var output = node_ical.parseFile(ical_filepath);
    console.log(output);
    console.log(output['gr9bhqvjbeaq5jhbtb19glntrk@google.com']['dtstart']);
    for (var k in output){
        if (output.hasOwnProperty(k)){
            var ev = output[k];
            console.log(ev);
            if(typeof ev.start != "undefined")
                console.log("Sumary", ev.summary, 'is in',  ev.location, 'on the', ev.start.getDate());
            else
                console.log("without date");
        }
    }*/

    /*
    var mozilla_ical = require('ical.js-one.com');
    //var mozilla_ical = require('../../ical.js/build/ical.js');
    var jCalData = mozilla_ical.parse(ical_file_small);
    var comp = new ICAL.Component(jCalData[1]);
    //console.log(comp.getAllSubcomponents());
    console.log(comp.jCal);
    console.log(comp.getAllSubcomponents("vtodo"));
    */

  // Create an API namespace, so that the root does not
  // have to be repeated for each end point.
  server.namespace('/api', function() {

    // Return fixture data for '/api/posts/:id'
    server.get('/posts/:id', function(req, res) {
      var post = {
        "post": {
          "id": 1,
          "title": "Rails is omakase",
          "comments": ["1", "2"],
          "user" : "dhh"
        },

        "comments": [{
          "id": "1",
          "body": "Rails is unagi"
        }, {
          "id": "2",
          "body": "Omakase O_o"
        }]
      };

      res.send(post);
    });
  });
};
