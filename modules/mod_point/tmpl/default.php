<?php
// No direct access
defined('_JEXEC') or die; ?>

<div class="point-form">
  <div class="point-form-block">
      <div class="point-form-content">
        <p class="pointtext">
            Выберите город:
        </p>
        <div class="points">
        <?php
            if(isset($_POST['point'])) {
                setcookie("point",(int)$_POST['point'], time()+3600); //Записать куку
            }

            $option = isset($_POST['point']) ? (int)$_POST['point'] : (isset($_COOKIE["point"]) ? (int)$_COOKIE["point"] : 0);
            $select[$option] = 'checked';
        ?>
            <form method="post">
                <?php foreach($points as $point) : ?>
                <input name="point" type="radio" value="<?= $point->id; ?>" onchange="this.form.submit()" <?= $select[$point->id]; ?>><?= $point->address; ?>
                <?php endforeach; ?>
            </form>

        <?php
        echo "<pre>";
        var_dump($option);
        print_r($points);
        echo "</pre>";
        ?>

        </div>
      </div>
  </div>
</div>
