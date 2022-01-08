const { description } = require('../../package')

module.exports = {
  
  title: 'APICULTURA VALLÈS',
  description: description,
  head: [
    ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/img/icons8-abeja-16.png"}],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
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
      {text: 'Servicios',link: '/services/'},
      {text: 'Galeria',link: '/gallery/'},
      {text: 'Contacte',link: '/contact/'}
    ],
  },

  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
