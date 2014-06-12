/* global FileReader */
export default Ember.TextField.extend({
    type: 'file',
    attributeBindings: ['name'],
    change: function(evt) {
        var selfView = this;
        var files = evt.target.files; // FileList object
        for (var i = 0, f; f = files[i]; i++) {
            // Only process ical files
            if (!f.type.match('text/calendar')) {
                Ember.Logger.log('Error reading file. Expected type text/calendar, founded type: ', f.type);
                continue;
            }
            // Instantiate the reader
            var reader = new FileReader();
            reader.onload = function(e) {
                Ember.Logger.log('Reader ready! Sending to controller!');
                var fileToUpload = e.srcElement.result;
                selfView.get('controller').send('parseNewCalendar', fileToUpload);//set(self.get('name'), fileToUpload);
            };
            // Read the ical file
            reader.readAsText(f);
        }
    }
});
