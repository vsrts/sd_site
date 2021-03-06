<?php

class ModSliderHelper{
	
    public static function getSlider($params){
        $config = new JConfig();
        $main_db = $config->db;

        $db =JFactory::getDBO();
        $vs = new VslibVs();
        $database_name = $vs->getDbName();

        if ($db->select($database_name)) {

            $query = "SELECT image, code
                        FROM slides
                        LEFT JOIN slides_cities ON slides_cities.slides_id=slides.id
                        LEFT JOIN cities ON slides_cities.cities_id=cities.id
                        WHERE cities.subdomain = '" . $params . "' ORDER BY sort ASC"
;

            $db->setQuery($query);
            $results = $db->loadObjectList();

            $db->select($main_db);

            return $results;


        }

    }

//select tbl1.name, tbl2.info
//from tbl3
//join tbl1 on tbl1.id=tbl3.id1
//join tbl2 on tbl2.id=tbl3.id2

//SELECT m.*, t.* FROM (mags m JOIN mag_tov mt ON m.mag_id=mt.mt_mag_id) JOIN tovs t ON mt.mt_tov_id=t.tov_id WHERE tov_name IN ('молоко', 'мясо', 'чай')
//
//Так же можете использовать LEFT OUTER JOIN и/или RIGHT OUTER JOIN если, например, хотите выводить товары, которые еще не занесены в таблицу mag_tov




}
