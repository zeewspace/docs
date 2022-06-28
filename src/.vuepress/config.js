const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Zeew',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'icon', href: '/logo.png' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: true,
    nav: [
      {
        text: 'Inicio',
        link: '/init/',
      },
      {
        text: 'Informacion',
        link: '/info/'
      },
      {
        text: 'Docs',
        link: '/docs/'
      },
      {
        text: 'Discord',
        link: 'https://discord.gg/6tCdxshm9w'
      },
      {
        text: 'web',
        link: 'https://zeew.dev'
      }
    ],
    sidebar: {
      '/init/': [
        {
          title: 'Inicio',
          collapsable: true,
          children: [
            '',
            'hosting',
          ]
        },
      ],
      '/info/': [
        'rules',
        'tos',
        'priva',
        'team'
      ],
      '/docs/': [
        {
          title: 'API',
          collapsable: true,
          children: [
            'api/int'
          ]
        },
        {
          title: 'Modulos',
          collapsable: true,
          children: [
            'modules/economia',
            'modules/niveles',
            'modules/zeew'
          ]
        },
        {
          title: 'FAQ',
          collapsable: true,
          children: [
            'faq/discord',
            'faq/token'
          ]
        },
      ]
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
