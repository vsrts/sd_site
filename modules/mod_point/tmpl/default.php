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
            $select = array();
            $option = isset($_POST['point']) ? (int)$_POST['point'] : (isset($_COOKIE["point"]) ? (int)$_COOKIE["rario"] : 1);
            $select[$option] = 'checked';
            ?>
            <form method="post">
                <input name="point" type="radio" value="1" onchange="this.form.submit()" <?=$select[1]?>>Тест
                <input name="point" type="radio" value="2" onchange="this.form.submit()" <?=$select[2]?>>Тест
                <input name="point" type="radio" value="3" onchange="this.form.submit()" <?=$select[3]?>>Тест
                <input name="point" type="radio" value="4" onchange="this.form.submit()" <?=$select[4]?>>Тест
            </form>
        <?php
                $point = $points[$_POST['point']];

                echo $point->phone;
                ?>

        </div>
      </div>
  </div>
</div>
