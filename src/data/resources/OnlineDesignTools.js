const OnlineDesignTools1 = [
  {
    title: 'Figma',
    link: 'https://www.figma.com/graphic-design-tool/',
    desc: ' Online graphic design tool ',
  },
  {
    title: 'Vectr',
    link: 'https://vectr.com/',
    desc: ' Free vector graphics software',
  },
  {
    title: 'Canva',
    link: 'https://www.canva.com/',
    desc: ' Create beautiful designs ',
  },
  {
    title: 'Wireframe.cc',
    link: 'https://wireframe.cc/',
    desc: ' Wireframing tool ',
  },
  {
    title: 'Fotor',
    link: 'https://www.fotor.com/',
    desc: ' Photo editor and design maker ',
  },
  {
    title: 'Pixlr',
    link: 'https://www.pixlr.com/',
    desc: ' Online photo editor ',
  },
  {
    title: 'Animoto Video Maker',
    link: 'https://animoto.com/apps/online-video-maker',
    desc: ' Make videos online ',
  },
  {
    title: 'RemoveBG',
    link: 'https://www.remove.bg/',
    desc: ' Remove image backgrounds ',
  },
  {
    title: 'Photo Creator',
    link: 'https://photos.icons8.com/creator',
    desc: ' Create your own photos instead of searching for stock ',
  },
  {
    title: 'Visme',
    link: 'https://www.visme.co/',
    desc: ' Create presentations, infographics and more ',
  },
  {
    title: 'Infogram',
    link: 'https://infogram.com/',
    desc: ' Create infograms',
  },
  {
    title: 'ChartGo',
    link: 'https://www.chartgo.com/',
    desc: ' Create charts and graphs online ',
  },
  {
    title: 'Cartoon Photo',
    link: 'https://cartoon.pho.to/',
    desc: ' Turn photos into cartoons',
  },
  {
    title: 'Logo Maker',
    link: 'https://logomakr.com/',
    desc: ' Create custom logos ',
  },
  {
    title: 'Whimsical',
    link: 'https://whimsical.com/',
    desc: ' Wireframes, diagrams and more ',
  },
  {
    title: 'Whiteboard',
    link: 'https://witeboard.com/',
    desc: ' Online drawing tool ',
  },
  { title: 'Octopus', link: 'https://octopus.do/', desc: ' Sitemap builder ' },
  {
    title: 'CTA Button Maker',
    link: 'https://www.clickminded.com/button-generator/',
    desc: ' Create call to action buttons ',
  },
  {
    title: 'Blobmaker',
    link: 'https://www.blobmaker.app/',
    desc:
      ' Blobmaker is a free generative design tool, to help you quickly create random, unique, and organic-looking SVG shapes',
  },
  {
    title: 'Personas',
    link: 'https://personas.draftbit.com/',
    desc: ' A playful avatar generator for the modern age  ',
  },
  {
    title: 'SoftUI',
    link: 'https://www.softui.io',
    desc: ' A Soft UI ',
  },
  {
    title: 'Photopea',
    link: 'https://www.photopea.com',
    desc: ' A Online Photoshop editor  ',
  },
  {
    title: 'Excalidraw',
    link: 'https://excalidraw.com/',
    desc: ' Virtual whiteboard for sketching hand-drawn like diagrams  ',
  },
  {
    title: 'Diagrams',
    link: 'https://www.diagrams.net/',
    desc: ' Diagram software and Flowchart maker  ',
  },
  {
    title: 'MapInSeconds',
    link: 'http://mapinseconds.com/',
    desc: ' Simple way to visualize your data with a map  ',
  },
  {
    title: 'Grid Malven',
    link: 'http://grid.malven.co/',
    desc: ' A css grid cheatsheet to reference when creating a css grid  ',
  },
  {
    title: 'Smart Upscaler',
    link: 'https://icons8.com/upscaler',
    desc: '  Upscale images by 2-4x resolution ',
  },
  {
    title: 'GetAvataaars',
    link: 'https://getavataaars.com/',
    desc:
      '  Fun and Colorful free avatars web generator tool by Fang-Pen Lin using Pablo Stanley sketch library ',
  },
  {
    title: 'Webflow',
    link: 'https://webflow.com/',
    desc:
      '  Break the code barrier, Build better business websites, faster. Without coding.',
  },
  {
    title: 'Trace',
    link: 'https://stickermule.com/trace',
    desc: '  Instantly remove the background from your photos ',
  },
  {
    title: 'Neumorphism.io',
    link: 'https://neumorphism.io/#55b9f3',
    desc: '  Generate Soft-UI CSS shadow code ',
  },
  {
    title: 'DB Designer',
    link: 'https://app.dbdesigner.net/',
    desc: '  Design your database for free online ',
  },
  {
    title: 'Ui Bakery',
    link: 'https://uibakery.io/',
    desc: '  Create full-fledged web apps visually ',
  },
  {
    title: 'Faux',
    link: 'http://knutsynstad.com/fauxcode/',
    desc: '  Turn real code into faux code ',
  },
  {
    title: 'Rive',
    link: 'https://rive.app/',
    desc:
      '  Real-time interactive design tool that allows you to design, animate, and immediately integrate your assets into any platform.',
  },
  {
    title: 'Unscreen',
    link: 'https://www.unscreen.com/',
    desc: '  Remove Video Background 100% Automatically and Free ',
  },
  {
    title: 'Kodeshot',
    link: 'https://www.kodeshot.net/',
    desc:
      '  Convert your source code into nice pictures for your articles, tweets, messages, posts... ',
  },
];

const CATEGORY = 'Online Design Tools';

const OnlineDesignTools = OnlineDesignTools1.map((e, index) => ({
  ...e,
  category: CATEGORY,
  id: CATEGORY.toLowerCase().split(' ').join('') + index,
}));

export default OnlineDesignTools;
