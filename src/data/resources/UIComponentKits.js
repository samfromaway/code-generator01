const UiComponentKits1 = [
  {
    title: 'UILang',
    link: 'http://uilang.com/',
    desc: 'A minimal, ui-focused programming language for web designers',
  },
  {
    title: 'Medialoot CSS Components',
    link: 'https://medialoot.com/free-themes/css-components/',
    desc: 'Calendars, price grids and other UI components',
  },
  {
    title: 'Froala Design Blocks',
    link: 'https://froala.com/design-blocks',
    desc:
      'Over 170 responsive design blocks ready to be used in your web or mobile apps ',
  },
  {
    title: 'Material Design For Bootstrap',
    link: 'https://fezvrasta.github.io/bootstrap-material-design/',
    desc: 'Open source toolkit for building material design with Bootstrap ',
  },
  {
    title: 'Photonkit',
    link: 'http://photonkit.com/',
    desc: 'Desktop UI library for Electron ',
  },
  {
    title: 'Flat UI',
    link: 'https://designmodo.github.io/Flat-UI/',
    desc: 'Minimal free user interface kit',
  },
  {
    title: 'Shards',
    link: 'https://designrevision.com/downloads/shards/',
    desc: 'A free and modern UI toolkit for web makers based on Bootstrap  ',
  },
  {
    title: 'Creative Tim',
    link: 'https://www.creative-tim.com/',
    desc:
      'All types of UI libraries and kits including JS frameworks like React ',
  },
  {
    title: 'Brumm Shadow Maker',
    link: 'https://brumm.af/shadows',
    desc: 'An online tool to make css shadows',
  },
  {
    title: 'AdminLTE',
    link: 'https://adminlte.io/',
    desc: 'Best open source admin dashboard & control panel theme',
  },
  {
    title: 'SpinKit',
    link: 'https://tobiasahlin.com/spinkit/',
    desc: 'Simple CSS Spinners',
  },
  {
    title: 'Moving Letters',
    link: 'https://tobiasahlin.com/moving-letters/',
    desc: 'Animated Text with JavaScript and anime.js',
  },
  {
    title: 'CSS Layout',
    link: 'https://csslayout.io/',
    desc: 'A collection of popular web layouts and patterns in pure CSS ',
  },
  {
    title: 'Codyhouse',
    link: 'https://codyhouse.co/',
    desc:
      'Kick-start your web projects with CodyHouses front- end framework and library of accessible HTML, CSS, JavaScript components',
  },
  {
    title: 'Tailwind Starter Kit',
    link: 'https://github.com/creativetimofficial/tailwind-starter-kit',
    desc:
      'Tailwind Starter Kit a beautiful extension for TailwindCSS, Free and Open Source',
  },
  {
    title: 'Tailwindtoolbox',
    link: 'https://www.tailwindtoolbox.com/',
    desc:
      'Open source starter templates and components, a plugins directory and useful tools/utilities to kick start your Tailwind CSS project. ',
  },
  {
    title: 'tailwindcomponents',
    link: 'https://tailwindcomponents.com/',
    desc: 'A free repository for community components using TailwindCSS ',
  },
  {
    title: 'sweetalert',
    link: 'https://sweetalert.js.org/',
    desc: 'SweetAlert makes popup messages easy and pretty. ',
  },
  {
    title: 'sweetalert2',
    link: 'https://sweetalert2.github.io/',
    desc:
      'A beautiful, responsive, customizable, accessible replacement for javascripts popup boxes ',
  },
];

const CATEGORY = 'Ui Component Kits';

const UiComponentKits = UiComponentKits1.map((e, index) => ({
  ...e,
  category: CATEGORY,
  id: CATEGORY.toLowerCase().split(' ').join('') + index,
}));

export default UiComponentKits;
