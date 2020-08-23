const UIGraphics1 = [
  {
    title: 'UI Design Daily',
    link: 'https://uidesigndaily.com/',
    desc: 'Awesome UI Components of all types',
  },
  {
    title: '100 Daily UI',
    link: 'https://100dailyui.webflow.io/',
    desc: 'Free Figma library of products, elements, and screens',
  },
  {
    title: 'Sketch App Sources',
    link: 'https://www.sketchappsources.com/',
    desc: 'Sketch UIs, wireframes, icons and much more',
  },
  {
    title: 'Humaaans',
    link: 'https://www.humaaans.com/',
    desc: 'Cool illustrations of people with the ability to mix and match',
  },
  {
    title: 'Paaatterns',
    link: 'https://products.ls.graphics/paaatterns/',
    desc: 'Free collection of beautiful patterns for all vector formats',
  },
  {
    title: 'thepatternlibrary',
    link: 'http://thepatternlibrary.com/',
    desc: 'Free beautiful background patterns',
  },
  {
    title: 'Drawkit.io',
    link: 'https://www.drawkit.io/',
    desc: 'Illustrations for designers and startups',
  },
  {
    title: 'Undraw.co',
    link: 'https://undraw.co/',
    desc: 'Open-source illustrations for any idea you can imagine and create',
  },
  {
    title: 'Illustration.co',
    link: 'https://illlustrations.co/',
    desc: 'Open-source illustrations kit',
  },
  {
    title: 'Opendoodles',
    link: 'https://www.opendoodles.com/',
    desc: 'Free sketchy illustrations',
  },
  {
    title: 'Open Peeps',
    link: 'https://www.openpeeps.com/',
    desc: 'Hand drawn illustration library',
  },
  {
    title: 'UI Space',
    link: 'https://uispace.net/',
    desc: 'Thousands of great UI freebies',
  },
  {
    title: 'Animations.co',
    link: 'http://animaticons.co/',
    desc: 'Beautiful, customizable animated GIF icons',
  },
  {
    title: 'Uplabs',
    link: 'https://www.uplabs.com/',
    desc: 'High-quality design resources Free & Premium',
  },
  {
    title: 'InvisionApp',
    link: 'https://www.invisionapp.com/inside-design/design-resources/',
    desc: 'Library of free, high-quality UI kits, icon packs, and mockups',
  },
  {
    title: 'Open Doodles',
    link: 'https://www.opendoodles.com/',
    desc: 'A Free Set of Sketchy Illustrations',
  },
  {
    title: 'Avataaars',
    link: 'https://avataaars.com/',
    desc: 'Free sketch library of avatars illustrations by Pablo Stanley',
  },
  {
    title: 'FreebieSketch',
    link: 'https://freebiesketch.com/',
    desc: 'Free Sketch designs, wireframes, illustrations, and more.',
  },
  {
    title: 'Blush',
    link: 'https://blush.design/',
    desc: 'Free customizable illustrations with Figma Plugin',
  },
];

const CATEGORY = 'UI Graphics';

const UIGraphics = UIGraphics1.map((e, index) => ({
  ...e,
  category: CATEGORY,
  id: CATEGORY.toLowerCase().split(' ').join('') + index,
}));

export default UIGraphics;
