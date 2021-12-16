(function($) {
  "use strict";

  /*-------------------------------------
  Preloader
  -------------------------------------*/
  $('#preloader').fadeOut('slow', function() {
    $(this).remove();
  });

  /*-------------------------------------
  Countdown activation code
  -------------------------------------*/
  var eventCounter = $('#countdown');
  if (eventCounter.length) {
    eventCounter.countdown('2021/08/1', function(e) {
      $(this).html(e.strftime("<div class='countdown-section'><h2>%D</h2> <h3>Day%!D</h3> </div><div class='countdown-section'><h2>%H</h2> <h3>Hour%!H</h3> </div><div class='countdown-section'><h2>%M</h2> <h3>Minutes</h3> </div><div class='countdown-section'><h2>%S</h2> <h3>Second</h3> </div>"))
    });
  }

  /*-------------------------------------
  Pagepiling
  -------------------------------------*/
  if ($(window).width() > 991) {
    if ($('#pagepiling').length) {
      $('#pagepiling').pagepiling({
        menu: '#menu',
        scrollingSpeed: 280,
        loopBottom: true,
        afterLoad: function(anchorLink, index) {
          if ($('#pagepiling-counter').length) {
            $('.counter-slider').counterUp({
              delay: 50,
              time: 5000
            });
          }
        }
      });
    }
  }

  /*-------------------------------------
  After Load All Content Add a Class In Body
  -------------------------------------*/
  $(window).on('load', addNewClass);

  function addNewClass() {
    $('body').imagesLoaded().done(function(instance) {
      $('body').addClass('loaded');
    });
  }

  /*-------------------------------------
  Intersection Observer
  -------------------------------------*/
  if (!!window.IntersectionObserver) {
    let observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active-animation");
          //entry.target.src = entry.target.dataset.src;
          observer.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: "0px 0px -100px 0px"
    });
    document.querySelectorAll('.has-animation').forEach(block => {
      observer.observe(block)
    });
  } else {
    document.querySelectorAll('.has-animation').forEach(block => {
      block.classList.remove('has-animation')
    });
  }

  /*-------------------------------------
  Buble Background On Hover
  -------------------------------------*/
  $('.animted-bg-wrap').on('mouseenter', function(e) {
    var parentOffset = $(this).offset(),
      relX = e.pageX - parentOffset.left,
      relY = e.pageY - parentOffset.top;
    if ($(this).find('.animted-bg-wrap .animted-bg')) {
      $('.animted-bg-wrap .animted-bg').css({
        top: relY,
        left: relX,
      });
    }
  });
  $('.animted-bg-wrap').on('mouseout', function(e) {
    var parentOffset = $(this).offset(),
      relX = e.pageX - parentOffset.left,
      relY = e.pageY - parentOffset.top;
    if ($(this).find('.animted-bg-wrap .animted-bg')) {
      $('.animted-bg-wrap .animted-bg').css({
        top: relY,
        left: relX,
      });
    }
  });

  /*-------------------------------------
  login Pop Up Form
  -------------------------------------*/
  $('#login-button').on('click', function(e) {
    e.preventDefault();
    var self = $(this),
      target = self.next('#login-form');
    if (self.hasClass('open')) {
      target.slideUp('slow');
      self.removeClass('open');
    } else {
      target.slideDown('slow');
      self.addClass('open');
    }
  });

  $('#login-form').on('click', '.form-cancel', function(e) {
    e.preventDefault();
    var self = $(this),
      parent = self.parents('#login-form'),
      loginButton = parent.prev('#login-button');
    parent.slideUp('slow');
    loginButton.removeClass('open');
  });

  /*-------------------------------------
  Theia Side Bar
  -------------------------------------*/
  if (typeof($.fn.theiaStickySidebar) !== "undefined") {
    $('.sticky-coloum-wrap .sticky-coloum-item').theiaStickySidebar();
  }

  /*-------------------------------------
  Offcanvas Menu activation code
  -------------------------------------*/
  $('#wrapper').on('click', '.offcanvas-menu-btn', function(e) {
    e.preventDefault();
    var $this = $(this),
      wrapper = $(this).parents('body').find('>#wrapper'),
      wrapMask = $('<div />').addClass('offcanvas-mask'),
      offCancas = $('#offcanvas-wrap'),
      position = offCancas.data('position') || 'left';

    if ($this.hasClass('menu-status-open')) {
      wrapper.addClass('open').append(wrapMask);
      $this.removeClass('menu-status-open').addClass('menu-status-close');
      offCancas.css({
        'transform': 'translateX(0)'
      });
    } else {
      removeOffcanvas();
    }

    function removeOffcanvas() {
      wrapper.removeClass('open').find('> .offcanvas-mask').remove();
      $this.removeClass('menu-status-close').addClass('menu-status-open');
      if (position === 'left') {
        offCancas.css({
          'transform': 'translateX(-105%)'
        });
      } else {
        offCancas.css({
          'transform': 'translateX(105%)'
        });
      }
    }
    $(".offcanvas-mask, .offcanvas-close").on('click', function() {
      removeOffcanvas();
    });

    return false;
  });

  /*-------------------------------------
  Masonry
  -------------------------------------*/
  $('.masonry-items').masonry({
    itemSelector: '.masonry-item',
    columnWidth: '.masonry-item',
    horizontalOrder: true
  });

  /*-------------------------------------
  MeanMenu activation code
  --------------------------------------*/
  if ($.fn.meanmenu) {
    $('nav#dropdown').meanmenu({
      siteLogo: "<div class='mobile-menu-nav-back'><a class='logo-mobile' href='index.html'><img src='media/logo-mobile.png' alt='logo' class='img-fluid'/></a></div>"
    });
  }

  /*---------------------------------------
  Background Parallax
  --------------------------------------- */
  if ($('.parallaxie').length) {
    $(".parallaxie").parallaxie({
      speed: 0.5,
      offset: 0,
    });
  }

  /*-------------------------------------
  Contact Form initiating
  -------------------------------------*/
  var contactForm = $('#contact-form');
  if (contactForm.length) {
    contactForm.validator().on('submit', function(e) {
      var $this = $(this),
        $target = contactForm.find('.form-response');
      if (e.isDefaultPrevented()) {
        $target.html("<div class='alert alert-success'><p>Please select all required field.</p></div>");
      } else {
        $.ajax({
          url: "php/mailer.php",
          type: "POST",
          data: contactForm.serialize(),
          beforeSend: function() {
            $target.html("<div class='alert alert-info'><p>Loading ...</p></div>");
          },
          success: function(text) {
            if (text === "success") {
              $this[0].reset();
              $target.html("<div class='alert alert-success'><p>Message has been sent successfully.</p></div>");
            } else {
              $target.html("<div class='alert alert-success'><p>" + text + "</p></div>");
            }
          }
        });
        return false;
      }
    });
  }

  /*-------------------------------------
  Select2 activation code
  -------------------------------------*/
  if ($('select.select2').length) {
    $('select.select2').select2({
      theme: 'classic',
      dropdownAutoWidth: true,
      width: '100%'
    });
    $('.filter-search select.select2').select2({
      theme: 'classic',
      width: '100%'
    });
  }

  /*--------------------------------------
  Isotope initialization
  --------------------------------------*/
  var $container = $(".isotope-wrap");
  if ($container.length > 0) {

    function createGalleryPopup(selector) {
      selector = selector || '';
      $('.featuredContainer').magnificPopup({
        delegate: selector + ' a.popup-zoom',
        type: 'image',
        gallery: {
          enabled: true
        }
      });
    }

    var $isotope;
    var blogGallerIso = $(".featuredContainer", $container).imagesLoaded(function() {
      var selectero = $container.find('.isotope-classes-tab .nav-item:first-child').data('filter') || '*';

      $isotope = $(".featuredContainer", $container).isotope({
        filter: selectero,
        transitionDuration: "1s",
        hiddenStyle: {
          opacity: 0,
          transform: "scale(0.001)"
        },
        visibleStyle: {
          transform: "scale(1)",
          opacity: 1
        }
      });

      createGalleryPopup(selectero);
    });
    $container.find(".isotope-classes-tab").on("click", "a", function() {
      var $this = $(this);
      $this
        .parent(".isotope-classes-tab")
        .find("a")
        .removeClass("current");
      $this.addClass("current");
      var selector = $this.attr("data-filter");
      $isotope.isotope({
        filter: selector
      });
      createGalleryPopup(selector);
      return false;
    });
  }

  /*-------------------------------------
  Window On Load
  -------------------------------------*/
  $(window).on('load resize', function() {
    equalHeight();

    // Gallery Popup
    if ($('.zoom-gallery').length) {
      $('.zoom-gallery').each(function() {
        $(this).magnificPopup({
          delegate: 'a.popup-zoom',
          type: 'image',
          gallery: {
            enabled: true
          }
        });
      });
    }

    // Popup
    var yPopup = $(".popup-youtube");
    if (yPopup.length) {
      yPopup.magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
      });
    }
  });

  /*-------------------------------------
  Auto height for product listing
   -------------------------------------*/
  function equalHeight() {
    var imgH = 0,
      boxH = 0,
      wWidth = $(window).width(),
      allH;
    $('.equal-height-wrap .item-figure,.equal-height-wrap .item-content').height('auto');
    if (wWidth > 767) {
      $('.equal-height-wrap').each(function() {
        var self = $(this);
        var TempImgH = self.find('.item-figure').height();
        imgH = TempImgH > imgH ? TempImgH : imgH;
        var TempBoxH = self.find('.item-content').outerHeight();
        boxH = TempBoxH > boxH ? TempBoxH : boxH;
      });
      allH = imgH;
      allH = boxH > imgH ? boxH : imgH;
      $('.equal-height-wrap .item-figure,.equal-height-wrap .item-content').height(allH + "px");
    }
  }

  /*-------------------------------------
  Count Up
  -------------------------------------*/
  var counterContainer = $('.counter');
  if (counterContainer.length) {
    counterContainer.counterUp({
      delay: 50,
      time: 5000
    });
  }

  /*-------------------------------------
  Google Map
  -------------------------------------*/
  $('.map-layout1').each(function() {
    var $this = $(this),
      key = $this.data('key'),
      lat = $this.data('lat'),
      lng = $this.data('lng'),
      mrkr = $this.data('mrkr');

    $this.gmap3({
        center: [-37.81618, 144.95692],
        zoom: 12,
        scrollwheel: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        styles: [{
          "featureType": "all",
          "elementType": "labels.text.fill",
          "stylers": [{
            "saturation": 36
          }, {
            "color": "#333333"
          }, {
            "lightness": 40
          }]
        }, {
          "featureType": "all",
          "elementType": "labels.text.stroke",
          "stylers": [{
            "visibility": "on"
          }, {
            "color": "#ffffff"
          }, {
            "lightness": 16
          }]
        }, {
          "featureType": "all",
          "elementType": "labels.icon",
          "stylers": [{
            "visibility": "off"
          }]
        }, {
          "featureType": "administrative",
          "elementType": "geometry.fill",
          "stylers": [{
            "color": "#fefefe"
          }, {
            "lightness": 20
          }]
        }, {
          "featureType": "administrative",
          "elementType": "geometry.stroke",
          "stylers": [{
            "color": "#fefefe"
          }, {
            "lightness": 17
          }, {
            "weight": 1.2
          }]
        }, {
          "featureType": "administrative.country",
          "elementType": "geometry.stroke",
          "stylers": [{
            "saturation": "-9"
          }]
        }, {
          "featureType": "landscape",
          "elementType": "geometry",
          "stylers": [{
            "color": "#e8e8e8"
          }, {
            "lightness": 20
          }]
        }, {
          "featureType": "landscape.natural.landcover",
          "elementType": "geometry.fill",
          "stylers": [{
            "saturation": "-4"
          }, {
            "color": "#cdcdcd"
          }]
        }, {
          "featureType": "poi",
          "elementType": "geometry",
          "stylers": [{
            "color": "#d4f1c9"
          }, {
            "lightness": 21
          }]
        }, {
          "featureType": "poi.park",
          "elementType": "geometry",
          "stylers": [{
            "color": "#d4f1c9"
          }, {
            "lightness": 21
          }]
        }, {
          "featureType": "road.highway",
          "elementType": "geometry.fill",
          "stylers": [{
            "color": "#ffeea4"
          }, {
            "lightness": 60
          }]
        }, {
          "featureType": "road.highway",
          "elementType": "geometry.stroke",
          "stylers": [{
            "color": "#f5d681"
          }, {
            "lightness": 30
          }, {
            "weight": 1
          }]
        }, {
          "featureType": "road.arterial",
          "elementType": "geometry",
          "stylers": [{
            "color": "#ffffff"
          }, {
            "lightness": 18
          }]
        }, {
          "featureType": "road.local",
          "elementType": "geometry",
          "stylers": [{
            "color": "#ffffff"
          }, {
            "lightness": 16
          }]
        }, {
          "featureType": "transit",
          "elementType": "geometry",
          "stylers": [{
            "color": "#f2f2f2"
          }, {
            "lightness": 19
          }]
        }, {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [{
            "color": "#aadaff"
          }, {
            "lightness": 17
          }]
        }]
      })
      .marker(function(map) {
        return {
          position: map.getCenter(),
          icon: mrkr
        };
      })
  });

  /*-------------------------------------
  Section background image
  -------------------------------------*/
  $("[data-bg-image]").each(function() {
    var img = $(this).data("bg-image");
    $(this).css({
      backgroundImage: "url(" + img + ")"
    });
  });

  /*-------------------------------------
  On click loadmore functionality
  -------------------------------------*/
  $('.loadmore').on('click', 'a', function(e) {
    e.preventDefault();
    var _this = $(this),
      _parent = _this.parents('.menu-list-wrapper'),
      button_wrapper = _parent.find('.loadmore'),
      item = button_wrapper.data('item') || 3,
      sm = button_wrapper.data('sm') || null,
      md = button_wrapper.data('md') || null,
      lg = button_wrapper.data('lg') || null,
      _target = _parent.find('.menu-list'),
      _set = _target.find('.menu-item.d-none').slice(0, item);

    if (sm || md || lg) {
      var wWidth = $(window).width();
      if (lg && wWidth > 991) {
        _set = _target.find('.menu-item.d-none').slice(0, lg);
      } else if (md && wWidth <= 991 && wWidth >= 768) {
        _set = _target.find('.menu-item.d-none').slice(0, md);
      } else if (sm && wWidth < 768) {
        _set = _target.find('.menu-item.d-none').slice(0, sm);
      }
    }

    if (_set.length) {
      _set.animate({
        opacity: 0
      });
      _set.promise().done(function() {
        _set.removeClass('d-none');
        _set.show().animate({
          opacity: 1
        }, 1000);
      });
    } else {
      _this.text('No more item to display');
    }
    return false;
  });

  /*-------------------------------------
  Carousel slider initiation
  -------------------------------------*/
  if ($.fn.owlCarousel) {

    function createCarousel(carousel) {

      var loop = carousel.data('loop'),
        items = carousel.data('items'),
        margin = carousel.data('margin'),
        stagePadding = carousel.data('stage-padding'),
        autoplay = carousel.data('autoplay'),
        autoplayTimeout = carousel.data('autoplay-timeout'),
        smartSpeed = carousel.data('smart-speed'),
        dots = carousel.data('dots'),
        nav = carousel.data('nav'),
        navSpeed = carousel.data('nav-speed'),
        rXsmall = carousel.data('r-x-small'),
        rXsmallNav = carousel.data('r-x-small-nav'),
        rXsmallDots = carousel.data('r-x-small-dots'),
        rXmedium = carousel.data('r-x-medium'),
        rXmediumNav = carousel.data('r-x-medium-nav'),
        rXmediumDots = carousel.data('r-x-medium-dots'),
        rSmall = carousel.data('r-small'),
        rSmallNav = carousel.data('r-small-nav'),
        rSmallDots = carousel.data('r-small-dots'),
        rMedium = carousel.data('r-medium'),
        rMediumNav = carousel.data('r-medium-nav'),
        rMediumDots = carousel.data('r-medium-dots'),
        rLarge = carousel.data('r-large'),
        rLargeNav = carousel.data('r-large-nav'),
        rLargeDots = carousel.data('r-large-dots'),
        rExtraLarge = carousel.data('r-extra-large'),
        rExtraLargeNav = carousel.data('r-extra-large-nav'),
        rExtraLargeDots = carousel.data('r-extra-large-dots'),
        center = carousel.data('center'),
        custom_nav = carousel.data('custom-nav') || '';
      carousel.addClass('owl-carousel');
      var owl = carousel.owlCarousel({
        loop: (loop ? true : false),
        center: (center ? true : false),
        items: (items ? items : 4),
        lazyLoad: true,
        margin: (margin ? margin : 0),
        autoplay: (autoplay ? true : false),
        autoplayTimeout: (autoplayTimeout ? autoplayTimeout : 1000),
        smartSpeed: (smartSpeed ? smartSpeed : 250),
        dots: (dots ? true : false),
        nav: (nav ? true : false),
        navText: ['<i class="flaticon-back"></i>', '<i class="flaticon-next"></i>'],
        navSpeed: (navSpeed ? true : false),
        center: (center ? true : false),
        responsiveClass: true,
        responsive: {
          0: {
            items: (rXsmall ? rXsmall : 1),
            nav: (rXsmallNav ? true : false),
            dots: (rXsmallDots ? true : false)
          },
          576: {
            items: (rXmedium ? rXmedium : 2),
            nav: (rXmediumNav ? true : false),
            dots: (rXmediumDots ? true : false)
          },
          768: {
            items: (rSmall ? rSmall : 3),
            nav: (rSmallNav ? true : false),
            dots: (rSmallDots ? true : false)
          },
          992: {
            items: (rMedium ? rMedium : 4),
            nav: (rMediumNav ? true : false),
            dots: (rMediumDots ? true : false)
          },
          1200: {
            items: (rLarge ? rLarge : 5),
            nav: (rLargeNav ? true : false),
            dots: (rLargeDots ? true : false)
          },
          1400: {
            items: (rExtraLarge ? rExtraLarge : 6),
            nav: (rExtraLargeNav ? true : false),
            dots: (rExtraLargeDots ? true : false)
          }
        }
      });
      if (custom_nav) {
        var nav = $(custom_nav),
          nav_next = $('.rt-next', nav),
          nav_prev = $('.rt-prev', nav);

        nav_next.on('click', function(e) {
          e.preventDefault();
          owl.trigger('next.owl.carousel');
          return false;
        });

        nav_prev.on('click', function(e) {
          e.preventDefault();
          owl.trigger('prev.owl.carousel');
          return false;
        });
      }
    }

    $('.rc-carousel').each(function() {
      var carousel = $(this),
        options = $.extend({
          trigger_start: '',
          trigger_end: '',
        }, carousel.data('options'));


      if (!options.trigger_start && !options.trigger_end) {
        createCarousel(carousel);

      } else {
        var tempOwl = '';
        $(window).on('resize load', function() {
          var wW = $(window).width();

          if (wW <= options.trigger_start) {
            createCarousel(carousel);
            console.log('called', 'create')
          } else {
            carousel.owlCarousel('destroy').removeClass('owl-carousel');
          }

        });
      }
    });
  }

  $('[data-type="section-switch"], #dropdown > ul > li > a').on('click', function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length > 0) {

        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

  /*-------------------------------------
  On Scroll
  -------------------------------------*/
  $(window).on('scroll', function() {

    // Back Top Button
    if ($(window).scrollTop() > 700) {
      $('.return-to-top').addClass('back-top');
    } else {
      $('.return-to-top').removeClass('back-top');
    }

    // Sticky Menu
    if ($('header').hasClass('sticky-on')) {
      var stickyPlaceHolder = $("#sticky-placeholder"),
        menu = $("#navbar-wrap"),
        menuH = menu.outerHeight(),
        topbarH = $('#topbar-wrap').outerHeight() || 0,
        targrtScroll = topbarH,
        header = $("header");
      if ($(window).scrollTop() > targrtScroll) {
        header.addClass('sticky');
        stickyPlaceHolder.height(menuH);
      } else {
        header.removeClass('sticky');
        stickyPlaceHolder.height(0);
      }
    }
  });

  /*-------------------------------------
  Jquery Serch Box
  -------------------------------------*/
  $('a[href="#template-search"]').on("click", function(event) {
    event.preventDefault();
    var target = $("#template-search");
    target.addClass("open");
    setTimeout(function() {
      target.find('input').focus();
    }, 600);
    return false;
  });

  $("#template-search, #template-search button.close").on("click keyup", function(event) {
    if (
      event.target === this ||
      event.target.className === "close" ||
      event.keyCode === 27
    ) {
      $(this).removeClass("open");
    }
  });

  /*-------------------------------------
  Circle Bars - Knob
  -------------------------------------*/
  if (typeof($.fn.knob) != 'undefined') {
    $('.knob.knob-nopercent').each(function() {
      var $this = $(this),
        knobVal = $this.attr('data-rel');
      $this.knob({
        'draw': function() {}
      });
      $this.appear(function() {
        $({
          value: 0
        }).animate({
          value: knobVal
        }, {
          duration: 2000,
          easing: 'swing',
          step: function() {
            $this.val(Math.ceil(this.value)).trigger('change');
          }
        });
      }, {
        accX: 0,
        accY: -150
      });
    });

    //others skill
    $('.knob').each(function() {
      var $this = $(this),
        knobVal = $this.attr('data-rel');
      $this.knob({
        'draw': function() {
          $(this.i).val(this.cv)
        }
      });
      $this.appear(function() {
        $({
          value: 0
        }).animate({
          value: knobVal
        }, {
          duration: 2000,
          easing: 'swing',
          step: function() {
            $this.val(Math.ceil(this.value)).trigger('change');
          }
        });
      }, {
        accX: 0,
        accY: -150
      });
    });
  }

  /*-------------------------------------
  Anchor Tag - Prevent Default
  -------------------------------------*/
  $('a[href=\\#]').on('click', function(e) {
    e.preventDefault();
  });

})(jQuery);