;(function($) {
  'use strict';

  var $window  = $(window);

  function sectionWaypoints() {
    if ($window.width() >= 992) {
      $('.benefit').waypoint(function(direction) {
        if (direction === 'down') {
          $(this.element)
          .removeClass('fadeOut')
          .addClass('fadeIn')
          .find('.heading, .description')
          .show();
        }
      }, { offset: '50%' })
      $('.benefit').waypoint(function(direction) {
        if (direction === 'up') {
          $(this.element)
          .removeClass('fadeIn')
          .addClass('fadeOut')
          .find('.heading, .description')
          .delay(500)
          .hide(0);
        }
      }, { offset: '20%' });
    }
  }

  // waypoints
  sectionWaypoints();
  $window.resize(function() {
    sectionWaypoints();
  });

})(jQuery);

