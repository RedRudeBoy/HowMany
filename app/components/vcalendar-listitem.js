export default Ember.Component.extend({
    click: function() {
        this.sendAction('action', 'calendar', this.get('vcalendar'));
        //this.send('btnLinkTo', 'hola!');
        //this.transitionTo('howmany', this.get('vcalendar'));
    },
    countHigh: Ember.computed.alias('vcalendar.vevent.length'),
    countNormal: Ember.computed.alias('vcalendar.vtodo.length'),
    countLow: Ember.computed.alias('vcalendar.vjournal.length'),
    
    calendarName: function() {
        if(this.has('vcalendar.x-wr-calname'))
            return this.get('vcalendar.x-wr-calname');
        return this.get('vcalendar.prodid');
    }.property('vcalendar.prodid','vcalendar.x-wr-calname'),
    
    calendarDesc: function() {
        if(this.has('vcalendar.x-wr-caldesc'))
            return this.get('vcalendar.x-wr-caldesc');
        return 'Without description';
    }.property('vcalendar.x-wr-caldesc'),
});