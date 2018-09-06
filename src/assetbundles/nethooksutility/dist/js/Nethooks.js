/**
 * Nethooks plugin for Craft CMS
 *
 * Nethooks Utility JS
 *
 * @author    Jungle Minds
 * @copyright Copyright (c) 2018 Jungle Minds
 * @link      https://jungleminds.com
 * @package   Nethooks
 * @since     1.0.1
 */
!function ($) {
  var deployButton = $('#nethooks-deploy-button');
  if (deployButton) {
    deployButton.on('click', function () {
      $(deployButton).addClass('add loading');
      $(deployButton).removeClass('submit');
      $(deployButton).prop('disabled', true);
      $.ajax({
        type: "POST",
        url: $(deployButton).attr('data-build-hook'),
        error: function () {
          $(deployButton).removeClass('add loading');
          $(deployButton).addClass('submit');
          $(deployButton).prop('disabled', false);
        },
        success: function () {
          $(deployButton).removeClass('add loading');
        }
      });
    });
  }
}(jQuery);
