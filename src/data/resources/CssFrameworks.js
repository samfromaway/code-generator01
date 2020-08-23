const CssFrameworks1 = [
  {
    title: 'Tailwind CSS',
    link: 'https://tailwindcss.com/',
    desc: ' Low level, utility-first framework',
  },
  {
    title: 'Bootstrap',
    link: 'https://getbootstrap.com/',
    desc:
      ' Popular UI framework with tons of components that use both CSS and JS',
  },
  {
    title: 'Materialize',
    link: 'https://materializecss.com/',
    desc: ' A modern responsive front-end framework based on Material Design',
  },
  {
    title: 'Material Design Lite',
    link: 'https://getmdl.io/',
    desc: ' Light framework based on Material Design. No JS dependency',
  },
  {
    title: 'Bulma',
    link: 'https://bulma.io/',
    desc: ' Modern CSS framework with no JS',
  },
  {
    title: 'Skeleton',
    link: 'http://getskeleton.com/',
    desc: ' Extremely light framework for basic UI elements',
  },
  {
    title: 'Semantic UI',
    link: 'https://semantic-ui.com/',
    desc:
      ' Empowers designers and developers by creating a shared vocabulary for UI',
  },
  {
    title: 'Fomantic UI',
    link: 'https://fomantic-ui.com/',
    desc: ' A community fork of Semantic-UI',
  },
  {
    title: 'Foundation',
    link: 'https://get.foundation/',
    desc: ' Mobile first framework with clean markup ',
  },
  {
    title: 'Pure CSS',
    link: 'https://purecss.io/',
    desc: ' A set of small, responsive CSS modules',
  },
  {
    title: 'UIKit',
    link: 'https://getuikit.com/',
    desc: ' Lightweight and modular front-end framework',
  },
  {
    title: 'Susy',
    link: 'https://www.oddbird.net/susy/',
    desc: ' Lightweight, grid-layout engine for Sass',
  },
  {
    title: 'Milligram.io',
    link: 'https://milligram.io/',
    desc: ' Minimalist CSS framework',
  },
  {
    title: 'Vanilla Framework',
    link: 'https://vanillaframework.io/',
    desc: ' Simple, extensible CSS framework written in Sass',
  },
  {
    title: 'Spectre CSS',
    link: 'https://picturepan2.github.io/spectre/',
    desc: ' Lightweight, modern CSS framework',
  },
  {
    title: 'Picnic CSS',
    link: 'https://picnicss.com/',
    desc: ' Lightweight and beautiful library',
  },
  {
    title: 'Wing',
    link: 'https://kbrsh.github.io/wing/',
    desc: ' A beautiful CSS framework designed for minimalists',
  },
  {
    title: 'Chota',
    link: 'https://jenil.github.io/chota/',
    desc: ' A micro CSS framework',
  },
  {
    title: 'Blueprint CSS',
    link: 'https://blueprintcss.dev/',
    desc:
      ' A lightweight layout library for building great responsive mobile first UIs that work everywhere',
  },
  {
    title: 'W3.CSS',
    link: 'https://www.w3schools.com/w3css/',
    desc:
      '  A modern CSS framework with support for desktop, tablet, and mobile design by default. Designed to be independent of jQuery or any other JavaScript library',
  },
  {
    title: '98.css',
    link: 'https://jdan.github.io/98.css/',
    desc: ' A design system for building faithful recreations of old UIs',
  },
  {
    title: 'NES CSS',
    link: 'https://nostalgic-css.github.io/NES.css/',
    desc: ' NES-style CSS Framework',
  },
  {
    title: 'Shoelace.css',
    link: 'https://www.shoelace.style/',
    desc:
      ' Lightweight, forward-thinking CSS library built with future CSS syntax',
  },
  {
    title: 'MVP.css',
    link: 'https://andybrewer.github.io/mvp/',
    desc:
      '  A minimalist stylesheet for HTML elements. No class names, no frameworks, just semantic HTML and you are done',
  },
  {
    title: 'Blaze.css',
    link: 'http://blazecss.com/',
    desc:
      '  Open source modular CSS toolkit providing great structure for building websites quickly',
  },
  {
    title: 'Turret CSS',
    link: 'https://turretcss.com/',
    desc:
      '  Turret CSS is a styles framework for development of responsive websites.',
  },
  {
    title: 'Cutestrap',
    link: 'https://www.cutestrap.com/',
    desc: '  A strong, independent CSS Framework.',
  },
  {
    title: 'Shorthand',
    link: 'https://shorthandcss.com/',
    desc:
      '  Shorthand is a free and open source css framework, that allows you to make unique and modern design without writing any css',
  },
];

const CATEGORY = 'CSS Frameworks';

const CssFrameworks = CssFrameworks1.map((e, index) => ({
  ...e,
  category: CATEGORY,
  id: CATEGORY.toLowerCase().split(' ').join('') + index,
}));

export default CssFrameworks;
