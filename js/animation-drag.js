(function () {
  const slider = document.getElementsByClassName('rate-slider_list');
  const sliderWrapper = document.getElementsByClassName('rate-slider_wrapper');
  const offSet = 20;

  Draggable.create('.rate-slider_list', {
    type: 'x',
    bounds: {
      minX: 0,
      maxX: `-${slider[0].scrollWidth - sliderWrapper[0].offsetWidth + offSet}`,
      minY: 0,
      maxY: 0,
    },
    edgeResistance: 0.65,
    inertia: true,
    autoScroll: true,
  });
})();
