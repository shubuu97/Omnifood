$(document).ready(function() {
    //For sticky navbar
    $("#features").waypoint(function (direction) {
        if(direction == "down") {
            $("nav").addClass('sticky');
        } else {
            $("nav").removeClass('sticky');
        }
    },{
        offset: '60px;'
    });

    // For scrolling effect
    $('.js-scroll-to-plans').click(function() {
        $('html, body').animate({
            scrollTop: $('#plans').offset().top
        }, 1000);
    });

    $('.js-scroll-to-features').click(function() {
        $('html, body').animate({
            scrollTop: $('#features').offset().top
        }, 1000)
    });

    /* Navigation scroll */
    $(function () {
        $('a[href*=#]:not([href=#])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });


    // Scrolling effect

    $('.js-wp-1').waypoint(function(direction) {
        $('.js-wp-1').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });

    $('.js-wp-2').waypoint(function (direction) {
        $('.js-wp-2').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });

    $('.js-wp-3').waypoint(function(direction) {
        $('.js-wp-3').addClass('animated bounce')
    }, {
        offset: '50%'
    })

    $('.js-wp-4').waypoint(function(direction) {
        $('.js-wp-4').addClass('animated pulse')
    }, {
        offset: '30%'
    })

    // Responsive Navigation

    $('.js-mobile-nav').click(function() {
        var nav = $('.nav-main');
        var icon = $('.js-mobile-nav i');

        nav.slideToggle(200);

        if (icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }
    });
});