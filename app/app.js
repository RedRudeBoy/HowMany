import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';
import Locale from 'appkit/utils/locale';

//@ToDo: Use initializers for EmberDC
var App = Ember.Application.extend(EmberDC, {
  modulePrefix: 'appkit', // TODO: loaded via config
  Resolver: Resolver,
  locale: Locale
});

Locale.set(App, 'en'); //ca
loadInitializers(App, 'appkit');

export default App;