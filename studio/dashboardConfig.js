export default {
  widgets: [
    {name: 'structure-menu'},
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
                  buildHookId: '5fe5dde9605fe17bd0a29afe',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-studio-o9wvakob',
                  apiId: '5c6239bf-91ea-47aa-a0f4-867f8da7050c'
                },
                {
                  buildHookId: '5fe5dde902f86e1c1b1ccbd1',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-web-hwnpkr4i',
                  apiId: 'b44f02d8-f7b4-47b9-ae79-694de49646a6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Dawnerdawn/sanity-kitchen',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-web-hwnpkr4i.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
