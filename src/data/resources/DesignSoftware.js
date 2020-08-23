const DesignSoftware1 = [
  {
    title: 'Gimp',
    link: 'https://www.gimp.org/',
    desc: ' Free & open source image editor similar to Photoshop ',
  },
  {
    title: 'Gravit Designer',
    link: 'https://www.designer.io/en/',
    desc:
      ' Free full-featured vector graphic design app that works on ALL platforms',
  },
  {
    title: 'Blender',
    link: 'https://www.blender.org/download/',
    desc: ' Open source, free animation, 3D modeling, etc.',
  },
  {
    title: 'Raw Therapee',
    link: 'https://rawtherapee.com/',
    desc: ' Cross-platform raw image processing program',
  },
  {
    title: 'Be Funky',
    link: 'https://www.befunky.com/features/graphic-designer/',
    desc: ' Online design program',
  },
  {
    title: 'Krita',
    link: 'https://krita.org/en/download/krita-desktop/',
    desc: ' Sketching and painting program designed for digital artists',
  },
  {
    title: 'Pencil Project',
    link: 'https://pencil.evolus.vn/',
    desc: ' GUI prototyping software',
  },
  {
    title: 'Inkscape',
    link: 'https://inkscape.org/',
    desc: ' Powerful free design tool',
  },
  {
    title: 'Adobe XD',
    link: 'https://www.adobe.com/products/xd.html',
    desc: ' Free design tool from Adobe ',
  },
  {
    title: 'Shapes.so',
    link: 'https://shape.so/pricing',
    desc: ' Icons that can be used as code in your projects  ',
  },
  {
    title: 'Lunacy',
    link: 'https://icons8.com/lunacy',
    desc: '  Sketch for Windows ',
  },
  {
    title: 'InVision Studio',
    link: 'https://www.invisionapp.com/studio',
    desc: ' Free screen designing tool from InVision ',
  },
  {
    title: 'Darktable',
    link: 'https://www.darktable.org/',
    desc:
      ' Free & Open source photography workflow application and raw developer ',
  },
  {
    title: 'Inpixio photo Editor',
    link: 'https://www.inpixio.com/free-photo-editor',
    desc: ' Free Photo Editor: For windows only ',
  },
];

const CATEGORY = 'Design Software';

const DesignSoftware = DesignSoftware1.map((e, index) => ({
  ...e,
  category: CATEGORY,
  id: CATEGORY.toLowerCase().split(' ').join('') + index,
}));

export default DesignSoftware;
