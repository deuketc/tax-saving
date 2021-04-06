function countdownTimer() {
  let timerTimeline = gsap.timeline({ paused: true });
  let numberHeight = document.querySelector('.timer_num_wrapper').clientHeight;
  let days, hours, minutes, seconds;

  let numberElementsArray = [];
  let numberNextElementsArray = [];
  let numberCurrentElementsArray = [];
  let timerCurrentArray = [0, 0, 0, 0, 0, 0];
  let timerNextArray = [0, 0, 0, 0, 0, 0];

  numberElementsArray.push(document.getElementsByClassName('timer_num0'));
  numberElementsArray.push(document.getElementsByClassName('timer_num1'));
  numberElementsArray.push(document.getElementsByClassName('timer_num2'));
  numberElementsArray.push(document.getElementsByClassName('timer_num3'));
  numberElementsArray.push(document.getElementsByClassName('timer_num4'));
  numberElementsArray.push(document.getElementsByClassName('timer_num5'));

  numberNextElementsArray.push(
    document.getElementsByClassName('timer_num0-next')
  );
  numberNextElementsArray.push(
    document.getElementsByClassName('timer_num1-next')
  );
  numberNextElementsArray.push(
    document.getElementsByClassName('timer_num2-next')
  );
  numberNextElementsArray.push(
    document.getElementsByClassName('timer_num3-next')
  );
  numberNextElementsArray.push(
    document.getElementsByClassName('timer_num4-next')
  );
  numberNextElementsArray.push(
    document.getElementsByClassName('timer_num5-next')
  );
  numberNextElementsArray.push(
    document.getElementsByClassName('timer_num6-next')
  );

  numberCurrentElementsArray.push(
    document.getElementsByClassName('timer_num0-current')
  );
  numberCurrentElementsArray.push(
    document.getElementsByClassName('timer_num1-current')
  );
  numberCurrentElementsArray.push(
    document.getElementsByClassName('timer_num2-current')
  );
  numberCurrentElementsArray.push(
    document.getElementsByClassName('timer_num3-current')
  );
  numberCurrentElementsArray.push(
    document.getElementsByClassName('timer_num4-current')
  );
  numberCurrentElementsArray.push(
    document.getElementsByClassName('timer_num5-current')
  );
  numberCurrentElementsArray.push(
    document.getElementsByClassName('timer_num6-current')
  );

  function resetCounter(element, next, current) {
    numberCurrentElementsArray[element][0].innerHTML = next;
    timerCurrentArray[element] = timerNextArray[element];
  }

  const slideUp = (element, next, current) => {
    if (element != undefined) {
      const tl = gsap.timeline({
        onComplete: resetCounter(element, next, current),
      });

      tl.set(`.timer_num${element}`, {
        y: 0,
      });

      numberNextElementsArray[element][0].innerHTML = next;
      numberCurrentElementsArray[element][0].innerHTML = current;

      tl.to(`.timer_num${element}`, {
        duration: 0.8,
        y: numberHeight + 4,
        ease: 'back',
      });

      return tl;
    }
  };

  timerTimeline.add(slideUp());

  // Set the date we're counting down to
  var dateOneYearAhead = new Date().getFullYear() + 1;
  var countDownDate = new Date(
    `Apr 16, ${dateOneYearAhead} 08:37:25`
  ).getTime();

  // Update the count down every 1 second
  var x = setInterval(function () {
    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    days = Math.floor(distance / (1000 * 60 * 60 * 24));
    hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      .toString()
      .split('');
    minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      .toString()
      .split('');
    seconds = Math.floor((distance % (1000 * 60)) / 1000)
      .toString()
      .split('');

    /*
    console.log('days', days);
    console.log('hours', hours);
    console.log('minutes', minutes);
    console.log('seconds', seconds);
    */

    //add zero
    if (hours.length == 1) {
      hours.unshift('0');
    }

    if (minutes.length == 1) {
      minutes.unshift('0');
    }

    if (seconds.length == 1) {
      seconds.unshift('0');
    }

    timerNextArray[0] = parseInt(hours[0]);
    timerNextArray[1] = parseInt(hours[1]);
    timerNextArray[2] = parseInt(minutes[0]);
    timerNextArray[3] = parseInt(minutes[1]);
    timerNextArray[4] = parseInt(seconds[0]);
    timerNextArray[5] = parseInt(seconds[1]);

    // Display the result in the element with id="demo"
    /*
    document.getElementById('demo').innerHTML =
      days +
      'd ' +
      timerNextArray[0] +
      timerNextArray[1] +
      'h ' +
      timerNextArray[2] +
      timerNextArray[3] +
      'm ' +
      timerNextArray[4] +
      timerNextArray[5] +
      's ';
*/
    if (timerNextArray[5] != timerCurrentArray[5]) {
      slideUp(5, timerNextArray[5], timerCurrentArray[5]);
    }

    if (timerNextArray[4] != timerCurrentArray[4]) {
      slideUp(4, timerNextArray[4], timerCurrentArray[4]);
    }

    if (timerNextArray[3] != timerCurrentArray[3]) {
      slideUp(3, timerNextArray[3], timerCurrentArray[3]);
    }

    if (timerNextArray[2] != timerCurrentArray[2]) {
      slideUp(2, timerNextArray[2], timerCurrentArray[2]);
    }

    if (timerNextArray[1] != timerCurrentArray[1]) {
      slideUp(1, timerNextArray[1], timerCurrentArray[1]);
    }

    if (timerNextArray[0] != timerCurrentArray[0]) {
      slideUp(0, timerNextArray[0], timerCurrentArray[0]);
    }
  }, 1000);

  window.onresize = function (event) {
    timerCurrentArray = [0, 0, 0, 0, 0, 0];
    numberElementsArray.forEach((el) => {
      numberHeight = document.querySelector('.timer_num').clientHeight;
      el[0].removeAttribute('style');
    });
  };
}
window.onload = countdownTimer();
