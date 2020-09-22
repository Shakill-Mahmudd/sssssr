$(document).ready(function () {
  //scroll
  $(window).on("scroll", function () {
    var scroll = $(window).scrollTop();
    if (scroll < 1) {
      $(".sticy").removeClass("scroll-header");
    } else {
      $(".sticy").addClass("scroll-header");
    }
  });

  //WOW-js
  new WOW().init();

  //Testimonial
  $(".active-Testimonial").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    smartSpeed: 1000,
    dots: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 3,
      },
    },
  });

  //counter-js
  $(".counter").counterUp({
    delay: 10,
    time: 1000,
  });

  //isotop
  var $grid = $(".portfolio-active").isotope({
    itemSelector: ".grid-item",
    percentPosition: true,
    masonry: {
      // use outer width of grid-sizer for columnWidth
      columnWidth: 1,
    },
  });

  // filter items on button click
  $(".portfolio-menu").on("click", "button", function () {
    var filterValue = $(this).attr("data-filter");
    $grid.isotope({
      filter: filterValue,
    });
  });

  $(".portfolio-menu button").on("click", function (event) {
    $(this).siblings(".active").removeClass("active");
    $(this).addClass("active");
    event.preventDefault();
  });

  //magnifing popup
  $(".popup").magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
    },

    // other options
  });

  //scroll
  $(function () {
    $.scrollUp({
      scrollName: "scrollUp", // Element ID
      topDistance: "300", // Distance from top before showing element (px)
      topSpeed: 300, // Speed back to top (ms)
      animation: "fade", // Fade, slide, none
      animationInSpeed: 200, // Animation in speed (ms)
      animationOutSpeed: 200, // Animation out speed (ms)
      scrollText: '<i class="fas fa-angle-up"></i>', // Text for element
      activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
    });
  });
  $(function () {
    $(".circlechart").circlechart();
  });
});
