'use strict';

(function(module) {
  const aboutController = {};

  aboutController.init = (function() {
    $('#articles').hide();
    $('#about').show();
  })

  // TODO: Define a function that hides all main section elements, and then reveals just the #about section: We will use this function as the eventHandler in our routes.js


  module.aboutController = aboutController;
})(window);
