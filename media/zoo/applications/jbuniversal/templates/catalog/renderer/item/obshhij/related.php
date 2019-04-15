<?php
/**
 * JBZoo App is universal Joomla CCK, application for YooTheme Zoo component
 *
 * @package     jbzoo
 * @version     2.x Pro
 * @author      JBZoo App http://jbzoo.com
 * @copyright   Copyright (C) JBZoo.com,  All rights reserved.
 * @license     http://jbzoo.com/license-pro.php JBZoo Licence
 * @coder       Denis Smetannikov <denis@jbzoo.com>
 */

// no direct access
defined('_JEXEC') or die('Restricted access');


$align = $this->app->jbitem->getMediaAlign($item, $layout);
?>

	<div class="related-image">
        <?php echo $this->renderPosition('image'); ?>
    </div>
	<h4 class="related-title"><?php echo $this->renderPosition('title'); ?></h4>
	<div class="related-price">
        <?php echo $this->renderPosition('price'); ?>
	</div>
