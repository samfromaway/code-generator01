const ImgCompression1 = [
  {
    title: 'TinyPNG',
    link: 'https://tinypng.com/',
    desc: ' Smart PNG and JPEG compression ',
  },
  {
    title: 'Optimizilla',
    link: 'https://imagecompressor.com/',
    desc:
      ' Online JPEG and PNG optimizer / compressor with settings and archive download',
  },
  {
    title: 'Compressor.io',
    link: 'https://compressor.io/',
    desc: ' JPEG, PNG, GIF, SVG Compression ',
  },
  {
    title: 'Squoosh.app',
    link: 'https://squoosh.app/',
    desc: ' Image compression from Google Chrome Labs ',
  },
  {
    title: 'BulkResizePhotos',
    link: 'https://bulkresizephotos.com/',
    desc:
      ' Bulk image resizing, compression & converting that perform all the tasks within the browser ',
  },
  {
    title: 'iLoveIMG',
    link: 'https://www.iloveimg.com/',
    desc: ' The fastest free web app for easy image modification ',
  },
  {
    title: 'SvgOMG',
    link: 'https://jakearchibald.github.io/svgomg/',
    desc:
      ' Online SVG optimizer with a lot of settings and possibility to cut and paste svg code directly in it.',
  },
  {
    title: 'CompressJPEG',
    link: 'https://compressjpeg.com/',
    desc: ' Compress JPEG images with size even greater than 5MB ',
  },
  {
    title: 'CompressNow',
    link: 'https://compressnow.com/',
    desc: ' JPEG, GIF, PNG Compression ',
  },
  {
    title: 'Promo Image Resizer',
    link: 'https://compressnow.com/',
    desc: ' Free Image and Photo Resizer ',
  },
  {
    title: 'Image Optimizer',
    link: 'http://www.imageoptimizer.net/',
    desc: ' Image Optimizer Free With Quality Options ',
  },
  {
    title: 'SVGminify',
    link: 'https://www.svgminify.com/',
    desc:
      ' This tool removes superfluous information, thereby reducing the size of your SVG files ',
  },
];

const CATEGORY = 'Image Compression';

const ImgCompression = ImgCompression1.map((e, index) => ({
  ...e,
  category: CATEGORY,
  id: CATEGORY.toLowerCase().split(' ').join('') + index,
}));

export default ImgCompression;
