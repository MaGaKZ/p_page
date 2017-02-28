jQuery("document").ready(function($) {
    jQuery("document").ready(function($) {

        var nav = $('.nav');

        $(window).scroll(function() {
            if ($(this).scrollTop() > 681) {
                nav.addClass("fixed");
            } else {
                nav.removeClass("fixed");
            }
        });

    });
})
