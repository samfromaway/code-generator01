const color1 = [
  {
    title: 'Colormind.io',
    link: 'http://colormind.io',
    desc: 'Color palette generator',
  },
  {
    title: 'ColorCurves.app',
    link: 'https://colorcurves.app',
    desc: 'Color palette generator that uses curves to generate color palettes',
  },
  {
    title: 'Coolors',
    link: 'https://coolors.co',
    desc:
      'Create the perfect palette or get inspired by thousands of beautiful color schemes',
  },
  {
    title: 'Colors & Fonts',
    link: 'https://www.colorsandfonts.com/',
    desc: 'A curated library of colors, fonts and resources',
  },
  {
    title: 'Google Material Color Tool',
    link: 'https://material.io/resources/color/',
    desc: 'Official Google Material Color Palette Tool',
  },
  {
    title: 'Material Palette',
    link: 'https://www.materialpalette.com/',
    desc: 'Free to pick palettes, icons and colors for Material Design',
  },
  {
    title: 'ColorSpace',
    link: 'https://mycolor.space/',
    desc: 'Generate nice color palettes from one color',
  },
  {
    title: 'FlatUIColors',
    link: 'https://flatuicolors.com',
    desc: 'Beautiful set of color palettes in various flavours',
  },
  {
    title: 'Adobe Color',
    link: 'https://color.adobe.com/create',
    desc: 'Create color palettes, extract gradients from images, etc',
  },
  {
    title: 'Colorsinspo',
    link: 'https://colorsinspo.com/',
    desc: 'All-in-one resource for finding everything about colors',
  },
  {
    title: 'Happyhues',
    link: 'https://www.happyhues.co/',
    desc:
      'Happy Hues is a color palette inspiration site that acts as a real world example as to how the colors could be used in your design projects by Mackenzie Child',
  },
  {
    title: 'Adobe Trends',
    link: 'https://color.adobe.com/trends',
    desc:
      'Discover current color trends in different industries from the creative communities on Behance and Adobe Stock',
  },
  {
    title: 'Color Hunt',
    link: 'https://colorhunt.co/',
    desc:
      'A free and open platform for color inspiration with thousands of trendy hand-picked color palettes',
  },
  {
    title: 'Gradient Hunt',
    link: 'https://gradienthunt.com/',
    desc:
      'A free and open platform for gradient inspiration with thousands of trendy hand-picked color gradients',
  },
  {
    title: 'Web Gradients',
    link: 'https://webgradients.com/',
    desc: 'A free website to find good css gradients',
  },
  {
    title: 'ColorBox',
    link: 'https://www.colorbox.io',
    desc: 'A free website to produce color set',
  },
  {
    title: 'CSS gradient',
    link: 'https://cssgradient.io/',
    desc:
      'A free website to make custome gradient and some examples of gradient',
  },
  {
    title: 'gradienta',
    link: 'https://gradienta.io/',
    desc: 'A pure css and jpg gradients',
  },
  {
    title: 'UI Gradients',
    link: 'https://uigradients.com/',
    desc: 'UI gradients color generator',
  },
  {
    title: 'Palette Generator',
    link: 'https://palettegenerator.colorion.co/',
    desc: 'Generate new color palette with every spacebar press',
  },
  {
    title: 'Material Palettes',
    link: 'https://material.colorion.co/',
    desc: '1000+ Material Design palettes',
  },
  {
    title: 'Grabient',
    link: 'https://www.grabient.com/',
    desc: 'Gradient Selector',
  },
  {
    title: 'ShadeSwash',
    link: 'https://shadeswash.netlify.app/',
    desc: 'Quickly generate shades of any color',
  },
  {
    title: 'ColorSpace',
    link: 'https://mycolor.space/',
    desc: 'Generate color palettes from one color',
  },
  {
    title: 'Material Design Palette Generator',
    link: 'http://mcg.mbitson.com',
    desc: 'Generate theme and color palette Material Design-like',
  },
  {
    title: 'Colorate',
    link: 'https://colorate.azurewebsites.net/',
    desc:
      'Color scheme tool for designers and developers. This will help you draw inspiration and serve as a resource for your color work.',
  },
  {
    title: '0to255',
    link: 'https://www.0to255.com/',
    desc:
      'A color tool that makes it easy to lighten and darken colors. It’s perfect for hover states, borders, gradients, and more.',
  },
  {
    title: 'Gradient Buttons',
    link: 'https://gradientbuttons.colorion.co/',
    desc: 'Ready to use copy/paste gradient buttons',
  },
  {
    title: 'Khroma',
    link: 'http://khroma.co/',
    desc:
      'Khroma uses AI to learn which colors you like and creates limitless palettes for you to discover, search, and save.',
  },
  {
    title: 'whocanuse',
    link: 'https://whocanuse.com',
    desc:
      'A tool that brings attention and understanding to how color contrast can affect different people with visual impairments.',
  },
  {
    title: 'Colorable',
    link: 'https://colorable.jxnblk.com/',
    desc: 'Color combination contrast tester',
  },
  {
    title: 'Color Hex Picker',
    link: 'https://colorhexpicker.com',
    desc: 'Tool to get hex code along with name of the color.',
  },
  {
    title: 'Saruwakakun',
    link: 'https://saruwakakun.com/en/color-ideas',
    desc: 'The stunning color scheme for website & App Designs with previews',
  },
];

const CATEGORY = 'Colors';

const Color = color1.map((e, index) => ({
  ...e,
  category: CATEGORY,
  id: CATEGORY.toLowerCase() + index,
}));

export default Color;
