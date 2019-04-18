<?php
// No direct access
defined('_JEXEC') or die;

$option = VslibVs::selectPoint();
$select[$option] = 'checked';


if($option == 0 || !$points){
    $formOpen = " city-form-open";
}
?>

<div class="city-form<?= $formOpen; ?>">
  <div class="city-form-block">
      <div class="city-form-content">
          <div class="points">
              <?php if(!$points) : ?>
                <p>Извините, но мы временно не можем принимать заказы, попробуйте зайти позднее!</p>
                <img src="/images/close.gif" alt="">
              <?php else: ?>
              <p>Выберите заведение</p>
              <form method="post">
                  <?php foreach($points as $point) : ?>
                      <input class="hide" id="<?= $point->id; ?>" name="point" type="radio" value="<?= $point->id; ?>" onchange="this.form.submit()" <?= $select[$point->id]; ?>>
                      <label class="cityclose<?= " " . $select[$point->id]; ?>" for="<?= $point->id; ?>"><?= $point->address; ?></label>
                  <?php endforeach; ?>
              </form>
              <?php endif; ?>
          </div>
        <div class="cities">
            <p>или перейдите на другой город</p>
                <?php
                $vs = new VslibVs();
                $subdomain = $vs->getSubdomain();
                foreach($cities as $city){
                    if($city->subdomain == 'новороссийск'){
                        echo '<a href="http://суши-даром.рф?from=select" class="city citylink">' . $city->name . '</a>';
                    }else if($city->subdomain != $subdomain){
                        echo '<a href="http://' . $city->subdomain . '.суши-даром.рф?from=select" class="city citylink">' . $city->name . '</a>';
                    }else{
                        echo '<a class="city cityin">' . $city->name . '</a>';
                    }
                }
                ?>
        </div>
      </div>
  </div>
</div>
