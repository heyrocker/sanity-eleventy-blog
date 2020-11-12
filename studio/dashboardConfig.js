export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
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
                  buildHookId: '5fad8c660b108083cb7bdb9f',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-5df986r3',
                  apiId: '17ec64f3-beb7-4af9-923b-a7e1ca2f0a55'
                },
                {
                  buildHookId: '5fad8c670a1a8b86f4ecc837',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-ea63uaf8',
                  apiId: '1d65566e-8e42-4f04-b6c9-b7116af6cb1d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/heyrocker/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-ea63uaf8.netlify.app', category: 'apps'}
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
