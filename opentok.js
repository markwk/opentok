(function ($) {
  if(!Drupal.openTok){
    Drupal.openTok = { };
  }

  Drupal.openTok.registerConnection = function(e){
    $.ajax({
      type: 'POST',
      url: Drupal.settings.basePath + 'opentok/register',
  	  data: ({opentok_connection: JSON.stringify(e.openTok.eventData.target.connection)}),
  	})
  }

  Drupal.openTok.getPublisherWrapper = function(session){
    
  };

  Drupal.openTok.getSubscriberWrapper = function(session, stream){
	return $.ajax({
		  type: 'POST',
		  url: Drupal.settings.basePath + 'opentok/stream-wrapper',
		  data: ({opentok_stream: JSON.stringify(stream), opentok_session: JSON.stringify(session)}),
		  async: false,
		  dataType: 'html',
		}).responseText;
  };

  Drupal.behaviors.openTok = {
    attach: function(context, settings) {
      $('.opentok-container', context).each(function(){
        if(settings.openTok[this.id]){
          var options = settings.openTok[this.id];
          options.token = Drupal.openTok.getConnectionToken;
          options.publisherWrapper = Drupal.openTok.getPublisherWrapper;
          options.streamWrapper = Drupal.openTok.getSubscriberWrapper;
          options.logLevel = $.openTok.logLevel.debug;
          $(this).openTok(options).bind($.openTok.event.sessionConnected, Drupal.openTok.registerConnection);
        }
      });
    }
  };

})(jQuery);
