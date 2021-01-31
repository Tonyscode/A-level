(function($){
    $(function() {
        $('.menu__icon').on('click', function() {
            $(".menu__links").slideToggle(500);
            $(this).closest('.menu').toggleClass('menu_state_open');
        });
    });
})(jQuery);

$("a.scroll-to").on("click", function(e){
    e.preventDefault();
    var anchor = $(this).attr('href');
    $('html, body').stop().animate({
        scrollTop: $(anchor).offset().top - 133
    }, 800);
});