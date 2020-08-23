const AngularUILibraries1 = [
  {
    title: 'Material Angular',
    link: 'https://material.angular.io/',
    desc: ' UI library for Angular based on Material design',
  },
  {
    title: 'NG Bootstrap',
    link: 'https://ng-bootstrap.github.io/#/home',
    desc: ' UI library for Angular based on the Bootstrap framework',
  },
  {
    title: 'PrimeNG',
    link: 'https://www.primefaces.org/primeng/#/',
    desc: ' Powerful UI component library for Angular ',
  },
  {
    title: 'Onsen Angular',
    link: 'https://onsen.io/angular2/',
    desc: ' Hybrid mobile and PWA UI library for Angular and Onsen UI ',
  },
  {
    title: 'NG Lightning',
    link: 'https://ng-lightning.github.io/ng-lightning/#/',
    desc:
      ' Native Angular components & directives for Lightning Design System ',
  },
  {
    title: 'NG Semantic',
    link: 'https://ng-semantic.herokuapp.com/',
    desc: ' UI library for Angular based on Semantic UI ',
  },
  {
    title: 'Nebular',
    link: 'https://akveo.github.io/nebular/',
    desc: ' Customizable UI Kit, Auth & Security for Angular ',
  },
  {
    title: 'Alyle UI',
    link: 'https://alyle.io/',
    desc: ' Minimal components set for Angular ',
  },
  {
    title: 'NGX Bootstrap',
    link: 'https://valor-software.com/ngx-bootstrap/#/',
    desc: ' Another UI library for Angular based on the Bootstrap framework ',
  },
  {
    title: 'NG Zorro',
    link: 'https://ng.ant.design/',
    desc: ' UI library for Angular based on Ant Design ',
  },
];

const CATEGORY = 'Angular UI Libraries';

const AngularUILibraries = AngularUILibraries1.map((e, index) => ({
  ...e,
  category: CATEGORY,
  id: CATEGORY.toLowerCase().split(' ').join('') + index,
}));

export default AngularUILibraries;
