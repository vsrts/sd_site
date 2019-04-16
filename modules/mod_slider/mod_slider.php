<?php
// No direct access
defined('_JEXEC') or die;

//Include style
$document = JFactory::getDocument();
$document->addStyleSheet(JUri::base() . 'modules/mod_slider/css/slick.css');
$document->addStyleSheet(JUri::base() . 'modules/mod_slider/css/slick-theme.css');
$document->addScriptVersion(JUri::base() . 'modules/mod_slider/js/slick.min.js');
$document->addScriptVersion(JUri::base() . 'modules/mod_slider/js/slick-init.js');

// Include the syndicate functions only once
require_once dirname(__FILE__) . '/helper.php';

$vs = new VslibVs();
$subdomain = $vs->getSubdomain();

$slides = modSliderHelper::getSlider($subdomain);


require JModuleHelper::getLayoutPath('mod_slider');
