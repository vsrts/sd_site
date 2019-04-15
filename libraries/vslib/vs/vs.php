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


}