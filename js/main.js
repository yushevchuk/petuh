(function($) {
// test conection
    console.log('jquery content');

    var window_height = $(window).height();
    var $bottomHeader = $(".bottom-header");

    if($(window).width() < 749) {
        $bottomHeader.height(window_height);
    }
})(jQuery);
