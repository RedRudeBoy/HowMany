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
			window.localStorage.setItem('how_many','{"vcalendar":{"records":{"vggf9":{"id":"vggf9","prodid":"-//RedRudeBoy//HowMany//EN","version":"2.0","x-wr-calname":"Example Calendar","x-wr-caldesc":"Personal agenda example","x-wr-timezone":null}}},"vtodo":{"records":{"8qjj6":{"id":"8qjj6","categories":"house,journey","location":"home","description":"Cada setmana el dilluns, dimecres, divendres, fins: 22 set. 2015","status":"TENTATIVE","summary":"Visitar la familia","created":"2014-08-07T18:26:14.265Z","last-modified":"2014-08-07T18:26:14.265Z","sequence":1,"percent_complete":null,"rrule":"FREQ=WEEKLY;UNTIL=20150921T000000Z;BYDAY=MO,WE,FR","parent_vcalendar":"vggf9"},"tqk6h":{"id":"tqk6h","categories":"house","location":"home","description":"to_do_2d","status":"TENTATIVE","summary":"to_do_2s","created":"2014-08-11T18:26:34.427Z","last-modified":"2014-08-11T18:26:34.427Z","sequence":1,"percent_complete":null,"parent_vcalendar":"vggf9"},"tqk7h":{"id":"tqk7h","categories":"house","location":"home","description":"to_do_3d","status":"TENTATIVE","summary":"to_do_3s","created":"2014-08-11T18:26:34.427Z","last-modified":"2014-08-11T18:26:34.427Z","sequence":1,"percent_complete":null,"parent_vcalendar":"vggf9"},"tqk8h":{"id":"tqk8h","categories":"work","location":"work","description":"to_do_4d","status":"TENTATIVE","summary":"to_do_4s","created":"2014-08-11T18:26:34.427Z","last-modified":"2014-08-11T18:26:34.427Z","sequence":1,"percent_complete":null,"parent_vcalendar":"vggf9"}}},"vevent":{"records":{"uj4od":{"id":"uj4od","dtstart":"2014-08-21T15:34:54.798Z","categories":"house,beach","location":"home","description":"Tots Els Dijous Sense Fi","rrule":"FREQ=WEEKLY;BYDAY=TH","status":"TENTATIVE","summary":"ev_recurr_1","created":"2014-08-21T18:27:54.114Z","last-modified":"2014-08-21T18:27:54.114Z","sequence":1,"parent_vcalendar":"vggf9"}}},"vjournal":{"records":{"ianqs":{"id":"ianqs","categories":"house,school,beach","location":"house","description":"journal_1d","status":"TENTATIVE","summary":"journal_1s","created":"2014-08-07T18:28:16.232Z","dtstart":"2014-08-07T18:28:16.232Z","last-modified":"2014-08-07T18:28:16.232Z","sequence":1,"parent_vcalendar":"vggf9"}}}}');
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
