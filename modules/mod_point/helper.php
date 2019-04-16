<?php

class ModPointHelper{
    public static function getPoints(){

        $config = new JConfig();
        $main_db = $config->db;

        $db =JFactory::getDBO();
        $vs = new VslibVs();
        $database_name = $vs->getDbName();

       if ($db->select($database_name)) {

            $query = $db->getQuery(true);
            $query->select('id')
                ->from('cities')
                ->where("subdomain = '" . $vs->getSubdomain() . "'");
           $db->setQuery($query);
           $cityId = $db->loadResult();

           $query = $db->getQuery(true);
           $query->select('*')
               ->from('points')
               ->where("city = '" . $cityId . "'");
           $db->setQuery($query);
           $results = $db->loadObjectList();

           $db->select($main_db);

           return $results;

        }

    }
}