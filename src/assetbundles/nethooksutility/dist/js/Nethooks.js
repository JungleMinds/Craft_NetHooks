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
  var deployButtons = $('.nethooks .netlify .hooks .hook button');
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

  var buildkiteDeployButtons = $('.nethooks .buildkite .hooks .hook button');
  if (buildkiteDeployButtons) {
    buildkiteDeployButtons.on('click', function () {
      var _this = this
      $(_this).addClass('add loading');
      $(_this).removeClass('submit');
      $(_this).prop('disabled', true);
      var _url = `https://api.buildkite.com/v2/organizations/niice-digital-marketing/pipelines/${$(_this).attr('data-build-pipeline')}/builds`
      var _commit = $(_this).attr('data-build-commit');
      var _branch = $(_this).attr('data-build-branch');
      var _data_buildkite_bearer_token = $(_this).attr('data-buildkite-bearer-token');

      var data = {
        commit: _commit,
        branch: _branch,
        message: "Craft CMS Nethook :rocket:",
        author: {
          name: "Floris Wijgergangs",
          email: "floris@niice.nl"
        },
      }

      $.ajax({
        type: "POST",
        url: _url,
        beforeSend: function (xhr) {
          xhr.setRequestHeader('Authorization', `Bearer ${_data_buildkite_bearer_token}`);
        },
        data: JSON.stringify(data),
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
