const { description } = require('../../package')

module.exports = {
  
  title: 'PODA VALLÈS',
  description: description,
  head: [
    ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/img/icons8-árbol-64.png"}],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', {name: "viewport", content:"width=device-width", "initial-scale":1.0}],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['script', {async: "async", src:"https://www.googletagmanager.com/gtag/js?id=G-PZYRWKRXPN"}],
    ['script',{},`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-PZYRWKRXPN');
    `]
  ],

  themeConfig: {
    search: false,
    smoothScroll: true,
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {text: 'Inici',link: '/'},
      {text: 'Arboricultura',link: '/arboriculture/'},
      {text: 'Galería',link: '/gallery/'},
      {text: 'Contacte',link: '/contact/'}
    ],
  },

  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
