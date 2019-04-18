jQuery(document).ready(function(){

    if (document.body.clientWidth <= '940') {
        jQuery('.navigation').hide();
        jQuery('.header').addClass('header-scroll');
        jQuery('.menu-mob').click(function(){
            jQuery('.navigation').toggle();
        });
    }else{
        jQuery('.navigation').fadeIn();
        jQuery('.header').removeClass('header-scroll');
    }

    if(jQuery("div").is(".jbcart-module-items"))	 {
        jQuery('.tochka').addClass('display-tochka');
    }else{
        jQuery('.tochka').removeClass('display-tochka');
    }

    jQuery("div.slide_panel div.open").toggle(function(){
        jQuery("div.slide_panel").animate({right:'213px'},500);}, function() {
        jQuery("div.slide_panel").animate({right:0},500);
    });

    jQuery('.jsAddToCart').click(function(){
        jQuery('div.slide_panel').animate({right:'213px'},500);

        ;})
    jQuery('.select-gorod').click(function(){
        jQuery('.city-form').addClass('city-form-open');
        jQuery('.hide-block').addClass('show-block');
    });
    jQuery('.cityclose').click(function(){
        jQuery('.city-form').removeClass('city-form-open');
        jQuery('.hide-block').removeClass('show-block');
    });

    jQuery('.zapolnit-anketu').click(function(){
        jQuery('.forma-vakansii-block').addClass('open-block');
        jQuery('.vakansii-block').addClass('close-block');
    });

    jQuery('.close-button').click(function(){
        jQuery('.forma-vakansii-block').removeClass('open-block');
        jQuery('.vakansii-block').removeClass('close-block');
    });

});

    // if(document.getElementById('selectcity').value == "1" || document.getElementById('selectcity').value == "3") {
    //     jQuery(".item-123").css(
    //         {'display': 'none'}
    //     );
    // }

    // if(document.getElementById('selectcity').value == "2") {
    //     document.getElementById('clock').innerHTML = "с 10:00 до 22:00";
    //     document.getElementById('clock2').innerHTML = "с 10:00 до 22:00";
    //     document.getElementById('fclock').innerHTML = "Ежедневно с 10:00 до 22:00";
    //     document.getElementById('adr').innerHTML = "ул. Таганрогская 114";
    // }
    //
    // if(document.getElementById('selectcity').value == "3") {
    //     document.getElementById('clock').innerHTML = "с 10:00 до 23:00";
    //     document.getElementById('clock2').innerHTML = "с 10:00 до 24:00";
    //     document.getElementById('fclock').innerHTML = "пн-чт с 10:00-23:00, пт-вс с 10:00-24:00";
    //     document.getElementById('adr').innerHTML = "ул. Темерницкая 41б";
    // }
    // if(document.getElementById('selectcity').value == "4") {
    //     document.getElementById('clock').innerHTML = "с 10:00 до 23:00";
    //     document.getElementById('clock2').innerHTML = "с 10:00 до 24:00";
    //     document.getElementById('fclock').innerHTML = "пн-чт с 10:00-23:00, пт-вс с 10:00-24:00";
    //     document.getElementById('adr').innerHTML = "ул. Малиновского 38/29";
    // }


// var strGET = window.location.search.replace( '?', '');
//
// jQuery(window).on('load', function() {
//     var hideTheModal = jQuery.cookie('hideTheModal');
//     if(strGET == "from=select"){
//         jQuery.cookie('hideTheModal', { expires: 30 });
//     }
//     // если cookie не установлено...
//     if(hideTheModal == null & strGET != "from=select"){
//         // задержка 7 секунд
//         setTimeout(function(){
//             // вызвать модальное окно
//             jQuery('.city-form').addClass('city-form-open');
//             // если кнопка "Закрыть" нажата
//             jQuery('.cityclose').click(function(){
//                 jQuery('.city-form').removeClass('city-form-open');
//                 // добавить cookie
//                 jQuery.cookie('hideTheModal', { expires: 30 });
//             });
//         }, 1000);
//     }
