const DesignSystems1 = [
  {
    title: 'Material Design',
    link: 'https://material.io/',
    desc: 'Googles Material Design',
  },
  {
    title: 'Ant Design',
    link: 'https://ant.design/',
    desc: 'Design system for enterprise-level products',
  },
  {
    title: 'Apple Design Resources',
    link: 'https://developer.apple.com/design/resources/',
    desc: 'Guides and templates for using Apple design and UI',
  },
  {
    title: 'Primer',
    link: 'https://primer.style/',
    desc: 'Design, build, and create with GitHub’s design system',
  },
  {
    title: 'Alta UI',
    link: 'https://www.oracle.com/webfolder/ux/middleware/alta/index.html',
    desc: 'Oracles design system and toolkit',
  },
  {
    title: 'Pulse',
    link: 'https://pulse.heartbeat.ua/',
    desc: 'Design system, guides and React component library ',
  },
  {
    title: 'Bolt',
    link: 'https://boltdesignsystem.com/',
    desc: 'Robust Twig and web component powered UI components ',
  },
  {
    title: 'Clarity Design System',
    link: 'https://clarity.design/',
    desc: 'UX guidelines, HTML/CSS framework, and Angular components ',
  },
  {
    title: 'AtlasKit',
    link: 'https://atlaskit.atlassian.com/',
    desc:
      'Atlassians official UI library, built according to the Atlassian Design Guidelines',
  },
  {
    title: 'Audi Design Resources',
    link: 'https://www.audi.com/ci/en/guides/user-interface/introduction.html',
    desc: 'Audi UI design system and toolkit',
  },
  {
    title: 'Carbon Design Systems',
    link: 'https://www.carbondesignsystem.com/',
    desc:
      'Carbon is IBM’s open-source design system for products and experiences ',
  },
  {
    title: 'Yelp Style Guide',
    link: 'https://www.yelp.com/styleguide',
    desc: 'Yelp style guide, components and toolkit ',
  },
  {
    title: 'Comet',
    link: 'https://comet.discoveryeducation.com/',
    desc:
      'Scalable design system of visual language, components, and design assets',
  },
  {
    title: 'ETrade Design System',
    link: 'https://etrade.design/',
    desc:
      'Guides and toolkits that blend finance with simplicity and ease of use ',
  },
  {
    title: 'Fundamental Library',
    link: 'https://sap.github.io/fundamental-styles/',
    desc:
      'Open source and community driven project for consistent user interfaces',
  },
  {
    title: 'Infor Design',
    link: 'https://design.infor.com/',
    desc:
      'Guidelines and resources to create meaningful experiences for Infor’s products',
  },
  {
    title: 'Lexicon',
    link: 'https://liferay.design/lexicon/',
    desc: 'An experience language for crafting beautiful UI ',
  },
  {
    title: 'Mailchimp UI/UX',
    link: 'https://ux.mailchimp.com/patterns/color',
    desc: 'Style guide and components from Mailchimp',
  },
  {
    title: 'Marvel Style Guide',
    link: 'https://marvelapp.com/styleguide/overview/introduction',
    desc: 'Set of design principles and components ',
  },
  {
    title: 'Microsoft Fluent UI',
    link: 'https://developer.microsoft.com/en-us/fluentui#/',
    desc: 'Collection of UX frameworks from Microsoft',
  },
  {
    title: 'Pluralsight Design System',
    link: 'https://design-system.pluralsight.com/',
    desc: 'Design guide with components for designing with Pluralsight',
  },
  {
    title: 'Polaris',
    link: 'https://polaris.shopify.com/',
    desc:
      'Design system that creates great experiences for all of Shopify’s merchants',
  },
  {
    title: 'Mozilla Protocol',
    link: 'https://protocol.mozilla.org/',
    desc: 'Protocol is a design system for Mozilla and Firefox websites',
  },
  {
    title: 'SendGrid Style Guide',
    link: 'http://styleguide.sendgrid.com/',
    desc: 'UI library for developing consistent UI/UX at SendGrid',
  },
  {
    title: 'VTEX Styleguide',
    link: 'https://styleguide.vtex.com/',
    desc:
      'Reusable patterns, components and assets related to product design in VTEX ',
  },
  {
    title: 'Rizzo',
    link: 'https://rizzo.lonelyplanet.com/styleguide/design-elements',
    desc: 'Style guide with UI components, JS components, widgets, etc ',
  },
  {
    title: 'Atomize',
    link: 'https://atomizecode.com/',
    desc:
      'UI framework that helps developers collaborate with designers and build consistent user interfaces effortlessly',
  },
  {
    title: 'StyleGuides.io',
    link: 'http://styleguides.io/',
    desc: 'A directory of 500+ styleguides',
  },
  {
    title: 'Done Design System',
    link: 'https://uilibrary.github.io/done-design-system/',
    desc: 'Open source design system, guides & components',
  },
  {
    title: 'Skoda Brand System',
    link: 'https://skoda-brand.com/explore-our-brand',
    desc: 'Design guideline for developing applications under the Skoda brand',
  },
  {
    title: 'Spectrum',
    link: 'https://spectrum.adobe.com/',
    desc:
      'Adobe’s design system that provides components and tools to help product teams work more efficiently, and to make Adobe’s applications more cohesive.',
  },
];

const CATEGORY = 'Design Systems';

const DesignSystems = DesignSystems1.map((e, index) => ({
  ...e,
  category: CATEGORY,
  id: CATEGORY.toLowerCase().split(' ').join('') + index,
}));

export default DesignSystems;
