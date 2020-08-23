const fonts = [
  {
    title: 'Google Fonts',
    link: 'https://fonts.google.com/',
    desc: 'Library of around 1000 free licensed font families ',
  },
  {
    title: 'DaFont',
    link: 'https://www.dafont.com/',
    desc: 'Archive of freely downloadable fonts ',
  },
  {
    title: 'Use & Modify',
    link: 'https://usemodify.com/',
    desc:
      'Personal selection of beautiful, classy, punk, professional, incomplete, weird typefaces ',
  },
  {
    title: '1001 Free Fonts',
    link: 'https://www.1001freefonts.com/',
    desc: 'I think the name speaks for itself :smirk: ',
  },
  {
    title: 'Font Squirrel',
    link: 'https://www.fontsquirrel.com/',
    desc:
      'Font Squirrel scours the internet for high quality, legitimately free fonts ',
  },
  {
    title: 'Font Fabric',
    link: 'https://www.fontfabric.com/free-fonts/',
    desc:
      'A digital type foundry crafting retail fonts and custom typography for various brands ',
  },
  {
    title: 'What Font',
    link: 'http://www.chengyinliu.com/whatfont.html',
    desc:
      'Tool for finding the fonts of a website without having to search in the devtools ',
  },
  {
    title: 'Tiff',
    link: 'https://tiff.herokuapp.com/',
    desc:
      'A type diff tool that visually contrasts the differences between two fonts ',
  },
  {
    title: 'Font Flame',
    link: 'http://app.fontflame.com/',
    desc: 'Tool for pairing fonts to see how they look together ',
  },
  {
    title: 'TypeKit Practice',
    link: 'https://practice.typekit.com/',
    desc: 'Learn about typography practices ',
  },
  {
    title: 'Fontjoy',
    link: 'https://fontjoy.com/',
    desc: 'Generate font pairing in one click ',
  },
  {
    title: 'Golden Ratio',
    link: 'https://grtcalculator.com/',
    desc: 'Golden Ratio Typography Calculator ',
  },
  {
    title: 'FontSpark',
    link: 'https://fontspark.app/',
    desc: ' Discover Better Fonts ',
  },
  {
    title: 'FontPair',
    link: 'https://fontpair.co/',
    desc: ' Helps you pair Google Fonts together',
  },
  {
    title: 'Font Space',
    link: 'https://www.fontspace.com/',
    desc:
      'A designer-centered free font website that has quick customizable previews ',
  },
  {
    title: 'Abstract Fonts',
    link: 'http://www.abstractfonts.com/',
    desc: 'Fonts free for personal and commercial use ',
  },
  {
    title: 'Free Typography',
    link: 'https://freetypography.com/',
    desc: 'A list of high quality fonts ',
  },
  {
    title: 'Leon Sans',
    link: 'https://github.com/cmiscm/leonsans/',
    desc: 'A geometric sans-serif typeface made with code ',
  },
  {
    title: 'Lexend',
    link: 'https://www.lexend.com/',
    desc:
      'A variable font empirically shown to significantly improve reading-proficiency ',
  },
  {
    title: 'Fonts for Apple Platforms',
    link: 'https://developer.apple.com/fonts/',
    desc:
      'Get the details, frameworks, and tools you need to use system fonts for Apple platforms in your apps ',
  },
  {
    title: 'SFWin',
    link: 'https://github.com/blaisck/sfwin/',
    desc: 'San Francisco Fonts for Windows 10 and non-Apple Platform ',
  },
  {
    title: 'Font Flipper',
    link: 'https://fontflipper.com/',
    desc:
      'Preview 800+ Google Fonts on top of your own designs, without having to download the fonts ',
  },
  {
    title: 'Fonts Arena',
    link: 'https://fontsarena.com/',
    desc: ' Free curated fonts ',
  },
  {
    title: 'Befonts',
    link: 'https://befonts.com/',
    desc: ' High quality fonts for free ',
  },
  {
    title: 'Arabic fonts',
    link: 'https://arabicfonts.net/',
    desc: ' Arabic fonts for free ',
  },
];

const CATEGORY = 'Fonts';

const fonts2 = fonts.map((e, index) => ({
  ...e,
  category: CATEGORY,
  id: CATEGORY.toLowerCase() + index,
}));

export default fonts2;
