
/* hide/show button*/
jQuery(document).ready(function(jQuery) {
 jQuery('button#show_opentok_button').hide();
 jQuery('button#hide_opentok_button').click(function() {
	jQuery('#opentok-full').toggle('slow');
	jQuery(this).hide();
	jQuery('button#show_opentok_button').show();
})
 jQuery('button#show_opentok_button').click(function() {
	jQuery('#opentok-full').toggle('slow');
	jQuery(this).hide();
	jQuery('button#hide_opentok_button').show();
})
});