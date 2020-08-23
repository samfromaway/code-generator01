const Others1 = [
  {
    title: 'everysize.kibalabs.com',
    link: 'https://everysize.kibalabs.com/',
    desc: '  Check your awesome responsive webpage looks great in every size ',
  },
  {
    title: 'Devhints.io',
    link: 'https://devhints.io/',
    desc: '  This is a modest collection of cheatsheets on Internet ',
  },
  {
    title: 'The Web Toolbox',
    link: 'https://thewebtoolbox.cc/',
    desc:
      ' A collection of handy, free-to-use tools for web developers, programmers and designers. ',
  },
  {
    title: 'WebDevTrick',
    link: 'https://webdevtrick.com/',
    desc: ' A famous blog for many amazing HTML, CSS, JQuery designs. ',
  },
  {
    title: 'css-tricks',
    link: 'https://css-tricks.com/',
    desc: ' Free CSS tricks and some unique ideas for beginners and advanced ',
  },
  {
    title: 'Material Design Resizer',
    link: 'https://material.io/resources/resizer/',
    desc:
      ' An interactive viewer that helps designers test material design breakpoints across desktop, mobile, and tablet ',
  },
  {
    title: 'Nodesign.dev',
    link: 'https://nodesign.dev',
    desc:
      '  A collection of tools for developers who have little to no artistic talent',
  },
  {
    title: 'A11ygator',
    link: 'https://a11ygator.chialab.io/',
    desc: ' A web tool to scan websites against WCAG rules ',
  },
  {
    title: 'Commitizen',
    link: 'http://commitizen.github.io/cz-cli/',
    desc:
      ' Command line tool to formatted commit messages according to the standards ',
  },
  {
    title: 'CleanCss',
    link: 'https://www.cleancss.com/',
    desc: ' Tool For Code Foramtter, Minifier, File Converter  ',
  },
];

const CATEGORY = 'Others';

const Others = Others1.map((e, index) => ({
  ...e,
  category: CATEGORY,
  id: CATEGORY.toLowerCase().split(' ').join('') + index,
}));

export default Others;
