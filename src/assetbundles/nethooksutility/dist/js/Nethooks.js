/**
 * Nethooks plugin for Craft CMS
 *
 * Nethooks Utility JS
 *
 * @author    Jungle Minds
 * @copyright Copyright (c) 2018 Jungle Minds
 * @link      https://jungleminds.com
 * @package   Nethooks
 * @since     1.1.2
 */
!function ($) {
  var deployButtons = $('#content .nethooks .hooks .hook button');
  if (deployButtons) {
    deployButtons.on('click', function () {
      var _this = this
      $(_this).addClass('add loading');
      $(_this).removeClass('submit');
      $(_this).prop('disabled', true);
      $.ajax({
        type: "POST",
        url: $(_this).attr('data-build-hook'),
        error: function () {
          $(_this).removeClass('add loading');
          $(_this).addClass('submit');
          $(_this).prop('disabled', false);
        },
        success: function () {
          $(_this).removeClass('add loading');
        }
      });
    });
  }
}(jQuery);
