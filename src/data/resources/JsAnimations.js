const JsAnimations1 = [
  {
    title: 'Greensock',
    link: 'https://greensock.com/',
    desc:
      ' A JavaScript library for building high-performance animations that work in every major browser',
  },
  {
    title: 'Velocity.js',
    link: 'http://velocityjs.org/',
    desc:
      ' Velocity is an lightweight animation engine with the same API as jQuerys $.animate',
  },
  {
    title: 'lax.js',
    link: 'https://github.com/alexfoxy/laxxx',
    desc:
      ' Simple & light weight vanilla javascript plugin to create smooth & beautiful animations when you scroll!',
  },
  {
    title: 'Rellax.js',
    link: 'https://github.com/dixonandmoe/rellax',
    desc:
      ' A buttery smooth, super lightweight, vanilla javascript parallax library',
  },
  {
    title: 'three.js',
    link: 'https://github.com/mrdoob/three.js/',
    desc:
      ' An easy to use, lightweight, 3D library with a default WebGL renderer. ',
  },
  {
    title: 'wow.js',
    link: 'https://wowjs.uk/',
    desc: ' Reveal Animations When You Scroll',
  },
  {
    title: 'chocolat.js',
    link: 'http://chocolat.insipi.de/',
    desc: ' Free lightbox plugin.',
  },
  {
    title: 'Animate On Scroll',
    link: 'https://michalsnik.github.io/aos/',
    desc: ' Animate on scroll library to reveal animations when You scroll.',
  },
  {
    title: 'Tilt.Js',
    link: 'http://gijsroge.github.io/tilt.js/',
    desc:
      ' A tiny requestAnimationFrame powered 60+fps lightweight parallax hover tilt effect for jQuery.',
  },
];

const CATEGORY = 'JS Animations';

const JsAnimations = JsAnimations1.map((e, index) => ({
  ...e,
  category: CATEGORY,
  id: CATEGORY.toLowerCase().split(' ').join('') + index,
}));

export default JsAnimations;
