<?php
/**
 * nethooks plugin for Craft CMS 3.x
 *
 * Add Deploy hooks for Netlify
 *
 * @link      https://jungleminds.com
 * @copyright Copyright (c) 2018 Jungle Minds
 */

namespace jungleminds\nethooks\utilities;

use jungleminds\nethooks\Nethooks;
use jungleminds\nethooks\assetbundles\nethooksutility\NethooksUtilityAsset;

use Craft;
use craft\base\Utility;

/**
 * nethooks Utility
 *
 * @author    Jungle Minds
 * @package   Nethooks
 * @since     1.0.1
 */
class NethooksUtility extends Utility
{
    // Static
    // =========================================================================

    /**
     * @inheritdoc
     */
    public static function displayName(): string
    {
        return Craft::t('nethooks', 'Nethooks');
    }

    /**
     * @inheritdoc
     */
    public static function id(): string
    {
        return 'nethooks';
    }

    /**
     * @inheritdoc
     */
    public static function iconPath()
    {
        return Craft::getAlias("@jungleminds/nethooks/assetbundles/nethooksutility/dist/img/Nethooks-icon.svg");
    }

    /**
     * @inheritdoc
     */
    public static function badgeCount(): int
    {
        return 0;
    }

    /**
     * @inheritdoc
     */
    public static function contentHtml(): string
    {
        Craft::$app->getView()->registerAssetBundle(NethooksUtilityAsset::class);

        return Craft::$app->getView()->renderTemplate(
            'nethooks/_components/utilities/Nethooks_content',
            [
                'buildHook' => Craft::$app->plugins->getPlugin('nethooks')->getSettings()->buildHook
            ]
        );
    }
}
