(function($) {
// test conection
    console.log('jquery content');

    var window_height = $(window).height();
    var $bottomHeader = $(".bottom-header");

    if($(window).width() < 749) {
        $bottomHeader.height(window_height);
    }
    // extend menu
    var $btn_menu = $('#btn-menu'),
        $close    = $('#close'),
        $menu     = $('.extend-menu');

    if($menu.length) {
        $btn_menu.click(function(e) {
            e.preventDefault();
            $menu.slideDown(400);
        });
        $close.click(function(e) {
            e.preventDefault();
            $menu.slideUp(250);
        });
    }

    // conect gallery
    $('.gallery').slick({
        mobileFirst: true,
        slidesToShow: 1,
        variableWidth: true,
        responsive: [
            {
            breakpoint: 480,
                settings: {
                    slidesToShow: 2
                }
            },
            {
            breakpoint: 750,
                settings: {
                    slidesToShow: 3
                }
            },
            {
            breakpoint: 1170,
                settings: {
                    slidesToShow: 4
                }
            },
            {
            breakpoint: 2000,
                settings: {
                    slidesToShow: 5
                }
            }
        ]
    });
})(jQuery);
