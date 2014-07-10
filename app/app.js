import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';
import Locale from 'appkit/utils/locale';

var App = Ember.Application.extend({
  modulePrefix: 'appkit', // TODO: loaded via config
  Resolver: Resolver,
  locale: Locale
});

Locale.set(App, 'ca');
loadInitializers(App, 'appkit');

export default App;