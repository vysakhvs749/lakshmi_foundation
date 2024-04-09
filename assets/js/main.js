$(function() {
    "use strict";
    /*---------------------------
       Commons Variables
    ------------------------------ */
    var $window = $(window),
        $body = $("body");
    /*---------------------------
       Menu Fixed On Scroll Active
    ------------------------------ */
    $(window).on("scroll", function(e) {
        var window_top = $(window).scrollTop() + 1;
        if(window_top > 250) {
            $(".sticky-nav").addClass("menu_fixed animated fadeInDown");
        } else {
            $(".sticky-nav").removeClass("menu_fixed animated fadeInDown");
        }
    });
    $('[data-bg-image]').each(function() {
        var $this = $(this),
            $image = $this.data('bg-image');
        $this.css('background-image', 'url(' + $image + ')');
    });
    /*-----------------------------
    Video Background
    -----------------------------------*/
    $('.bg-video').vide('assets/video/bg-home', {
        playbackRate: .8,
        muted: true,
        loop: true,
        autoplay: true,
        position: '50% 50%', // Similar to the CSS `background-position` property.
        posterType: 'jpg', // Poster image type. "detect" â€” auto-detection; "none" â€” no poster; "jpg", "png", "gif",... - extensions.
        resizing: true, // Auto-resizing, read: https://github.com/VodkaBears/Vide#resizing
        // bgColor: 'transparent', // Allow custom background-color for Vide div,
        className: 'video-area' // Add custom CSS class to Vide div
    });

  /*--------------------------
        AOS Animation Active
    --------------------------- */
        AOS.init({
            duration: 1000,
            once: true,
        });

    /*---------------------
        Counter Up
    --------------------- */
    $('.counter').counterUp({
        time: 2000
    });

    /*---------------------------
        progress bar animation
    ---------------------------- */
    $('.on-scroll').scrollClass({
        callback: function() {
            jQuery('.progress.active').each(function() {
                jQuery(this).find('.progress-bar').animate({
                    width: jQuery(this).attr('data-percent')
                }, 15);
            });
        }
    });
    /*---------------------------------
        Off Canvas Function
    -----------------------------------*/
    $(".amount-price li a").on('click', function () {
        $(".amount-price li a").removeClass('active');
        $(this).addClass('active');
    });
    /*---------------------------------
        Off Canvas Function
    -----------------------------------*/
    (function() {
        var $offCanvasToggle = $(".offcanvas-toggle"),
            $offCanvas = $(".offcanvas"),
            $offCanvasOverlay = $(".offcanvas-overlay"),
            $navIcon = $(".nav-icon"),
            $mobileMenuToggle = $(".mobile-menu-toggle");
        $offCanvasToggle.on("click", function(e) {
            e.preventDefault();
            var $this = $(this),
                $target = $this.attr("href");
            $body.addClass("offcanvas-open");
            $($target).addClass("offcanvas-open");
            $offCanvasOverlay.fadeIn();
            if($this.parent().hasClass("mobile-menu-toggle")) {
                $this.addClass("close");
            }
        });
        $(".offcanvas-close, .offcanvas-overlay").on("click", function(e) {
            e.preventDefault();
            $body.removeClass("offcanvas-open");
            $offCanvas.removeClass("offcanvas-open");
            $offCanvasOverlay.fadeOut();
            $mobileMenuToggle.removeClass("close");
            $navIcon.removeClass("open");
        });
    })();
    /*----------------------------------
        Off Canvas Menu
    -----------------------------------*/
    function mobileOffCanvasMenu() {
        var $offCanvasNav = $(".offcanvas-menu, .overlay-menu"),
            $offCanvasNavSubMenu = $offCanvasNav.find(".sub-menu");
        /*Add Toggle Button With Off Canvas Sub Menu*/
        $offCanvasNavSubMenu.parent().prepend('<span class="menu-expand"></span>');
        /*Category Sub Menu Toggle*/
        $offCanvasNav.on("click", "li a, .menu-expand", function(e) {
            var $this = $(this);
            if($this.attr("href") === "#" || $this.hasClass("menu-expand")) {
                e.preventDefault();
                if($this.siblings("ul:visible").length) {
                    $this.parent("li").removeClass("active");
                    $this.siblings("ul").slideUp();
                    $this.parent("li").find("li").removeClass("active");
                    $this.parent("li").find("ul:visible").slideUp();
                } else {
                    $this.parent("li").addClass("active");
                    $this.closest("li").siblings("li").removeClass("active").find("li").removeClass("active");
                    $this.closest("li").siblings("li").find("ul:visible").slideUp();
                    $this.siblings("ul").slideDown();
                }
            }
        });
    }
    mobileOffCanvasMenu();
    /*-------------------------
     * Mobile Menu Open
    --------------------------*/
    $('.nav-icon').on("click", function() {
        $(this).toggleClass('open');
    });
    /*-------------------------
     * Offcanvas: User Panel
    --------------------------*/
    function mobileOffCanvasUserPanel() {
        var $offCanvasNav = $('.offcanvas-userpanel'),
            $offCanvasNavSubMenu = $offCanvasNav.find('.user-sub-menu');
        /*Add Toggle Button With Off Canvas Sub Menu*/
        $offCanvasNavSubMenu.parent().prepend('<span class="offcanvas__user-expand"></span>');
        /*Category Sub Menu Toggle*/
        $offCanvasNav.on('click', 'li a, .offcanvas__user-expand', function(e) {
            var $this = $(this);
            if($this.attr('href') === '#' || $this.hasClass('offcanvas__user-expand')) {
                e.preventDefault();
                if($this.siblings('ul:visible').length) {
                    $this.parent('li').removeClass('active');
                    $this.siblings('ul').slideUp();
                    $this.parent('li').find('li').removeClass('active');
                    $this.parent('li').find('ul:visible').slideUp();
                } else {
                    $this.parent('li').addClass('active');
                    $this.closest('li').siblings('li').removeClass('active').find('li').removeClass('active');
                    $this.closest('li').siblings('li').find('ul:visible').slideUp();
                    $this.siblings('ul').slideDown();
                }
            }
        });
    }
    mobileOffCanvasUserPanel();
    $(".offcanvas-userpanel__role").on("click", function(e) {
        $(".user-sub-menu-2").slideToggle("slow");
    });
    /*------------------------------
            Hero Slider
    -----------------------------------*/
    $('.hero-slider-wrapper').slick({
        infinite: true,
        slidesToShow: 1,
        arrows: true,
        prevArrow: '<span class="prev"><i class="fa fa-angle-left"></i></span>',
        nextArrow: '<span class="next"><i class="fa fa-angle-right"></i></span>',
        slidesToScroll: 1,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000,
    });
    /*------------------------------
              Testimonial Slider
      -----------------------------------*/
    $('.testimonial-slider-wrapper').slick({
        infinite: true,
        slidesToShow: 1,
        arrows: true,
        slidesToScroll: 1,
        prevArrow: '<span class="prev"><i class="fa fa-angle-left"></i></span>',
        nextArrow: '<span class="next"><i class="fa fa-angle-right"></i></span>',
        loop: true,
        speed: 800,
        cssEase: 'linear',
        dots: false,
    });
    /*------------------------------
              Testimonial Slider
      -----------------------------------*/
    $('.testimonial-slider-wrapper-2').slick({
        infinite: false,
        slidesToShow: 3,
        arrows: true,
        slidesToScroll: 1,
        prevArrow: '<span class="prev"><i class="fa fa-angle-left"></i></span>',
        nextArrow: '<span class="next"><i class="fa fa-angle-right"></i></span>',
        loop: false,
        speed: 800,
        cssEase: 'linear',
        dots: false,
        responsive: [{
            breakpoint: 1200,
            Settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 992,
            Settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 767,
            Settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 479,
            Settings: {
                slidesToShow: 1,
            }
        }, {
            breakpoint: 400,
            Settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });
    /*------------------------------
              Causes Slider
    -----------------------------------*/
    $('.causes-wrapper-slider').slick({
        infinite: true,
        slidesToShow: 3,
        arrows: true,
        slidesToScroll: 1,
        prevArrow: '<span class="prev"><i class="fa fa-angle-left"></i></span>',
        nextArrow: '<span class="next"><i class="fa fa-angle-right"></i></span>',
        loop: true,
        speed: 800,
        autoplay: true,
        cssEase: 'linear',
        dots: false,
        responsive: [{
            breakpoint: 1200,
            Settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 992,
            Settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 767,
            Settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 479,
            Settings: {
                slidesToShow: 1,
            }
        }, {
            breakpoint: 400,
            Settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });
    /*------------------------------
            Event Slider
    -----------------------------------*/
    $('.event-wrapper-slider').slick({
        infinite: true,
        slidesToShow: 3,
        arrows: true,
        slidesToScroll: 1,
        prevArrow: '<span class="prev"><i class="fa fa-angle-left"></i></span>',
        nextArrow: '<span class="next"><i class="fa fa-angle-right"></i></span>',
        loop: true,
        speed: 800,
        autoplay: true,
        cssEase: 'linear',
        dots: false,
        responsive: [{
            breakpoint: 1200,
            Settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 992,
            Settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 767,
            Settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 479,
            Settings: {
                slidesToShow: 1,
            }
        }, {
            breakpoint: 400,
            Settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });
    /*------------------------------
               Blog Slider
      -----------------------------------*/
    $('.blog-wrapper-slider').slick({
        infinite: true,
        slidesToShow: 3,
        arrows: true,
        slidesToScroll: 1,
        prevArrow: '<span class="prev"><i class="fa fa-angle-left"></i></span>',
        nextArrow: '<span class="next"><i class="fa fa-angle-right"></i></span>',
        loop: true,
        speed: 800,
        autoplay: true,
        adaptiveHeight: true,
        cssEase: 'linear',
        dots: false,
        responsive: [{
            breakpoint: 1200,
            Settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 992,
            Settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 767,
            Settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 479,
            Settings: {
                slidesToShow: 1,
            }
        }, {
            breakpoint: 400,
            Settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });
    /*---------------------------
       Blog Gallery Slider
    ------------------------------ */
    $('.blog-gallery').slick({
        dots: false,
        infinite: true,
        arrows: true,
        prevArrow: '<span class="prev"><i class="fa fa-angle-left"></i></span>',
        nextArrow: '<span class="next"><i class="fa fa-angle-right"></i></span>',
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
    });
    /*---------------------
        venobox
    --------------------- */
    $('.venobox').venobox();
    /*---------------------
        Scroll Up
    --------------------- */
    $.scrollUp({
        scrollText: '<i class="fa fa-arrow-up"></i>',
        easingType: "linear",
        scrollSpeed: 900,
        animation: "fade",
    });
    /*---------------------
        Countdown
    --------------------- */
    $("[data-countdown]").each(function() {
        var $this = $(this),
            finalDate = $(this).data("countdown");
        $this.countdown(finalDate, function(event) {
            $this.html(event.strftime('<span class="cdown day"><span class="cdown-1">%-D</span><p>Days</p></span> <span class="cdown hour"><span class="cdown-1">%-H</span><p>Hours</p></span> <span class="cdown minutes"><span class="cdown-1">%M</span> <p>Mins</p></span> <span class="cdown second"><span class="cdown-1"> %S</span> <p>Sec</p></span>'));
        });
    });
    /*------------------------------
            Brand Slider
    -----------------------------------*/
    $('.brand-slider').slick({
        infinite: true,
        slidesToShow: 6,
        arrows: false,
        slidesToScroll: 1,
        speed: 800,
        cssEase: 'linear',
        autoplay: true,
        loop: true,
        dots: false,
        responsive: [{
            breakpoint: 1200,
            Settings: {
                slidesToShow: 5,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 992,
            Settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 767,
            Settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 479,
            Settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 400,
            Settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }]
    });
});