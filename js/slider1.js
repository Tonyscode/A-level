function SlickInit() {
    window.slick1 = $('.sl').slick({
        dots: true,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: true,
        nextArrow: '<button id="prev" type="button" class="btn btn-juliet"><i class="fa fa-angle-right" aria-hidden="true"></i>',
        prevArrow: '<button id="next" type="button" class="btn btn-juliet"><i class="fa fa-angle-left" aria-hidden="true"></i>'
        //appendArrows: $('.my-arrow'),
        //prevArrow: '<button id="prev" type="button" class="btn btn-juliet"><i class="fa fa-angle-double-left" aria-hidden="true"></i></button>',
        //nextArrow: '<button id="next" type="button" class="btn btn-juliet"><i class="fa fa-angle-double-right" aria-hidden="true"></i></button>'
    });
}
SlickInit();