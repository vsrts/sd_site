<?php

class VslibVs
{
    private $dbName = "sushi"; //Таблица в БД
    public $domain = "ростов.суши-даром.рф";
    //public $domain = idn_to_utf8($_SERVER['SERVER_NAME']);

    //Получаем поддомен сайта
    public function getSubdomain(){
        $subdomain = explode('.', $this->domain);
        return $subdomain[0];
    }

    public function getdbName(){
        return $this->dbName;
    }

    //Получаем результат запроса где $select это sql запрос а $type это метод получения результата
    private function getData($select, $type){
        $config = new JConfig();
        $main_db = $config->db;

        $db =JFactory::getDBO();
        if ($db->select($this->dbName)) {
            $query = $select;
            $db->setQuery($query);
            switch ($type){
                case loadResult:
                    $results = $db->loadResult();
                    break;

                case loadColumn:
                    $results = $db->loadColumn();
                    break;

                case loadObject:
                    $results = $db->loadObject();
                    break;

                case loadObjectList:
                    $results = $db->loadObjectList();
                    break;
            }
            $db->select($main_db);
            return $results;
        }
    }

    //получаем данные точки по id
    public function getPoint($id){
            $select = "SELECT *
                        FROM points
                        JOIN cities ON cities.id=points.city
                        WHERE points.id = '" . $id . "'";
            $type = "loadObject";
            return $this->getData($select, $type);
    }

    static public function selectPoint(){
        //Определяем выбранную точку
        if(isset($_POST['point'])) {
            setcookie("point",(int)$_POST['point'], time()+3600); //Записать куку
        }
        $option = isset($_POST['point']) ? (int)$_POST['point'] : (isset($_COOKIE["point"]) ? (int)$_COOKIE["point"] : 0);
        return $option;
    }

    public function getPoints(){

        $select = "
            SELECT id
            FROM cities
            where(subdomain = '" . $this->getSubdomain() . "')
        ";
        $type = "loadResult";
        $cityId = $this->getData($select, $type);

        $select = "
            SELECT *
                FROM points
                JOIN cities ON cities.id=points.city
                WHERE points.city = '" . $cityId . "'";

        $type = "loadObjectList";
        return $this->getData($select, $type);
    }

    public function getPointCategories($pointId){
        $select = "SELECT categories.name
                    FROM categories 
                    JOIN point_categories ON point_categories.category_id=categories.id
                    WHERE point_categories.point_id = '" . $pointId . "'";
        $type = "loadColumn";
        return $this->getData($select, $type);
    }

    public function printContacts(){
        $points = $this->getPoints();

        foreach($points as $point){
            echo '       
            <div class="kont">
                <p class="k-adr">г. ' . $point->name . ', ' . $point->address . '</p>
                <p class="k-tel">';
                    if($point->second_phone){
                        echo $point->phone . ' | ' . $point->second_phone;
                    }else{
                        echo $point->phone;
                    }

                echo '</p>
                <p class="k-mail">' . $point->email . '</p>
                <p class="k-time">' . $point->time . '</p>
            </div>';
        }
    }
}
