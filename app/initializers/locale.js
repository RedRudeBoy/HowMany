//Em.Application.initializer();
export default {
  name: "locale",
  after: "store",

  initialize: function(container, application) {
    application.register('locale:main', application.locale, { instantiate: false, singleton: true });

    container.typeInjection('controller', 'locale', 'locale:main');
    container.typeInjection('route', 'locale', 'locale:main');
    container.typeInjection('component', 'locale', 'locale:main');
  }
};