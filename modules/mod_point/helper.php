<?php

class ModPointHelper{
    public static function getPoints($params){
//        $cities = $params->get('cities');
//        return $cities;

        $config = new JConfig();
        $main_db = $config->db;

        $db =JFactory::getDBO();
        $vs = new VslibVs();
        $database_name = $vs->getDbName();

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
}