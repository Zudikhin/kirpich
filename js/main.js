$(document).ready(function() {
    "use strict";

    $(".header_main_burger_show").click(function() {
        $(".header").addClass("active");
        $(".header_drop").slideDown();
    });

    $(".header_main_burger_hide").click(function() {
        $(".header").removeClass("active");
        $(".header_drop").slideUp();
    });

    $('.sertificate_wrap_slider_main').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true,
        autoplay: false,
        autoplaySpeed: 1000,
        infinite: true,
        cssEase: 'linear',
        appendDots: $(".sertificate_wrap_dots"),
        arrows: true,
        prevArrow: $('.sertificate_wrap_slider_prev'),
        nextArrow: $('.sertificate_wrap_slider_next'),
        responsive: [
          {
            breakpoint: 1023,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 575,
            settings: {
              slidesToShow: 1,
              fade: true,
              slidesToScroll: 1
            }
          }
        ]
    });
 
});