(function () {
  /*** hamburger buttons ***/

  const hamburgerButton = document.querySelector('.hamburger');

  hamburgerButton.onclick = function () {
    hamburgerButton.classList.toggle('is-active');
  };
})();
