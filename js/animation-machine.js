(function () {
  let randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const bubbleElements = [
    { element: '.how-it-works_img-svg .group12_x5F_fill1', x: -30, y: 80 },
    { element: '.how-it-works_img-svg .group12_x5F_fill2', x: 10, y: 70 },
    { element: '.how-it-works_img-svg .group12_x5F_fill3', x: 0, y: 60 },
    { element: '.how-it-works_img-svg .group12_x5F_fill4', x: -14, y: 40 },
    { element: '.how-it-works_img-svg .group12_x5F_fill5', x: 0, y: 40 },
    { element: '.how-it-works_img-svg .group12_x5F_fill6', x: -14, y: 40 },
    { element: '.how-it-works_img-svg .group12_x5F_fill7', x: 0, y: 20 },
    { element: '.how-it-works_img-svg .group12_x5F_fill8', x: 20, y: 30 },
  ];

  const calculatorButtons = [
    '.how-it-works_img-svg .group9_x5F_path2',
    '.how-it-works_img-svg .group9_x5F_path3',
    '.how-it-works_img-svg .group9_x5F_path4',
    '.how-it-works_img-svg .group9_x5F_path5',
    '.how-it-works_img-svg .group9_x5F_path6',
    '.how-it-works_img-svg .group9_x5F_path7',
    '.how-it-works_img-svg .group9_x5F_path8',
    '.how-it-works_img-svg .group9_x5F_path9',
    '.how-it-works_img-svg .group9_x5F_path10',
    '.how-it-works_img-svg .group9_x5F_path11',
    '.how-it-works_img-svg .group9_x5F_path12',
    '.how-it-works_img-svg .group9_x5F_path13',
  ];

  const sliderKnobElements = [
    '.how-it-works_img-svg .group8_x5F_path10',
    '.how-it-works_img-svg .group8_x5F_path11',
    '.how-it-works_img-svg .group8_x5F_path12',
  ];

  const rotationElementsGreen = [
    '.how-it-works_img-svg .group1_x5F_path11',
    '.how-it-works_img-svg .group1_x5F_path12',
  ];

  const gearRotation = () => {
    const tl = gsap.timeline({ repeat: -1 });
    const gearRotateAnimation = {
      duration: 4,
      rotation: 360,
      transformOrigin: '50% 50%',
      ease: 'none',
    };
    tl.to('.how-it-works_img-svg .group13_x5F_group1', gearRotateAnimation);
    tl.to(
      '.how-it-works_img-svg .group13_x5F_group2',
      gearRotateAnimation,
      '<'
    );

    return tl;
  };

  const sliderKnob = (el) => {
    const tl = gsap.timeline({ repeat: -1 });

    tl.to(el, {
      duration: 0.5,
      y: randomNumber(-5, 5),
    })
      .to(el, {
        duration: 0.5,
        y: randomNumber(-5, 5),
      })
      .to(el, {
        duration: 0.5,
        y: randomNumber(-5, 5),
      })
      .to(el, {
        duration: 0.5,
        y: randomNumber(-5, 5),
      })
      .to(el, {
        duration: 0.5,
        y: 0,
      });

    return tl;
  };

  /* Paper Animation */
  const paperAnimation = () => {
    const tl = gsap.timeline({ repeat: -1 });
    const yPositions = [40, 35, 30, 25, 20, 15, 10, 5, 0];

    yPositions.forEach((yPos) => {
      tl.to('.how-it-works_img-svg .group6_x5F_paper', {
        duration: 0.8,
        y: yPos,
      });
    });

    return tl;
  };

  const bubbles = (el) => {
    const tl = gsap.timeline({ repeat: -1 });
    tl.set(el.element, { x: el.x, y: el.y });
    tl.to(el.element, {
      duration: 2,
      physics2D: {
        velocity: randomNumber(60, 90),
        angle: randomNumber(-60, -120),
        gravity: -10,
        friction: 0.035,
      },
    });

    return tl;
  };

  const rotationAnimationGreen = (el) => {
    const tl = gsap.timeline({ repeat: -1 });
    tl.to(el, {
      duration: 1,
      rotation: randomNumber(0, 360),
      transformOrigin: '180% 170%',
    })
      .to(el, {
        duration: 0.4,
        rotation: randomNumber(0, 360),
        transformOrigin: '180% 170%',
      })
      .to(el, {
        duration: 0.8,
        rotation: randomNumber(0, 360),
        transformOrigin: '180% 170%',
      })
      .to(el, {
        duration: 1.2,
        rotation: 0,
        transformOrigin: '180% 170%',
      });

    return tl;
  };

  const rotationAnimationwhite = () => {
    const tl = gsap.timeline({ repeat: -1 });
    tl.to('.how-it-works_img-svg .group10-rotation', {
      duration: 1,
      rotation: 70,
      transformOrigin: 'center center',
    })
      .to('.how-it-works_img-svg .group10-rotation', {
        duration: 0.5,
        rotation: 30,
        transformOrigin: 'center center',
      })
      .to('.how-it-works_img-svg .group10-rotation', {
        duration: 1,
        rotation: 100,
        transformOrigin: 'center center',
      })
      .to('.how-it-works_img-svg .group10-rotation', {
        duration: 2,
        rotation: 250,
        transformOrigin: 'center center',
      })
      .to('.how-it-works_img-svg .group10-rotation', {
        duration: 0.2,
        rotation: 200,
        transformOrigin: 'center center',
      })
      .to('.how-it-works_img-svg .group10-rotation', {
        duration: 0.5,
        rotation: 0,
        transformOrigin: 'center center',
      });

    return tl;
  };

  const slidePaths1 = () => {
    const tl = gsap.timeline({ repeat: -1 });
    // slider right
    tl.to(
      '.how-it-works_img-svg .group3_x5F_path7',
      {
        duration: 1,
        x: 50,
      },
      '.2'
    )
      .to(
        '.how-it-works_img-svg .group3_x5F_path5',
        {
          duration: 1,
          x: 50,
        },
        '<'
      )
      .to(
        '.how-it-works_img-svg .group3_x5F_path6',
        {
          duration: 1,
          x: 50,
        },
        '<'
      )

      //set position
      .to(
        '.how-it-works_img-svg .group3_x5F_path7',
        {
          duration: 0,
          x: -50,
          y: -50,
          opacity: 0,
        },
        '+=.5'
      )
      .to('.how-it-works_img-svg .group3_x5F_path6', {
        duration: 0,
        x: -50,
        y: -50,
        opacity: 0,
      })
      .to('.how-it-works_img-svg .group3_x5F_path5', {
        duration: 0,
        x: -50,
        y: -50,
        opacity: 0,
      })

      //fall down
      .to('.how-it-works_img-svg .group3_x5F_path7', {
        duration: 0.5,
        x: -50,
        y: 0,
        opacity: 1,
      })
      .to(
        '.how-it-works_img-svg .group3_x5F_path5',
        {
          duration: 0.5,
          x: -50,
          y: 0,
          opacity: 1,
        },
        '<.2'
      )
      .to(
        '.how-it-works_img-svg .group3_x5F_path6',
        {
          duration: 0.5,
          x: -50,
          y: 0,
          opacity: 1,
        },
        '<.2'
      )

      // slide right
      .to(
        '.how-it-works_img-svg .group3_x5F_path6',
        {
          duration: 1,
          x: 0,
          y: 0,
        },
        '+=.2'
      )
      .to(
        '.how-it-works_img-svg .group3_x5F_path5',
        {
          duration: 1,
          x: 0,
          y: 0,
        },
        '<'
      )
      .to(
        '.how-it-works_img-svg .group3_x5F_path7',
        {
          duration: 1,
          x: 0,
          y: 0,
        },
        '<'
      )
      .to('.how-it-works_img-svg .group3_x5F_path7', {
        duration: 0.8,
        x: 0,
        y: 0,
      });

    return tl;
  };

  const slidePaths2 = () => {
    const tl = gsap.timeline({ repeat: -1 });
    //slide right
    tl.to(
      '.how-it-works_img-svg .group3_x5F_path1',
      {
        duration: 1,
        x: 50,
      },
      '.2'
    )
      .to(
        '.how-it-works_img-svg .group3_x5F_path2',
        {
          duration: 1,
          x: 50,
        },
        '<'
      )
      .to(
        '.how-it-works_img-svg .group3_x5F_path3',
        {
          duration: 1,
          x: 50,
        },
        '<'
      )
      .to(
        '.how-it-works_img-svg .group3_x5F_path4',
        {
          duration: 1,
          x: 50,
        },
        '<'
      )

      //slide right again
      .to(
        '.how-it-works_img-svg .group3_x5F_path1',
        {
          duration: 1,
          x: 100,
        },
        '+=1.6'
      )
      .to(
        '.how-it-works_img-svg .group3_x5F_path2',
        {
          duration: 1,
          x: 100,
        },
        '<'
      )
      .to(
        '.how-it-works_img-svg .group3_x5F_path3',
        {
          duration: 1,
          x: 100,
        },
        '<'
      )
      .to(
        '.how-it-works_img-svg .group3_x5F_path4',
        {
          duration: 1,
          x: 100,
        },
        '<'
      )

      //set position
      .to('.how-it-works_img-svg .group3_x5F_path1', {
        duration: 0,
        x: 0,
        y: -50,
        opacity: 0,
      })
      .to('.how-it-works_img-svg .group3_x5F_path2', {
        duration: 0,
        x: -0,
        y: -50,
        opacity: 0,
      })
      .to('.how-it-works_img-svg .group3_x5F_path3', {
        duration: 0,
        x: -0,
        y: -50,
        opacity: 0,
      })
      .to('.how-it-works_img-svg .group3_x5F_path4', {
        duration: 0,
        x: -0,
        y: -50,
        opacity: 0,
      })

      // fall down
      .to('.how-it-works_img-svg .group3_x5F_path4', {
        duration: 0.2,
        x: 0,
        y: 0,
        opacity: 1,
      })
      .to('.how-it-works_img-svg .group3_x5F_path3', {
        duration: 0.2,
        x: 0,
        y: 0,
        opacity: 1,
      })
      .to('.how-it-works_img-svg .group3_x5F_path2', {
        duration: 0.2,
        x: 0,
        y: 0,
        opacity: 1,
      })
      .to('.how-it-works_img-svg .group3_x5F_path1', {
        duration: 0.2,
        x: 0,
        y: 0,
        opacity: 1,
      });
    return tl;
  };

  const buttonClickAnimation = () => {
    const tl = gsap.timeline({ repeat: -1 });
    tl.set(calculatorButtons, {
      fill: '#DDDDDD',
    });

    tl.from(
      calculatorButtons[randomNumber(2, 13)],
      0.3,
      {
        fill: '#A381B9',
      },
      '2'
    )
      .from(
        calculatorButtons[randomNumber(2, 13)],
        0.5,
        {
          fill: '#A381B9',
        },
        '-=.2'
      )
      .from(
        calculatorButtons[randomNumber(2, 13)],
        0.5,
        {
          fill: '#A381B9',
        },
        '-=.2'
      )
      .from(
        calculatorButtons[randomNumber(2, 13)],
        0.5,
        {
          fill: '#A381B9',
        },
        '-=.2'
      )
      .from(
        calculatorButtons[randomNumber(2, 13)],
        0.5,
        {
          fill: '#A381B9',
        },
        '-=.2'
      );

    return tl;
  };

  const moneySlide = () => {
    const tl = gsap.timeline({ repeat: -1 });
    tl.to(
      '.how-it-works_img-svg .group7_x5F_group2',
      2,
      {
        x: 41,
      },
      '+=2'
    )
      .to(
        '.how-it-works_img-svg .group7_x5F_group3',
        2,
        {
          x: 41,
        },
        '<'
      )
      .to(
        '.how-it-works_img-svg .group7_x5F_group1',
        2,
        {
          x: 41,
        },
        '<'
      );
    return tl;
  };

  var machineTimeline = gsap.timeline({
    id: 'machine',
    scrollTrigger: {
      trigger: '.how-it-works_img-svg',
      start: 'top bottom',
      toggleActions: 'play pause resume pause',
    },
  });
  machineTimeline
    .add(sliderKnob(sliderKnobElements[0]), '<')
    .add(sliderKnob(sliderKnobElements[1]), '<')
    .add(sliderKnob(sliderKnobElements[2]), '<')
    .add(gearRotation(), '<')
    .add(paperAnimation(), '<')
    .add(rotationAnimationGreen(rotationElementsGreen[0]), '<')
    .add(rotationAnimationGreen(rotationElementsGreen[1]), '<')
    .add(rotationAnimationwhite(), '<')
    .add(slidePaths1(), '<')
    .add(slidePaths2(), '<')
    .add(buttonClickAnimation(), '<')
    .add(moneySlide(), '<')
    .add(bubbles(bubbleElements[0]), '<')
    .add(bubbles(bubbleElements[1]), '<.2')
    .add(bubbles(bubbleElements[2]), '<.2')
    .add(bubbles(bubbleElements[3]), '<.2')
    .add(bubbles(bubbleElements[4]), '<.2')
    .add(bubbles(bubbleElements[5]), '<.2')
    .add(bubbles(bubbleElements[6]), '<.2')
    .add(bubbles(bubbleElements[7]), '<.2');
})();
