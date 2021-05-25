// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome-Starter',
  plugins: [{
    // Initialize GraphQL plugin
    use: '@gridsome/source-graphql',
    options: {

      // GraphCMS URL 
      url: 'your-graphqcms-api-url',

      //The name that should be used to identify your remote schema.
      // Learn more here https://gridsome.org/plugins/gridsome-source-graphql
      fieldName: 'gcms',

      //The prefix to be used for your imported schema's field types.
      // Learn more here https://gridsome.org/plugins/gridsome-source-graphql
      typeName: 'gcmsTypes',
    }

  }]
}
