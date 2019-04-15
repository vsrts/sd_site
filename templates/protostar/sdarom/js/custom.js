jQuery(document).ready(function(){

    jQuery("div.slide_panel div.open").toggle(function(){
        jQuery("div.slide_panel").animate({right:'213px'},500);}, function() {
        jQuery("div.slide_panel").animate({right:0},500);
    });

    jQuery('.jsAddToCart').click(function(){
        jQuery('div.slide_panel').animate({right:'213px'},500);

        ;})
    jQuery('.select-city').click(function(){
        jQuery('.city-form').addClass('city-form-open');
    });
    jQuery('.cityclose').click(function(){
        jQuery('.city-form').removeClass('city-form-open');
    });

});

jQuery(window).on('load', function() {
    var hideTheModal = jQuery.cookie('hideTheModal');
    // если cookie не установлено...
    if(hideTheModal == null){
        // задержка 7 секунд
        setTimeout(function(){
            // вызвать модальное окно
            jQuery('.city-form').addClass('city-form-open');
            // если кнопка "Закрыть" нажата
            jQuery('.cityclose').click(function(){
                jQuery('.city-form').removeClass('city-form-open');
                // добавить cookie
                jQuery.cookie('hideTheModal', { expires: 30 });
            });
        }, 1000);
    }
});