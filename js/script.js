var path = anime.path('path');

anime({
  targets: 'div',
  translateX: path,
  translateY: path,
  rotate: path,
  duration: 5000,
  loop: true,
  easing: 'linear'
});