const StockMusicSFX1 = [
  {
    title: 'Free Stock Music',
    link: 'https://www.free-stock-music.com/',
    desc: 'Royalty free stock music for YouTube videos, podcasts, etc',
  },
  {
    title: 'Bensound',
    link: 'https://www.bensound.com/',
    desc: 'Download Royalty Free Music for free and use it in your',
  },
  {
    title: 'Mixkit',
    link: 'https://mixkit.co/free-stock-music/',
    desc: 'Free music for your projects',
  },
  {
    title: 'Freesound',
    link: 'https://freesound.org/',
    desc: 'Free stock music and sounds',
  },
  {
    title: 'Free Music Archive',
    link: 'https://freemusicarchive.org/',
    desc:
      'Collaborative database of creative-commons licensed sound for musicians and sound lovers',
  },
  {
    title: 'Musopen',
    link: 'https://musopen.org/music/',
    desc: 'An online copyright free classical music library',
  },
  {
    title: 'Unminus',
    link: 'https://www.unminus.com/',
    desc:
      'Free Premium Music for Your Projects 🎁 Royalty Free. Cleared for YouTube.',
  },
];

const CATEGORY = 'Stock Music and SFX';

const StockMusicSFX = StockMusicSFX1.map((e, index) => ({
  ...e,
  category: CATEGORY,
  id: CATEGORY.toLowerCase().split(' ').join('') + index,
}));

export default StockMusicSFX;
