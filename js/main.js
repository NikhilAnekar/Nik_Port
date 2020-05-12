    (function ($) {
        "use strict";
      var nav = $('nav');
      var navHeight = nav.outerHeight();

      $('.navbar-toggler').on('click', function() {
        if( ! $('#mainNav').hasClass('navbar-reduce')) {
          $('#mainNav').addClass('navbar-reduce');
        }
      })
        
     $('[data-toggle="tooltip"]').tooltip()

      // Preloader
      $(window).on('load', function () {
        if ($('#preloader').length) {
          $('#preloader').delay(100).fadeOut('slow', function () {
            $(this).remove();
          });
        }
      });

      // Back to top button
      $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
          $('.back-to-top').fadeIn('slow');
        } else {
          $('.back-to-top').fadeOut('slow');
        }
      });
      $('.back-to-top').click(function(){
        $('html, body').animate({scrollTop : 0},1500, 'easeInOutExpo');
        return false;
      });

        /*--/ Star ScrollTop /--*/
        $('.scrolltop-mf').on("click", function () {
            $('html, body').animate({
                scrollTop: 0
            }, 1000);
        });

        /*--/ Star Counter /--*/
        $('.counter').counterUp({
            delay: 15,
            time: 2000
        });

        /*--/ Star Scrolling nav /--*/
        $('a.js-scroll[href*="#"]:not([href="#"])').on("click", function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: (target.offset().top - navHeight + 5)
                    }, 1000, "easeInOutExpo");
                    return false;
                }
            }
        });

        // Closes responsive menu when a scroll trigger link is clicked
        $('.js-scroll').on("click", function () {
            $('.navbar-collapse').collapse('hide');
        });

        // Activate scrollspy to add active class to navbar items on scroll
        $('body').scrollspy({
            target: '#mainNav',
            offset: navHeight
        });
        /*--/ End Scrolling nav /--*/

        /*--/ Navbar Menu Reduce /--*/
        $(window).trigger('scroll');
        $(window).on('scroll', function () {
            var pixels = 50; 
            var top = 1200;
            if ($(window).scrollTop() > pixels) {
                $('.navbar-expand-md').addClass('navbar-reduce');
                $('.navbar-expand-md').removeClass('navbar-trans');
            } else {
                $('.navbar-expand-md').addClass('navbar-trans');
                $('.navbar-expand-md').removeClass('navbar-reduce');
            }
            if ($(window).scrollTop() > top) {
                $('.scrolltop-mf').fadeIn(1000, "easeInOutExpo");
            } else {
                $('.scrolltop-mf').fadeOut(1000, "easeInOutExpo");
            }
        });

        /*--/ Star Typed /--*/
        if ($('.text-slider').length == 1) {
        var typed_strings = $('.text-slider-items').text();
            var typed = new Typed('.text-slider', {
                strings: typed_strings.split(','),
                typeSpeed: 80,
                loop: true,
                backDelay: 1100,
                backSpeed: 30
            });
        }

        /*--/ Testimonials owl /--*/
        $('#testimonial-mf').owlCarousel({
            margin: 20,
            autoplay: true,
            autoplayTimeout: 4000,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1,
                }
            }
        });

        $(document).ready(function () {
        $(".trigger_popup_fricc").click(function(){
           $('.hover_bkgr_fricc').show();
        });
        $('.hover_bkgr_fricc').click(function(){
            $('.hover_bkgr_fricc').hide();
        });
        $('.popupCloseButton').click(function(){
            $('.hover_bkgr_fricc').hide();
        });

    });

            
        $('#Myimg').click(function () {
                $('#Mymodal').modal('show')
         });
        
        AOS.init({
  duration: 1200,
})
        
        var root = document.getElementById('portrait');

var mouse_monitor = function(e) {
   let x = e.clientX/innerWidth;
   let y = e.clientY/innerHeight;
   
   let move_x = (x>0.5) ? '-30px' : '30px';
   let move_y = (y>0.5) ? '-20px' : '20px';
   
   root.style.setProperty("--translate-x", move_x);
   root.style.setProperty("--translate-y", move_y);
}

root.addEventListener("mousemove", mouse_monitor);
        
        $('#myTab a').on('click', function (e) {
  e.preventDefault()
  $(this).tab('show')
            
            $('#myTab a[href="#prof"]').tab('show') // Select tab by name
$('#myTab li:first-child a').tab('show') // Select first tab
$('#myTab li:last-child a').tab('show') // Select last tab
$('#myTab li:nth-child(3) a').tab('show') // Select third tab
})

    })(jQuery);