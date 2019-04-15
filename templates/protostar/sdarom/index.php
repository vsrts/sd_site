<?php
/**
 * @package     Joomla.Site
 * @subpackage  Templates.protostar
 *
 * @copyright   Copyright (C) 2005 - 2016 Open Source Matters, Inc. All rights reserved.
 * @license     GNU General Public License version 2 or later; see LICENSE.txt
 */

defined('_JEXEC') or die;

$app             = JFactory::getApplication();
$doc             = JFactory::getDocument();
$user            = JFactory::getUser();
$this->language  = $doc->language;
$this->direction = $doc->direction;

// Output as HTML5
$doc->setHtml5(true);

// Getting params from template
$params = $app->getTemplate(true)->params;

// Detecting Active Variables
$option   = $app->input->getCmd('option', '');
$view     = $app->input->getCmd('view', '');
$layout   = $app->input->getCmd('layout', '');
$task     = $app->input->getCmd('task', '');
$itemid   = $app->input->getCmd('Itemid', '');
$sitename = $app->get('sitename');

if($task == "edit" || $layout == "form" )
{
	$fullWidth = 1;
}
else
{
	$fullWidth = 0;
}

// Add JavaScript Frameworks
JHtml::_('bootstrap.framework');

$doc->addScriptVersion($this->baseurl . '/templates/' . $this->template . '/js/template.js');
$doc->addScriptVersion($this->baseurl . '/templates/' . $this->template . '/js/custom.js');

// Add Stylesheets
$doc->addStyleSheetVersion($this->baseurl . '/templates/' . $this->template . '/css/template.css');
$doc->addStyleSheetVersion($this->baseurl . '/templates/' . $this->template . '/css/custom.css');

/* // Use of Google Font
if ($this->params->get('googleFont'))
{
	$doc->addStyleSheet('//fonts.googleapis.com/css?family=' . $this->params->get('googleFontName'));
	$doc->addStyleDeclaration("
	h1, h2, h3, h4, h5, h6, .site-title {
		font-family: '" . str_replace('+', ' ', $this->params->get('googleFontName')) . "', sans-serif;
	}");
}

// Template color
if ($this->params->get('templateColor'))
{
	$doc->addStyleDeclaration("
	body.site {
		border-top: 3px solid " . $this->params->get('templateColor') . ";
		background-color: " . $this->params->get('templateBackgroundColor') . ";
	}
	a {
		color: " . $this->params->get('templateColor') . ";
	}
	.nav-list > .active > a,
	.nav-list > .active > a:hover,
	.dropdown-menu li > a:hover,
	.dropdown-menu .active > a,
	.dropdown-menu .active > a:hover,
	.nav-pills > .active > a,
	.nav-pills > .active > a:hover,
	.btn-primary {
		background: " . $this->params->get('templateColor') . ";
	}");
} */

// Check for a custom CSS file
$userCss = JPATH_SITE . '/templates/' . $this->template . '/css/user.css';

if (file_exists($userCss) && filesize($userCss) > 0)
{
	$this->addStyleSheetVersion($this->baseurl . '/templates/' . $this->template . '/css/user.css');
}

/* // Load optional RTL Bootstrap CSS
JHtml::_('bootstrap.loadCss', false, $this->direction);

// Adjusting content width
if ($this->countModules('position-7') && $this->countModules('position-8'))
{
	$span = "span6";
}
elseif ($this->countModules('position-7') && !$this->countModules('position-8'))
{
	$span = "span9";
}
elseif (!$this->countModules('position-7') && $this->countModules('position-8'))
{
	$span = "span9";
}
else
{
	$span = "span12";
}

// Logo file or site title param
if ($this->params->get('logoFile'))
{
	$logo = '<img src="' . JUri::root() . $this->params->get('logoFile') . '" alt="' . $sitename . '" />';
}
elseif ($this->params->get('sitetitle'))
{
	$logo = '<span class="site-title" title="' . $sitename . '">' . htmlspecialchars($this->params->get('sitetitle'), ENT_COMPAT, 'UTF-8') . '</span>';
}
else
{
	$logo = '<span class="site-title" title="' . $sitename . '">' . $sitename . '</span>';
} */
?>
<!DOCTYPE html>
<html lang="<?php echo $this->language; ?>" dir="<?php echo $this->direction; ?>">
<head>
	<!-- <meta name="viewport" content="width=device-width, initial-scale=1.0" /> -->
	<link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,400i,600,700,800&amp;subset=cyrillic,cyrillic-ext" rel="stylesheet">
	<jdoc:include type="head" />
	<!--[if lt IE 9]><script src="<?php echo JUri::root(true); ?>/media/jui/js/html5.js"></script><![endif]-->
	<?php unset($this->_generator);?>
</head>
<body class="site <?php echo $option
	. ' view-' . $view
	. ($layout ? ' layout-' . $layout : ' no-layout')
	. ($task ? ' task-' . $task : ' no-task')
	. ($itemid ? ' itemid-' . $itemid : '')
	. ($params->get('fluidContainer') ? ' fluid' : '');
	echo ($this->direction == 'rtl' ? ' rtl' : '');
?>">
	<!-- Body -->
	
	<header class="header" role="banner">
		<div class="top-line">
			<div class="top-inner">
				<div class="geo-top">
					г. Ростов-на-Дону <span>бульвар Комарова 20</span>
                    <a class="select-city" id="select-city">Выбрать город</a>
				</div>
				<?php if ($this->countModules('position-1')) : ?>
					<nav class="navigation" role="navigation">
						<div class="navbar pull-left">
							<a class="btn btn-navbar collapsed" data-toggle="collapse" data-target=".nav-collapse">
								<span class="icon-bar"></span>
								<span class="icon-bar"></span>
								<span class="icon-bar"></span>
							</a>
						</div>
						<div class="nav-collapse">
							<jdoc:include type="modules" name="position-1" style="none" />
						</div>
					</nav>
				<?php endif; ?>
			</div>
		</div>
		<div class="header-inner clearfix">
			<a class="logo" href="<?php echo $this->baseurl; ?>/">
				<img src="/images/logo.png" alt="Суши-Даром">
			</a>
			<div class="top-tel">
				<span class="tel-kod">8(800)</span>555-82-06 <br> <!--<span class="tel-text">Сделайте заказ по телефону</span>-->
                <span class="tel-kod">8(863)</span>229-69-46
			</div>
			<div class="top-time">
				работаем <span class="allday">Ежедневно</span><br>
				<span class="work-time">с 10:00 до 24:00</span>
			</div>
			<a href="/index.php?option=com_zoo&controller=basket&task=index" class="to-cart"><span>Перейти в корзину</span></a>
			<a href="/aktsii.html" class="to-skidka"><span>Получить скидку <!--50%--></span></a>
			<div class="skidka-note">
				
			</div>
			<div class="header-search pull-right">
				<jdoc:include type="modules" name="position-0" style="none" />
			</div>
		</div>
		<div class="slide_panel_wrap">	
			<div class="slide_panel">
				<div class="open"><img src="/images/cart.png"></div>
				<jdoc:include type="modules" name="cart" />
			</div>
		</div>	
	</header>	
	<?php if ($this->countModules('banner')) : ?>
	<div class="slider">
		<div class="slider-inner">
			<jdoc:include type="modules" name="banner" style="xhtml" />
		</div>
	</div>
	<?php endif; ?>
	<?php if ($this->countModules('position-8')) : ?>
		<!-- Begin Sidebar -->
		<div class="katalog-nav">
				<jdoc:include type="modules" name="position-8" style="xhtml" />
		</div>
		<!-- End Sidebar -->
	<?php endif; ?>
	<div class="body">
		<div class="container<?php echo ($params->get('fluidContainer') ? '-fluid' : ''); ?>">
			<!-- Header -->
			
			
			
			<div class="row-fluid">
				
				<main id="content" role="main" class="<?php echo $span; ?>">
					<!-- Begin Content -->
					<jdoc:include type="modules" name="position-2" style="none" />
					<jdoc:include type="message" />
					<jdoc:include type="component" />
					<jdoc:include type="modules" name="position-3" style="xhtml" />
					<!-- End Content -->
				</main>
				<?php if ($this->countModules('position-7')) : ?>
					<div id="aside" class="span3">
						<!-- Begin Right Sidebar -->
						<jdoc:include type="modules" name="position-7" style="well" />
						<!-- End Right Sidebar -->
					</div>
				<?php endif; ?>
			</div>
		</div>
	</div>
	<!-- Footer -->
	<footer class="footer" role="contentinfo">
		<div class="footer-inner">
			<jdoc:include type="modules" name="footer" style="none" />
			<hr />
			<p>
				<span class="copyright">&copy; <?php echo date('Y'); ?> <?php echo $sitename; ?></span>
				<span class="developer">
					<a href="http://webmaster.vsmart.su/" title="Разработчик сайта" target="_blank">Разработчик сайта</a> - <img src="/images/vs.png" alt="VS">
				</span>
			</p>
		</div>
	</footer>
	<jdoc:include type="modules" name="debug" style="none" />
	<script> window.appsConfig = {"apiDomain":"ru.foodsoul.pro","chainId":958,"buttonOffset":24,"position":"bottomRight","transformButton":false,"orientation":"horizontal","delay":100,"buttonOffsetVertical":24,"buttonOffsetHorizontal":24,"backgroundUrl":"https://static.foodsoul.pro/apps-promoter/images/backgrounds/city_1.jpg"}; </script>
<script src="https://static.foodsoul.pro/apps-promoter/dist/apps-promoter.js" async></script>
</body>
</html>
