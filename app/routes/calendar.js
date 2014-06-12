export default Ember.Route.extend({
    model: function(params) {
//      Ember.Logger.log('CalendarRoute received: ', params);
        return this.get('store').find('vcalendar',params.id);
    },
    setupController: function(controller, model) {
        controller.set('model', model);
        controller.set('tags', this.store.find('tag'));
    }
});