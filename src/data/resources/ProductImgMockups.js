const ProductImgMockups1 = [
  {
    title: 'Smart Mockups',
    link: 'https://smartmockups.com/',
    desc: ' Create stunning product mockups free & premium',
  },
  {
    title: 'Shot Snap',
    link: 'https://shotsnapp.com/',
    desc:
      ' Create beautiful device mockup images for your app or website design',
  },
  {
    title: 'Screely',
    link: 'https://www.screely.com/',
    desc: ' Instantly turn your screenshot into a mockup',
  },
  {
    title: 'Screen Peak',
    link: 'https://screenpeek.io/',
    desc: ' Create a mockup from a URL',
  },
  {
    title: 'Mockup World',
    link: 'https://www.mockupworld.co/',
    desc: ' The biggest source of free photo-realistic Mockups online',
  },
  {
    title: 'Collab Shot',
    link: 'https://www.collabshot.com/',
    desc: ' Real-time screen grabs and image sharing',
  },
  {
    title: 'Facebook Devices',
    link: 'https://facebook.design/devices',
    desc: ' Images and Sketch files of popular devices',
  },
  {
    title: 'Threed.io',
    link: 'https://threed.io',
    desc: ' Generate 3D mockups right in your browser.',
  },
  {
    title: 'Mockuphone',
    link: 'https://mockuphone.com/',
    desc:
      ' 100% free mockups for all devices including IOS, Android, Windows Phone, Laptop & Desktop and TV',
  },
];

const CATEGORY = 'Product and Image Mockups';

const ProductImgMockups = ProductImgMockups1.map((e, index) => ({
  ...e,
  category: CATEGORY,
  id: CATEGORY.toLowerCase().split(' ').join('') + index,
}));

export default ProductImgMockups;
