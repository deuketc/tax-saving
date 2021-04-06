(function () {
  gsap.to('.hero', {
    yPercent: 50,
    ease: 'none',
    scrollTrigger: {
      trigger: '.hero',
      start: 'top top', // the default values
      end: 'bottom top',
      scrub: true,
    },
  });
  /*
  gsap.to('.hero_copy', {
    opacity: 0,
    ease: 'none',
    scrollTrigger: {
      trigger: '.hero_copy',
      start: 'bottom center', // the default values
      end: 'bottom top',
      scrub: true,
    },
  });
  */
})();
