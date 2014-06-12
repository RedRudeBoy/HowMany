export default Ember.ObjectController.extend({
    //test
    mola: 'deunido',

    //properties
    numEvents: Ember.computed.alias('vevent.length'),
    numTodos: Ember.computed.alias('vtodo.length'),
    numJournals: Ember.computed.alias('vjournal.length'),
    numEventsJournals: function() {
        return (this.get('vevent.length') + this.get('vjournal.length'));
    }.property('vevent.length','vjournal.length'),
    eventsJournals: function() {
        return this.get('vevent').addObjects(this.get('vjournal'));
        //return Ember.A();
        //return (this.get('vevent').concat(this.get('vjournal')));
    }.property('vevent','vjournal'),

    calendarName: function() {
        return (this.get('x-wr-calname') || this.get('prodid'));
    }.property('prodid','x-wr-calname'),
    
    calendarDesc: function() {
        return (this.get('x-wr-caldesc') || 'Without description');
    }.property('x-wr-caldesc'),

    //in views?
    actions: {
        showIconsView: function() {
            this.set('itemViewSelected','icon');
        },
        showListView: function() {
            this.set('itemViewSelected','list');
        }
//        toggleView: function(param) {
//            console.log("toggleView Passed controller as a param: " + param);
//            if(param == 'history')
//                this.history.set(false);
//            else if (param == 'windrose')
//                this.windrose.set(false);
//        }
    },
    hideHistory: true,
    hideWindRose: true,
    itemViewSelector: ['icon','list'],
    itemViewSelected: 'icon',
    isIconSelected: function() {
        return (this.get('itemViewSelected') === 'icon');
    }.property('itemViewSelected'),
    isListSelected: function() {
        return (this.get('itemViewSelected') === 'list');
    }.property('itemViewSelected')
});