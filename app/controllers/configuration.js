import Locale from 'appkit/utils/locale';

export default Ember.Controller.extend({
	actions: {
		trEnglish: function() {
			this.set('actualLocale','en');
		},
		trCatala: function() {
			this.set('actualLocale','ca');
		}
	},

	actualLocale: function() {
		return this.get('locale').current;
//		return Locale.current;
	}.property(),
	actualLocaleObserver: function() {
		this.get('locale').setTranslations(this.get('actualLocale'));
//		Locale.setTranslations(this.get('actualLocale'));
	}.observes('actualLocale'),

	inEnglish: Ember.computed.equal('actualLocale','en'),
//	inEnglish: function() {}.property('actualLocale'),
	enCatala: Ember.computed.equal('actualLocale','ca')
});
