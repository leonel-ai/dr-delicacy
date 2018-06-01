// JavaScript
window.sr = ScrollReveal();
sr.reveal('.home', { delay: 700, easing: 'ease', duration: 800, scale: 0 });
sr.reveal('.products', { duration: 700 });
sr.reveal('.story', { duration: 700 });
sr.reveal('.contact', { duration: 700 });
sr.reveal('.page-footer', { duration: 700 });

$('.carousel').each(function () {
  var $carousel = $(this);
  var hammertime = new Hammer(this, {
      recognizers: [
          [Hammer.Swipe, { direction: Hammer.DIRECTION_HORIZONTAL }]
      ]
  });
  hammertime.on('swipeleft', function () {
      $carousel.carousel('next');
  });
  hammertime.on('swiperight', function () {
      $carousel.carousel('prev');
  });
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
