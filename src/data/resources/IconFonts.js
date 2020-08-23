const IconFont1 = [
  {
    title: 'Font Awesome',
    link: 'https://fontawesome.com/',
    desc: ' The webs most popular icon set and toolkit',
  },
  {
    title: 'Line Awesome',
    link: 'https://icons8.com/line-awesome',
    desc: ' Swap in replacement of Font Awesome with modern line icons',
  },
  {
    title: 'Material Icons',
    link: 'https://material.io/resources/icons/',
    desc: ' Material design icon library',
  },
  {
    title: 'IonIcons',
    link: 'http://ionicons.com/',
    desc: ' Beautifully crafted open source icons from Ionic team',
  },
  {
    title: 'Zurb Foundation Icons',
    link: 'https://zurb.com/playground/foundation-icon-fonts-3',
    desc: ' Customizable Foundation icons',
  },
  {
    title: 'Fontisto Icons',
    link: 'https://fontisto.com/',
    desc: ' Fontisto the iconic font and css toolkit · 616+ free icons',
  },
  {
    title: 'Boxicons',
    link: 'https://boxicons.com/',
    desc:
      ' Boxicons is a free collection of carefully crafted open source icons',
  },
  {
    title: 'Icofont',
    link: 'https://icofont.com/',
    desc: ' 2100+ free icons to spice up your creative designs',
  },
  {
    title: 'Material Palette',
    link: 'https://www.materialpalette.com/icons',
    desc: ' Free to pick palettes, icons and colors for Material Design',
  },
  {
    title: 'Material Design Iconic Font',
    link: 'http://zavoloklom.github.io/material-design-iconic-font/index.html',
    desc: '  Material design icon font',
  },
  {
    title: 'Vscode Codicons',
    link: 'https://microsoft.github.io/vscode-codicons/dist/codicon.html',
    desc: '  The icon font from Visual Studio Code',
  },
  {
    title: 'Devicon',
    link: 'https://konpa.github.io/devicon/',
    desc:
      '  Devicon is a set of icons representing programming languages, designing & development tools',
  },
  {
    title: 'PaymentFont',
    link: 'https://paymentfont.com/',
    desc:
      '  A sleek webfont for payment operators and methods. Featuring 116 icons',
  },
  {
    title: 'Weather Icons',
    link: 'https://erikflowers.github.io/weather-icons/',
    desc: '  Weather Icons is the only icon font with 222 weather themed icons',
  },
  {
    title: 'Stroke 7',
    link: 'https://themes-pixeden.com/font-demos/7-stroke/index.html',
    desc: '  202 thin stroke icons inspired by iOS 7',
  },
  {
    title: 'Jam Icons',
    link: 'https://jam-icons.com/',
    desc: '  890+ handcrafted icons to make your web app awesome',
  },
  {
    title: 'Fontastic.me',
    link: 'http://fontastic.me/',
    desc:
      '  Create your custom icon fonts in seconds. Over 9,000 icons available to pick from or upload your custom svg',
  },
  {
    title: 'Fontello',
    link: 'http://fontello.com/',
    desc:
      ' 200+ web icons where you can customize the names or codes of icons.',
  },
  {
    title: 'Linea',
    link: 'https://linea.io/',
    desc: ' Linea: Featuring 750+ Free Icons',
  },
];

const CATEGORY = 'Icon Fonts';

const IconFonts = IconFont1.map((e, index) => ({
  ...e,
  category: CATEGORY,
  id: CATEGORY.toLowerCase().split(' ').join('') + index,
}));

export default IconFonts;
