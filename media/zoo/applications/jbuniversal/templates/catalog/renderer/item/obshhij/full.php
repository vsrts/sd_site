<?php
/**
 * JBZoo App is universal Joomla CCK, application for YooTheme Zoo component
 *
 * @package     jbzoo
 * @version     2.x Pro
 * @author      JBZoo App http://jbzoo.com
 * @copyright   Copyright (C) JBZoo.com,  All rights reserved.
 * @license     http://jbzoo.com/license-pro.php JBZoo Licence
 * @coder       Sergey Kalistratov <kalistratov.s.m@gmail.com>
 */

// no direct access
defined('_JEXEC') or die('Restricted access');


$align     = $this->app->jbitem->getMediaAlign($item, $layout);
$tabsId    = $this->app->jbstring->getId('tabs');
?>

<div class="block1">
	<div class="full-image">
        <?php echo $this->renderPosition('image'); ?>
    </div>
</div>
<div class="block2">
	<h1 class="full-title"><?php echo $this->renderPosition('title'); ?></h1>
	<div class="full-description">
        <?php echo $this->renderPosition('description'); ?>
    </div>
	<?php if ($this->checkPosition('weight')) : ?>
		<div class="full-weight">
			<?php echo $this->renderPosition('weight'); ?> <span> гр.</span>
		</div>	
	<?php endif; ?>	
	<div class="full-price">
        <?php echo $this->renderPosition('price'); ?>
	</div>
</div>
<div class="related-block">
	<h2>Не забудьте купить дополнительно:</h2>
	<?php echo $this->renderPosition('related'); ?>
</div>
    

