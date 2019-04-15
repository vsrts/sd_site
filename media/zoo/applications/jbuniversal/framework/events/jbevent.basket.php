<?php
/**
 * JBZoo App is universal Joomla CCK, application for YooTheme Zoo component
 * @package     jbzoo
 * @version     2.x Pro
 * @author      JBZoo App http://jbzoo.com
 * @copyright   Copyright (C) JBZoo.com,  All rights reserved.
 * @license     http://jbzoo.com/license-pro.php JBZoo Licence
 * @coder       Denis Smetannikov <denis@jbzoo.com>
 */

// no direct access
defined('_JEXEC') or die('Restricted access');


/**
 * Class JBEventBasket
 */
class JBEventBasket extends JBEvent
{
    /**
     * @param AppEvent $event
     */
    public static function beforeSave($event)
    {
        self::app()->jbevent->fireElements($event);
    }

    /**
     * @param AppEvent $event
     */
    public static function saved($event)
    {
        self::app()->jbevent->fireElements($event);
        $subject = $event->getSubject();

        $name = $subject->getShippingFieldElement('027340dd-cd90-4ae7-8539-fdaca883e45a')->data()->value;
        $phone = $subject->getShippingFieldElement('33e28628-0984-475e-b6d3-c72d62843afe')->data()->value;
        $street = $subject->getShippingFieldElement('ecc6384b-e38e-41fe-ac99-fd81bdf81eb2')->data()->value;
        $home = $subject->getShippingFieldElement('d4616f03-cd33-4c9d-8a9e-55e3d6b81e72')->data()->value;
        $apart = $subject->getShippingFieldElement('e3314460-de3d-4b0d-8dd2-b39a01648d5b')->data()->value;
        $desc = $subject->getShippingFieldElement('57cbbee3-15dc-4957-a2c9-c13e910395d0')->data()->value;
        $shipping = $subject->getShippingElement('1e0dd1a8-f4b5-4486-b6a1-90ab9ef2ee8f');


        $items = $subject->getItems();
        $product = array();
        $product_kol = array();
        foreach($items as $item){
            $sku = $item->find('elements._sku');
            $product[] = $sku;
            $quantity = $item->quantity;
            $product_kol[] = $quantity;
        }


//детали заказа в кодировке utf-8
        $param['secret'] = "34GnZe7d89y7bdt67Dbyret67HDSs7ye25tH9nQ8n86saki8Qkt6tN2nir6EkrH9h5Hffiezf9Qhk3e3bAYyaHHi2ER9Yk95eGanTeK3en9sbdfdE4AFB8SkDykiHkdQTd4BiDrrRnHTtR22Gks7h9hNtzZ4H3Fr6ySe28zDk6iGH8tehNatNh66GSZdGrtDNaGA954i2aTy9bDfQDDrNzhfb7iKiFa2GHkFBbSndAKbDaieDQyd9FibBz";			//ключ api
        if($shipping){
            $param['street']  = "Самовывоз!";
        }else{
            $param['street']  = $street;		//улица
        }
        $param['home']	= $home; 			//дом
        $param['apart']	= $apart;	 		//квартира
        $param['phone'] = $phone;	//телефон
        $param['descr']	= "Заказ с сайта! " . $desc; 		//комментарий
        $param['name']	= $name; 		//имя клиента

//подготовка запроса
        foreach ($param as $key => $value) {
            $data .= "&".$key."=".$value;
        }

//содержимое заказа
        foreach ($product as $key => $value){
            $data .= "&product[".$key."]=".$value."";
            $data .= "&product_kol[".$key."]=".$product_kol[$key]."";
            if(isset($product_mod[$key])) {
                $data .= "&product_mod[".$key."]=".$product_mod[$key]."";
            }
        }


//отправка
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, "https://app.frontpad.ru/api/index.php?new_order");
        curl_setopt($ch, CURLOPT_FAILONERROR, 1);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER,1);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);
        curl_setopt($ch, CURLOPT_TIMEOUT, 30);
        curl_setopt($ch, CURLOPT_POST, 1);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
        $result = curl_exec($ch);
        curl_close($ch);

//результат
        date_default_timezone_set('Europe/Samara');
        $date = date('Y-m-d H:i:s');
        file_put_contents('log.txt', "\n" . $date. "-" . $result, FILE_APPEND);
        //  echo $result;
    }

    /**
     * @param AppEvent $event
     */
    public static function afterSave($event)
    {
        self::app()->jbevent->fireElements($event);
    }

    /**
     * @param AppEvent $event
     */
    public static function updated($event)
    {
        self::app()->jbevent->fireElements($event);
    }

    /**
     * @param AppEvent $event
     */
    public static function orderStatus($event)
    {
        self::app()->jbevent->fireElements($event);
    }

    /**
     * @param AppEvent $event
     */
    public static function shippingStatus($event)
    {
        self::app()->jbevent->fireElements($event);
    }

    /**
     * @param AppEvent $event
     */
    public static function paymentStatus($event)
    {
        self::app()->jbevent->fireElements($event);
    }

    /**
     * @param AppEvent $event
     */
    public static function paymentCallback($event)
    {
        self::app()->jbevent->fireElements($event);
    }

    /**
     * @param AppEvent $event
     */
    public static function paymentSuccess($event)
    {
        self::app()->jbevent->fireElements($event);
    }

    /**
     * @param AppEvent $event
     */
    public static function paymentFail($event)
    {
        self::app()->jbevent->fireElements($event);
    }

    /**
     * @param AppEvent $event
     */
    public static function addItem($event)
    {
        self::app()->jbevent->fireElements($event);
    }

    /**
     * @param AppEvent $event
     */
    public static function updateItem($event)
    {
        self::app()->jbevent->fireElements($event);
    }

    /**
     * @param AppEvent $event
     */
    public static function changeQuantity($event)
    {
        self::app()->jbevent->fireElements($event);
    }

    /**
     * @param AppEvent $event
     */
    public static function removeItem($event)
    {
        self::app()->jbevent->fireElements($event);
    }

    /**
     * @param AppEvent $event
     */
    public static function removeVariant($event)
    {
        self::app()->jbevent->fireElements($event);
    }

    /**
     * @param AppEvent $event
     */
    public static function removeItems($event)
    {
        self::app()->jbevent->fireElements($event);
    }

    /**
     * @param AppEvent $event
     */
    public static function recount($event)
    {
        self::app()->jbevent->fireElements($event);
    }

}
