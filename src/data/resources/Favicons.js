const Favicon1 = [
  {
    title: 'Favicon.io',
    link: 'https://favicon.io/',
    desc:
      ' Generate a favicon from text, from an image, or from an emoji. Download in .ico and .png formats',
  },
  {
    title: 'Favicon Generator',
    link: 'http://tools.dynamicdrive.com/favicon/',
    desc: ' Generate favicon ico files for your website ',
  },
  {
    title: 'RealFaviconGenerator',
    link: 'https://realfavicongenerator.net/',
    desc: ' Generate icons for all platforms ',
  },

  {
    title: 'FontIcon',
    link: 'https://gauger.io/fonticon/',
    desc: ' Generate favicons and images from Font Awesome icons ',
  },
];

const CATEGORY = 'Favicons';

const Favicon = Favicon1.map((e, index) => ({
  ...e,
  category: CATEGORY,
  id: CATEGORY.toLowerCase() + index,
}));

export default Favicon;
