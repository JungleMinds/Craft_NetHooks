<?php
/**
 * nethooks plugin for Craft CMS 3.x
 *
 * Add Deploy hooks for Netlify
 *
 * @link      https://jungleminds.com
 * @copyright Copyright (c) 2018 Jungle Minds
 */

namespace jungleminds\nethooks\models;

use jungleminds\nethooks\Nethooks;

use Craft;
use craft\base\Model;

/**
 * Nethooks Settings Model
 *
 * This is a model used to define the plugin's settings.
 *
 * Models are containers for data. Just about every time information is passed
 * between services, controllers, and templates in Craft, it’s passed via a model.
 *
 * https://craftcms.com/docs/plugins/models
 *
 * @author    Jungle Minds
 * @package   Nethooks
 * @since     1.1.2
 */
class Settings extends Model
{
    // Public Properties
    // =========================================================================

    /**
     * Some field model attribute
     *
     * @var array
     */
    public $buildHooks = [[
        'name' => 'default',
        'url' => 'https://api.netlify.com/build_hooks/...',
        'badge' => '[![Netlify Status](https://api.netli...',
    ]];

    // Public Methods
    // =========================================================================

    /**
     * Returns the validation rules for attributes.
     *
     * Validation rules are used by [[validate()]] to check if attribute values are valid.
     * Child classes may override this method to declare different validation rules.
     *
     * More info: http://www.yiiframework.com/doc-2.0/guide-input-validation.html
     *
     * @return array
     */
    public function rules()
    {
        return [
            ['buildHooks', 'default', 'value' => [[
                'name' => 'default',
                'url' => 'https://api.netlify.com/build_hooks/...',
                'badge' => '[![Netlify Status](https://api.netli...',
            ]]],
        ];
    }
}
