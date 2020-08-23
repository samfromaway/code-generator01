const VueUILibraries1 = [
  {
    title: 'Vuetify',
    link: 'https://vuetifyjs.com/en/',
    desc: 'Material design component framework',
  },
  {
    title: 'Bootstrap Vue',
    link: 'https://bootstrap-vue.org/',
    desc: 'Use Bootstrap components with Vue',
  },
  {
    title: 'Buefy',
    link: 'https://buefy.org/',
    desc: 'Lightweight UI components based on Bulma',
  },
  {
    title: 'Quasar',
    link: 'https://quasar.dev/',
    desc:
      'High-performance Material Design component suite with builders for SPA, SSR, PWA, Mobile and Browser extensions',
  },
  {
    title: 'Element',
    link: 'https://element.eleme.io/#/en-US',
    desc: 'Desktop UI library for Vue',
  },
  {
    title: 'Fish UI',
    link: 'https://myliang.github.io/fish-ui/#/components/index',
    desc: 'Vue UI toolkit for the web',
  },
  {
    title: 'Keen UI',
    link: 'https://josephuspaye.github.io/Keen-UI',
    desc:
      'VueUI library with a simple API, inspired by Googles Material Design',
  },
  {
    title: 'Onsen Vue',
    link: 'https://onsen.io/vue/',
    desc:
      'Distributes Components for hybrid mobile apps with Vue and Onsen UI ',
  },
  {
    title: 'Vuejsexamples',
    link: 'https://vuejsexamples.com',
    desc: 'A nice collection of useful vuejs UI components',
  },
  {
    title: 'Inkline',
    link: 'https://inkline.io',
    desc:
      'Inkline is a modern UI/UX Framework for Vue.js designed for creating flawless responsive web applications',
  },
  {
    title: 'Vuesax',
    link: 'https://vuesax.com/',
    desc: 'Unique and reusable UI components',
  },
  {
    title: 'Antdv',
    link: 'https://antdv.com/',
    desc: 'UI library for Vue based on Ant Design ',
  },
];

const CATEGORY = 'Vue UI Libraries';

const VueUILibraries = VueUILibraries1.map((e, index) => ({
  ...e,
  category: CATEGORY,
  id: CATEGORY.toLowerCase().split(' ').join('') + index,
}));

export default VueUILibraries;
