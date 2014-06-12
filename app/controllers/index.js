export default Ember.ArrayController.extend({
//    hasCalendars: Ember.computed.notEmpty('this'),
    hasCalendars: function() {
        return this.get('length') > 0;
    }.property('length'),
    showAddNewCalendar: false,
    actions: {
        btnLinkTo: function(param, param2) {
            console.log("Passed controller as a param: " + param+ " "+param2);
            this.transitionToRoute(param, param2);
        },
        addNewCalendar: function(param) {
            console.log('addNewCalendar');
            this.toggleProperty('showAddNewCalendar');
        },
        goToCalendar: function(param) {
            console.log('addNewCalendar');
        }
    }
});