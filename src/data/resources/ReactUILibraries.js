const ReactUILibraries1 = [
  {
    title: 'Material UI',
    link: 'https://material-ui.com/',
    desc:
      ' React components for faster and easier web development, based on Material Design',
  },
  {
    title: 'Chakra UI',
    link: 'https://chakra-ui.com/',
    desc: ' Build accessible React apps & websites with speed. ',
  },
  { title: 'Openchakra', link: 'https://openchakra.app/', desc: '' },
  {
    title: 'React Bootstrap',
    link: 'https://react-bootstrap.github.io/',
    desc:
      ' Bootstrap rebuilt for React. Include Bootstrap components right in your JavaScript ',
  },
  {
    title: 'ReactStrap',
    link: 'https://reactstrap.github.io/',
    desc: ' Another Bootstrap UI library for React ',
  },
  {
    title: 'React Admin',
    link: 'https://marmelab.com/react-admin/',
    desc:
      ' A frontend Framework for building admin applications. Supports APIs out of the box',
  },
  {
    title: 'BlueprintJS',
    link: 'https://blueprintjs.com/',
    desc: ' React-based UI toolkit for the web ',
  },
  {
    title: 'React Semantic UI',
    link: 'https://react.semantic-ui.com/',
    desc: ' UI components based off of the Semantic UI framework',
  },
  {
    title: 'Shards React',
    link: 'https://designrevision.com/downloads/shards-react/',
    desc:
      ' React UI kit featuring a modern design system with dozens of custom components',
  },
  {
    title: 'React Virtualized',
    link: 'https://bvaughn.github.io/react-virtualized',
    desc: ' UI set for data. Includes tables, lists, sorting, etc.',
  },
  {
    title: 'React Toolbox',
    link: 'http://react-toolbox.io/#/',
    desc: ' Material design UI library for React',
  },
  {
    title: 'Elastic UI',
    link: 'https://elastic.github.io/eui/#/',
    desc:
      ' Distributes UI React components and static assets for use in building web layouts',
  },
  {
    title: 'React Desktop',
    link: 'http://reactdesktop.js.org/',
    desc:
      ' Desktop styled components in React. Includes MacOS and Windows based components',
  },
  {
    title: 'Onsen React',
    link: 'https://onsen.io/react/',
    desc:
      ' Distributes Components for hybrid mobile apps with React and Onsen UI ',
  },
  {
    title: 'Evergreen',
    link: 'https://evergreen.segment.com/',
    desc: ' Design system for React ',
  },
  {
    title: 'Rebass',
    link: 'https://rebassjs.org/',
    desc: ' React primitive UI components built with styled system ',
  },
  {
    title: 'Grommet',
    link: 'https://v2.grommet.io/',
    desc: ' mobile first UI component library',
  },
  {
    title: 'Rimble',
    link: 'https://rimble.consensys.design/',
    desc: ' React design kit, library and guides ',
  },
  {
    title: 'Landing Page Template',
    link: 'https://github.com/cruip/open-react-template/',
    desc: ' Open source landing page template for react ',
  },
  {
    title: 'Elemental UI',
    link: 'http://elemental-ui.com/',
    desc: ' A UI Toolkit for React.js Websites and Apps ',
  },
  {
    title: 'Ant Design',
    link: 'https://ant.design/',
    desc: ' Open source design React ui library. ',
  },
  {
    title: 'PRIMEREACT',
    link: 'https://www.primefaces.org/primereact/',
    desc:
      ' The ultimate collection of design-agnostic, flexible and accessible React UI Components',
  },
  {
    title: 'Primer Components',
    link: 'https://primer.style/components/',
    desc:
      ' Primer Components are React components which implement GitHubs Primer Design System ',
  },
  {
    title: 'Orbit',
    link: 'https://orbit.kiwi/',
    desc: ' Design system and React UI components for travel projects. ',
  },
  {
    title: 'Base Web',
    link: 'https://baseweb.design/',
    desc: ' Base Web provides a robust suite of components out of the box ',
  },
  {
    title: 'Backpack UI',
    link:
      'http://lonelyplanet.github.io/backpack-ui/?path=/story/styles--design-tokens',
    desc:
      ' Backpack is the Lonely Planet toolset that we use to build front end apps.',
  },
  {
    title: 'Reaviz',
    link: 'https://reaviz.io',
    desc: ' Data visualization library for React based on D3 ',
  },
  {
    title: 'React Suite',
    link: 'https://rsuitejs.com/en/',
    desc:
      ' A suite of React components, sensible UI design, and a friendly development experience.',
  },
  {
    title: 'React Spring',
    link: 'https://www.react-spring.io/',
    desc: ' Spring-physics based animation library for React applications.',
  },
];

const CATEGORY = 'React UI Libraries';

const ReactUILibraries = ReactUILibraries1.map((e, index) => ({
  ...e,
  category: CATEGORY,
  id: CATEGORY.toLowerCase().split(' ').join('') + index,
}));

export default ReactUILibraries;
