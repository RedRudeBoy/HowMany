export default Ember.Controller.extend({
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
