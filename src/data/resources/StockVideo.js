const StockVideo1 = [
  {
    title: 'Pexels',
    link: 'https://www.pexels.com/videos',
    desc: 'Largest library of free to use videos, donated by the community',
  },
  {
    title: 'Pixabay',
    link: 'https://www.pixabay.com/videos',
    desc:
      'Large library of free to use videos, donated by the community similar to Pexels',
  },
  {
    title: 'Coverr.co',
    link: 'https://coverr.co/',
    desc: 'Beautiful free stock video footage',
  },
  {
    title: 'Videezy',
    link: 'https://www.videezy.com/',
    desc: 'Free HD stock footage & 4K videos',
  },
  {
    title: 'Mix Kit',
    link: 'https://mixkit.co/',
    desc: 'Stock video clips & music',
  },
  {
    title: 'Life Of Vids',
    link: 'https://www.lifeofvids.com/',
    desc: 'Free video clips and loops',
  },
  {
    title: 'Videvo',
    link: 'https://www.videvo.net/stock-video-footage/',
    desc: 'Free and premium stock videos',
  },
];

const CATEGORY = 'Stock Video';

const StockVideo = StockVideo1.map((e, index) => ({
  ...e,
  category: CATEGORY,
  id: CATEGORY.toLowerCase().split(' ').join('') + index,
}));

export default StockVideo;
