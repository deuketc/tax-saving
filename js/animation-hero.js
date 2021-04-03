(function () {
  function trees() {
    var tl = gsap.timeline();

    tl.from('.hero_image-svg .tree_x5F_base', {
      duration: 0.4,
      drawSVG: '100% 100%',
    })
      .from(
        '.hero_image-svg .tree-a-line1',
        { duration: 0.4, drawSVG: '0% 0%' },
        '-=0.35'
      )
      .from(
        '.hero_image-svg .tree-b-line1',
        { duration: 0.4, drawSVG: '100% 100%' },
        '-=0.2'
      )
      .from(
        '.hero_image-svg .tree-a-line2',
        { duration: 0.2, drawSVG: '100% 100%' },
        '-=0.4'
      )
      .from(
        '.hero_image-svg .tree-a-line-3',
        { duration: 0.4, drawSVG: '100% 100%' },
        '-=0.3'
      )
      .from(
        '.hero_image-svg .tree-b-line2',
        { duration: 0.2, drawSVG: '100% 100%' },
        '-=0.3'
      )
      .from(
        '.hero_image-svg .tree-b-line3',
        { duration: 0.2, drawSVG: '100% 100%' },
        '-=0.1'
      )
      .from(
        '.hero_image-svg .tree-a-circle',
        {
          duration: 0.5,
          y: 30,
          x: 14,
          scale: 0,
          ease: 'back',
        },
        '-=0.5'
      )
      .from(
        '.hero_image-svg .tree-b-circle',
        {
          duration: 0.6,
          y: 45,
          x: 20,
          scale: 0,
          ease: 'back',
        },
        '-=0.3'
      );
    return tl;
  }

  // cloud
  function clouds() {
    const tl = gsap.timeline();
    tl.from('.hero_image-svg .cloud1-path1', {
      duration: 0.1,
      drawSVG: '100% 100%',
      ease: Power1.easeOut,
    })
      .from('.hero_image-svg .cloud1-path2', {
        duration: 0.3,
        drawSVG: '0% 0%',
        ease: Power1.easeOut,
      })
      .from('.hero_image-svg .cloud1-path3', {
        duration: 0.1,
        drawSVG: '0% 0%',
        ease: Power1.easeOut,
      })
      .from('.hero_image-svg .cloud1-path4', {
        duration: 0.2,
        drawSVG: '0% 0%',
        ease: Expo.easeOut,
      })
      .from(
        '.hero_image-svg .cloud2-path1',
        {
          duration: 0.1,
          drawSVG: '100% 100%',
          ease: Power1.easeOut,
        },
        '<.1'
      )
      .from('.hero_image-svg .cloud2-path2', {
        duration: 0.1,
        drawSVG: '100% 100%',
        ease: Power1.easeOut,
      })
      .from('.hero_image-svg .cloud2-path3', {
        duration: 0.3,
        drawSVG: '100% 100%',
        ease: Power1.easeOut,
      })
      .from('.hero_image-svg .cloud2-path4', {
        duration: 0.1,
        drawSVG: '0% 0%',
        ease: Expo.easeOut,
      });
    return tl;
  }

  //stars
  function circles() {
    const tl = gsap.timeline();
    const circleAnimation = {
      duration: 1,
      scale: 0,
      ease: 'elastic',
      y: 5,
      x: 5,
    };
    tl.from('.hero_image-svg .stars-circle1', circleAnimation)
      .from('.hero_image-svg .stars-circle3', circleAnimation, '<0.2')
      .from('.hero_image-svg .stars-circle2', circleAnimation, '<0.2')
      .from('.hero_image-svg .stars-circle4', circleAnimation, '<0.2');
    return tl;
  }

  function stars() {
    const tl = gsap.timeline();
    const starAnimation = {
      duration: 0.3,
      alpha: 0,
      rotation: 90,
      transformOrigin: '50% 50%',
    };
    tl.from('.hero_image-svg .stars-cross1', starAnimation).from(
      '.hero_image-svg .stars-cross2',
      starAnimation,
      '+=0.2'
    );
    return tl;
  }

  function linegroup1() {
    const tl = gsap.timeline();
    lineGroupAnimation = {
      duration: 0.3,
      drawSVG: '0% 0%',
      ease: Expo.easeOut,
    };

    tl.from('.hero_image-svg .bkgrnd-path1', lineGroupAnimation)
      .from('.hero_image-svg .bkgrnd-path2', lineGroupAnimation, '<.05')
      .from('.hero_image-svg .bkgrnd-path3', lineGroupAnimation, '<.05')
      .from('.hero_image-svg .bkgrnd-path4', lineGroupAnimation, '<.05');
    return tl;
  }

  function linegroup2() {
    const tl = gsap.timeline();
    lineGroupAnimation = {
      duration: 0.3,
      drawSVG: '0% 0%',
      ease: Expo.easeOut,
    };
    tl.from('.hero_image-svg .bkgrnd-path5', lineGroupAnimation)
      .from('.hero_image-svg .bkgrnd-path6', lineGroupAnimation, '<.05')
      .from('.hero_image-svg .bkgrnd-path7', lineGroupAnimation, '<.05')
      .from('.hero_image-svg .bkgrnd-path8', lineGroupAnimation, '<.05')
      .from('.hero_image-svg .bkgrnd-path9', lineGroupAnimation, '<.05')
      .from('.hero_image-svg .bkgrnd-path10', lineGroupAnimation, '<.05')
      .from('.hero_image-svg .bkgrnd-path11', lineGroupAnimation, '<.05')
      .from('.hero_image-svg .bkgrnd-path12', lineGroupAnimation, '<.05')
      .from('.hero_image-svg .bkgrnd-path13', lineGroupAnimation, '<.05')
      .from('.hero_image-svg .bkgrnd-path14', lineGroupAnimation, '<.05')
      .from('.hero_image-svg .bkgrnd-path15', lineGroupAnimation, '<.05')
      .from('.hero_image-svg .bkgrnd-path16', lineGroupAnimation, '<.05');
    return tl;
  }

  function handGroup() {
    const tl = gsap.timeline({ delay: 0.5 });
    tl.from('.hero_image-svg .hand-group', {
      duration: 0.8,
      y: 400,
      ease: 'back.out(1)',
    });
    return tl;
  }

  function characterGroup() {
    const tl = gsap.timeline({ delay: 0.5 });
    tl.from('.hero_image-svg .character', {
      duration: 0.8,
      opacity: 0,
      ease: 'back.out(1)',
    });
    return tl;
  }

  // master timeline
  var heroTimeline = gsap.timeline({ id: 'hero' });
  heroTimeline
    .add(handGroup())
    .add(characterGroup(), '<.4')
    .add(trees(), '<-.5')
    .add(clouds(), '<.2')
    .add(circles(), '<0.4')
    .add(stars(), '<0.2')
    .add(linegroup1(), '-=1')
    .add(linegroup2(), '<.2');
})();
