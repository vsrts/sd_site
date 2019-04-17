<?php
// No direct access
defined('_JEXEC') or die;

$option = VslibVs::selectPoint();
$select[$option] = 'checked';

        echo "<pre>";
        var_dump($option);
 //       print_r($points);
        echo "</pre>";
?>

<div class="point-form">
  <div class="point-form-block">
      <div class="point-form-content">
        <p class="pointtext">
            Выберите город:
        </p>
        <div class="points">
            <form method="post">
                <?php foreach($points as $point) : ?>
                <input name="point" type="radio" value="<?= $point->id; ?>" onchange="this.form.submit()" <?= $select[$point->id]; ?>>                <?= $point->address; ?>
                <?php endforeach; ?>
            </form>
        </div>
      </div>
  </div>
</div>
