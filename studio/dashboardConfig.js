export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
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
                  buildHookId: '5e94acd907ddee84f101c8fb',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-wedding-page-studio',
                  apiId: 'afa69800-1b8a-4b7e-b4f6-97317c6a8dc4'
                },
                {
                  buildHookId: '5e94acd935e46e8df2ca9f44',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-wedding-page',
                  apiId: '9247eabf-cdb3-40c1-862a-d159f655ed8e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/arews/sanity-gatsby-wedding-page',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-wedding-page.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
