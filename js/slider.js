(function () {
  const tlSlideIn = gsap.timeline({ delay: 1.2 });
  const tlSlideOut = gsap.timeline({
    delay: 0.1,
    onComplete: function () {
      let elem = document.querySelectorAll('.social-feed_post--removing');
      removeClass(elem[0], 'social-feed_post--removing');

      //enable/disable buttons
      radioButtons.forEach((radio) => {
        if (hasClass(radio, 'social-feed_paging-list-item-btn--active')) {
          radio.disabled = true;
        } else {
          radio.disabled = false;
        }
      });
    },
  });

  function hasClass(elem, className) {
    return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
  }

  function toggleClass(elem, className) {
    var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, ' ') + ' ';
    if (hasClass(elem, className)) {
      while (newClass.indexOf(' ' + className + ' ') >= 0) {
        newClass = newClass.replace(' ' + className + ' ', ' ');
      }
      elem.className = newClass.replace(/^\s+|\s+$/g, '');
    } else {
      elem.className += ' ' + className;
    }
  }

  function removeClass(elem, className) {
    var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, ' ') + ' ';
    if (hasClass(elem, className)) {
      while (newClass.indexOf(' ' + className + ' ') >= 0) {
        newClass = newClass.replace(' ' + className + ' ', ' ');
      }
      elem.className = newClass.replace(/^\s+|\s+$/g, '');
    }
  }

  function removeAllClasses(elemArray, className) {
    let myArray = Array.from(elemArray);
    myArray.forEach((elem) => {
      var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, ' ') + ' ';
      if (hasClass(elem, className)) {
        while (newClass.indexOf(' ' + className + ' ') >= 0) {
          newClass = newClass.replace(' ' + className + ' ', ' ');
        }
        elem.className =
          newClass.replace(/^\s+|\s+$/g, '') + ' social-feed_post--removing';
      }
    });
  }

  function addClass(elem, className) {
    if (!hasClass(elem, className)) {
      elem.className += ' ' + className;
    }
  }

  /*** Social slider ***/

  const activeSlideAnimation = () => {
    tlSlideIn
      .set(`.social-feed_post--active .social-feed_post-header`, {
        alpha: 1,
        x: 0,
      })
      .set(`.social-feed_post--active .social-feed_post-pic`, {
        alpha: 1,
        x: 0,
      })
      .set(`.social-feed_post--active .social-feed_post-copy`, {
        alpha: 1,
        x: 0,
      });

    tlSlideIn
      .from(`.social-feed_post--active .social-feed_post-header`, {
        duration: 0.4,
        x: 200,
        alpha: 0,
      })
      .from(
        `.social-feed_post--active .social-feed_post-pic`,
        {
          duration: 0.4,
          x: 200,
          alpha: 0,
        },
        '<.2'
      )
      .from(
        `.social-feed_post--active .social-feed_post-copy`,
        {
          duration: 0.4,
          x: 200,
          alpha: 0,
        },
        '<.4'
      );
  };

  const removeSlideAnimation = () => {
    tlSlideOut
      .to(`.social-feed_post--removing .social-feed_post-header`, {
        duration: 0.4,
        x: -200,
        alpha: 0,
      })
      .to(
        `.social-feed_post--removing .social-feed_post-pic`,
        {
          duration: 0.4,
          x: -200,
          alpha: 0,
        },
        '<.2'
      )
      .to(
        `.social-feed_post--removing .social-feed_post-copy`,
        {
          duration: 0.4,
          x: -200,
          alpha: 0,
        },
        '<.4'
      );
  };

  var parent = document.getElementsByClassName('social-feed_post-wrapper');

  const radioButtons = document.querySelectorAll(
    '.social-feed_paging-list-item-btn'
  );

  document
    .querySelectorAll('.social-feed_paging-list-item-btn')
    .forEach((item) => {
      item.addEventListener('click', function (e) {
        radioButtons.forEach((radio, int) => {
          radio.disabled = true;
          removeClass(radio, 'social-feed_paging-list-item-btn--active');
        });

        addClass(this, 'social-feed_paging-list-item-btn--active');

        var li = e.target.closest('li');
        var nodes = Array.from(li.closest('ul').children);
        var index = nodes.indexOf(li);
        var secondChild = parent[0].children[index];

        removeAllClasses(parent[0].children, 'social-feed_post--active');
        addClass(secondChild, 'social-feed_post--active');
        activeSlideAnimation();
        removeSlideAnimation();
      });
    });
})();
