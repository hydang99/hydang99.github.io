document.addEventListener('DOMContentLoaded', function () {
  if (window.bulmaCarousel) {
    bulmaCarousel.attach('#results-carousel', {
      slidesToScroll: 1,
      slidesToShow: 3,
      pagination: true,
      loop: true
    });
  }
});

