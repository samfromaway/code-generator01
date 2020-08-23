const SvelteUILibraries1 = [
  {
    title: 'Svelte Material UI',
    link: 'https://sveltematerialui.com/',
    desc: 'UI library for Svelte based on Material Design',
  },
  {
    title: 'SvelteStrap',
    link: 'https://bestguy.github.io/sveltestrap/',
    desc: 'UI library for Svelte based on the Bootstrap framework ',
  },
  {
    title: 'Svelte Flat UI',
    link: 'https://svelteui.js.org/#/checkbox',
    desc: 'UI library for Svelte based on Flat Design ',
  },
];

const CATEGORY = 'Svelte UI Libraries';

const SvelteUILibraries = SvelteUILibraries1.map((e, index) => ({
  ...e,
  category: CATEGORY,
  id: CATEGORY.toLowerCase().split(' ').join('') + index,
}));

export default SvelteUILibraries;
