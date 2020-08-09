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
                  buildHookId: '5f302dcebed268f1bc703bf1',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-1y3yzvbg',
                  apiId: 'de913464-5c79-4d4c-aed3-ed667e0b3f8d'
                },
                {
                  buildHookId: '5f302dcebf54e9fc34719593',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-3u6h8osx',
                  apiId: '43df4470-420f-4a4a-ba40-cad51df2a3be'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/gabalicious/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-3u6h8osx.netlify.app', category: 'apps'}
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
