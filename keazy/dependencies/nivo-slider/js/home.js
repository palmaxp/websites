(function($) {

    "use strict";

    //---------------------------------------------
    //Nivo slider
    //---------------------------------------------

    $('#ensign-nivoslider-1').nivoSlider({

        effect: 'fade', // Specify sets like: 'sliceDownLeft sliceUp sliceUpLeft sliceUpDown sliceUpDownLeft fold fade random slideInRight slideInLeft boxRandom boxRain boxRainReverse boxRainGrow boxRainGrowReverse'
        slices: 15, // For slice animations
        boxCols: 8, // For box animations
        boxRows: 4, // For box animations
        animSpeed: 500, // Slide transition speed
        pauseTime: 5000, // How long each slide will show
        startSlide: 0, // Set starting Slide (0 index)
        directionNav: true, // Next & Prev navigation
        controlNav: true, // 1,2,3... navigation
        controlNavThumbs: false, // Use thumbnails for Control Nav
        pauseOnHover: false, // Stop animation while hovering
        manualAdvance: false, // Force manual transitions
        prevText: '<i class="fas fa-chevron-left"></i>', // Prev directionNav text
        nextText: '<i class="fas fa-chevron-right"></i>', // Next directionNav text
        randomStart: false, // Start on a random slide
        beforeChange: function() {}, // Triggers before a slide transition
        afterChange: function() {}, // Triggers after a slide transition
        slideshowEnd: function() {}, // Triggers after all slides have been shown
        lastSlide: function() {}, // Triggers when last slide is shown
        afterLoad: function() {} // Triggers when slider has loaded

    });

    $('#ensign-nivoslider-2').nivoSlider({

        effect: 'boxRainGrowReverse', // Specify sets like: 'sliceDownLeft sliceUp sliceUpLeft sliceUpDown sliceUpDownLeft fold fade random slideInRight slideInLeft boxRandom boxRain boxRainReverse boxRainGrow boxRainGrowReverse'
        slices: 15, // For slice animations
        boxCols: 8, // For box animations
        boxRows: 4, // For box animations
        animSpeed: 500, // Slide transition speed
        pauseTime: 5000, // How long each slide will show
        startSlide: 0, // Set starting Slide (0 index)
        directionNav: true, // Next & Prev navigation
        controlNav: true, // 1,2,3... navigation
        controlNavThumbs: false, // Use thumbnails for Control Nav
        pauseOnHover: false, // Stop animation while hovering
        manualAdvance: false, // Force manual transitions
        prevText: '<i class="fas fa-chevron-left"></i>', // Prev directionNav text
        nextText: '<i class="fas fa-chevron-right"></i>', // Next directionNav text
        randomStart: false, // Start on a random slide
        beforeChange: function() {}, // Triggers before a slide transition
        afterChange: function() {}, // Triggers after a slide transition
        slideshowEnd: function() {}, // Triggers after all slides have been shown
        lastSlide: function() {}, // Triggers when last slide is shown
        afterLoad: function() {} // Triggers when slider has loaded

    });

    $('#ensign-nivoslider-3').nivoSlider({

        effect: 'fold', // Specify sets like: 'sliceDownLeft sliceUp sliceUpLeft sliceUpDown sliceUpDownLeft fold fade random slideInRight slideInLeft boxRandom boxRain boxRainReverse boxRainGrow boxRainGrowReverse'
        slices: 15, // For slice animations
        boxCols: 8, // For box animations
        boxRows: 4, // For box animations
        animSpeed: 500, // Slide transition speed
        pauseTime: 5000, // How long each slide will show
        startSlide: 0, // Set starting Slide (0 index)
        directionNav: true, // Next & Prev navigation
        controlNav: true, // 1,2,3... navigation
        controlNavThumbs: false, // Use thumbnails for Control Nav
        pauseOnHover: false, // Stop animation while hovering
        manualAdvance: true, // Force manual transitions
        prevText: '<i class="fas fa-chevron-left"></i>', // Prev directionNav text
        nextText: '<i class="fas fa-chevron-right"></i>', // Next directionNav text
        randomStart: false, // Start on a random slide
        beforeChange: function() {}, // Triggers before a slide transition
        afterChange: function() {}, // Triggers after a slide transition
        slideshowEnd: function() {}, // Triggers after all slides have been shown
        lastSlide: function() {}, // Triggers when last slide is shown
        afterLoad: function() {} // Triggers when slider has loaded

    });

    $('#ensign-nivoslider-4').nivoSlider({

        effect: 'boxRandom', // Specify sets like: 'sliceDownLeft sliceUp sliceUpLeft sliceUpDown sliceUpDownLeft fold fade random slideInRight slideInLeft boxRandom boxRain boxRainReverse boxRainGrow boxRainGrowReverse'
        slices: 15, // For slice animations
        boxCols: 8, // For box animations
        boxRows: 4, // For box animations
        animSpeed: 500, // Slide transition speed
        pauseTime: 5000, // How long each slide will show
        startSlide: 0, // Set starting Slide (0 index)
        directionNav: true, // Next & Prev navigation
        controlNav: true, // 1,2,3... navigation
        controlNavThumbs: false, // Use thumbnails for Control Nav
        pauseOnHover: false, // Stop animation while hovering
        manualAdvance: true, // Force manual transitions
        prevText: '<i class="fas fa-chevron-left"></i>', // Prev directionNav text
        nextText: '<i class="fas fa-chevron-right"></i>', // Next directionNav text
        randomStart: false, // Start on a random slide
        beforeChange: function() {}, // Triggers before a slide transition
        afterChange: function() {}, // Triggers after a slide transition
        slideshowEnd: function() {}, // Triggers after all slides have been shown
        lastSlide: function() {}, // Triggers when last slide is shown
        afterLoad: function() {} // Triggers when slider has loaded

    });

})(jQuery);