/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app'),
	pickFiles = require('broccoli-static-compiler'),
	mergeTrees = require('broccoli-merge-trees');

var app = new EmberApp();

// Use `app.import` to add additional libraries to the generated
// output files.
//
// If you need to use different assets in different
// environments, specify an object as the first parameter. That
// object's keys should be the environment name and the values
// should be the asset to use in that environment.
//
// If the library that you are including contains AMD or ES6
// modules that you would like to import into your application
// please specify an object with the list of modules as keys
// along with the exports of each module as its value.

/*
// Put the bootstrap fonts in the place that the bootstrap css expects to find them.
var bootstrapFonts = pickFiles('bower_components/bootstrap-sass-official/assets/fonts/bootstrap', {
	srcDir: '/',
	destDir: '/assets/bootstrap'
});
*/
// Font Awesome
var fontAwesomeTree = pickFiles('bower_components/fontawesome/fonts', {
	srcDir: '/',
	files: ['*'], //['fontawesome-webfont.eot','fontawesome-webfont.ttf','fontawesome-webfont.svg','fontawesome-webfont.woff']
	destDir: '/assets/fonts'
});

//MomentJS
app.import({
	development: 'bower_components/momentjs/moment.js',	//moment-with-langs.js
	production: 'bower_components/momentjs/min/moment.min.js'	//moment-with-langs.min.js
});

//Localforage
app.import({
	development: 'bower_components/localforage/dist/localforage.js',	//localforage.nopromises.js
	production: 'bower_components/localforage/dist/localforage.min.js'	//localforage.nopromises.min.js
});
app.import('bower_components/ember-localforage-adapter/localforage_adapter.js');

//Ember-i18n
//app.import('bower_components/cldr/plurals.js');
//app.import('bower_components/ember-i18n/lib/i18n.js');

//rrule
app.import('bower_components/rrule/lib/rrule.js');

//module.exports = app.toTree();
// Merge the bootstrapFonts with the ember app tree
module.exports = mergeTrees([app.toTree(),fontAwesomeTree]); //Bootstrap needed?,fontAwesomeTree
