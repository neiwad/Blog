const tailwindcss = require('tailwindcss')
const autoprefixer = require('autoprefixer')

module.exports = {
  siteName: 'NEIWAD | Le Blog',
  siteDescription: "Bienvenue sur Le Blog. Ici je parle de web, d'électronique et de blockchains!",
  siteUrl: "https://blog.neiwad.io",
  lang: "fr",
  templates: {
    Tag: [
      {
        path: '/categorie/:id',
        component: './src/templates/Tag.vue'
      }
    ],
    Post: [
      {
        path: '/blog/:title',
      }
    ]
  },
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Post',
        path: 'content/blog/**/*.md',
        remark: {
          plugins: [
            // ...local plugins
          ]
        },
        refs: {
          tags: {
            typeName: 'Tag',
            create: true
          }
        }
      }
    }
  ],
  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      plugins: [
      ]
    }
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          tailwindcss,
          autoprefixer
        ]
      }
    }
  }
}