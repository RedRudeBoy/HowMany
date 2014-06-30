/* global moment */
import Translations from 'appkit/translations/index';
//import moment from 'vendor/momentjs/moment';
//import moment from 'appkit/utils/shims/moment';
//import numeral from 'appkit/utils/shims/numeral';

export default {
	default: 'ca',		//catala
	current: null,
	set: function(app,locale) {
		// TODO or userLocale from localStorage
		locale = locale || this.default;

		this.current = locale;
		//numeral.language(locale);
		//CLDR.defaultLanguage = locale;
		moment.lang(locale);

		this.setTranslations(locale);
	},
	setTranslations: function(locale) {
		Em.I18n.translations = Translations[locale];
	}
};
