const StockPhoto1 = [
  {
    title: 'Pexels',
    link: 'https://www.pexels.com/',
    desc: 'Free stock photos shared by talented creators',
  },
  {
    title: 'Unsplash',
    link: 'https://unsplash.com/',
    desc: 'The internet’s source of freely usable images',
  },
  {
    title: 'Pixabay',
    link: 'https://pixabay.com/',
    desc: 'Over 1.7 million+ high quality stock images and videos',
  },
  {
    title: 'Magdeleine',
    link: 'https://magdeleine.co/',
    desc: 'Gallery & free high res photo everyday',
  },
  {
    title: 'Picspree',
    link: 'https://picspree.com',
    desc: 'Royalty free images, stock photos, illustrations, and vectors',
  },
  {
    title: 'Burst',
    link: 'https://burst.shopify.com/',
    desc: 'Free stock photos ',
  },
  {
    title: 'Life of Pix',
    link: 'https://www.lifeofpix.com/',
    desc: 'Free high resolution photography',
  },
  {
    title: 'Stock Snap',
    link: 'https://stocksnap.io/',
    desc: 'Hundreds of high quality photos added weekly',
  },
  {
    title: 'Morguefile',
    link: 'https://morguefile.com/',
    desc: 'Over 350,000 free stock photos for commercial use',
  },
  {
    title: 'Kaboom Pics',
    link: 'https://kaboompics.com/',
    desc: 'Stock photography and color palettes. Good for product images',
  },
  {
    title: 'New Old Stock',
    link: 'https://nos.twnsnd.co/',
    desc: 'Stock vintage photos',
  },
  {
    title: 'Pic Jumbo',
    link: 'https://picjumbo.com/',
    desc: 'Good collections of different types of photos',
  },
  {
    title: 'Public Domain Pictures',
    link: 'https://www.publicdomainpictures.net/en/',
    desc: 'Public domain images of all types',
  },
  {
    title: 'Find A Photo',
    link: 'https://www.chamberofcommerce.org/findaphoto/',
    desc: 'Searches multiple stock photo websites',
  },
  {
    title: 'Stockvault',
    link: 'http://www.stockvault.net/',
    desc: 'Categorized stock photos',
  },
  {
    title: 'Placeholder',
    link: 'https://placeholder.com/',
    desc:
      'A free image placeholder service for the web. You can specify image size and format',
  },
  {
    title: 'Realistic Shots',
    link: 'https://realisticshots.com/',
    desc: 'Free high resolution stock photos',
  },
  {
    title: 'Negative Space',
    link: 'https://negativespace.co/',
    desc: 'High-Resolution Free Stock Photos',
  },
  {
    title: 'SkitterPhoto',
    link: 'https://skitterphoto.com/',
    desc: 'Free high resolution photography',
  },
  {
    title: 'PicoGraphy',
    link: 'https://picography.co/',
    desc: 'Gorgeous, High-Resolution, Free Photos',
  },
  {
    title: 'Wunder Stock',
    link: 'https://wunderstock.com/',
    desc: 'Stunningly amazing free photos',
  },
  {
    title: 'PxHere',
    link: 'https://pxhere.com/',
    desc: 'Free Images & Free stock photos - PxHere',
  },
  {
    title: 'Piqsels',
    link: 'https://piqsels.com/',
    desc: 'Royalty Free Stock Photos',
  },
  {
    title: 'FoodiesFeed',
    link: 'https://www.foodiesfeed.com/',
    desc: 'Food photo stock',
  },
  {
    title: 'Nappy',
    link: 'https://www.nappy.co/',
    desc:
      'A website offering Beautiful, high-res photos of black and brown people.',
  },
  {
    title: 'Generated Photos',
    link: 'https://generated.photos/',
    desc: 'Unique AI Generated model photos',
  },
];

const CATEGORY = 'Stock Photo';

const StockPhoto = StockPhoto1.map((e, index) => ({
  ...e,
  category: CATEGORY,
  id: CATEGORY.toLowerCase().split(' ').join('') + index,
}));

export default StockPhoto;
