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
    ['link', {
      rel: 'stylesheet',
      href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css',
      integrity: 'sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3',
      crossorigin: 'anonymous'
    }],
    ['script', { 
      src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js',
      integrity:'sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p',
      crossorigin: 'anonymous'
    }],
    ['script', { 
      src: 'https://unpkg.com/marked@0.3.6',
    }],
    ['script', {async: "async", src:"https://www.googletagmanager.com/gtag/js?id=G-PZYRWKRXPN"}],
    ['script',{async: "async"},`
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
