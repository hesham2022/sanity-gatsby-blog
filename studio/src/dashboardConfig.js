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
                  buildHookId: '601f660c5f91d430b97bca68',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-oohddfyo',
                  apiId: '280ca806-382e-41be-8d64-e1a57ac354b5'
                },
                {
                  buildHookId: '601f660c3c2ab58bc47e6742',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-sk1zazrz',
                  apiId: '2a4f3473-13f0-4f98-9507-bcf67c02e8e9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/hesham2022/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-sk1zazrz.netlify.app', category: 'apps' }
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
