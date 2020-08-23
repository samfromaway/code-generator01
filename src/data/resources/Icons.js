const Icons1 = [
  {
    title: 'UXWing',
    link: 'https://uxwing.com/',
    desc: 'Well Optimized, Free icons for commercial use',
  },
  {
    title: 'Shapedfonts Iconclub',
    link: 'https://shapedfonts.com/iconclub/',
    desc: '8000+ free icons ',
  },
  {
    title: 'Feather Icons',
    link: 'https://feathericons.com/',
    desc: 'Beautiful, customizable open source icons ',
  },
  {
    title: 'Tabler Icons',
    link: 'https://tablericons.com/',
    desc: '470+ highly customizable open source SVG icons ',
  },
  {
    title: 'Simple Icons',
    link: 'https://simpleicons.org/',
    desc: '1307 Free SVG icons for popular brands ',
  },
  {
    title: 'Linear Icons',
    link: 'https://linearicons.com/free',
    desc: '1000+ Ultra crisp vector icons ',
  },
  {
    title: 'Entypo',
    link: 'http://www.entypo.com/',
    desc: '411 carefully crafted premium pictograms by Daniel Bruce ',
  },
  {
    title: 'Icons8',
    link: 'https://icons8.com/',
    desc: 'Free icons, photos, vectors and tools ',
  },
  {
    title: 'Flat Icon',
    link: 'https://www.flaticon.com/',
    desc:
      'The largest database of free icons in PNG, SVG, EPS, PSD and BASE 64 formats  ',
  },
  {
    title: 'The Noun Project',
    link: 'https://thenounproject.com/',
    desc: 'Over 2 Million curated icons, created by a global community ',
  },
  {
    title: 'Iconscout',
    link: 'https://iconscout.com/',
    desc: 'Free Download Icons illustrations stock photos at one place  ',
  },
  {
    title: 'Nucleo App',
    link: 'https://nucleoapp.com/',
    desc:
      'Nucleo is a beautiful library of 27500 icons, and a powerful application to collect, customize and export all your icons. ',
  },
  {
    title: 'Icon - icons.com',
    link: 'https://icon-icons.com/',
    desc: 'Free Icons PNG, ICO, ICNS and Vector file SVG  ',
  },
  {
    title: 'Bootstrap Icons',
    link: 'https://icons.getbootstrap.com/',
    desc: 'Free Icons built for Bootstrap but they will work in any project  ',
  },
  {
    title: 'Remix Icon',
    link: 'https://remixicon.com/',
    desc: 'Simply Delightful Icon System ',
  },
  {
    title: 'Iconmonstr',
    link: 'https://iconmonstr.com/',
    desc: ' Discover 4496+ free icons in 313 collections ',
  },
  {
    title: 'Vivid.js',
    link: 'https://webkul.github.io/vivid/',
    desc:
      'Ready to use Free and Open Source SVG Icons Pack JavaScript Library. ',
  },
  {
    title: 'Iconfinder',
    link: 'https://www.iconfinder.com/',
    desc: 'Free and premium vector icons in SVG, PNG, CSH and AI format  ',
  },
  {
    title: 'Lordicon',
    link: 'https://lordicon.com/free-icons',
    desc: ' 50 free animated interactive icons ',
  },
  {
    title: 'UseAnimations',
    link: 'https://useanimations.com/',
    desc: ' Free Animated Icons in SVG and Json Format ',
  },
  {
    title: 'css.gg',
    link: 'https://css.gg/',
    desc:
      ' 700+ Open-source CSS, SVG and Figma UI Icons Available in SVG Sprite, styled-components, NPM & API ',
  },
  {
    title: 'SVGPorn',
    link: 'https://svgporn.com',
    desc: ' 1000+ high-quality SVG logos ',
  },
  {
    title: 'Payment System Logos',
    link: 'https://github.com/mpay24/payment-logos/',
    desc: ' Logos for payment systems available in png and svg ',
  },
  {
    title: 'Browser Logos',
    link: 'https://github.com/alrra/browser-logos/',
    desc: ' High resolution web browser logos ',
  },
  {
    title: 'IconBros',
    link: 'https://www.iconbros.com',
    desc: ' 7843+ free icons grouped in 182 collections ',
  },
  {
    title: 'LogoHub',
    link: 'https://logohub.io/',
    desc: ' Generate and download your logo for free in PNG and SVG format ',
  },
  {
    title: 'Material Design Icons',
    link: 'https://materialdesignicons.com/',
    desc:
      ' A icon collection allowing designers and developers targeting various platforms to download icons in the format, color and size they need for any project. ',
  },
  {
    title: 'Heroicons',
    link: 'https://heroicons.dev/',
    desc: ' Free, open source icons from the creators of Tailwind CSS. ',
  },
  {
    title: 'Zondicons',
    link: 'https://www.zondicons.com/icons.html',
    desc:
      ' A set of free premium SVG icons for you to use on your digital products. ',
  },
  {
    title: 'Endless Icons',
    link: 'http://endlessicons.com/',
    desc:
      ' A website offering a number of free icons. Icons are tagged and also compressed into kits. ',
  },
  {
    title: 'Icomoon',
    link: 'https://icomoon.io/app/',
    desc:
      'Browse 5500+ Free Icons. Add any set you wish to easily browse and search its icons. ',
  },
  {
    title: 'Eva Icons',
    link: 'https://akveo.github.io/eva-icons/#/',
    desc:
      'Eva Icons is a pack of more than 480 beautifully crafted Open Source icons for common actions and items. ',
  },
  {
    title: 'Zondicons',
    link: 'http://www.zondicons.com/',
    desc:
      ' A set of free premium SVG icons for you to use on your digital products. you can download the icons into your desktop ',
  },
  {
    title: 'Entypo',
    link: 'http://www.entypo.com/',
    desc: ' 411 carefully crafted premium pictograms ',
  },
  {
    title: 'Cryptoicons',
    link: 'http://cryptoicons.co/',
    desc: ' A set of 430 crypto and fiat currency icons. Completely free. ',
  },
  {
    title: 'Ikonate',
    link: 'https://ikonate.com/',
    desc: ' Fully customisable & accessible vector icons ',
  },
  {
    title: 'appicon',
    link: 'https://appicon.co/',
    desc:
      'Quickly generate app icons in diffrent sizes for your IOS, macOS and Android projects',
  },
  {
    title: 'LineIcons',
    link: 'https://lineicons.com',
    desc: ' 2000+ Essential Line Icons for Designers and Developers ',
  },
];

const CATEGORY = 'Icons';

const Icons = Icons1.map((e, index) => ({
  ...e,
  category: CATEGORY,
  id: CATEGORY.toLowerCase() + index,
}));

export default Icons;
