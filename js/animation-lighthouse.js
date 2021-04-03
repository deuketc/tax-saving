(function () {
  function circlesLighthouse() {
    const tl = gsap.timeline();
    const circleAnimation = {
      duration: 1,
      scale: 0,
      ease: 'elastic',
      y: 5,
      x: 5,
    };
    const element = [
      '.expert-insights_img-svg .stars_x5F_circle1',
      '.expert-insights_img-svg .stars_x5F_circle2',
      '.expert-insights_img-svg .stars_x5F_circle3',
      '.expert-insights_img-svg .stars_x5F_circle4',
      '.expert-insights_img-svg .stars_x5F_circle5',
    ];

    element.forEach((el) => {
      tl.from(el, circleAnimation, '<0.2');
    });

    return tl;
  }

  function starsLighthouse() {
    const tl = gsap.timeline();
    const starAnimation = {
      duration: 0.3,
      alpha: 0,
      rotation: 90,
      transformOrigin: '50% 50%',
    };
    tl.from('.expert-insights_img-svg .stars_x5F_star1', starAnimation)
      .from('.expert-insights_img-svg .stars_x5F_star2', starAnimation, '+=0.2')
      .from('.expert-insights_img-svg .stars_x5F_star3', starAnimation, '+=0.2')
      .from(
        '.expert-insights_img-svg .stars_x5F_star4',
        starAnimation,
        '+=0.2'
      );
    return tl;
  }

  // cloud
  function clouds() {
    const tl = gsap.timeline();
    const elements = [
      { className: '.cloud_x5F_group3_x5F_path1', drawSVG: '100% 100%' },
      { className: '.cloud_x5F_group3_x5F_path2', drawSVG: '100% 100%' },
      { className: '.cloud_x5F_group3_x5F_path3', drawSVG: '0% 0%' },
      { className: '.clouds_x5F_path2', drawSVG: '0% 0%' },
      { className: '.cloud_x5F_group4_x5F_path3', drawSVG: '100% 100%' },
      { className: '.cloud_x5F_group4_x5F_path4', drawSVG: '0% 0%' },
      { className: '.cloud_x5F_group4_x5F_path2', drawSVG: '0% 0%' },
      { className: '.cloud_x5F_group4_x5F_path1', drawSVG: '0% 0%' },
      { className: '.cloud_x5F_group2_x5F_path1', drawSVG: '100% 100%' },
      { className: '.cloud_x5F_group2_x5F_path2', drawSVG: '100% 100%' },
      { className: '.cloud_x5F_group2_x5F_path3', drawSVG: '0% 0%' },
      { className: '.cloud_x5F_group1_x5F_path1', drawSVG: '100% 100%' },
      { className: '.cloud_x5F_group1_x5F_path2', drawSVG: '100% 100%' },
      { className: '.cloud_x5F_group1_x5F_path3', drawSVG: '100% 100%' },
      { className: '.cloud_x5F_group1_x5F_path4', drawSVG: '0% 0%' },
      { className: '.clouds_x5F_path1', drawSVG: '0% 0%' },
    ];

    elements.forEach((el) => {
      tl.from(`.expert-insights_img-svg ${el.className}`, {
        duration: 0.1,
        drawSVG: el.drawSVG,
        ease: Power1.easeOut,
      });
    });
    return tl;
  }

  // cloud
  function clouds() {
    const tl = gsap.timeline();
    const elements = [
      { className: '.cloud_x5F_group3_x5F_path1', drawSVG: '100% 100%' },
      { className: '.cloud_x5F_group3_x5F_path2', drawSVG: '100% 100%' },
      { className: '.cloud_x5F_group3_x5F_path3', drawSVG: '0% 0%' },
      { className: '.clouds_x5F_path2', drawSVG: '0% 0%' },
      { className: '.cloud_x5F_group4_x5F_path3', drawSVG: '100% 100%' },
      { className: '.cloud_x5F_group4_x5F_path4', drawSVG: '0% 0%' },
      { className: '.cloud_x5F_group4_x5F_path2', drawSVG: '0% 0%' },
      { className: '.cloud_x5F_group4_x5F_path1', drawSVG: '0% 0%' },
      { className: '.cloud_x5F_group2_x5F_path1', drawSVG: '100% 100%' },
      { className: '.cloud_x5F_group2_x5F_path2', drawSVG: '100% 100%' },
      { className: '.cloud_x5F_group2_x5F_path3', drawSVG: '0% 0%' },
      { className: '.cloud_x5F_group1_x5F_path1', drawSVG: '100% 100%' },
      { className: '.cloud_x5F_group1_x5F_path2', drawSVG: '100% 100%' },
      { className: '.cloud_x5F_group1_x5F_path3', drawSVG: '100% 100%' },
      { className: '.cloud_x5F_group1_x5F_path4', drawSVG: '0% 0%' },
      { className: '.clouds_x5F_path1', drawSVG: '0% 0%' },
    ];

    elements.forEach((el) => {
      tl.from(`.expert-insights_img-svg ${el.className}`, {
        duration: 0.1,
        drawSVG: el.drawSVG,
        ease: Power1.easeOut,
      });
    });
    return tl;
  }

  // sea
  function sea() {
    const tl = gsap.timeline();
    const elements = [
      { className: '.sea_x5F_path1', duration: '0.2' },
      { className: '.sea_x5F_path2', duration: '0.1' },
      { className: '.sea_x5F_path3', duration: '0.1' },
      { className: '.sea_x5F_path4', duration: '0.1' },
      { className: '.sea_x5F_path5', duration: '0.1' },
      { className: '.sea_x5F_path6', duration: '0.1' },
      { className: '.sea_x5F_path7', duration: '0.1' },
      { className: '.sea_x5F_path8', duration: '0.4' },
      { className: '.sea_x5F_path9', duration: '0.1' },
      { className: '.sea_x5F_path10', duration: '0.1' },
      { className: '.sea_x5F_path11', duration: '0.1' },
      { className: '.sea_x5F_path12', duration: '0.2' },
      { className: '.sea_x5F_path13', duration: '0.2' },
      { className: '.sea_x5F_path14', duration: '0.2' },
      { className: '.sea_x5F_path15', duration: '0.2' },
      { className: '.sea_x5F_path16', duration: '0.1' },
      { className: '.sea_x5F_path17', duration: '0.1' },
    ];

    elements.forEach((el) => {
      tl.from(
        `.expert-insights_img-svg ${el.className}`,
        {
          duration: el.duration,
          drawSVG: '0% 0%',
          ease: Power1.easeOut,
        },
        '<0.05'
      );
    });
    return tl;
  }

  // cloud
  function rays() {
    const tl = gsap.timeline();
    const elements = [
      { className: '.lh-rays-path6', duration: '0.2' },
      { className: '.lh-rays-path4', duration: '0.1' },
      { className: '.lh-rays-path2', duration: '0.12' },
      { className: '.lh-rays-path1', duration: '0.1' },
      { className: '.lh-rays-path5', duration: '0.2' },
      { className: '.lh-rays-path3', duration: '0.1' },
    ];

    elements.forEach((el) => {
      tl.from(`.expert-insights_img-svg ${el.className}`, {
        duration: el.duration,
        drawSVG: '0% 0%',
        ease: Power1.easeOut,
      });
    });
    return tl;
  }

  // lighthouse

  function lighthouse() {
    const tl = gsap.timeline();

    tl.from('.expert-insights_img-svg .lh-base', {
      duration: 0.8,
      y: 250,
      ease: 'back',
    })
      .from(
        '.expert-insights_img-svg .lh-mdl',
        {
          duration: 0.8,
          y: 270,
          ease: 'back',
        },
        '<'
      )
      .from(
        '.expert-insights_img-svg .lh-top',
        {
          duration: 0.8,
          y: 310,
          ease: 'back',
        },
        '<'
      );

    return tl;
  }

  var lightHouseTimeline = gsap.timeline({
    id: 'lighthouse',
    scrollTrigger: {
      trigger: '.expert-insights_img-svg',
      start: 'bottom bottom',
    },
  });
  lightHouseTimeline
    .add(lighthouse())
    .add(clouds(), '.2')
    .add(sea(), '<0.4')
    .add(rays())
    .add(starsLighthouse(), '<-.5')
    .add(circlesLighthouse(), '<');
})();
