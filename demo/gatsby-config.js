/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    "gatsby-theme-content",
    {
      resolve: `gatsby-plugin-compile-es6-packages`,
      options: {
        modules: ['gatsby-theme-blog']
      }
    }
  ],
}
