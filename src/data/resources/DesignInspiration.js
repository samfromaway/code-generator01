const DesignInspiration1 = [
  {
    title: 'Behance',
    link: 'https://www.behance.net/',
    desc: ' Design projects featured by different creators ',
  },
  {
    title: 'Dribbble',
    link: 'https://dribbble.com/',
    desc: ' Design projects featured by different creators ',
  },
  {
    title: 'Httpster',
    link: 'https://httpster.net/2020/apr/',
    desc: ' Showcases websites made by people from all over the world ',
  },
  {
    title: 'Microcopy Inspirations',
    link: 'https://www.microcopyinspirations.com/',
    desc:
      ' Curated collection of UX writing examples, microcopy examples and copywriting examples ',
  },
  {
    title: 'Inspofinds',
    link: 'https://inspofinds.com/',
    desc: ' Latest design work from designers and the design community ',
  },
  {
    title: 'Design Notes',
    link: 'https://www.designnotes.co/',
    desc: ' Free online resource library for product designers ',
  },
  {
    title: 'Land Book',
    link: 'https://land-book.com/',
    desc: ' Displays a large collection of websites to help find inspiration',
  },
  {
    title: 'Frontend Mentor',
    link: 'https://www.frontendmentor.io/',
    desc: ' Real-world UI Challenges using HTML, CSS and Javascript ',
  },
  {
    title: 'Awwwards',
    link: 'https://www.awwwards.com/',
    desc:
      ' A website that rate and collects the best websites in the world in UI ',
  },
  {
    title: 'Codrops',
    link: 'https://tympanus.net/codrops/',
    desc:
      ' A website that collects the best UI ideas and patterns and make tutorials of it',
  },
  {
    title: 'SaaS Landing Page',
    link: 'https://saaslandingpage.com/',
    desc:
      ' Discover the best landing page examples created by top-class SaaS companies ',
  },
  {
    title: 'Pages.xyz',
    link: 'https://www.pages.xyz/',
    desc: ' Curate and discover the best designed web pages ',
  },
  {
    title: 'UI Movement',
    link: 'https://uimovement.com/',
    desc:
      ' UI Movement is a community of design enthusiasts who share and discuss the most interesting and unique UI designs ',
  },
  {
    title: 'Freefrontend',
    link: 'https://freefrontend.com/',
    desc:
      ' Free front end design from css html and javascript. latest work some design part ',
  },
  {
    title: 'Webframe',
    link: 'https://webframe.xyz',
    desc: ' Discover and be inspired by beautiful webapp designs ',
  },
  {
    title: 'Collect UI',
    link: 'http://collectui.com/',
    desc:
      ' Daily inspiration collected from daily ui archive and beyond. Hand picked, and updating daily. ',
  },
  {
    title: 'Graphic Burger',
    link: 'https://graphicburger.com/',
    desc:
      '  A site offering a free and pain icons, mock-ups, Ui-Kits, text effect and backgrounds.  ',
  },
  {
    title: 'Really Good Emails',
    link: 'https://reallygoodemails.com/',
    desc:
      '  A site offering users a ton of company e-mails from customer service to marketing.  ',
  },
  {
    title: 'Free Design Resource',
    link: 'https://freedesignresources.net/',
    desc: '  A site offering fonts, mockups, templates graphics and ui kits.  ',
  },
  {
    title: 'Site Inspire',
    link: 'https://www.siteinspire.com/',
    desc:
      ' siteInspire is a showcase of the finest web and interactive design.  ',
  },
];

const CATEGORY = 'Design Inspiration';

const DesignInspiration = DesignInspiration1.map((e, index) => ({
  ...e,
  category: CATEGORY,
  id: CATEGORY.toLowerCase().split(' ').join('') + index,
}));

export default DesignInspiration;
