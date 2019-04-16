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
//    private function getData($select, $type){
//        $config = new JConfig();
//        $main_db = $config->db;
//
//        $db =JFactory::getDBO();
//        if ($db->select($this->dbName)) {
//            $query = $select;
//            $db->setQuery($query);
//            switch ($type){
//                case loadResult:
//                    $results = $db->loadResult();
//                    break;
//            }
//            $db->select($main_db);
//            return $results;
//        }
//    }

    //получаем id города по его поддомену
//    public function getCityId(){
//            $select = "SELECT id
//                        FROM cities
//                        WHERE subdomain = '" . $this->getSubdomain() . "'";
//            $type = "loadResult";
//            return $this->getData($select, $type);
//    }


}