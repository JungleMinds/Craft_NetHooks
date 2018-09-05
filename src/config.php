<?php
/**
 * nethooks plugin for Craft CMS 3.x
 *
 * Add Deploy hooks for Netlify
 *
 * @link      https://jungleminds.com
 * @copyright Copyright (c) 2018 Jungle Minds
 */

/**
 * nethooks config.php
 *
 * This file exists only as a template for the nethooks settings.
 * It does nothing on its own.
 *
 * Don't edit this file, instead copy it to 'craft/config' as 'nethooks.php'
 * and make your changes there to override default settings.
 *
 * Once copied to 'craft/config', this file will be multi-environment aware as
 * well, so you can have different settings groups for each environment, just as
 * you do for 'general.php'
 */

return [

    "buildHook" => 'https://api.netlify.com/build_hooks/...',

];
