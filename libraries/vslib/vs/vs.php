<?php

class VslibVs
{
    private $dbName = "sushi";
    public $domain = "ростов.суши-даром.рф";
    //public $domain = idn_to_utf8($_SERVER['SERVER_NAME']);

    public function getSubdomain(){
       return explode('.', $this->domain);
    }

    public function getdbName(){
        return $this->dbName;
    }

    private function getData(){
        $config = new JConfig();
        $main_db = $config->db;

        $db =JFactory::getDBO();
        $database_name = $this->dbName;

        if ($db->select($database_name)) {

            $query = $db->getQuery(true);
            $query->select('*')
                ->from('points')
                ->order('name ASC');

            $db->setQuery($query);
            $results = $db->loadObjectList();

            $db->select($main_db);

            return $results;
        }
    }
    public function getPoints(){
        $select = "select('*')
            ->from('points')
            ->order('name ASC')";

        $this->getData();
    }

}