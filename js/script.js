(function($){
    $(function() {
        $('.menu__icon').on('click', function() {
            $(".menu__links").slideToggle(500);
            $(this).closest('.menu').toggleClass('menu_state_open');
        });
    });
})(jQuery);
