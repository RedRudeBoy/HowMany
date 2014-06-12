//Gapi/GapiFactory
define(["ember","Gapi/GapiFactory"], function(Ember,gapi) {
	var HowManyModel = Ember.Object.extend({
		summary: null,
		description: null,
		description: null,
	});
	return HowManyModel;
});

/**
 * <div style="padding-left: 20px;"><span class="gwt-CheckBox" title="Whether anyone can invite themselves to the event. Optional. The default is False."><input type="checkbox" value="on" id="gwt-uid-22" tabindex="0"><label for="gwt-uid-22">anyoneCanAddSelf</label><br></span><div><span class="gwt-CheckBox"><input type="checkbox" value="on" id="gwt-uid-23" tabindex="0"><label for="gwt-uid-23">attendees</label></span><span class="gwt-InlineLabel GC1DV3DDF" title="Click to show more fields">+</span></div><span class="gwt-CheckBox" title="Whether attendees may have been omitted from the event's representation. When retrieving an event, this may be due to a restriction specified by the 'maxAttendee' query parameter. When updating an event, this can be used to only update the participant's response. Optional. The default is False."><input type="checkbox" value="on" id="gwt-uid-24" tabindex="0"><label for="gwt-uid-24">attendeesOmitted</label><br></span><span class="gwt-CheckBox" title="The color of the event. This is an ID referring to an entry in the &quot;event&quot; section of the colors definition (see the &quot;colors&quot; endpoint). Optional."><input type="checkbox" value="on" id="gwt-uid-25" tabindex="0"><label for="gwt-uid-25">colorId</label><br></span><span class="gwt-CheckBox" title="Creation time of the event (as a RFC 3339 timestamp). Read-only."><input type="checkbox" value="on" id="gwt-uid-26" tabindex="0"><label for="gwt-uid-26">created</label><br></span><div><span class="gwt-CheckBox"><input type="checkbox" value="on" id="gwt-uid-27" tabindex="0"><label for="gwt-uid-27">creator</label></span><div style="padding-left: 20px;"><span class="gwt-CheckBox" title="The creator's name, if available."><input type="checkbox" value="on" id="gwt-uid-28" tabindex="0"><label for="gwt-uid-28">displayName</label><br></span><span class="gwt-CheckBox" title="The creator's email address, if available."><input type="checkbox" value="on" id="gwt-uid-29" tabindex="0"><label for="gwt-uid-29">email</label><br></span><span class="gwt-CheckBox" title="The creator's Profile ID, if available."><input type="checkbox" value="on" id="gwt-uid-30" tabindex="0"><label for="gwt-uid-30">id</label><br></span><span class="gwt-CheckBox" title="Whether the creator corresponds to the calendar on which this copy of the event appears. Read-only. The default is False."><input type="checkbox" value="on" id="gwt-uid-31" tabindex="0"><label for="gwt-uid-31">self</label><br></span></div></div><span class="gwt-CheckBox" title="Description of the event. Optional."><input type="checkbox" value="on" id="gwt-uid-32" tabindex="0"><label for="gwt-uid-32">description</label><br></span><span class="gwt-CheckBox" title="The (exclusive) end time of the event. For a recurring event, this is the end time of the first instance."><input type="checkbox" value="on" id="gwt-uid-33" tabindex="0"><label for="gwt-uid-33">end</label><br></span><span class="gwt-CheckBox" title="Whether the end time is actually unspecified. An end time is still provided for compatibility reasons, even if this attribute is set to True. The default is False."><input type="checkbox" value="on" id="gwt-uid-34" tabindex="0"><label for="gwt-uid-34">endTimeUnspecified</label><br></span><span class="gwt-CheckBox" title="ETag of the resource."><input type="checkbox" value="on" id="gwt-uid-35" tabindex="0"><label for="gwt-uid-35">etag</label><br></span><div><span class="gwt-CheckBox"><input type="checkbox" value="on" id="gwt-uid-36" tabindex="0"><label for="gwt-uid-36">extendedProperties</label></span><div style="padding-left: 20px;"><span class="gwt-CheckBox" title="Properties that are private to the copy of the event that appears on this calendar."><input type="checkbox" value="on" id="gwt-uid-37" tabindex="0"><label for="gwt-uid-37">private</label><br></span><span class="gwt-CheckBox" title="Properties that are shared between copies of the event on other attendees' calendars."><input type="checkbox" value="on" id="gwt-uid-38" tabindex="0"><label for="gwt-uid-38">shared</label><br></span></div></div><div><span class="gwt-CheckBox"><input type="checkbox" value="on" id="gwt-uid-39" tabindex="0"><label for="gwt-uid-39">gadget</label></span><div style="padding-left: 20px;"><span class="gwt-CheckBox" title="The gadget's display mode. Optional. Possible values are:  
- &quot;icon&quot; - The gadget displays next to the event's title in the calendar view. 
- &quot;chip&quot; - The gadget displays when the event is clicked."><input type="checkbox" value="on" id="gwt-uid-40" tabindex="0"><label for="gwt-uid-40">display</label><br></span><span class="gwt-CheckBox" title="The gadget's height in pixels. Optional."><input type="checkbox" value="on" id="gwt-uid-41" tabindex="0"><label for="gwt-uid-41">height</label><br></span><span class="gwt-CheckBox" title="The gadget's icon URL."><input type="checkbox" value="on" id="gwt-uid-42" tabindex="0"><label for="gwt-uid-42">iconLink</label><br></span><span class="gwt-CheckBox" title="The gadget's URL."><input type="checkbox" value="on" id="gwt-uid-43" tabindex="0"><label for="gwt-uid-43">link</label><br></span><span class="gwt-CheckBox" title="Preferences."><input type="checkbox" value="on" id="gwt-uid-44" tabindex="0"><label for="gwt-uid-44">preferences</label><br></span><span class="gwt-CheckBox" title="The gadget's title."><input type="checkbox" value="on" id="gwt-uid-45" tabindex="0"><label for="gwt-uid-45">title</label><br></span><span class="gwt-CheckBox" title="The gadget's type."><input type="checkbox" value="on" id="gwt-uid-46" tabindex="0"><label for="gwt-uid-46">type</label><br></span><span class="gwt-CheckBox" title="The gadget's width in pixels. Optional."><input type="checkbox" value="on" id="gwt-uid-47" tabindex="0"><label for="gwt-uid-47">width</label><br></span></div></div><span class="gwt-CheckBox" title="Whether attendees other than the organizer can invite others to the event. Optional. The default is True."><input type="checkbox" value="on" id="gwt-uid-48" tabindex="0"><label for="gwt-uid-48">guestsCanInviteOthers</label><br></span><span class="gwt-CheckBox" title="Whether attendees other than the organizer can modify the event. Optional. The default is False."><input type="checkbox" value="on" id="gwt-uid-49" tabindex="0"><label for="gwt-uid-49">guestsCanModify</label><br></span><span class="gwt-CheckBox" title="Whether attendees other than the organizer can see who the event's attendees are. Optional. The default is True."><input type="checkbox" value="on" id="gwt-uid-50" tabindex="0"><label for="gwt-uid-50">guestsCanSeeOtherGuests</label><br></span><span class="gwt-CheckBox" title="An absolute link to the Google+ hangout associated with this event. Read-only."><input type="checkbox" value="on" id="gwt-uid-51" tabindex="0"><label for="gwt-uid-51">hangoutLink</label><br></span><span class="gwt-CheckBox" title="An absolute link to this event in the Google Calendar Web UI. Read-only."><input type="checkbox" value="on" id="gwt-uid-52" tabindex="0"><label for="gwt-uid-52">htmlLink</label><br></span><span class="gwt-CheckBox" title="Event ID in the iCalendar format."><input type="checkbox" value="on" id="gwt-uid-53" tabindex="0"><label for="gwt-uid-53">iCalUID</label><br></span><span class="gwt-CheckBox" title="Identifier of the event."><input type="checkbox" value="on" id="gwt-uid-54" tabindex="0"><label for="gwt-uid-54">id</label><br></span><span class="gwt-CheckBox" title="Type of the resource (&quot;calendar#event&quot;)."><input type="checkbox" value="on" id="gwt-uid-55" tabindex="0"><label for="gwt-uid-55">kind</label><br></span><span class="gwt-CheckBox" title="Geographic location of the event as free-form text. Optional."><input type="checkbox" value="on" id="gwt-uid-56" tabindex="0"><label for="gwt-uid-56">location</label><br></span><span class="gwt-CheckBox" title="Whether this is a locked event copy where no changes can be made to the main event fields &quot;summary&quot;, &quot;description&quot;, &quot;location&quot;, &quot;start&quot;, &quot;end&quot; or &quot;recurrence&quot;. The default is False. Read-Only."><input type="checkbox" value="on" id="gwt-uid-57" tabindex="0"><label for="gwt-uid-57">locked</label><br></span><div><span class="gwt-CheckBox"><input type="checkbox" value="on" id="gwt-uid-58" tabindex="0"><label for="gwt-uid-58">organizer</label></span><div style="padding-left: 20px;"><span class="gwt-CheckBox" title="The organizer's name, if available."><input type="checkbox" value="on" id="gwt-uid-59" tabindex="0"><label for="gwt-uid-59">displayName</label><br></span><span class="gwt-CheckBox" title="The organizer's email address, if available."><input type="checkbox" value="on" id="gwt-uid-60" tabindex="0"><label for="gwt-uid-60">email</label><br></span><span class="gwt-CheckBox" title="The organizer's Profile ID, if available."><input type="checkbox" value="on" id="gwt-uid-61" tabindex="0"><label for="gwt-uid-61">id</label><br></span><span class="gwt-CheckBox" title="Whether the organizer corresponds to the calendar on which this copy of the event appears. Read-only. The default is False."><input type="checkbox" value="on" id="gwt-uid-62" tabindex="0"><label for="gwt-uid-62">self</label><br></span></div></div><span class="gwt-CheckBox" title="For an instance of a recurring event, this is the time at which this event would start according to the recurrence data in the recurring event identified by recurringEventId. Immutable."><input type="checkbox" value="on" id="gwt-uid-63" tabindex="0"><label for="gwt-uid-63">originalStartTime</label><br></span><span class="gwt-CheckBox" title="Whether this is a private event copy where changes are not shared with other copies on other calendars. Optional. Immutable. The default is False."><input type="checkbox" value="on" id="gwt-uid-64" tabindex="0"><label for="gwt-uid-64">privateCopy</label><br></span><div><span class="gwt-CheckBox"><input type="checkbox" value="on" id="gwt-uid-65" tabindex="0"><label for="gwt-uid-65">recurrence</label></span></div><span class="gwt-CheckBox" title="For an instance of a recurring event, this is the event ID of the recurring event itself. Immutable."><input type="checkbox" value="on" id="gwt-uid-66" tabindex="0"><label for="gwt-uid-66">recurringEventId</label><br></span><div><span class="gwt-CheckBox"><input type="checkbox" value="on" id="gwt-uid-67" tabindex="0"><label for="gwt-uid-67">reminders</label></span><div style="padding-left: 20px;"><div><span class="gwt-CheckBox"><input type="checkbox" value="on" id="gwt-uid-68" tabindex="0"><label for="gwt-uid-68">overrides</label></span><span class="gwt-InlineLabel GC1DV3DDF" title="Click to show more fields">+</span></div><span class="gwt-CheckBox" title="Whether the default reminders of the calendar apply to the event."><input type="checkbox" value="on" id="gwt-uid-69" tabindex="0"><label for="gwt-uid-69">useDefault</label><br></span></div></div><span class="gwt-CheckBox" title="Sequence number as per iCalendar."><input type="checkbox" value="on" id="gwt-uid-70" tabindex="0"><label for="gwt-uid-70">sequence</label><br></span><div><span class="gwt-CheckBox"><input type="checkbox" value="on" id="gwt-uid-71" tabindex="0"><label for="gwt-uid-71">source</label></span><div style="padding-left: 20px;"><span class="gwt-CheckBox" title="Title of the source; for example a title of a web page or an email subject."><input type="checkbox" value="on" id="gwt-uid-72" tabindex="0"><label for="gwt-uid-72">title</label><br></span><span class="gwt-CheckBox" title="URL of the source pointing to a resource. URL's protocol must be HTTP or HTTPS."><input type="checkbox" value="on" id="gwt-uid-73" tabindex="0"><label for="gwt-uid-73">url</label><br></span></div></div><span class="gwt-CheckBox" title="The (inclusive) start time of the event. For a recurring event, this is the start time of the first instance."><input type="checkbox" value="on" id="gwt-uid-74" tabindex="0"><label for="gwt-uid-74">start</label><br></span><span class="gwt-CheckBox" title="Status of the event. Optional. Possible values are:  
- &quot;confirmed&quot; - The event is confirmed. This is the default status. 
- &quot;tentative&quot; - The event is tentatively confirmed. 
- &quot;cancelled&quot; - The event is cancelled."><input type="checkbox" value="on" id="gwt-uid-75" tabindex="0"><label for="gwt-uid-75">status</label><br></span><span class="gwt-CheckBox" title="Title of the event."><input type="checkbox" value="on" id="gwt-uid-76" tabindex="0"><label for="gwt-uid-76">summary</label><br></span><span class="gwt-CheckBox" title="Whether the event blocks time on the calendar. Optional. Possible values are:  
- &quot;opaque&quot; - The event blocks time on the calendar. This is the default value. 
- &quot;transparent&quot; - The event does not block time on the calendar."><input type="checkbox" value="on" id="gwt-uid-77" tabindex="0"><label for="gwt-uid-77">transparency</label><br></span><span class="gwt-CheckBox" title="Last modification time of the event (as a RFC 3339 timestamp). Read-only."><input type="checkbox" value="on" id="gwt-uid-78" tabindex="0"><label for="gwt-uid-78">updated</label><br></span><span class="gwt-CheckBox" title="Visibility of the event. Optional. Possible values are:  
- &quot;default&quot; - Uses the default visibility for events on the calendar. This is the default value. 
- &quot;public&quot; - The event is public and event details are visible to all readers of the calendar. 
- &quot;private&quot; - The event is private and only event attendees may view event details. 
- &quot;confidential&quot; - The event is private. This value is provided for compatibility reasons."><input type="checkbox" value="on" id="gwt-uid-79" tabindex="0"><label for="gwt-uid-79">visibility</label><br></span></div>
Select all/none
anyoneCanAddSelf
attendees+
attendeesOmitted
colorId
created
creator
displayName
email
id
self
description
end
endTimeUnspecified
etag
extendedProperties
private
shared
gadget
display
height
iconLink
link
preferences
title
type
width
guestsCanInviteOthers
guestsCanModify
guestsCanSeeOtherGuests
hangoutLink
htmlLink
iCalUID
id
kind
location
locked
organizer
displayName
email
id
self
originalStartTime
privateCopy
recurrence
recurringEventId
reminders
overrides+
useDefault
sequence
source
title
url
start
status
summary
transparency
updated
visibility
 */