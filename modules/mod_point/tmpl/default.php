<?php
// No direct access
defined('_JEXEC') or die; ?>

<div class="city-form">
  <div class="city-form-block">
      <div class="city-form-content">
        <p class="citytext">
            Выберите город:
        </p>
        <div class="cities">

                <?php
                $vs = new VslibVs();
                $subdomain = $vs->getSubdomain();
                foreach($cities as $city){
                    if($city->subdomain == 'новороссийск'){
                        echo '<a href="http://суши-даром.рф?from=select" class="city citylink">' . $city->name . '</a>';
                    }else if($city->subdomain != $subdomain[0]){
                        echo '<a href="http://' . $city->subdomain . '.суши-даром.рф?from=select" class="city citylink">' . $city->name . '</a>';
                    }else{
                        echo '<a class="city cityclose cityin">' . $city->name . '</a>';
                    }
                }
                ?>

        </div>
      </div>
  </div>
</div>
