import Locale from 'appkit/utils/locale';

export default Ember.Controller.extend({
	actions: {
		trEnglish: function() {
			this.set('actualLocale','en');
		},
		trCatala: function() {
			this.set('actualLocale','ca');
		},
		resetData: function() {
			window.localStorage.setItem('how_many','{"vcalendar":{"records":{"vggf9":{"id":"vggf9","prodid":"-//RedRudeBoy//HowMany//EN","version":"2.0","x-wr-calname":"cal_a","x-wr-caldesc":"cal_d","x-wr-timezone":null}}},"vtodo":{"records":{"8qjj6":{"id":"8qjj6","categories":"house,journey","description":"to_do_1d","status":"TENTATIVE","summary":"to_do_1s","created":"2014-08-07T18:26:14.265Z","last-modified":"2014-08-07T18:26:14.265Z","sequence":1,"percent_complete":null,"parent_vcalendar":"vggf9"}}},"vevent":{"records":{"uj4od":{"id":"uj4od","categories":"house,beach","description":"ev_1d","status":"TENTATIVE","summary":"ev_1s","created":"2014-08-07T18:27:54.114Z","last-modified":"2014-08-07T18:27:54.114Z","sequence":1,"parent_vcalendar":"vggf9"}}},"vjournal":{"records":{"ianqs":{"id":"ianqs","categories":"house,school,beach","description":"journal_1d","status":"TENTATIVE","summary":"journal_1s","created":"2014-08-07T18:28:16.232Z","last-modified":"2014-08-07T18:28:16.232Z","sequence":1,"parent_vcalendar":"vggf9"}}}}');
			Ember.Logger.log('OK!');
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
