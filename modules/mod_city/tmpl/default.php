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
                $domain = idn_to_utf8($_SERVER['SERVER_NAME']);
                $subdomain = explode('.', $domain);
                foreach($cities as $city){
                    if(!$city->subdomain){
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
