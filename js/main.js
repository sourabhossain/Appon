$(function () {
    //this is for preloader//


    $(window).on('load', function () {
        $(".fakeloder").fadeOut(1000);
    });


    //this is for scrol top//
    $(".back_top").click(function () {

        $("html,body").animate({
            scrollTop: 0
        }, 1000);


    });
    $(window).scroll(function () {

        if ($(this).scrollTop() > 60) {
            $(".back_top").fadeIn(500);
        } else {
            $(".back_top").fadeOut(500);
        }

        //this is for stiky menu//

        if ($(this).scrollTop() > 32) {
            $(".navbar").addClass("new_menu");
        } else {
            $(".navbar").removeClass("new_menu");
        }

    });

    //animation scroll js
    var html_body = $('html, body');
    $('.navbar-nav a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 0
                }, 1500, );
                return false;
            }
        }
    });
    //this is video//
    $('.venobox').venobox();


    //this is for baner slider//

    $('.baner_slider').slick({
        dots: true,
        fade: true,
        autoplay: false,
        infinite: true,
        speed: 200,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
    },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
    },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    }

  ]
    });
    //this is for screen_slider//
    $('.screen_slider').slick({
        dots: true,
        fade: false,
        autoplay: false,
        infinite: true,
        speed: 100,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
    },

            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
    },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
    });
    //this is for team slider//

    $('.team_slider').slick({
        dots: true,
        fade: false,
        autoplay: false,
        infinite: true,
        speed: 100,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
    },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
    },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
    });


    //this is for testimunial //
    $('.testimunial_rectangle').slick({
        dots: false,
        infinite: true,
        arrows: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.all_clint',
        autoplay: true,


    });

    $('.all_clint').slick({
        infinite: true,
        dots: true,
        arrows: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.testimunial_rectangle',
        centerMode: true,
        centerPadding: 0,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
    },

            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
    },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    }

  ]
    });

});
