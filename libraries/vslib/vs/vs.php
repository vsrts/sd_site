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

                case loadObject:
                    $results = $db->loadObject();
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
                        WHERE id = '" . $id . "'";
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


}