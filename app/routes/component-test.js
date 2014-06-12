export default Ember.Route.extend({
    model: function() {
        //console.log('LEEEENIN');
        //console.log(this.get('store'));
        //return this.get('store').findAll('vcalendar');
        //return this.get('store').find('vcalendar', 1);
        //return this.store.find('vcalendar',1);
        //return this.store.findAll('vcalendar');
        return ['purple', 'green', 'orange'];
    }
});
