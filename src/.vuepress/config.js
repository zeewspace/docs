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
    lastUpdated: false,
    nav: [
      {
        text: 'Inicio',
        link: '/init/',
      },
      {
        text: 'Proyectos',
        link: '/proyects/'
      },
      {
        text: 'Docs',
        link: '/docs/'
      },
      {
        text: 'Guias',
        link: '/guides/'
      },
      {
        text: 'Discord',
        link: 'https://discord.gg/6tCdxshm9w'
      },
      {
        text: 'Botlist',
        link: 'https://botlist.zeew.dev'
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
            'comunidad',
          ]
        },
        {
          title: 'Informacion',
          collapsable: true,
          children: [
            'information/rules',
            'information/tos',
            {
              title: 'Equipo',
              collapsable: true,
              children: [
                'equipo/kamerrezz',
                'equipo/gabo',
                'equipo/bug',
                'equipo/nadie',
              ]
            },
          ]
        },
        {
          title: 'Eventos',
          collapsable: true,
          children: [
          ]
        },
      ],
      '/proyects/': [
        {
          title: 'Proyectos',
          collapsable: false,
          children: [
            ''
          ]
        },
        {
          title: 'Zeew',
          collapsable: true,
          children: [
            'zeew/api',
            'zeew/eco',
            'zeew/levels',
          ]
        },
        {
          title: 'Comunidad',
          collapsable: true,
          children: [
            'comunidad/gs-transcript'
          ]
        }
      ],
      '/guides/': [
        {
          title: 'Base de Datos',
          collapsable: true,
          children: [
            'db/mongodb'
          ]
        },
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
