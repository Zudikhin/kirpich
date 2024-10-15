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

    if ($(window).width() < 992) {
      $('.product_block_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        autoplay: false,
        autoplaySpeed: 1000,
        infinite: true,
        cssEase: 'linear',
        appendDots: $(".product_block_dots"),
        arrows: false
      });
    }

    $(".load_more").click(function() {
      $(".product_block_main_wrap_characteristics").addClass("show");
    });

    $(".product_block_main_wrap_mob_top_valute span").click(function() {
      $(".product_block_main_wrap_mob_top_valute span").removeClass("active");
      $(this).addClass("active");
    });

    $(".product_block_main_wrap_desktop_top_valute span").click(function() {
      $(".product_block_main_wrap_desktop_top_valute span").removeClass("active");
      $(this).addClass("active");
    });

    $(".nav_product_block_item").click(function() {
      var attr = $(this).attr("data-target");
      $([document.documentElement, document.body]).animate({
        scrollTop: $(`#${attr}`).offset().top
      }, 1000);
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

    if ($(window).width() < 1200) {
      $('.photo_block_slider_wrap').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
        autoplay: false,
        autoplaySpeed: 1000,
        infinite: true,
        cssEase: 'linear',
        appendDots: $(".photo_block_slider_dots"),
        arrows: true,
        prevArrow: $('.photo_block_slider_prev'),
        nextArrow: $('.photo_block_slider_next'),
        responsive: [
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          }
        ]
      });
    } else {
      $('.photo_block_slider_wrap_item').hover(function() {
        $('.photo_block_slider_wrap_item').removeClass('active');        
        $(this).addClass('active');
      });
    }
    
    $('.photo_block_slider_prev').click(function() {
      var items = $('.photo_block_slider_wrap_item');
      var current = $('.photo_block_slider_wrap_item.active');
      var currentIndex = items.index(current);
      items.removeClass('active');
      if (currentIndex === 0) {
        items.last().addClass('active');
      } else {
        items.eq(currentIndex - 1).addClass('active');
      }
    });

    $('.photo_block_slider_next').click(function() {
      var items = $('.photo_block_slider_wrap_item');
      var current = $('.photo_block_slider_wrap_item.active');
      var currentIndex = items.index(current);
      items.removeClass('active');
      if (currentIndex === items.length - 1) {
          items.first().addClass('active');
      } else {
          items.eq(currentIndex + 1).addClass('active');
      }
    });

    $(".img-comp-container_left_item").click(function() {
      $(".img-comp-container_left_item").removeClass("active");
      var attr = $(this).attr("data-target");
      $(this).addClass("active");
      $(".left_image").removeClass("active");
      $(`#${attr}`).addClass("active");
    });

    $(".img-comp-container_right_item").click(function() {
      $(".img-comp-container_right_item").removeClass("active");
      var attr = $(this).attr("data-target");
      $(this).addClass("active");
      $(".right_image").removeClass("active");
      $(`#${attr}`).addClass("active");
    });

    function initComparisons() {
      var x, i;
      /* Find all elements with an "overlay" class: */
      x = document.getElementsByClassName("img-comp-overlay");
      for (i = 0; i < x.length; i++) {
        /* Once for each "overlay" element:
        pass the "overlay" element as a parameter when executing the compareImages function: */
        compareImages(x[i]);
      }
    
      function compareImages(img) {
        var slider, clicked = 0, w, h;
        /* Get the width and height of the img element's parent (for 100% width): */
        const parent = img.parentElement;
        w = parent.offsetWidth;
        h = parent.offsetHeight;
    
        /* Set the width of the img element to 50% of the parent width: */
        img.style.width = (w / 2) + "px";
        img.style.height = "auto"; // To maintain aspect ratio if needed
    
        /* Create slider: */
        slider = document.createElement("DIV");
        slider.setAttribute("class", "img-comp-slider");
    
        /* Insert slider */
        parent.insertBefore(slider, img);
    
        /* Position the slider in the middle: */
        slider.style.left = (w / 2) - (slider.offsetWidth / 2) + "px";
    
        /* Execute a function when the mouse button is pressed: */
        slider.addEventListener("mousedown", slideReady);
        /* And another function when the mouse button is released: */
        window.addEventListener("mouseup", slideFinish);
        /* Or touched (for touch screens: */
        slider.addEventListener("touchstart", slideReady);
        /* And released (for touch screens: */
        window.addEventListener("touchend", slideFinish);
    
        function slideReady(e) {
          /* Prevent any other actions that may occur when moving over the image: */
          e.preventDefault();
          /* The slider is now clicked and ready to move: */
          clicked = 1;
          /* Execute a function when the slider is moved: */
          window.addEventListener("mousemove", slideMove);
          window.addEventListener("touchmove", slideMove);
        }
    
        function slideFinish() {
          /* The slider is no longer clicked: */
          clicked = 0;
        }
    
        function slideMove(e) {
          var pos;
          /* If the slider is no longer clicked, exit this function: */
          if (clicked == 0) return false;
          /* Get the cursor's x position: */
          pos = getCursorPos(e);
          /* Prevent the slider from being positioned outside the image: */
          if (pos < 0) pos = 0;
          if (pos > w) pos = w;
          /* Execute a function that will resize the overlay image according to the cursor: */
          slide(pos);
        }
    
        function getCursorPos(e) {
          var a, x = 0;
          e = (e.changedTouches) ? e.changedTouches[0] : e;
          /* Get the x positions of the image's parent: */
          a = parent.getBoundingClientRect();
          /* Calculate the cursor's x coordinate, relative to the image's parent: */
          x = e.pageX - a.left;
          /* Consider any page scrolling: */
          x = x - window.pageXOffset;
          return x;
        }
    
        function slide(x) {
          /* Resize the image according to the cursor position: */
          img.style.width = x + "px";
          /* Position the slider: */
          slider.style.left = img.offsetWidth - (slider.offsetWidth / 2) + "px";
        }
      }
    }
    
    initComparisons();

});