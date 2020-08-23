const VectorClipart1 = [
  {
    title: 'Vecteezy',
    link: 'https://www.vecteezy.com/',
    desc: 'Find and download free vector art',
  },
  {
    title: 'Freepik',
    link: 'https://www.freepik.com',
    desc: 'Free vectors, stock photos, PSD and icons',
  },
  {
    title: 'Free Vectors',
    link: 'https://www.freevectors.net/',
    desc: 'Community of vector lovers who share free vector graphics',
  },
  {
    title: 'PNGTree',
    link: 'https://pngtree.com/free-vectors',
    desc: 'png, backgrounds, templates, text effects',
  },
  {
    title: 'Vector4Free',
    link: 'https://www.vector4free.com/',
    desc: 'Free vector ',
  },
  {
    title: 'Retro Vectors',
    link: 'http://retrovectors.com/',
    desc: 'Vintage vectors and graphics',
  },
  {
    title: 'Freeble',
    link: 'http://freebbble.com/',
    desc: 'Vectors, patterns, mockups and more',
  },
  {
    title: 'Lukaszadam',
    link: 'https://lukaszadam.com/',
    desc: 'Free Vector atrworks',
  },
  {
    title: 'Illlustrations',
    link: 'https://illlustrations.co/',
    desc: 'Beautiful 100 Illustrations - png, svg',
  },
  {
    title: 'Clipart',
    link: 'https://www.clipart.email/',
    desc:
      'Choose great clipart, png, coloring pages, drawings and more for your projects from the free collection!',
  },
  {
    title: 'Growwwkit illustrations',
    link: 'https://growwwkit.com/illustrations/phonies',
    desc: 'A set of 8 simple, black & white, stylish illustrations',
  },
];

const CATEGORY = 'Vector and Clipart';

const VectorClipart = VectorClipart1.map((e, index) => ({
  ...e,
  category: CATEGORY,
  id: CATEGORY.toLowerCase().split(' ').join('') + index,
}));

export default VectorClipart;
