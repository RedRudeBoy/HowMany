export default Ember.Route.extend({
//    model: function() {
//        return this.store.find('vcalendar');
//    },
    setupController: function(controller, model) {
        controller.set('tags', this.store.find('tag'));
    }
});