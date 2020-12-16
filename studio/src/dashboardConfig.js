export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fda2c3043fe6301298f7d0a',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-pwcruevq',
                  apiId: 'fe6ba2fe-85c8-43bf-90ac-05815b6f9644'
                },
                {
                  buildHookId: '5fda2c30fe84cd00968c1aff',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-24d4ucix',
                  apiId: '34f27a96-ec9e-48ab-9fb8-9416a8d8d53e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jimmymarks/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-24d4ucix.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
