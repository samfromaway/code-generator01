const HtmlCssTemplates1 = [
  {
    title: 'HTML5Up',
    link: 'https://html5up.net/',
    desc: ' Very modern, unique responsive HTML5/CSS3 themes',
  },
  {
    title: 'Templatemo',
    link: 'https://templatemo.com/',
    desc: ' Minimal, resume, gallery themes and more',
  },
  {
    title: 'Templated.co',
    link: 'https://templated.co/',
    desc: ' Tons of minimalistic HTML5/CSS3 themes',
  },
  {
    title: 'FreeHTML5',
    link: 'https://freehtml5.co/',
    desc: ' Free & premium HTML5 and Bootstrap themes',
  },
  {
    title: 'StyleShout',
    link: 'https://www.styleshout.com/free-templates/',
    desc: ' Brilliantly crafted free website templates ',
  },
  {
    title: 'Start Bootstrap',
    link: 'https://startbootstrap.com/',
    desc: ' Bootstrap starter themes ',
  },
  {
    title: 'Zerotheme',
    link: 'https://www.zerotheme.com/',
    desc: ' HTML5, Bootstrap, Prestashop templates',
  },
  {
    title: 'HTML5xCSS3',
    link: 'https://www.html5xcss3.com/',
    desc: ' Collection of wonderful templates in different categories',
  },
  {
    title: 'Colorlib',
    link: 'https://colorlib.com/wp/templates/',
    desc: ' Almost any category of theme you can think of',
  },
  {
    title: 'Free CSS',
    link: 'https://www.free-css.com/free-css-templates',
    desc: ' Huge collection of free templates',
  },
  {
    title: 'Hubspot',
    link: 'https://www.hubspot.com/resources',
    desc: ' Templates, infographics, banners and much more',
  },
  {
    title: 'Mobirise',
    link: 'https://mobirise.com/html-templates/',
    desc: ' Great looking HTML5/CSS3 templates',
  },
  {
    title: 'Bootswatch',
    link: 'https://bootswatch.com/',
    desc: ' Free themes for Bootstrap',
  },
  {
    title: 'Onepagelove',
    link: 'https://onepagelove.com/',
    desc: ' One page websites, templates and resources',
  },
  {
    title: 'Themes For App',
    link: 'https://themesfor.app/',
    desc: ' Free Bootstrap themes and landing pages',
  },
  {
    title: 'BootstrapTaste',
    link: 'https://bootstraptaste.com/',
    desc: ' Premium & Free Bootstrap Templates',
  },
  {
    title: 'BootstrapMade',
    link: 'https://bootstrapmade.com/',
    desc: ' Elegant, clean and beautiful free templates using Bootstrap.',
  },
  {
    title: 'W3Layouts',
    link: 'https://w3layouts.com/',
    desc: ' W3Layouts: 3784+ Free Website Templates for 2020 ',
  },
];

const CATEGORY = 'Html and Css Templates';

const HtmlCssTemplates = HtmlCssTemplates1.map((e, index) => ({
  ...e,
  category: CATEGORY,
  id: CATEGORY.toLowerCase().split(' ').join('') + index,
}));

export default HtmlCssTemplates;
